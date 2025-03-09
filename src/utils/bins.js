const fs = require('fs');
const path = require('path');

// Define the Big Five traits in a consistent order.
const traits = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'];

// Load and parse the JSON data from ./bins-2025-02-24.json.
const dataPath = path.join(__dirname, 'bins-2025-03-06.json');
const rawData = fs.readFileSync(dataPath);
const results = JSON.parse(rawData);

/**
 * Group results by their "type" property.
 * @param {Array} data - Array of result objects.
 * @returns {Object} - Object with types as keys and arrays of results as values.
 */
function groupByType(data) {
    return data.reduce((acc, item) => {
        const type = item.type;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(item);
        return acc;
    }, {});
}

/**
 * Compute the average Big Five responses for a given array of results.
 * @param {Array} items - Array of result objects.
 * @returns {Object} - Averaged responses as an object with the same keys.
 */
function computeAverageResponses(items) {
    if (items.length === 0) return {};
    const sum = traits.reduce((acc, trait) => {
        acc[trait] = 0;
        return acc;
    }, {});

    items.forEach(item => {
        traits.forEach(trait => {
            sum[trait] += item.bigFiveResponses[trait];
        });
    });

    const avg = {};
    traits.forEach(trait => {
        avg[trait] = sum[trait] / items.length;
    });
    return avg;
}

/**
 * Convert a Big Five responses object into an array based on our trait order.
 * @param {Object} responses - An object with trait keys.
 * @returns {Array} - Array of values in the order defined by the 'traits' array.
 */
function responsesToArray(responses) {
    return traits.map(trait => responses[trait]);
}

/**
 * Compute Pearson correlation coefficient between two arrays.
 * @param {Array} x - First array of numbers.
 * @param {Array} y - Second array of numbers.
 * @returns {number} - Pearson correlation coefficient.
 */
function pearsonCorrelation(x, y) {
    if (x.length !== y.length) {
        throw new Error('Arrays must be of the same length.');
    }
    const n = x.length;
    const meanX = x.reduce((sum, val) => sum + val, 0) / n;
    const meanY = y.reduce((sum, val) => sum + val, 0) / n;

    let numerator = 0;
    let sumSqX = 0;
    let sumSqY = 0;

    for (let i = 0; i < n; i++) {
        const diffX = x[i] - meanX;
        const diffY = y[i] - meanY;
        numerator += diffX * diffY;
        sumSqX += diffX * diffX;
        sumSqY += diffY * diffY;
    }

    const denominator = Math.sqrt(sumSqX * sumSqY);
    return denominator === 0 ? 0 : numerator / denominator;
}

// Group the data by type.
const groupedResults = groupByType(results);

// Compute the average Big Five responses for each type.
const typeAverages = {};
for (const type in groupedResults) {
    typeAverages[type] = computeAverageResponses(groupedResults[type]);
}

// Convert the averaged responses to arrays for correlation computations.
const typeAverageArrays = {};
for (const type in typeAverages) {
    typeAverageArrays[type] = responsesToArray(typeAverages[type]);
}

// Calculate Pearson correlations for each result (only comparing to its own type's average).
// For each result, compute both the Pearson correlation (r) and its coefficient (r²).
const pearsonResults = []; // Each entry will include result id, type, correlation and coefficient.
const pearsonByType = {}; // For averaging per type.

results.forEach((item, idx) => {
    const resultId = `${item.userId}-${idx}`;
    const resultArray = responsesToArray(item.bigFiveResponses);
    const type = item.type;
    const avgArray = typeAverageArrays[type];

    const correlation = pearsonCorrelation(resultArray, avgArray);
    const coefficient = correlation * correlation;

    if (!pearsonByType[type]) {
        pearsonByType[type] = [];
    }

    if (correlation > 0) {
        pearsonResults.push({ resultId, type, correlation, coefficient });
        pearsonByType[type].push({ correlation, coefficient });

    }


});

// Compute average Pearson correlation and coefficient for each type.
const averagePearsonPerType = [];
for (const type in pearsonByType) {
    const correlations = pearsonByType[type].map(item => item.correlation);
    const coefficients = pearsonByType[type].map(item => item.coefficient);
    const avgCorrelation = correlations.reduce((total, val) => total + val, 0) / correlations.length;
    const avgCoefficient = coefficients.reduce((total, val) => total + val, 0) / coefficients.length;
    averagePearsonPerType.push({ type, avgCorrelation, avgCoefficient });
}

// Display results using console.table.
console.log('\nAveraged Big Five Responses for Each Type:');
console.table(typeAverages);

console.log('\nPearson Correlations and Coefficients for Each Result (compared only to its own type average):');
console.table(pearsonResults);

console.log('\nAverage Pearson Correlation and Coefficient by Type:');
console.table(averagePearsonPerType);