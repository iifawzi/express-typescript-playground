import { Request, Response, NextFunction } from "express"
import { controller } from "../Decorators/controller";
import { RequestTo } from "../Decorators/Request"
import { Use } from "../Decorators/use";

function Logger(req: Request, res: Response, next: NextFunction){
    console.log("a request is made!");
    next();
}

@controller("/login")
class loginController {
    color: string = "red";

    @RequestTo({method: 'get', route: '/'})
    @Use(Logger)
    getHome(req: Request, res: Response, next: NextFunction){
        res.send("wow?");
    }
}










