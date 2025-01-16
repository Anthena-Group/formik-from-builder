import { ValidationRule } from "./validation-rule";

export interface CommonInputTypes {
  label?: string;
  groupLabel?: string;
  placeholder?:string;
  helperText?:string;
}

export interface BasicInputType<T, P> extends CommonInputTypes {
  id?: string;
  type: T;
  ['data-test']?: string;
  field: string;
  initialValue?: string | number | boolean | string[] | number[] | boolean[];
  validation?: ValidationRule;
  muiProps?: P
}
