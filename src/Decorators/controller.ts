import "reflect-metadata"
import {Methods} from "../helpers/Methods"
import { AppRouter } from "../settings/AppRouter";

export function Controller(prefix: string) {
    return (constructor: Function) => {
        const router = AppRouter.getInstance;

        let prototype = constructor.prototype;
        for (let key in prototype) {
            const method: Methods = Reflect.getMetadata("method", prototype, key)
            const route: string = Reflect.getMetadata("route", prototype, key)
            const middlewares = Reflect.getMetadata("middlewares", prototype, key) || []
            router[method](prefix + route, ...middlewares, prototype[key]);
        }
    }
}