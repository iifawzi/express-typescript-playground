"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("../enums/Methods");
var MetaKeys_1 = require("../enums/MetaKeys");
function routeBundler(method) {
    return function RequestTo(route) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetaKeys_1.MetaKeys.method, method, target, key);
            Reflect.defineMetadata(MetaKeys_1.MetaKeys.route, route, target, key);
        };
    };
}
exports.get = routeBundler(Methods_1.Methods.get);
exports.put = routeBundler(Methods_1.Methods.put);
exports.post = routeBundler(Methods_1.Methods.post);
exports.patch = routeBundler(Methods_1.Methods.patch);
exports.del = routeBundler(Methods_1.Methods.del);
