import axios from 'axios';
import JsonBinApi from './jsonBin';

const JSONBIN_KEY = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';
const META_BIN_ID = '6860bf458960c979a5b37225';
const HISTORY_COLLECTION = '67af3f35ad19ca34f8038ae8';

export default class HistoryMeta {
  static async getMeta(): Promise<Record<string, string>> {
    const resp = await axios.get(`https://api.jsonbin.io/v3/b/${META_BIN_ID}`, {
      headers: { 'X-Master-Key': JSONBIN_KEY, 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"  },
    });
    return resp.data.record || {};
  }

  static async updateMeta(meta: Record<string, string>): Promise<void> {
    await axios.put(`https://api.jsonbin.io/v3/b/${META_BIN_ID}`, meta, {
      headers: { 'X-Master-Key': JSONBIN_KEY, 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"  },
    });
  }

  // Fetch or create a history bin for the given user
  static async getOrCreateHistoryBin(userId: string): Promise<string> {
    const meta = await this.getMeta();
    if (meta[userId]) return meta[userId];

    const binId = await JsonBinApi.createBin([""], HISTORY_COLLECTION, `history-${userId}`);
    meta[userId] = binId;
    await this.updateMeta(meta);
    return binId;
  }

  // Retrieve the list of result bin IDs for the user
  static async getHistoryIds(userId: string): Promise<string[]> {
    const meta = await this.getMeta();
    const binId = meta[userId];
    if (!binId) return [];
    try {
      const data = await JsonBinApi.getBinById(binId);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.warn('Failed to fetch history ids', e);
      return [];
    }
  }

  // Append a result bin ID to the user's history bin
  static async addResult(userId: string, resultBinId: string): Promise<void> {
    const historyBin = await this.getOrCreateHistoryBin(userId);
    let ids: string[] = [];
    try {
      const existing = await JsonBinApi.getBinById(historyBin);
      if (Array.isArray(existing)) ids = existing;
    } catch (e) {
      console.warn('Failed fetching history bin', e);
    }
    ids.unshift(resultBinId);
    await JsonBinApi.updateBin(historyBin, ids, HISTORY_COLLECTION);
  }
}
