import { CheckboxProps } from '@mui/material';
import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';
import { OptionType } from './common-types';

export type FieldCheckBoxProps = CheckboxProps & {
    name: string;
    options: OptionType[]; // Array of options for checkboxes
    groupLabel?: string;
};

export interface FieldCheckboxType extends BasicInputType<InputTypes.CHECKBOX, CheckboxProps> {
    options: OptionType[]; // Array of options for checkboxes
}