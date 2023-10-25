import { Express, Request, Response } from 'express';

/**
 * Consider this file like a base controller file. This is where all routes will be set, as well as links to other controllers.
 */
const routerSetup = (app: Express) =>
    app

        .get('/', async (req: Request, res: Response) => {
            res.send('Hello Express APIvantage!');
        });

export default routerSetup;