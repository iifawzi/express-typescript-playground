import "reflect-metadata"
import {Methods} from "../helpers/Methods"


function routeBundler(method: Methods){
    return function RequestTo(route: string) {
        return (target: any, key: string, desc: PropertyDescriptor) => {
            Reflect.defineMetadata("method", method,target,key);
            Reflect.defineMetadata("route", route,target,key);
        }
}
}


export const get = routeBundler(Methods.get);
export const put = routeBundler(Methods.put);
export const post = routeBundler(Methods.post);
export const patch = routeBundler(Methods.patch);
export const del = routeBundler(Methods.del);
