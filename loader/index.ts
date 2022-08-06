import dotenv from 'dotenv';
import path from 'path';
import { mongoInit } from './mongo';
import { initSwagger } from './swagger';

export async function init(app: any) {
    dotenv.config({path: path.resolve(__dirname,`../../config/.env.${process.env.NODE_ENV}`)});
    mongoInit(process.env.DATABASE_URI as string);
    initSwagger(app);
}