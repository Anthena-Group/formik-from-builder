import { FieldCheckboxType } from './field-checkbox-type';
import { FieldMultiTextType } from './field-multitext-type';
import { FieldRadioType } from './field-radio-type';
import { FieldTextType } from './field-text-type';

export type FieldType =
  | FieldTextType
  | FieldMultiTextType
  | FieldCheckboxType
  | FieldRadioType;
