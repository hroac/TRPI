declare module 'audio-encoder' {
    export function encode(buffer: ArrayBuffer, options: { format: string, sampleRate: number, bitRate: number }): Promise<ArrayBuffer>;
  }