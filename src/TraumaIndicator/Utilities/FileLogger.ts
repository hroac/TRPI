import * as fs from 'fs';
import * as path from 'path';

export class FileLogger {

    public constructor() {
       
    }

    public trace(message?: any, ...optionalParams: any[]): void {
       console.log('TRACE', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public debug(message?: any, ...optionalParams: any[]): void {
       console.log('DEBUG', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public info(message?: any, ...optionalParams: any[]): void {
       console.log('INFO ', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public warn(message?: any, ...optionalParams: any[]): void {
       console.log('WARN ', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public error(message?: any, ...optionalParams: any[]): void {
       console.log('ERROR', `${message} ${JSON.stringify(optionalParams)}`);
    }
}
