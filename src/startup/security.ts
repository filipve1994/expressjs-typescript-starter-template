import cors from 'cors';
import {Express} from 'express';

/**
 * The security.ts file will be used to store any security-related things, such as CORS, secure headers, rate-limiters, etc.
 */

const securitySetup = (app: Express, express: any) =>
    app
        // Cors will enable CORS which will allow clients (web apps) to send requests to this server.
        .use(cors())
        // We’ll also add express.json() middleware to allow Express to parse the HTTP request body as JSON.
        .use(express.json())

export default securitySetup;