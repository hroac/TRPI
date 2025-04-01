import axios from 'axios';
import { guid } from './guid';

const API_KEY = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';
const COLLECTION_ID_TRPI = '6666e443acd3cb34a8556706';
const COLLECTION_ID_BIGFIVE = '67ab305cad19ca34f8ff62b6';
 // Collection ID

class JsonBinApi {
    // Method to save results to JSONBin and add to the specified collection, returning the bin ID
    static async updateResultsInJsonBin(state: any) {
        const userGuid = guid();
        const url = `api/v3/b/${state.binId}`;

        try {
            const response = await axios.put(
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
                        'X-Collection-Id': state.responses.length ? COLLECTION_ID_TRPI : COLLECTION_ID_BIGFIVE,
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

    static async saveResultsToJsonBin(state: any) {
        const userGuid = guid();
        const url = `api/v3/b`;

        try {
            const response = await axios.post(
                url,
                {
                    date: new Date().toISOString(),
                    userId: userGuid,
                    ...state,
               
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': API_KEY,
                        'X-Collection-Id': !state.responses || !Object.values(state.responses).length ? COLLECTION_ID_BIGFIVE : COLLECTION_ID_TRPI ,
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
        const url = `api/v3/c/${COLLECTION_ID_TRPI}/bins`;

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
        const url = `api/v3/b/${binId}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'X-Master-Key': API_KEY,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
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
