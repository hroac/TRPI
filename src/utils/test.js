const fs = require("fs");

// Load dataset from file
const rawData = fs.readFileSync("bins-2025-02-24.json");
const data = JSON.parse(rawData);

// Convert dates to JavaScript Date objects (if needed)
data.forEach(entry => {
    entry.date = new Date(entry.date);
});

/**
 * Calculates overall reliability as the percentage of users whose test result
 * remains exactly the same across all assessments.
 *
 * @param {Array} data - Array of test objects (each with at least userId and type).
 * @returns {Object} An object with totalUsers, consistentUsers, and reliability percentage.
 */
function calculateOverallReliability(data) {
    const userResults = {};
    data.forEach(entry => {
        const { userId, type } = entry;
        if (!userResults[userId]) {
            userResults[userId] = new Set();
        }
        userResults[userId].add(type);
    });

    let totalUsers = 0;
    let consistentUsers = 0;
    for (const userId in userResults) {
        totalUsers++;
        if (userResults[userId].size === 1) {
            consistentUsers++;
        }
    }

    const reliability = totalUsers > 0 ? (consistentUsers / totalUsers) * 100 : 0;
    return {
        totalUsers,
        consistentUsers,
        reliability: reliability.toFixed(2)
    };
}

/**
 * Calculates TRPI-adjusted reliability as the percentage of users whose type transitions
 * follow the allowed TRPI shifts.
 *
 * The trpiShifts object defines acceptable transitions for each type.
 *
 * @param {Array} data - Array of test objects (each with at least userId and type).
 * @param {Object} trpiShifts - Object mapping each type to an array of allowed types.
 * @returns {Object} An object with totalUsers, validUsers (whose transitions follow TRPI rules),
 *                   and the reliability percentage.
 */
function calculateTRPIReliability(data, trpiShifts) {
    // Group tests by userId and sort by date
    const userTests = {};
    data.forEach(entry => {
        if (!userTests[entry.userId]) {
            userTests[entry.userId] = [];
        }
        userTests[entry.userId].push(entry);
    });
    Object.values(userTests).forEach(tests => {
        tests.sort((a, b) => a.date - b.date);
    });

    let totalUsers = 0;
    let validUsers = 0;

    Object.keys(userTests).forEach(userId => {
        const tests = userTests[userId];
        totalUsers++;
        let validTransitions = true;
        // For each consecutive pair, check if the shift is allowed
        for (let i = 0; i < tests.length - 1; i++) {
            const currentType = tests[i].type;
            const nextType = tests[i + 1].type;
            if (!trpiShifts[currentType] || !trpiShifts[currentType].includes(nextType)) {
                validTransitions = false;
                break;
            }
        }
        if (validTransitions) {
            validUsers++;
        }
    });

    const reliability = totalUsers > 0 ? (validUsers / totalUsers) * 100 : 0;
    return {
        totalUsers,
        validUsers,
        reliability: reliability.toFixed(2)
    };
}

// Define the TRPI shifts object according to your table (including ego cluster, tertiary, and inferior pairings)
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

// Calculate overall reliability (exact match)
const overallResult = calculateOverallReliability(data);
console.log("Overall Test Reliability (Exact Match):");
console.log(`Total Users: ${overallResult.totalUsers}`);
console.log(`Consistent Users: ${overallResult.consistentUsers}`);
console.log(`Reliability: ${overallResult.reliability}%`);
console.log("");

// Calculate TRPI-adjusted reliability (allowing acceptable shifts)
const trpiResult = calculateTRPIReliability(data, trpiShifts);
console.log("TRPI-Adjusted Test Reliability (Acceptable Shifts):");
console.log(`Total Users: ${trpiResult.totalUsers}`);
console.log(`Consistency including TRPI Shifts: ${trpiResult.validUsers}`);
console.log(`Reliability: ${trpiResult.reliability}%`);
console.log("");

// Identify invalid transitions (mistypes that don't follow TRPI shifts)
// Group tests by userId and sort by date (again)
const userTests = {};
data.forEach(entry => {
    if (!userTests[entry.userId]) {
        userTests[entry.userId] = [];
    }
    userTests[entry.userId].push(entry);
});
Object.values(userTests).forEach(tests => {
    tests.sort((a, b) => a.date - b.date);
});

const invalidTransitions = [];

// Check for invalid transitions for each user
for (const userId in userTests) {
    const tests = userTests[userId];
    for (let i = 0; i < tests.length - 1; i++) {
        const current = tests[i];
        const next = tests[i + 1];
        if (!trpiShifts[current.type] || !trpiShifts[current.type].includes(next.type)) {
            invalidTransitions.push({
                userId: userId,
                fromType: current.type,
                toType: next.type,
                fromDate: current.date.toISOString(),
                toDate: next.date.toISOString()
            });
        }
    }
}

console.log("Transitions that do NOT follow TRPI shifts:");
console.table(invalidTransitions);

// Final combined result object that includes all original returns and the invalid transitions
const finalResult = {
    overallResult,
    trpiResult,
    invalidTransitions
};

// Optionally, you could export or return this object if used in a larger application
// For example: module.exports = finalResult;