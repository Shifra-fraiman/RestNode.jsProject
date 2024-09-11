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
            },
            {
                name: "User",
            },
            {
                name: "Auth",
            },
            {
                name: "Service",
            },
            {
                name: "Meeting",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            security: [
                {
                    bearerAuth: [], // אוטומטית יישלח עם כל הבקשות שמוגדרות כמאובטחות
                },
            ],
            schemas: {
                User: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            example: "JohnDoe",
                        },
                        password: {
                            type: "string",
                            example: "password123",
                        },
                    },
                    required: ["name", "password"],
                },
                Business: {
                    type: "object",
                    properties: {
                        userId: {
                            type: "string",
                            example: "user123",
                        },
                        businessData: {
                            type: "object",
                            example: {name: "ron-store"},
                        },
                    },
                    required: ["userId"],
                },
                Service: {
                    type: "object",
                    properties: {
                        businessId: {
                            type: "string",
                            example: "business123",
                        },
                        name: {
                            type: "string",
                            example: "name of service",
                        },
                        serviceData: {
                            type: "object",
                            example: {cost: "350"},
                        },
                    },
                    required: ["businessId", "name"],
                },
                Meeting: {
                    type: "object",
                    properties: {
                        businessId: {
                            type: "string",
                            example: "business123",
                        },
                        serviceId: {
                            type: "string",
                            example: "business123",
                        },
                        meetingData: {
                            type: "object",
                            properties: {
                                dateAndStartTime: {
                                    type: "string",
                                    format: "date-time",
                                    example: "2024-09-10T10:00:00Z",
                                },
                                duration: {
                                    type: "integer",
                                    example: 2,
                                },
                                customerDetails: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                            example: "John Doe",
                                        },
                                        phone: {
                                            type: "string",
                                            example: "123-456-7890",
                                        },
                                        email: {
                                            type: "string",
                                            example: "john.doe@example.com",
                                        },
                                    },
                                    required: ["name"],
                                },
                                meeting: {
                                    type: "object",
                                },
                            },
                            required: ["dateAndStartTime", "duration", "customerDetails"],
                        },
                    },
                    required: ["businessId", "serviceId", "meetingData"],
                },
            },
        },
    },
    apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
