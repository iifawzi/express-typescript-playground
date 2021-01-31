import "reflect-metadata"
import {MetaKeys} from "../enums/MetaKeys"
export function Use(middleware: Function) {
    return (target: any, key: string, desc: PropertyDescriptor)=>{

        const middlewares = Reflect.getMetadata(MetaKeys.middlewares, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetaKeys.middlewares, middlewares, target, key);
    }
}