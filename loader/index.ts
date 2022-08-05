import dotenv from 'dotenv';
import path from 'path';
import { mongoInit } from './mongo';

export async function init() {
    dotenv.config({path: path.resolve(__dirname,`../../config/.env.${process.env.NODE_ENV}`)});
    mongoInit(process.env.DATABASE_URI as string);
}