import {onRequest} from 'firebase-functions/v2/https';

// Import the compiled NestJS app
const { createNestServer } = require('../../dist/index');

let cachedServer: any;

export const api = onRequest(async (req: any, res: any) => {
    if (!cachedServer) {
        cachedServer = await createNestServer();
    }
    return cachedServer(req, res);
});
