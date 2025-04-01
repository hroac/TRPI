import axios from 'axios';

/**
 * Recursively converts an XML node to a JSON object.
 * Adapted from common xmlToJson implementations.
 */
// src/utils/rss.js

/**
 * Fetches and parses an RSS feed from the given URL.
 *
 * @param {string} url - The URL of the RSS feed.
 * @returns {Promise<{items: Array}>} - A promise that resolves to a JSON object with an "items" array.
 */
async function parseRss(xmlDoc: Document) {
    
    // Get all <item> elements.
    const itemNodes = xmlDoc.querySelectorAll("item");
    const items = Array.from(itemNodes).map((item) => {
      // Extract basic fields.
      const title = item.querySelector("title")?.textContent?.trim() || "";
      const link = item.querySelector("link")?.textContent?.trim() || "";
      const pubDate = item.querySelector("pubDate")?.textContent?.trim() || "";
      const namespace = "http://purl.org/rss/1.0/modules/content/";
      const encodedElements = item.getElementsByTagNameNS(namespace, "encoded")[0];

      console.log(encodedElements)
      // Try to get <content:encoded> (note the escaped colon)
      const textContent = (item.textContent || '')
      const content =textContent.slice(textContent.indexOf('</figure>') + 9)
      const image = (textContent.match(/src="(https:\/\/cdn-images-1\.medium\.com\/[^"]+)"/))

      
      return {
        title,
        link,
        pubDate,
        content,
        image: (image || [])[1],
      };
    });
  
    return { items };
  }
  
  
  /**
   * Fetches an RSS feed from the provided URL and converts it to JSON.
   */
 export default async function fetchRssToJson(url: string): Promise<any> {
    try {
      const response = await axios.get(url, {headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/rss+xml'
      }});
      const xmlText = await response.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      return parseRss(xmlDoc);
    } catch (error) {
      throw new Error(`Error fetching or parsing RSS: ${error}`);
    }
  }
