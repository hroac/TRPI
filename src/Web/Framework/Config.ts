import { DotenvParseOutput } from 'dotenv';
import { Logger, dummyLogger } from "ts-log";

export class Config {
    private static _config: DotenvParseOutput
    private static readonly log: Logger = dummyLogger;

    constructor() {

    }

    public static get env() {
        if (!this._config) {
            this._config = process.env as DotenvParseOutput;
        }

        return this._config
    }

    public static put(key: string, value: string) {
        if (this._config) {
            if (this._config[key] || key.length) {
                this._config[key] = value;

                return true
            } 
            this.log.info(`could not update ${key} in config`)
            return false
        }


    }

    public static get(key: string) {
        if (this._config && this._config[key]) {
            return this._config[key]
        }
        return '';
    }
}