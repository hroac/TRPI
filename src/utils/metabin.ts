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

  /** Update the entire meta bin. */
  static async updateMeta(meta: Record<string, any>): Promise<void> {
    await axios.put(
      `https://api.jsonbin.io/v3/b/${META_BIN_ID}`,
      meta,
      {
        headers: {
          'X-Master-Key': JSONBIN_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
  }

  /**
   * Return metadata for a specific organization, resetting the monthly
   * analysis count if needed.
   */
  static async getOrgMeta(slug: string): Promise<any> {
    const meta = await this.getMeta();
    const nowMonth = new Date().toISOString().slice(0, 7);
    const org = meta[slug] || {};
    if (org.analysisMonth !== nowMonth) {
      org.analysisMonth = nowMonth;
      org.analysisCount = 0;
      meta[slug] = org;
      await this.updateMeta(meta);
    }
    return org;
  }

  /**
   * Increment and persist the analysis count for the given organization.
   * The counter resets automatically when the month changes.
   * Returns the updated count.
   */
  static async incrementAnalysisCount(slug: string): Promise<number> {
    const meta = await this.getMeta();
    const nowMonth = new Date().toISOString().slice(0, 7);
    const org = meta[slug] || {};

    if (org.analysisMonth !== nowMonth) {
      org.analysisMonth = nowMonth;
      org.analysisCount = 1;
    } else {
      org.analysisCount = (org.analysisCount || 0) + 1;
    }

    meta[slug] = org;
    await this.updateMeta(meta);
    return org.analysisCount;
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
