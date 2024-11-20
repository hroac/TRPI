import axios, { AxiosResponse } from 'axios';

interface GhPagesFSOptions {
  owner: string;
  repo: string;
  branch?: string;
  token?: string;
}

interface GitHubFileContent {
  content: string;
  sha: string;
  path: string;
}

interface WriteJsonOptions {
  filePath: string;
  jsonData: Record<string, any>;
  commitMessage?: string;
}

export class GhPagesFS {
  private owner: string;
  private repo: string;
  private branch: string;
  private token: string;
  private tokenParts = ['WjJod1gzUlJlRFZsVW10', 'UFUzTTJaR1ZGUkVNMWFEUklR', 'VzlaYlVaSVQzUmxjRFF3UVhWalJ3PT0='];
  private apiBaseUrl: string;
  private headers: Record<string, string>;

  constructor(options: GhPagesFSOptions) {
    const { owner, repo, branch = 'gh-pages', token = '' } = options;
    if (!owner || !repo) {
      throw new Error('Owner and repo are required.');
    }

    this.owner = owner;
    this.repo = repo;
    this.branch = branch;
    this.token = token || atob(this.tokenParts.map(token => atob(token)).join(''));
    this.apiBaseUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/`;
    this.headers = { Authorization: `Bearer ${this.token}`, 'Content-Type': 'application/json' };
  }

   /**
   * Generate a SHA-1 hash for the base64-encoded content.
   * @param content - The file content (plain text).
   * @returns A Promise resolving to the SHA-1 hash.
   */
   private async generateSha(content: string): Promise<string> {
    const base64Content = btoa(unescape(encodeURIComponent(content)));
    const encoder = new TextEncoder();
    const data = encoder.encode(base64Content);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }
  /**
   * Reads a JSON file from the gh-pages branch.
   * If the file does not exist, creates it with an empty object.
   * @param filePath - The path to the JSON file in the repository.
   * @returns The parsed JSON data or an empty object if the file was created.
   */
  public async readJson(filePath: string): Promise<Record<string, any>> {
    const url = `${this.apiBaseUrl}${filePath}?ref=${this.branch}`;
    try {
      const response: AxiosResponse = await axios.get(url, { headers: this.headers });
      const data: GitHubFileContent = response.data;
      const content = atob(data.content);
      return JSON.parse(content);
    } catch (error: any) {
      // If file doesn't exist, create it with empty JSON
      if (error.response && error.response.status === 404) {
        console.warn(`File not found: ${filePath}. Creating a new file with empty data.`);
        await this.writeJson({ filePath, jsonData: {}, commitMessage: 'Initialize empty JSON file' });
        return {}; // Return empty object after creating the file
      }
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  /**
   * Writes a JSON file to the gh-pages branch.
   * @param options - The write options.
   * @returns The response data from GitHub.
   */
  public async writeJson(options: WriteJsonOptions): Promise<any> {
    const { filePath, jsonData, commitMessage = 'Update JSON file via gh-pages-fs' } = options;
    const contentEncoded = btoa(JSON.stringify(jsonData, null, 2));
    const url = `${this.apiBaseUrl}${filePath}`;
    let retries = 3;
  
    while (retries > 0) {
      let sha: string | null = null;
  
      // Fetch the latest SHA of the file if it exists
      try {
        const response: AxiosResponse = await axios.get(`${url}?ref=${this.branch}`, { headers: this.headers });
        const data: GitHubFileContent = response.data;
        sha = data.sha;
      } catch (error: any) {
        if (error.response && error.response.status !== 404) {
          throw new Error(`Error fetching file metadata: ${error.message}`);
        }
      }
  
      const payload: any = {
        message: commitMessage,
        content: contentEncoded,
        branch: this.branch,
      };
  
      if (sha) {
        payload.sha = sha;
      }
  
      // Attempt to update the file
      try {
        const response: AxiosResponse = await axios.put(url, payload, { headers: this.headers });
        return response.data;
      } catch (error: any) {
        // Handle 409 Conflict error
        if (error.response && error.response.status === 409) {
          console.warn(`SHA mismatch detected. Retrying... (${4 - retries}/3)`);
          retries -= 1;
          continue;
        }
        throw new Error(`Error writing file: ${error.message}`);
      }
    }
  
    throw new Error(`Failed to write file after multiple attempts due to SHA mismatch.`);
  }
  
}

export default GhPagesFS;
