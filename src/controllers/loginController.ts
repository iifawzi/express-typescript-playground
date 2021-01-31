import { Request, Response, NextFunction } from "express"
import { Controller, get, Use } from "../Decorators/";

function Logger(req: Request, res: Response, next: NextFunction){
    console.log("a request is made!");
    next();
}

@Controller("/login")
class loginController {
    @get("/")
    @Use(Logger)
    getHome(req: Request, res: Response, next: NextFunction){
        res.send("wow?");
    }
}










