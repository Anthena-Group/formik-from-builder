export type ValidationRule = {
  required?: boolean;
  message?: string;

  minLength?: number;
  minLengthRuleMsg?: string;

  maxLength?: number;
  maxLengthRuleMsg?: string;

  pattern?: RegExp;
  patternRuleMsg?: string;
};
