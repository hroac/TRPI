export default function splitDescription(desc: string, chunkSize = 125, overrun = 30, tolerance = 0.2): string[] {
  const out: string[] = [];
  const paraBreak = '\n\n';

  const rawSections = desc
    .split(/^\s*---\s*$/gm)
    .map(s => s.trim())
    .filter(Boolean);

  const sections: string[] = [];
  for (let i = 0; i < rawSections.length; i++) {
    if (rawSections[i].length < 100 && i < rawSections.length - 1) {
      sections.push(rawSections[i] + '\n\n' + rawSections[++i]);
    } else {
      sections.push(rawSections[i]);
    }
  }

  for (const section of sections) {
    let i = 0;
    while (i < section.length) {
      let chunkEnd = Math.min(i + chunkSize, section.length);
      let nextPara = section.indexOf(paraBreak, i);
      let bestPara = -1;
      while (nextPara !== -1 && nextPara < chunkEnd + overrun) {
        let chunkLen = nextPara - i;
        if (
          chunkLen >= chunkSize * (1 - tolerance) &&
          chunkLen <= chunkSize * (1 + tolerance)
        ) {
          bestPara = nextPara;
          break;
        }
        nextPara = section.indexOf(paraBreak, nextPara + paraBreak.length);
      }
      if (bestPara !== -1) {
        out.push(section.slice(i, bestPara).trim());
        i = bestPara + paraBreak.length;
        continue;
      }
      out.push(section.slice(i, chunkEnd).trim());
      i = chunkEnd;
    }
  }
  return out;
}
