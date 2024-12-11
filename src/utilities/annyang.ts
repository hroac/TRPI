// src/types/annyang.d.ts
export { }
declare module 'annyang' {
    export interface StartOptions {
        autoRestart?: boolean;
        continuous?: boolean;
    }

    export interface CommandOptionRegex {
        regexp: RegExp;
        callback(): void;
    }

    export interface CommandOption {
        [command: string]: CommandOptionRegex | (() => void);
    }


    export interface Annyang {
        start(options?: StartOptions): void;
        abort(): void;
        pause(): void;
        resume(): void;
        debug(newState?: boolean): void;
        setLanguage(lang: string): void;
        addCommands(commands: CommandOption): void;
        removeCommands(command?: string): void;
        removeCommands(command: string[]): void;
        addCallback(
            event: Events,
            callback: (userSaid?: string, commandText?: string, results?: string[]) => void,
            context?: any
        ): void;
        removeCallback(event?: Events, callback?: (userSaid: string, commandText: string, results: string[]) => void): void;
        isListening(): boolean;
        getSpeechRecognizer(): any;
        trigger(command: string | string[]): void;
    }
}
