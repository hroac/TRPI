class VolumeProcessor extends AudioWorkletProcessor {
    private _buffer: Float32Array;
  
    constructor() {
      super();
      this._buffer = new Float32Array(256);
    }
  
    process(inputs: Float32Array[][]): boolean {
      const input = inputs[0];
      if (input.length > 0) {
        const inputChannel = input[0];
        let sum = 0;
        for (let i = 0; i < inputChannel.length; i++) {
          sum += inputChannel[i] * inputChannel[i];
        }
        const rms = Math.sqrt(sum / inputChannel.length);
        this.port.postMessage(rms);
      }
      return true;
    }
  }
  
  registerProcessor('volume-processor', VolumeProcessor);
  export {}