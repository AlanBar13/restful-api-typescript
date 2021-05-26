import {CommonRoutesConfig} from '../common/common.routes.config'
import express from 'express';

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application){
        super(app, 'UserRoutes');
    }

    configureRoutes(){
        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('list of users');
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send('Post users');
            });
        
        this.app.route('/users/:userId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET request for ${req.params.userId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT request for ${req.params.userId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH request for ${req.params.userId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE request for ${req.params.userId}`);
            });

        return this.app;
    }
}