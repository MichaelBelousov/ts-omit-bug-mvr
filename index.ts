
type Omit2<T, K extends keyof any, Keys extends keyof T = Exclude<keyof T, K>> = {
    [P in Keys]: T[P];
};

import { Marker } from "@bentley/imodeljs-frontend";

export type MyTypeWithLibOmit = Omit<Marker, "_scaleFactor" | "_isHilited">;
export type MyTypeWithOmit2 = Omit2<Marker, "_scaleFactor" | "_isHilited">;
