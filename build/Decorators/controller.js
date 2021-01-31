"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.controller = void 0;
require("reflect-metadata");
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function controller(prefix) {
    return function (constructor) {
        var request = Reflect.getMetadata("request", constructor.prototype, "getHome");
        var middlewares = Reflect.getMetadata("middlewares", constructor.prototype, "getHome") || [];
        router[request.method].apply(router, __spreadArrays([request.route], middlewares, [constructor.prototype["getHome"]]));
    };
}
exports.controller = controller;
