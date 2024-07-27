import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI!);
        // console.log("Connected to MongoDB");
        // mongoose.connection.on("error", (err) => {
        //     console.error("MongoDB connection error:", err);
        // });
        // mongoose.connection.once("open", () => {
        //     console.log("MongoDB connection successful");
        // });

        // const uri =
        //     "mongodb+srv://shifraFraiman:shifra9680@secondhandstore.ubpsyz5.mongodb.net/?retryWrites=true&w=majority&appName=MyBusiness";
            const uri =process.env.MONGO_URI_ATLAS!;
            console.log(
                "uri: "+uri
            );
            
        // Connect to MongoDB Atlas
        mongoose
        .connect(uri)
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB Atlas", error);
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
