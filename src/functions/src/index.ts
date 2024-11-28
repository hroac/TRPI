import * as functions from 'firebase-functions';

// Import the compiled NestJS app
import { createNestServer } from '../../index';

let cachedServer: any;

export const api = (functions as any).region('europe-west1').https.onRequest(async (req: any, res: any) => {
    if (!cachedServer) {
        cachedServer = await createNestServer();
    }

    return cachedServer(req, res);
});
