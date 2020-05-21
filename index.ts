type Omit2<
  T,
  K extends keyof any,
  Keys extends keyof T = Exclude<keyof T, K>
> = {
  [P in Keys]: T[P];
};

import { Marker } from "@bentley/imodeljs-frontend";

export type MyTypeWithLibOmit = Partial<Omit<Marker, "">>;
export type MyTypeWithOmit2 = Partial<Omit2<Marker, "">>;

export function myFuncWithLibOmit(param: MyTypeWithLibOmit) {}
export function myFuncWithOmit2(param: MyTypeWithOmit2) {}
export const myConstWithLibOmit = (param: MyTypeWithLibOmit) => {};
export const myConstWithOmit2 = (param: MyTypeWithOmit2) => {};
