"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTo = void 0;
require("reflect-metadata");
function RequestTo(_a) {
    var method = _a.method, route = _a.route;
    return function (target, key, desc) {
        Reflect.defineMetadata("request", { method: method, route: route }, target, key);
    };
}
exports.RequestTo = RequestTo;
