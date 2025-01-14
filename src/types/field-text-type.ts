import { TextFieldProps } from '@mui/material';
import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';

export interface FieldTextType extends BasicInputType<InputTypes.TEXT, TextFieldProps> {
    style?: string;
}