"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decorators_1 = require("../Decorators/");
function Logger(req, res, next) {
    console.log("a request is made!");
    next();
}
var loginController = /** @class */ (function () {
    function loginController() {
    }
    loginController.prototype.getHome = function (req, res, next) {
        res.send("wow?");
    };
    __decorate([
        Decorators_1.get("/"),
        Decorators_1.Use(Logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], loginController.prototype, "getHome", null);
    loginController = __decorate([
        Decorators_1.Controller("/login")
    ], loginController);
    return loginController;
}());
