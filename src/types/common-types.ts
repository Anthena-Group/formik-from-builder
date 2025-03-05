export type OptionType = {
  value: string | boolean | number;
  label: string;
  description?: string;
};

export type CheckboxOptionType = OptionType & {
  value: string;
};


export type FieldConditionAction = {
  hide: boolean;
  disable: boolean;
}
