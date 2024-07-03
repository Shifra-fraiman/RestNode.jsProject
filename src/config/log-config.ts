import * as log4js from "log4js";

log4js.configure({
    appenders: {
        controller: {type: "file", filename: "../logs/controller.log"},
        service: {type: "file", filename: "../logs/service.log"},
        route: {type: "file", filename: "../logs/route.log"},
        middlware: {type: "file", filename: "../logs/middlware.log"},
        app: {type: "file", filename: "../logs/app.log"},
        errorFile: {type: "file", filename: "../logs/error.log"},
    },
    categories: {
        default: {appenders: ["app"], level: "info"},
        controller: {appenders: ["controller"], level: "info"},
        service: {appenders: ["service"], level: "info"},
        route: {appenders: ["route"], level: "info"},
        middlware: {appenders: ["middlware"], level: "info"},
        errorFile: {appenders: ["errorFile"], level: "error"},
    },
});

export const controllerLog = log4js.getLogger("controller");
export const serviceLog = log4js.getLogger("service");
export const routeLog = log4js.getLogger("route");
export const middlwareLog = log4js.getLogger("middlware");
export const errorLog = log4js.getLogger("errorFile");

// module.exports={
//     controllerLog,
//     serviceLog,
//     routeLog,
//     middlwareLog,
//     errorLog
// }
