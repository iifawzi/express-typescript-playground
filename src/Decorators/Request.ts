import "reflect-metadata"
import { Methods } from "../enums/Methods"
import { MetaKeys } from "../enums/MetaKeys"
import { RequestHandler } from "express"

interface requestHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler
}

function routeBundler(method: Methods) {
    return function RequestTo(route: string) {
        return (target: any, key: string, desc: requestHandlerDescriptor) => {
            Reflect.defineMetadata(MetaKeys.method, method, target, key);
            Reflect.defineMetadata(MetaKeys.route, route, target, key);
        }
    }
}


export const get = routeBundler(Methods.get);
export const put = routeBundler(Methods.put);
export const post = routeBundler(Methods.post);
export const patch = routeBundler(Methods.patch);
export const del = routeBundler(Methods.del);
