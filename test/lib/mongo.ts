import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"

let mongo: any = null;

export const connectDB = async () => {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();

    mongoose.connect(uri,{});
    console.log("mongo memory server created");
};

export async function dropDB() {
    if (mongo) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongo.stop();
    }
};

export const dropCollections = async () => {
    if (mongo) {
        const collections = await mongoose.connection.db.collections();
        for (let collection of collections) {
            await collection.deleteMany({});
        }
    }
};