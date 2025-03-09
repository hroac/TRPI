const fs = require('fs');
const path = require('path');

// Define the Big Five traits in a consistent order.
const traits = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'];

// Load and parse the JSON data from ./bins-2025-02-24.json.
const dataPath = path.join(__dirname, 'bins-2025-02-24.json');
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
    // Initialize a sum object.
    const sum = traits.reduce((acc, trait) => {
        acc[trait] = 0;
        return acc;
    }, {});

    // Sum up each trait.
    items.forEach(item => {
        traits.forEach(trait => {
            sum[trait] += item.bigFiveResponses[trait];
        });
    });

    // Divide by the number of items to get the average.
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

// Prepare arrays for output and debugging.
const resultCorrelations = []; // For console.table display.
const filteredResults = []; // To store original results with correlation >= 0.5

results.forEach((item, idx) => {
    const resultId = `${item.userId}-${idx}`;
    const resultArray = responsesToArray(item.bigFiveResponses);
    const type = item.type;
    const avgArray = typeAverageArrays[type];

    // Compute the correlation between this result and the average of its type.
    const correlation = pearsonCorrelation(resultArray, avgArray);

    // Save the result correlation for debugging
    resultCorrelations.push({ resultId, type, correlation: correlation.toFixed(3) });

    // Filter: Only include original result if correlation is 0.5 or higher.
    if (correlation >= 0.3) {
        filteredResults.push(item);
    }
});

// Output the summary using console.table.
console.log('\nSummary of Pearson Correlations for Each Result:');
console.table(resultCorrelations);

// Write the filtered original results to a new file.
const outputPath = path.join(__dirname, 'filtered_results.json');
fs.writeFileSync(outputPath, JSON.stringify(filteredResults, null, 2));
console.log(`\nFiltered results (correlation >= 0.3) have been written to ${outputPath}`);