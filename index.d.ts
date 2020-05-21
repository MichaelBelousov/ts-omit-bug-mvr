declare type Omit2<T, K extends keyof any, Keys extends keyof T = Exclude<keyof T, K>> = {
    [P in Keys]: T[P];
};
declare type MakeRequired<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;
declare type Rebound<Type extends object, NewThis> = {
    [K in keyof Type]: Type[K] extends (...p: infer P) => infer R ? (this: NewThis, ...p: P) => R : Type[K];
};
import { Marker } from "@bentley/imodeljs-frontend";
export declare type MyTypeWithLibOmit = Rebound<Omit<MakeRequired<Marker, "worldLocation">, "image"> & {
    image: string;
}, Marker>;
export declare type MyTypeWithOmit2 = Rebound<Omit2<MakeRequired<Marker, "worldLocation">, "image"> & {
    image: string;
}, Marker>;
export {};
