import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI_ATLAS;
        
        if (!uri) {
            throw new Error("MONGO_URI_ATLAS environment variable is not defined");
        }

        console.log("Connecting to MongoDB Atlas with URI:", uri);

        await mongoose.connect(uri);

        console.log("Successfully connected to MongoDB Atlas");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
