import express from "express";
import bodyParser from "body-parser";
import {setupSwagger} from "./swagger";
import businessRouter from "./routes/business.routes";
import meetingRouter from "./routes/meetings.routes";
import servicesRouter from "./routes/services.routes";
import usersRouter from "./routes/users.routes";
import authRouter from "./routes/auth.routes";
import connectDB from "./database";
import dotenv from "dotenv";
import http from 'http';

dotenv.config();
const app = express();
const port =process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/Business", businessRouter);
app.use("/Meeting", meetingRouter);
app.use("/Service", servicesRouter);
app.use("/User", usersRouter);
app.use("/Auth", authRouter);

setupSwagger(app);

// let server: http.Server;

export const startServer = async () => {
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


// export const stopServer = async () => {
//     return new Promise<void>((resolve) => {
//         server.close(() => {
//             console.log(`Server stopped`);
//             resolve();
//         });
//     });
// };
export default app;

//הרצה עם npm start
//unitTest-לפחות דף אחד 
//שימוש בתכונה נוספת שלר למדנו