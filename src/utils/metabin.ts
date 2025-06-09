import axios from 'axios';

const JSONBIN_KEY = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';
const META_BIN_ID = '6834a3d68a456b7966a5a18b';


interface RawRecord {
  record: string;
  collectionMeta: { name: string };
  createdAt: string;
}

export default class MetaBin {
  /**
   * Read the entire slug→binId mapping (managed by hand).
   */
  static async getMeta(): Promise<Record<string, any>> {
    const resp = await axios.get(
      `https://api.jsonbin.io/v3/b/${META_BIN_ID}`,
      {
        headers: {
          'X-Master-Key': JSONBIN_KEY,
        },
      }
    );
    return resp.data.record as Record<string, any>;
  }

 static async getAll(): Promise<Record<string, string>> {
    const resp = await axios.get(
      `https://api.jsonbin.io/v3/c`,
      { headers: { 'X-Master-Key': JSONBIN_KEY } }
    );
    // resp.data is array of RawRecord
    const arr: RawRecord[] = resp.data;
    const map: Record<string, string> = {};
    arr.forEach(item => {
      map[item.collectionMeta.name] = item.record;
    });
    return map;
  }
}
