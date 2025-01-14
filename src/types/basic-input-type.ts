import { ValidationRule } from "./validation-rule";

export interface BasicInputType<T, P> {
  id?: string;
  type: T;
  ['data-test']?: string;
  field: string;
  groupLabel?: string;
  label: string;
  initialValue?: string | number | boolean | string[] | number[] | boolean[];
  validation?: ValidationRule;
  muiProps?: P
}
