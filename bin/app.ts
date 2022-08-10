import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import {getContainer, init} from '../loader';
import {InversifyExpressServer} from 'inversify-express-utils';

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

const app = server.build();
app.listen(process.env.SERVER_PORT);