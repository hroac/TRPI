import axios from 'axios';
import * as googleTTS from 'google-tts-api'; // Import google-tts-api
import LanguageDetect from 'languagedetect';

export class Marketeer {
    private chatGptApiKey: string;
    private audioContext: AudioContext;
    private mediaRecorder!: MediaRecorder;
    private isRecording: boolean = false;
    private langDetect: LanguageDetect;
    private synth: SpeechSynthesis;
    private conversationHistory: { role: string; content: string }[] = [];

    constructor(chatGptApiKey: string) {
        this.chatGptApiKey = chatGptApiKey;
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.langDetect = new LanguageDetect();
        this.synth = window.speechSynthesis;
    }

    private async askInitialQuestion() {
        const initialQuestion = "Hello! How can I help you today?";
        this.speak(initialQuestion, "This is concerning a product");
        return;
    }

    public async start(): Promise<void> {
        await this.askInitialQuestion();
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true })
                .then(async stream => {
                    console.log('Microphone started');

                    // Ensure the AudioContext is in a resumed state
                    if (this.audioContext.state === 'suspended') {
                        await this.audioContext.resume();
                    }

                    this.mediaRecorder = new MediaRecorder(stream);
                    this.mediaRecorder.ondataavailable = async (event) => {
                        const audioBlob = event.data;
                        const transcription = await this.transcribeAudio(audioBlob);
                        console.log(transcription);
                        const response = await this.getChatGPTResponse(transcription);
                        console.log(response);
                        this.speak(response, transcription);
                    };

                    this.startContinuousRecording(stream);
                });
        } catch (error) {
            console.error('Error accessing microphone', error);
        }
    }

    private startContinuousRecording(stream: MediaStream) {
        const mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
        const analyser = this.audioContext.createAnalyser();
        mediaStreamSource.connect(analyser);
        analyser.fftSize = 256;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        let soundTrack: number[] = [];
        let silenceTrack: number[] = [];

        const detectSound = () => {
            analyser.getByteFrequencyData(dataArray);
            const maxVolume = Math.max(...dataArray);
            const threshold = 75; // Adjust this threshold as needed
            const silenceThreshold = 25; // Adjust this threshold as needed

            if (!this.isRecording) {
                if (maxVolume > threshold) {
                    soundTrack.push(maxVolume);
                }

                if (soundTrack.length > silenceThreshold) {
                    this.startRecording();
                    soundTrack = [];
                }
            }

            if (this.isRecording) {
                if (maxVolume < threshold) {
                    silenceTrack.push(maxVolume);
                }

                if (silenceTrack.length > threshold) {
                    this.stopRecording();
                    silenceTrack = [];
                }
            }

            requestAnimationFrame(detectSound);
        };

        detectSound();
    }

    private startRecording() {
        if (!this.isRecording) {
            this.mediaRecorder.start();
            this.isRecording = true;
            console.log('Recording started');
        }
    }

    private stopRecording() {
        if (this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            console.log('Recording stopped');
        }
    }

    private async transcribeAudio(audioBlob: Blob): Promise<string> {
        const formData = new FormData();
        formData.append('file', audioBlob, 'audio.flac'); // Use FLAC format
        formData.append('model', 'whisper-1'); // Correct model name for Whisper transcription

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/audio/transcriptions',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${this.chatGptApiKey}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            return response.data.text.trim();
        } catch (error: any) {
            console.error('Error transcribing audio with Whisper:', error.response ? error.response.data : error.message);
            return "";
        }
    }

    private async getChatGPTResponse(text: string): Promise<string> {
        try {
            this.conversationHistory.push({ role: 'user', content: text });

            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-4',
                    messages: this.conversationHistory,
                    max_tokens: 150
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.chatGptApiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const message = response.data.choices[0].message.content.trim();
            this.conversationHistory.push({ role: 'assistant', content: message });

            return message;
        } catch (error: any) {
            console.error('Error getting response from ChatGPT:', error.response ? error.response.data : error.message);
            return "I'm sorry, I couldn't understand that.";
        }
    }

    private speak(text: string, originalText: string): void {
        const detectedLanguages = this.langDetect.detect(originalText);
        const languageCode = this.getLanguageCode(detectedLanguages[0][0]);
        const maxChunkLength = 200; // Maximum length for each chunk

        const voices = this.synth.getVoices();
        const femaleVoices = voices.filter((voice : any) => voice.lang.startsWith(languageCode) && voice.gender === 'female');
    
        const selectedVoice = femaleVoices.length > 0 ? femaleVoices[0] : voices.find(voice => voice.lang.startsWith(languageCode));
    
        const utterances = this.splitTextIntoChunks(text, maxChunkLength).map(chunk => {
            const utterance = new SpeechSynthesisUtterance(chunk);
            utterance.lang = languageCode;
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            return utterance;
        });

        this.queueUtterances(utterances);
    }

    private splitTextIntoChunks(text: string, maxLength: number): string[] {
        const chunks: string[] = [];
        let start = 0;

        while (start < text.length) {
            let end = start + maxLength;
            if (end < text.length) {
                // Ensure we don't cut a word in half
                const lastSpace = text.lastIndexOf(' ', end);
                if (lastSpace > start) {
                    end = lastSpace;
                }
            }
            chunks.push(text.slice(start, end));
            start = end + 1;
        }

        return chunks;
    }

    private queueUtterances(utterances: SpeechSynthesisUtterance[]): void {
        if (!utterances.length) return;

        const utterance = utterances.shift()!;
        utterance.onend = () => {
            this.queueUtterances(utterances);
        };
        this.synth.speak(utterance);
    }

    private getLanguageCode(language: string): string {
        const languageMap: { [key: string]: string } = {
            'afrikaans': 'af-ZA',
            'albanian': 'sq-AL',
            'arabic': 'ar-SA',
            'armenian': 'hy-AM',
            'bengali': 'bn-BD',
            'bosnian': 'bs-BA',
            'bulgarian': 'bg-BG',
            'catalan': 'ca-ES',
            'chinese': 'zh-CN',
            'croatian': 'hr-HR',
            'czech': 'cs-CZ',
            'danish': 'da-DK',
            'dutch': 'nl-NL',
            'english': 'en-US',
            'esperanto': 'eo',
            'estonian': 'et-EE',
            'finnish': 'fi-FI',
            'french': 'fr-FR',
            'german': 'de-DE',
            'greek': 'el-GR',
            'gujarati': 'gu-IN',
            'hebrew': 'he-IL',
            'hindi': 'hi-IN',
            'hungarian': 'hu-HU',
            'icelandic': 'is-IS',
            'indonesian': 'id-ID',
            'irish': 'ga-IE',
            'italian': 'it-IT',
            'japanese': 'ja-JP',
            'kannada': 'kn-IN',
            'kazakh': 'kk-KZ',
            'korean': 'ko-KR',
            'latvian': 'lv-LV',
            'lithuanian': 'lt-LT',
            'macedonian': 'mk-MK',
            'malay': 'ms-MY',
            'marathi': 'mr-IN',
            'mongolian': 'mn-MN',
            'nepali': 'ne-NP',
            'norwegian': 'no-NO',
            'persian': 'fa-IR',
            'polish': 'pl-PL',
            'portuguese': 'pt-PT',
            'punjabi': 'pa-IN',
            'romanian': 'ro-RO',
            'russian': 'ru-RU',
            'serbian': 'sr-RS',
            'slovak': 'sk-SK',
            'slovenian': 'sl-SI',
            'spanish': 'es-ES',
            'swahili': 'sw-KE',
            'swedish': 'sv-SE',
            'tamil': 'ta-IN',
            'telugu': 'te-IN',
            'thai': 'th-TH',
            'turkish': 'tr-TR',
            'ukrainian': 'uk-UA',
            'urdu': 'ur-PK',
            'vietnamese': 'vi-VN',
            'welsh': 'cy-GB',
            // Add more languages as needed
        };

        return languageMap[language.toLowerCase()] || 'en-US';
    }
}
