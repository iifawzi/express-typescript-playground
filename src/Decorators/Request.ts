import "reflect-metadata"

type Methods = "get" | "post";

export function RequestTo({ method, route }: { method: Methods, route: string }) {
    return (target: any, key: string, desc: PropertyDescriptor) => {
        Reflect.defineMetadata("request", {method,route},target,key);
    }
}
