export function guid() {
    let guid = localStorage.getItem('guid') || '';
    if (guid) {
      console.log('Using existing GUID:', guid);
      return guid;
    }
  
    const cryptoObj = window.crypto || window.Crypto;
    if (!cryptoObj) {
      console.error('Crypto API not available');
      return '';
    }
  
    const randomArray = new Uint8Array(16);
    cryptoObj.getRandomValues(randomArray);
  
    guid = Array.from(randomArray, (byte, index) =>
      (index === 4 || index === 6 || index === 8 || index === 10 ? '-' : '') +
      (byte < 16 ? '0' : '') +
      byte.toString(16)
    ).join('').toLowerCase();
  
    localStorage.setItem('guid', guid);
    return guid;
  }
  