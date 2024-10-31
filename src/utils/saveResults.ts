import axios from 'axios';
import { guid } from './guid';

const API_KEY = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';

export const saveResultsToJsonBin = async (state: object) => {
  const userGuid = guid();
  const url = `https://api.jsonbin.io/v3/b/`; // Use the GUID as the bin ID
  
  try {
    const response = await axios.post(
      url,
      { body: { ...state, date: new Date().toISOString(), userId: userGuid } },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY,
        }
      }
    );
    console.log('Results saved successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error saving results:', error);
    throw error;
  }
};
