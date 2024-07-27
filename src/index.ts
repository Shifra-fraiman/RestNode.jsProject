import express from "express";
import bodyParser from "body-parser";
import {setupSwagger} from "./swagger";
import businessRouter from "./routes/business.routes";
import meetingRouter from "./routes/meetings.routes";
import servicesRouter from "./routes/services.routes";
import usersRouter from "./routes/users.routes";
import authRouter from "./routes/auth.routes";
import connectDB from "./database";

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port =process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/business", businessRouter);
app.use("/meetings", meetingRouter);
app.use("/services", servicesRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

setupSwagger(app);
// mongoose
// .connect(process.env.MONGO_URI!)
// .then(() => {
//     console.log("Connected to MongoDB");

// })
// .catch((error) => {
//     console.error("Connection error", error);
// });
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            let specificDate: Date = new Date(2024, 5, 13);
            console.log(`Server is running on port ${port} ${specificDate}`);
            console.log(`Swagger docs available at http://localhost:${port}/swagger`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//     console.log(`Swagger docs available at http://localhost:${port}/swagger`);
// });


//הרצה עם npm start
//שימי לב שבקןנטרולר של המשתמשים לא דרכו ליצור משתמש אלא 
//דרך הsignUp
//לגמור להטמיע את הswagger
//unitTest-לפחות דף אחד 
//שימוש בתכונה נוספת שלר למדנו