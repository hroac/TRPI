import axios from 'axios';

const JSONBIN_KEY = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';
const HISTORY_COLLECTION = '68348edd8960c979a5a159b2';
const META_NAME = 'Meta';

export default class HistoryMeta {
  private static async getMetaBinId(): Promise<string> {
    const url = `https://api.jsonbin.io/v3/c/${HISTORY_COLLECTION}/bins`;
    try {
      const resp = await axios.get(url, { headers: { 'X-Master-Key': JSONBIN_KEY } });
      const arr: any[] = Array.isArray(resp.data) ? resp.data : [];
      const meta = arr.find((b: any) => b.snippetMeta?.name === META_NAME);
      if (meta) return meta.record;
    } catch (e) {
      console.warn('Failed to fetch meta list', e);
    }
    // create empty meta bin
    const createResp = await axios.post(
      'https://api.jsonbin.io/v3/b',
      {},
      {
        headers: {
          'X-Master-Key': JSONBIN_KEY,
          'Content-Type': 'application/json',
          'X-Collection-Id': HISTORY_COLLECTION,
          'X-Bin-Name': META_NAME,
        },
      }
    );
    return createResp.data.metadata.id;
  }

  static async getMeta(): Promise<Record<string, string>> {
    const id = await this.getMetaBinId();
    const resp = await axios.get(`https://api.jsonbin.io/v3/b/${id}`, {
      headers: { 'X-Master-Key': JSONBIN_KEY },
    });
    return resp.data.record || {};
  }

  static async updateMeta(meta: Record<string, string>): Promise<void> {
    const id = await this.getMetaBinId();
    await axios.put(`https://api.jsonbin.io/v3/b/${id}`, meta, {
      headers: { 'X-Master-Key': JSONBIN_KEY, 'Content-Type': 'application/json' },
    });
  }
}
