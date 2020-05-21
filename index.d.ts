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
    other: number;
}, Marker>;
export declare type MyTypeWithOmit2 = Rebound<Omit2<MakeRequired<Marker, "worldLocation">, "image"> & {
    image: string;
    other: number;
}, Marker>;
export declare function myFuncWithLibOmit(param: MyTypeWithLibOmit): void;
export declare function myFuncWithOmit2(param: MyTypeWithOmit2): void;
export declare const myConstWithLibOmit: (param: Rebound<Pick<MakeRequired<Marker, "worldLocation">, "visible" | "label" | "title" | "rect" | "worldLocation" | "size" | "position" | "imageOffset" | "imageSize" | "labelOffset" | "labelMaxWidth" | "labelColor" | "labelAlign" | "labelBaseline" | "labelFont" | "tooltipOptions" | "htmlElement" | "wantImage" | "drawFunc" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseButton" | "pick" | "setScaleFactor" | "drawDecoration" | "setImage" | "setImageUrl" | "setPosition" | "addMarker" | "addDecoration"> & {
    image: string;
    other: number;
}, Marker>) => void;
export declare const myConstWithOmit2: (param: Rebound<Omit2<MakeRequired<Marker, "worldLocation">, "image", "visible" | "label" | "title" | "rect" | "worldLocation" | "size" | "position" | "imageOffset" | "imageSize" | "labelOffset" | "labelMaxWidth" | "labelColor" | "labelAlign" | "labelBaseline" | "labelFont" | "tooltipOptions" | "htmlElement" | "wantImage" | "drawFunc" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseButton" | "pick" | "setScaleFactor" | "drawDecoration" | "setImage" | "setImageUrl" | "setPosition" | "addMarker" | "addDecoration"> & {
    image: string;
    other: number;
}, Marker>) => void;
export {};
