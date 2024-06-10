import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {Application} from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My Business",
            version: "1.0.0",
            description: "A server side for little business",
        },
        tags: [
            {
                name: "Business",
                description: "For creating a business and updating details about it",
            },
            {
                name: "User",
                description: "Create users",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
