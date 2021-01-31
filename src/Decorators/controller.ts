import "reflect-metadata"

import { Router } from "express"
const router = Router();
type Methods = "get" | "post";


export function controller(prefix: string){
    return (constructor: Function)=>{
       const request = Reflect.getMetadata("request", constructor.prototype, "getHome")
       const middlewares = Reflect.getMetadata("middlewares", constructor.prototype, "getHome") || []
       router[request.method as Methods](request.route, ...middlewares ,constructor.prototype["getHome"])
    }
}


export { router }