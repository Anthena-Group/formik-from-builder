import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';
import { OptionType } from './common-types';
import { CheckboxProps } from '@mui/joy/Checkbox';

export type FieldCheckBoxProps = CheckboxProps & {
    name: string;
    options: OptionType[];
    helperText?: string;
    groupLabel?: string;
    direction?: "row" | "column";
    required?: boolean;
};

export interface FieldCheckboxType extends BasicInputType<InputTypes.CHECKBOX, CheckboxProps> {
    options: OptionType[];
    direction?: "row" | "column";
}