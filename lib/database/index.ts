import mongoose from 'mongoose';

const Mongodb_url = process.env.MONGODB_URL;
let isConnected = false;

export const connectToDB = async () => {

    if(!Mongodb_url) return console.log('Mongodb url not found');

    if(isConnected) return console.log('Already connected to MongoDB')
    
    try {
        await mongoose.connect(Mongodb_url)

        isConnected = true
        console.log("MongoDB connected");
    } catch (error: any) {
        throw new Error(`Failed to connect to the database: ${error.message}`)
    }
}