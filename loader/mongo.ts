import mongoose from "mongoose";

export async function initMongo(URI: string) {
    mongoose.connect(URI);
    const mongoDb = mongoose.connection;
    mongoDb.once("open", () => console.log('mongo db connected'));
    mongoDb.on("error", (error) => {
        console.log("mongo error: ",error);
    });
}