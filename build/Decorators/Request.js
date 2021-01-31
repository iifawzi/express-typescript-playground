"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("../helpers/Methods");
function routeBundler(method) {
    return function RequestTo(route) {
        return function (target, key, desc) {
            Reflect.defineMetadata("method", method, target, key);
            Reflect.defineMetadata("route", route, target, key);
        };
    };
}
exports.get = routeBundler(Methods_1.Methods.get);
exports.put = routeBundler(Methods_1.Methods.put);
exports.post = routeBundler(Methods_1.Methods.post);
exports.patch = routeBundler(Methods_1.Methods.patch);
exports.del = routeBundler(Methods_1.Methods.del);
