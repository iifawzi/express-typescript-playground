"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var AppRouter_1 = require("./settings/AppRouter");
require("./controllers/loginController");
var router = AppRouter_1.AppRouter.getInstance;
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(router);
app.listen(3000, function () {
    console.log("listening on port 3000");
});
