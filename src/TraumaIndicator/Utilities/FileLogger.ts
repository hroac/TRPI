import * as fs from 'fs';
import * as path from 'path';
import { Logger } from 'ts-log';

export class FileLogger implements Logger {
    private readonly fd: number;

    public constructor(filename: string) {
        const logDirectory = path.resolve(__dirname, '../../logs'); // Resolve log directory

        try {
            // Ensure the log directory exists
            if (!fs.existsSync(logDirectory)) {
                fs.mkdirSync(logDirectory, { recursive: true });
            }

            const filePath = path.join(logDirectory, filename);

            // Open the file for appending logs
            this.fd = fs.openSync(filePath, 'a+');
        } catch (error: any) {
            console.error('Failed to initialize FileLogger:', error.message);
            throw error; // Rethrow the error if logger initialization fails
        }
    }

    public trace(message?: any, ...optionalParams: any[]): void {
        this.append('TRACE', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        this.append('DEBUG', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public info(message?: any, ...optionalParams: any[]): void {
        this.append('INFO ', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        this.append('WARN ', `${message} ${JSON.stringify(optionalParams)}`);
    }

    public error(message?: any, ...optionalParams: any[]): void {
        this.append('ERROR', `${message} ${JSON.stringify(optionalParams)}`);
    }

    private append(type: string, message: string) {
        try {
            fs.appendFileSync(this.fd, `${new Date().toISOString()} ${type} ${message}\n`);
        } catch (error: any) {
            console.error(`Failed to write to log file: ${error.message}`);
        }
    }
}
