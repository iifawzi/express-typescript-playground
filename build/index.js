"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res, next) {
    res.send("\n<div>\n<h1>Hi there!</h1>\n</div>\n");
});
app.listen(3000, function () {
    console.log("listening on port 3000");
});
