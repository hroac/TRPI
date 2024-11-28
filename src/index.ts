import { NestFactory } from '@nestjs/core';
import { AppModule } from './Web/Framework/app.module';
import * as dotenv from 'dotenv';

dotenv.config();

let server: any; // Cache the app instance for reuse

export const createNestServer = async () => {
    if (!server) {
        const app = await NestFactory.create(AppModule);

        // Enable CORS for specific origins
        app.enableCors({
            origin: [
                'https://traumaindicator.com',
                'https://www.traumaindicator.com',
            ],
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            credentials: true,
            allowedHeaders:
                'Origin, X-Requested-With, Content-Type, Accept, Authorization, api-key',
        });

        const port = 8080;
        await app.listen(port);
        console.log(`NestJS server running on port ${port}`);

        // Cache the server instance
        server = app.getHttpAdapter().getInstance();
    }

    return server;
};

// Handle uncaught exceptions globally
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
