/* eslint-disable @typescript-eslint/no-explicit-any */
import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';
import { OptionType } from './common-types';
import { SelectProps } from '@mui/joy/Select';


export type FieldSelectProps = SelectProps<any, any> & {
    name: string;
    label?: string;
    helperText?: string;
    options: OptionType[];
    required?: boolean;
};

export interface FieldSelectType
  extends BasicInputType<InputTypes.SELECT,  SelectProps<any, any>> {
    options: OptionType[];
}
