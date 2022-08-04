import 'reflect-metadata';
import * as bodyParser from 'body-parser';

import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import TYPES from '../constants/types';

// declare metadata by @controller annotation
import '../controllers/testController';
import '../controllers/homeController';

// declare services;
import {TestService} from '../services/testService';

// set up container
let container = new Container();

// set up bindings
container.bind(TYPES.TestService).to(TestService);

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);