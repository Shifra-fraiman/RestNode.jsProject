import express from "express";
import bodyParser from "body-parser";
import {setupSwagger} from "./swagger";
import businessRouter from "./routes/business.routes";
import meetingRouter from "./routes/meetings.routes";
import servicesRouter from "./routes/services.routes";
import usersRouter from "./routes/users.routes";
import authRouter from "./routes/auth.routes";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/business", businessRouter);
app.use("/meetings", meetingRouter);
app.use("/services", servicesRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);


setupSwagger(app);
mongoose
.connect("mongodb://127.0.0.1:27017/MyBusiness")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((error) => {
    console.error("Connection error", error);
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.once("open", () => {
    console.log("MongoDB connection successful");
});

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//     console.log(`Swagger docs available at http://localhost:${port}/swagger`);
// });
