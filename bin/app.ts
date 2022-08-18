import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import {getContainer, init} from '../loader';
import {InversifyExpressServer} from 'inversify-express-utils';
import { Request, Response } from 'express';
import { BaseException } from '../lib/exception/baseException';

//create container
const container = getContainer();

// create server
const server = new InversifyExpressServer(container);

server.setConfig(async (app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(cors());
    await(init(app));
});

server.setErrorConfig(app => {
    app.use((err: any, req: Request, res: Response, next: any) => {
        if(err){
            if(err instanceof BaseException)
                return err.sendRes(res);
            
            return new BaseException().sendRes(res);
        }
        next();
    });
});

const app = server.build();
app.listen(process.env.SERVER_PORT);