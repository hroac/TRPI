import axios from 'axios'
export class ChatGPT {

    private static instance: ChatGPT;
  
    public static async set(apiKey: string, prompt?: string) {
        if (!this.instance) {
            const { ChatGPTAPI } = await eval("import('chatgpt')");
            this.instance = new ChatGPT(apiKey, ChatGPTAPI, prompt)
        }
        return this.instance;
    }

    public static get() {
        return this.instance;
    }


    public constructor(apiKey: string, ChatGPTAPI: any, prompt?: string) {
        this.apiKey = apiKey;
        this.api = new ChatGPTAPI({
            apiKey: apiKey,
            completionParams: {
                model: 'gpt-3.5-turbo',
            }
            })

        this.prompt = prompt ?? `
            We are TRPI, `

    }

    private api: any;

    private prompt: string;

    private apiKey: string;

    private conversationHistory: Record<string, { role: string; content: string }[]> = {};


    public async reply(prompt: string) : Promise<string|undefined> {
        const resp = await this.api.sendMessage(prompt ?? this.prompt, {})
        if (resp.text) {
            return resp.text.replace(/['"]+/g, '');
        }
    }

    public async send(input: string, name?: string): Promise<string|undefined> {
        const prompt = `${this.prompt}\n${input}`
        const options : any = {}

        if (name) {
            options['name'] = name
        }
        const resp = await this.api.sendMessage(prompt, options)
    if (resp.text) {
        return resp.text.replace(/['"]+/g, '');
    } else {
        return;
    }

    }

    private async getResponse(userId: string, text: string): Promise<string> {
        if (!this.conversationHistory[userId]) {
            this.conversationHistory[userId] = [{ role: 'assistant', content: this.prompt}]
        }
        try {
            this.conversationHistory[userId].push({ role: 'user', content: text });

            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-4',
                    messages: this.conversationHistory[userId],
                    max_tokens: 150
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const message = response.data.choices[0].message.content.trim();
            this.conversationHistory[userId].push({ role: 'assistant', content: message });

            return message;
        } catch (error: any) {
            console.error('Error getting response from ChatGPT:', error.response ? error.response.data : error.message);
            return "I'm sorry, I couldn't understand that.";
        }
    }
}