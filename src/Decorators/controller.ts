import "reflect-metadata"

import { Router } from "express"
const router = Router();
type Methods = "get" | "post";


export function controller(prefix: string) {
    return (constructor: Function) => {
        let prototype = constructor.prototype;
        for (let key in prototype){
            const request = Reflect.getMetadata("request", prototype, key)
            const middlewares = Reflect.getMetadata("middlewares", prototype, key) || []
            router[request.method as Methods](request.route, ...middlewares, prototype[key]);
        }
    }
}


export { router }