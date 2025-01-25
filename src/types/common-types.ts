export type OptionType = {
  value: string | boolean | number;
  label: string;
  description?: string;
};

export type CheckboxOptionType = OptionType & {
  value: string;
};
