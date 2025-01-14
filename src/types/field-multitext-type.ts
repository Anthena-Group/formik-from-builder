import { TextFieldProps } from '@mui/material';
import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';

export interface FieldMultiTextType extends BasicInputType<InputTypes.MULTI_TEXT, TextFieldProps> {
    style?: string
}
