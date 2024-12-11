
export default class VoiceRecognitionManager {
  recognition: any;

  constructor() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  }

  startRecognition() {
    this.recognition.start();
    this.recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      console.log('Speech received: ' + speechResult);
      // Handle the speech result
    };
    this.recognition.onspeechend = () => {
      this.recognition.stop();
    };
    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error detected: ' + event.error);
    };
  }

  stopRecognition() {
    this.recognition.stop();
  }

  // Additional methods for voice recognition management
}
