import axios from "axios";
import { guid } from "./guid";

const API_KEY = "$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG";
const COLLECTION_ID_TRPI =    "6666e443acd3cb34a8556706";
const COLLECTION_ID_BIGFIVE = "67ab305cad19ca34f8ff62b6";
const api = axios.create({
  baseURL: "https://api.jsonbin.io/v3",
  headers: {
    "X-Master-Key": API_KEY,
    "Content-Type": "application/json",
  },
});

class JsonBinApi {
  // Method to save results to JSONBin and add to the specified collection, returning the bin ID
  static async updateResultsInJsonBin(state: any) {
    const userGuid = guid();
    const url = `/b/${state.binId}`;

    try {
      const response = await api.put(
        url,
        {
          ...state,
          date: new Date().toISOString(),
          userId: userGuid,
        },
        {
          headers: {
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
    const url = `/b`;

    try {
      const response = await api.post(
        url,
        {
          date: new Date().toISOString(),
          userId: userGuid,
          ...state,
        },
        {
          headers: {
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
    const url = `/c/${COLLECTION_ID_TRPI}/bins`;

    try {
      const response = await api.get(url);

      //console.log('Retrieved bins from collection:', response.data);
      return response.data;
    } catch (error) {
      console.error("Error retrieving bins from collection:", error);
      throw error;
    }
  }

  // Method to retrieve all bins in a provided collection
  static async listCollectionBins(collectionId: string, startAfter?: string) {
    const results: any[] = [];
    const seen = new Set<string>();
    let lastBinId: string | null = startAfter ?? null;

    while (true) {
      const url: any = lastBinId
        ? `/c/${collectionId}/bins/${lastBinId}`
        : `/c/${collectionId}/bins`;

      try {
        const response = await api.get(url);

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
    const url = `/b/${binId}`;

    try {
      const response = await api.get(url, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });

      // console.log('Retrieved bin data:', response.data);
      return response.data.record; // Return the specific bin data
    } catch (error) {
      console.error("Error retrieving bin by ID:", error);
      throw error;
    }
  }

  static async getBinsByIds(ids: string[], batchSize = 10) {
    const results: any[] = [];
    for (let i = 0; i < ids.length; i += batchSize) {
      const chunk = ids.slice(i, i + batchSize);
      const data = await Promise.all(chunk.map((id) => this.getBinById(id)));
      data.forEach((record, idx) => {
        results.push({ binId: chunk[idx], ...record });
      });
    }
    return results;
  }
// ─────────────────────── helper ───────────────────────

/**
 * Lightweight, rate-friendly collection scanner.
 */
static async fetchCollectionBins(
  collectionId: string,
  {
    startDate,
    endDate,
    startAfter,
    pageSize  = 5,   // ← SMALLER pages of refs
    batchSize = 5,   // ← SMALLER concurrent bin fetches
  }: {
    startDate?: string;
    endDate?: string;
    startAfter?: string;
    pageSize?: number;
    batchSize?: number;
  } = {},
): Promise<{ bins: any[]; lastBinId?: string }> {
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  const lower = startDate ? new Date(startDate).getTime() : -Infinity;
  const upper = endDate   ? new Date(endDate).getTime()   :  Infinity;
  const PAGE  = Math.min(Math.max(pageSize, 1), 100);

  const bins: any[] = [];
  const seen = new Set<string>();
  let cursor: string | null = startAfter ?? null;
  let stop = false;

  while (!stop) {
    /* 1 ▸ get a SMALL page of references */
    const url = cursor
      ? `/c/${collectionId}/bins/${cursor}?limit=${PAGE}`
      : `/c/${collectionId}/bins?limit=${PAGE}`;

    const { data } = await api.get(url);
    const refs: { record: string }[] = Array.isArray(data) ? data : [];
    if (!refs.length) break;

    cursor = refs[refs.length - 1].record;

    /* 2 ▸ dedup + slice into SMALL concurrent chunks */
    const ids: string[] = [];
    for (const r of refs) if (!seen.has(r.record)) { seen.add(r.record); ids.push(r.record); }

    for (let i = 0; i < ids.length; i += batchSize) {
      const slice = ids.slice(i, i + batchSize);
      const chunk = (await Promise.all(
        slice.map(id => this.getBinById(id))   // <= batchSize (2) at a time
      )).map((rec, idx) => ({ binId: slice[idx], ...rec }));

      /* 3 ▸ date-filter & store */
      for (const b of chunk) {
        if (!b?.date) continue;
        const t = new Date(b.date).getTime();
        if (t < lower) { stop = true; break; }
        if (t > upper) continue;
        bins.push(b);
      }

      await sleep(100);  // polite pause to avoid 429
      if (stop) break;
    }

    if (refs.length < PAGE) break;  // end of collection
  }

  return { bins, lastBinId: cursor ?? undefined };
}



  static async createXLBin(data: any, name: string): Promise<string> {
    const form = new FormData();
    form.append(
      "xlbin",
      new Blob([JSON.stringify(data)], { type: "application/json" }),
      "data.json",
    );
    const response = await api.post("/xl/b", form, {
      headers: {
        "X-Bin-Name": name,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.metadata.id;
  }

  static async getXLBin(binId: string): Promise<any> {
    const url = `/xl/b/${binId}`;
    const response = await api.get(url);
    return response.data.record;
  }
  

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

}

export default JsonBinApi;
