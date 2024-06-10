import express from "express";
import bodyParser from "body-parser";
import {setupSwagger} from "./swagger";
import businessRouter from "./routes/business.routes";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/business", businessRouter);

setupSwagger(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/swagger`);
});
