
import { NestFactory } from '@nestjs/core';
import { AppModule } from './Framework/app.module';
import * as functions from 'firebase-functions';
import * as dotenv from 'dotenv';
dotenv.config();

export const api = functions.https.onRequest(async (req, res) => {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: [
            'https://traumaindicator.com',
            'https://www.traumaindicator.com'
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization, api-key'
    });

    const instance = app.getHttpAdapter().getInstance();
    return instance(req, res);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
