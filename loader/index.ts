import dotenv from 'dotenv';
import path from 'path';
import { setJwtConfig } from '../lib/jwt';
import { initMongo } from './mongo';
import { initContainer } from './router';
import { initSwagger } from './swagger';

export async function init(app: any) {
    dotenv.config({path: path.resolve(__dirname,`../../config/.env.${process.env.NODE_ENV}`)});
    initMongo(process.env.DATABASE_URI as string);
    setJwtConfig();
    initSwagger(app);
}

export function getContainer() {
    return initContainer();
}