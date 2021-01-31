"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../settings/AppRouter");
function Controller(prefix) {
    return function (constructor) {
        var router = AppRouter_1.AppRouter.getInstance;
        var prototype = constructor.prototype;
        for (var key in prototype) {
            var method = Reflect.getMetadata("method", prototype, key);
            var route = Reflect.getMetadata("route", prototype, key);
            var middlewares = Reflect.getMetadata("middlewares", prototype, key) || [];
            router[method].apply(router, __spreadArrays([prefix + route], middlewares, [prototype[key]]));
        }
    };
}
exports.Controller = Controller;
