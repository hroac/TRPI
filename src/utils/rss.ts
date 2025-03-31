import { Axios } from "axios";

/**
 * Recursively converts an XML node to a JSON object.
 * Adapted from common xmlToJson implementations.
 */
function xmlToJson(xml: Node): any {
    let obj: any = {};
  
    // Process element nodes
    if (xml.nodeType === 1) {
      // Element node: process attributes
      if ((xml as Element).attributes && (xml as Element).attributes.length > 0) {
        obj["@attributes"] = {};
        for (let j = 0; j < (xml as Element).attributes.length; j++) {
          const attribute = (xml as Element).attributes.item(j);
          if (attribute) {
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      }
    } else if (xml.nodeType === 3) {
      // Text node
      return xml.nodeValue?.trim() || "";
    }
  
    // Process child nodes
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        if (!item) continue;
        const nodeName = item.nodeName;
        const value = xmlToJson(item);
        if (value === "") continue; // Skip empty text nodes
  
        if (obj[nodeName] === undefined) {
          obj[nodeName] = value;
        } else {
          // If a node already exists, convert it to an array (if not already)
          if (!Array.isArray(obj[nodeName])) {
            obj[nodeName] = [obj[nodeName]];
          }
          obj[nodeName].push(value);
        }
      }
    }
    return obj;
  }
  
  /**
   * Fetches an RSS feed from the provided URL and converts it to JSON.
   */
 export default async function fetchRssToJson(url: string): Promise<any> {
    try {
      const axios = new Axios();
      const response = await axios.get(url);
      const xmlText = await response.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      return xmlToJson(xmlDoc);
    } catch (error) {
      throw new Error(`Error fetching or parsing RSS: ${error}`);
    }
  }
  
  // Example usage:
  fetchRssToJson("https://medium.com/feed/@hraoc")
    .then((json) => {
      console.log("RSS converted to JSON:", json);
    })
    .catch((err) => {
      console.error(err);
    });
  