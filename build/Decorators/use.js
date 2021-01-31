"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Use = void 0;
require("reflect-metadata");
var MetaKeys_1 = require("../enums/MetaKeys");
function Use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetaKeys_1.MetaKeys.middlewares, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetaKeys_1.MetaKeys.middlewares, middlewares, target, key);
    };
}
exports.Use = Use;
