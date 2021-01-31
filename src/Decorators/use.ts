import "reflect-metadata"

export function Use(middleware: Function) {
    return (target: any, key: string, desc: PropertyDescriptor)=>{

        const middlewares = Reflect.getMetadata("middlewares", target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata("middlewares", middlewares, target, key);
    }
}