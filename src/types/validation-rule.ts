export type ValidationRule = {
  required?: boolean;
  message?: string;

  minLength?: number;
  minLengthRuleMsg?: string;

  maxLength?: number;
  maxLengthRuleMsg?: string;

  minValue?: number;
  minValueRuleMsg?: string;

  maxValue?: number;
  maxValueRuleMsg?: string;

  pattern?: RegExp;
  patternRuleMsg?: string;

  isPositive?: boolean;
  isPositiveRuleMsg?: string;

  moreThan?: number;
  moreThanRuleMsg?: string;

  lessThan?: number;
  lessThanRuleMsg?: string;
};
