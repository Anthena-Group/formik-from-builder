import { InputProps } from '@mui/joy/Input';
import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';



export type FieldTextProps = InputProps & {
    name: string;
    label?: string;
    helperText?:string;
    placeholder?: string;
    required?: boolean;
}

export interface FieldTextType extends BasicInputType<InputTypes.TEXT, InputProps> {
    style?: string;
}