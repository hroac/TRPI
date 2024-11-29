import { DotenvParseOutput } from 'dotenv';
import { FileLogger } from '../../TraumaIndicator/Utilities';


export class Config {
    private static _config: DotenvParseOutput
    private static readonly log: FileLogger = new FileLogger();

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