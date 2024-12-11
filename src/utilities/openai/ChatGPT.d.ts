export declare class ChatGPT {
    private static instance;
    static set(apiKey: string, prompt?: string): Promise<ChatGPT>;
    static get(): ChatGPT;
    constructor(apiKey: string, ChatGPTAPI: any, prompt?: string);
    private api;
    private prompt;
    reply(prompt: string): Promise<string | undefined>;
    send(input: string, name?: string): Promise<string | undefined>;
}
