import axios from 'axios';

// Load the JSONBin API key from environment variables
const JSONBIN_API_KEY = process.env.REACT_APP_JSONBIN_API_KEY;
const JSONBIN_COLLECTION_ID = process.env.REACT_APP_JSONBIN_COLLECTION_ID; // Collection ID for retrieval

// Function to save Big Five data and MBTI type to JSONBin and add to a collection
export const saveToJsonBin = async(bigFiveData, mbtiType) => {
    try {
        // Step 1: Save the bin
        const response = await axios.post(
            'https://api.jsonbin.io/v3/b', {
                bigFiveData,
                mbtiType,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_API_KEY,
                },
            }
        );

        const binId = response.data.record.id;
        console.log('Data saved to JSONBin:', response.data);

        // Step 2: Update the bin to add it to a collection
        await axios.put(
            `https://api.jsonbin.io/v3/b/${binId}`, {
                collectionId: JSONBIN_COLLECTION_ID, // Specify the collection ID here
                bigFiveData,
                mbtiType,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_API_KEY,
                },
            }
        );

        console.log(`Bin added to collection: ${JSONBIN_COLLECTION_ID}`);
        return response.data;

    } catch (error) {
        console.error('Error saving data to JSONBin:', error);
        throw error;
    }
};

// Function to retrieve all bins from a specific collection
export const getBinsByCollection = async() => {
    try {
        const response = await axios.get(
            `https://api.jsonbin.io/v3/c/${JSONBIN_COLLECTION_ID}/bins`, {
                headers: {
                    'X-Master-Key': JSONBIN_API_KEY,
                },
            }
        );

        console.log('Retrieved bins from collection:', response.data);
        return response.data;

    } catch (error) {
        console.error('Error retrieving bins from collection:', error);
        throw error;
    }
};