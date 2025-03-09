const fs = require('fs');

// Load the dataset
const rawData = fs.readFileSync('bins-2025-02-24.json');
const data = JSON.parse(rawData);

// Convert dates to JavaScript Date objects
data.forEach(entry => {
    entry.date = new Date(entry.date);
});

// Define the TRPI shifts object (Ego cluster plus tertiary and inferior pairings)
// (The seventh element in each array is not used in the reliability check here.)
const trpiShifts = {
    "ENTP": ["ENTP", "INTJ", "ISFJ", "ESFP", "INFJ", "ENFP", "INTP"],
    "INTJ": ["INTJ", "ENTP", "ESFP", "ISFJ", "ENFP", "INFJ", "ENTJ"],
    "ISFJ": ["ISFJ", "ENTP", "ESFP", "INTJ", "ESTP", "ISTJ", "ESFJ"],
    "ESFP": ["ESFP", "INTJ", "ENTP", "ISFJ", "ENFJ", "INFP", "ISFP"],

    "ESTP": ["ESTP", "ISTJ", "INFJ", "ENFP", "ISFJ", "ENFJ", "ISTP"],
    "ISTJ": ["ISTJ", "ESTP", "ENFP", "INFJ", "ESFJ", "ISFP", "ESTJ"],
    "INFJ": ["INFJ", "ESTP", "ISTJ", "ENFP", "ENTP", "INTJ", "ENFJ"],
    "ENFP": ["ENFP", "ESTP", "INFJ", "ISTJ", "INTJ", "ENTP", "INFP"],

    "INTP": ["INTP", "ENTJ", "ESFJ", "ISFP", "ISTJ", "ESTP", "ENTP"],
    "ENTJ": ["ENTJ", "INTP", "ISFP", "ESFJ", "INFJ", "ENFP", "INTJ"],
    "ESFJ": ["ESFJ", "INTP", "ENTJ", "ISFP", "INFP", "ENFJ", "ISFJ"],
    "ISFP": ["ISFP", "ENTJ", "INTP", "ESFJ", "ENFJ", "INFP", "ESFP"],

    "ISTP": ["ISTP", "ESTJ", "ENFJ", "INFP", "ESFJ", "ISFP", "ESTP"],
    "ESTJ": ["ESTJ", "ISTP", "INFP", "ENFJ", "ISFP", "ESFJ", "ISTJ"],
    "ENFJ": ["ENFJ", "ISTP", "ESTJ", "INFP", "ISFP", "ESFJ", "INFJ"],
    "INFP": ["INFP", "ESTJ", "ENFJ", "ISTP", "ESFJ", "ISFP", "ENFP"]
};

// Define the 4F clusters and their order
const typeToCluster = {
    "ENTP": "Fight",
    "ESTP": "Fight",
    "INTP": "Fight",
    "ISTP": "Fight",
    "INTJ": "Freeze",
    "ISTJ": "Freeze",
    "ENTJ": "Freeze",
    "ESTJ": "Freeze",
    "ISFJ": "Fawn",
    "ESFJ": "Fawn",
    "INFJ": "Fawn",
    "ENFJ": "Fawn",
    "ESFP": "Flight",
    "ENFP": "Flight",
    "ISFP": "Flight",
    "INFP": "Flight"
};

const clusterOrder = { "Fight": 0, "Freeze": 1, "Fawn": 2, "Flight": 3 };

const orderWithinCluster = {
    "Fight": ["ENTP", "ESTP", "INTP", "ISTP"],
    "Freeze": ["INTJ", "ISTJ", "ENTJ", "ESTJ"],
    "Fawn": ["ISFJ", "ESFJ", "INFJ", "ENFJ"],
    "Flight": ["ESFP", "ENFP", "ISFP", "INFP"]
};

// Group tests by userId
const userTests = {};
data.forEach(entry => {
    if (!userTests[entry.userId]) {
        userTests[entry.userId] = [];
    }
    userTests[entry.userId].push(entry);
});

// Sort each user's test data by date
Object.values(userTests).forEach(tests => {
    tests.sort((a, b) => a.date - b.date);
});

// Compute test-retest reliability within 3 days and track mistypes
const typeConsistency = {};

Object.keys(userTests).forEach(userId => {
    const tests = userTests[userId];
    for (let i = 0; i < tests.length - 1; i++) {
        const firstTest = tests[i];
        const secondTest = tests[i + 1];
        const daysBetween = (secondTest.date - firstTest.date) / (1000 * 60 * 60 * 24);
        if (daysBetween > 3) continue; // Only consider retests within 3 days

        const type = firstTest.type;
        if (!typeConsistency[type]) {
            typeConsistency[type] = {
                totalInstances: 0,
                disallowedCount: 0,
                allowedMistypes: {}, // disallowed mistypes (per TRPI shifts)
                allMistypes: {} // all mistypes (raw)
            };
        }
        typeConsistency[type].totalInstances += 1;

        // Record all mistypes regardless of allowed TRPI shifts.
        if (firstTest.type !== secondTest.type) {
            const rawMistype = secondTest.type;
            typeConsistency[type].allMistypes[rawMistype] = (typeConsistency[type].allMistypes[rawMistype] || 0) + 1;

            // Check TRPI allowed transitions
            const allowed = trpiShifts[firstTest.type] && trpiShifts[firstTest.type].includes(secondTest.type);
            if (!allowed) {
                typeConsistency[type].disallowedCount += 1;
                typeConsistency[type].allowedMistypes[rawMistype] = (typeConsistency[type].allowedMistypes[rawMistype] || 0) + 1;
            }
        }
    }
});

// Compute results with consistency percentage, most common mistype (from raw data), and its frequency
const results = [];
Object.keys(typeConsistency).forEach(type => {
    const { totalInstances, disallowedCount, allMistypes } = typeConsistency[type];
    const consistency = totalInstances > 0 ? ((totalInstances - disallowedCount) / totalInstances) * 100 : 0;
    let mostCommonMistype = "";
    let highestCount = 0;
    Object.keys(allMistypes).forEach(mtype => {
        if (allMistypes[mtype] > highestCount) {
            highestCount = allMistypes[mtype];
            mostCommonMistype = mtype;
        }
    });
    results.push({
        Type: type,
        "Cluster": typeToCluster[type] || "None",
        "Total Instances": totalInstances,
        "Disallowed Variations": disallowedCount,
        "Consistency %": consistency.toFixed(2),
        "Most Common Mistype": mostCommonMistype || "None",
        "Mistype Frequency": highestCount || 0
    });
});

// Sort results first by 4F cluster order, then by order within cluster
results.sort((a, b) => {
    const clusterA = typeToCluster[a.Type];
    const clusterB = typeToCluster[b.Type];
    if (clusterOrder[clusterA] !== clusterOrder[clusterB]) {
        return clusterOrder[clusterA] - clusterOrder[clusterB];
    } else {
        // Within same cluster, use the predefined order
        const orderA = orderWithinCluster[clusterA].indexOf(a.Type);
        const orderB = orderWithinCluster[clusterB].indexOf(b.Type);
        return orderA - orderB;
    }
});

// Display results using console.table
console.table(results);