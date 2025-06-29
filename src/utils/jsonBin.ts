import axios from "axios";
import { guid } from "./guid";

const API_KEY = "$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG";
const COLLECTION_ID_TRPI = "6666e443acd3cb34a8556706";
const COLLECTION_ID_BIGFIVE = "67ab305cad19ca34f8ff62b6";
// Collection ID

class JsonBinApi {
  // Method to save results to JSONBin and add to the specified collection, returning the bin ID
  static async updateResultsInJsonBin(state: any) {
    const userGuid = guid();
    const url = `https://api.jsonbin.io/v3/b/${state.binId}`;

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
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY,
            "X-Collection-Id": state.responses.length
              ? COLLECTION_ID_TRPI
              : COLLECTION_ID_BIGFIVE,
            "X-Bin-Name": state.type,
          },
        },
      );

      const binId = response.data.metadata.id; // Extract the bin ID
      //console.log('Results saved successfully, Bin ID:', binId);
      return binId; // Return only the bin ID
    } catch (error) {
      console.error("Error saving results:", error);
      throw error;
    }
  }

  static async saveResultsToJsonBin(state: any) {
    const userGuid = guid();
    const url = `https://api.jsonbin.io/v3/b`;

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
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY,
            "X-Collection-Id":
              state.collectionId ||
              (!state.responses || !Object.values(state.responses).length
                ? COLLECTION_ID_BIGFIVE
                : COLLECTION_ID_TRPI),
            "X-Bin-Name": state.type,
          },
        },
      );

      const binId = response.data.metadata.id; // Extract the bin ID
      //console.log('Results saved successfully, Bin ID:', binId);
      return binId; // Return only the bin ID
    } catch (error) {
      console.error("Error saving results:", error);
      throw error;
    }
  }

  // Method to retrieve all bins in a specific collection
  static async getBinsInCollection() {
    const url = `https://api.jsonbin.io/v3/c/${COLLECTION_ID_TRPI}/bins`;

    try {
      const response = await axios.get(url, {
        headers: {
          "X-Master-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });

      //console.log('Retrieved bins from collection:', response.data);
      return response.data;
    } catch (error) {
      console.error("Error retrieving bins from collection:", error);
      throw error;
    }
  }

  // Method to retrieve all bins in a provided collection
  static async getBinsInCollectionById(
    collectionId: string,
    startAfter?: string,
  ) {
    const results: any[] = [];
    const seen = new Set<string>();
    let lastBinId: string | null = startAfter ?? null;

    while (true) {
      const url: any = lastBinId
        ? `https://api.jsonbin.io/v3/c/${collectionId}/bins/${lastBinId}`
        : `https://api.jsonbin.io/v3/c/${collectionId}/bins`;

      try {
        const response = await axios.get(url, {
          headers: {
            "X-Master-Key": API_KEY,
            "Content-Type": "application/json",
          },
        });

        const data = Array.isArray(response.data) ? response.data : [];
        if (!data.length) break;

        let newLast: string | null = null;
        for (const item of data) {
          if (!seen.has(item.record)) {
            seen.add(item.record);
            results.push(item);
            newLast = item.record;
          }
        }

        if (!newLast || data.length < 10) break;
        lastBinId = newLast;
      } catch (error) {
        console.error("Error retrieving bins from collection:", error);
        break;
      }
    }

    return results;
  }

  // Method to retrieve a specific bin by bin ID
  static async getBinById(binId: string) {
    const url = `https://api.jsonbin.io/v3/b/${binId}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "X-Master-Key": API_KEY,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      // console.log('Retrieved bin data:', response.data);
      return response.data.record; // Return the specific bin data
    } catch (error) {
      console.error("Error retrieving bin by ID:", error);
      throw error;
    }
  }

    // Create a new collection and return its ID
    static async createCollection(name: string) {
        const url = 'https://api.jsonbin.io/v3/c';
        const response = await axios.post(url, {}, {
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY,
                'X-Collection-Name': name,
            },
        });
        return response.data?.metadata?.id || response.data?.id;
    }

    // Create a generic bin within a specific collection
    static async createBin(initialData: any, collectionId: string, name?: string) {
        const response = await axios.post('https://api.jsonbin.io/v3/b', initialData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY,
                'X-Collection-Id': collectionId,
                ...(name ? { 'X-Bin-Name': name } : {}),
            },
        });
        return response.data?.metadata?.id || response.data?.id;
    }

    // Update an existing bin
    static async updateBin(binId: string, data: any, collectionId: string, name?: string) {
        const url = `https://api.jsonbin.io/v3/b/${binId}`;
        const response = await axios.put(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY,
                'X-Collection-Id': collectionId,
                ...(name ? { 'X-Bin-Name': name } : {}),
            },
        });
        return response.data?.metadata?.id || response.data?.id;
    }

  

   // Retrieve a single page of bins from a collection. Returns the items and
    // the next page cursor (or null if no more items).
    static async getBinsPage(collectionId: string, startId: string | null, limit: number) {
        const results: any[] = [];
        let last = startId;
        const seen = new Set<string>();

        while (results.length < limit) {
            const url = last
                ? `https://api.jsonbin.io/v3/c/${collectionId}/bins/${last}`
                : `https://api.jsonbin.io/v3/c/${collectionId}/bins`;

            try {
                const response = await axios.get(url, {
                    headers: {
                        'X-Master-Key': API_KEY,
                        'Content-Type': 'application/json',
                    },
                });

                const data = Array.isArray(response.data) ? response.data : [];
                if (!data.length) break;

                let newLast: string | null = null;
                for (const item of data) {
                    if (!seen.has(item.record)) {
                        seen.add(item.record);
                        results.push(item);
                        newLast = item.record;
                    }
                }

                if (!newLast || data.length < 10) break;
                last = newLast;
            } catch (error) {
                console.error('Error retrieving bins from collection:', error);
                break;
            }
        }

        return results;
    }


    // Fetch multiple bins concurrently in small batches
    static async getBinsByIds(ids: string[], batchSize = 10) {
        const results: any[] = [];
        for (let i = 0; i < ids.length; i += batchSize) {
            const chunk = ids.slice(i, i + batchSize);
            const data = await Promise.all(chunk.map(id => this.getBinById(id)));
            data.forEach((record, idx) => {
                results.push({ binId: chunk[idx], ...record });
            });
        }
        return results;
    }

    
  static async createXLBin(data: any, name: string): Promise<string> {
    const form = new FormData();
    form.append(
      "xlbin",
      new Blob([JSON.stringify(data)], { type: "application/json" }),
      "data.json",
    );
    const response = await axios.post("https://api.jsonbin.io/v3/xl/b", form, {
      headers: {
        "X-Master-Key": API_KEY,
        "X-Bin-Name": name,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.metadata.id;
  }

  static async getXLBin(binId: string): Promise<any> {
    const url = `https://api.jsonbin.io/v3/xl/b/${binId}`;
    const response = await axios.get(url, {
      headers: { "X-Master-Key": API_KEY },
    });
    return response.data.record;
  }

}

export default JsonBinApi;
