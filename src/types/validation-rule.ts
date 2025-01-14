export type ValidationRule = {
  required?: boolean;
  message?:string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};
