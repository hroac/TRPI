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
        this.api = new ChatGPTAPI({
            apiKey: apiKey,
            completionParams: {
                model: 'gpt-4o',
            }
            })

        this.prompt = prompt ?? `
            You are a bot that helps customers with filling out their shipping details, answer the customer in their own language.`

    }

    private api: any;

    private prompt: string;

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
}