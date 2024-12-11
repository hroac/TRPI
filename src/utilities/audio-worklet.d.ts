declare class AudioWorkletProcessor {
    readonly port: MessagePort;
    constructor();
    process(
      inputs: Float32Array[][],
      outputs: Float32Array[][],
      parameters: Record<string, Float32Array>
    ): boolean;
  }
  
  declare function registerProcessor(
    name: string,
    processorCtor: typeof AudioWorkletProcessor
  ): void;
  
  declare interface AudioWorkletGlobalScope {
    AudioWorkletProcessor: typeof AudioWorkletProcessor;
    registerProcessor: typeof registerProcessor;
  }
  
  declare var globalThis: AudioWorkletGlobalScope;
  