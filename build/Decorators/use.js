"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Use = void 0;
require("reflect-metadata");
function Use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata("middlewares", target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata("middlewares", middlewares, target, key);
    };
}
exports.Use = Use;
