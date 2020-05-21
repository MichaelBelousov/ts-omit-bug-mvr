declare type Omit2<T, K extends keyof any, Keys extends keyof T = Exclude<keyof T, K>> = {
    [P in Keys]: T[P];
};
declare type Partial2<T> = {
    [P in keyof T]?: T[P];
};
import { Marker } from "@bentley/imodeljs-frontend";
export declare type MyTypeWithLibOmit = Partial<Omit<Marker, "">>;
export declare type MyTypeWithOmit2 = Omit2<Partial2<Marker>, "">;
export declare function myFuncWithLibOmit(param: MyTypeWithLibOmit): void;
export declare function myFuncWithOmit2(param: MyTypeWithOmit2): void;
export declare const myConstWithLibOmit: (param: Partial<Pick<Marker, "visible" | "label" | "title" | "image" | "rect" | "worldLocation" | "size" | "position" | "imageOffset" | "imageSize" | "labelOffset" | "labelMaxWidth" | "labelColor" | "labelAlign" | "labelBaseline" | "labelFont" | "tooltipOptions" | "htmlElement" | "wantImage" | "drawFunc" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseButton" | "pick" | "setScaleFactor" | "drawDecoration" | "setImage" | "setImageUrl" | "setPosition" | "addMarker" | "addDecoration">>) => void;
export declare const myConstWithOmit2: (param: Omit2<Partial2<Marker>, "", "visible" | "label" | "title" | "image" | "rect" | "worldLocation" | "size" | "position" | "imageOffset" | "imageSize" | "labelOffset" | "labelMaxWidth" | "labelColor" | "labelAlign" | "labelBaseline" | "labelFont" | "tooltipOptions" | "htmlElement" | "wantImage" | "drawFunc" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseButton" | "pick" | "setScaleFactor" | "drawDecoration" | "setImage" | "setImageUrl" | "setPosition" | "addMarker" | "addDecoration">) => void;
export {};
