type Omit2<
  T,
  K extends keyof any,
  Keys extends keyof T = Exclude<keyof T, K>
> = {
  [P in Keys]: T[P];
};

type MakeRequired<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;

type Rebound<Type extends object, NewThis> = {
  [K in keyof Type]: Type[K] extends (...p: infer P) => infer R
    ? (this: NewThis, ...p: P) => R
    : Type[K];
};

import { Marker } from "@bentley/imodeljs-frontend";

export type MyTypeWithLibOmit = Rebound<
  Omit<MakeRequired<Marker, "worldLocation">, "image"> & {
    image: string;
    other: number;
  },
  Marker
>;

export type MyTypeWithOmit2 = Rebound<
  Omit2<MakeRequired<Marker, "worldLocation">, "image"> & {
    image: string;
    other: number;
  },
  Marker
>;

export function myFuncWithLibOmit(param: MyTypeWithLibOmit) {}
export function myFuncWithOmit2(param: MyTypeWithOmit2) {}
export const myConstWithLibOmit = (param: MyTypeWithLibOmit) => {};
export const myConstWithOmit2 = (param: MyTypeWithOmit2) => {};
