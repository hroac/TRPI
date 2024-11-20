import axios from 'axios';
import { guid } from './guid';

const API_KEY = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';
const COLLECTION_ID = '6666e443acd3cb34a8556706'; // Collection ID

class JsonBinApi {
    // Method to save results to JSONBin and add to the specified collection, returning the bin ID
    static async saveResultsToJsonBin(state: any) {
        const userGuid = guid();
        const url = `https://api.jsonbin.io/v3/b`;

        try {
            const response = await axios.post(
                url,
                {
                    ...state,
                    date: new Date().toISOString(),
                    userId: userGuid,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': API_KEY,
                        'X-Collection-Id': COLLECTION_ID,
                        'X-Bin-Name': state.type,
                    },
                }
            );

            const binId = response.data.metadata.id; // Extract the bin ID
            console.log('Results saved successfully, Bin ID:', binId);
            return binId; // Return only the bin ID
        } catch (error) {
            console.error('Error saving results:', error);
            throw error;
        }
    }

    // Method to retrieve all bins in a specific collection
    static async getBinsInCollection() {
        const url = `https://api.jsonbin.io/v3/c/${COLLECTION_ID}/bins`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'X-Master-Key': API_KEY,
                    'Content-Type': 'application/json',
                },
            });

            console.log('Retrieved bins from collection:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error retrieving bins from collection:', error);
            throw error;
        }
    }

    // Method to retrieve a specific bin by bin ID
    static async getBinById(binId: string) {
        const url = `https://api.jsonbin.io/v3/b/${binId}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'X-Master-Key': API_KEY,
                    'Content-Type': 'application/json',
                },
            });

            console.log('Retrieved bin data:', response.data);
            return response.data.record; // Return the specific bin data
        } catch (error) {
            console.error('Error retrieving bin by ID:', error);
            throw error;
        }
    }
}

export default JsonBinApi;
