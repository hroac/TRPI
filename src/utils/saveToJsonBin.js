import axios from 'axios';

// Load the JSONBin API key from environment variables
const JSONBIN_API_KEY = process.env.REACT_APP_JSONBIN_API_KEY;

// Function to save Big Five data and MBTI type to JSONBin
export const saveToJsonBin = async(bigFiveData, mbtiType) => {
    try {
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
        console.log('Data saved to JSONBin:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error saving data to JSONBin:', error);
        throw error;
    }
};