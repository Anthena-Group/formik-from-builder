import { RadioProps } from '@mui/material';
import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';


export type FieldRadioProps = RadioProps & {
    name: string;
    groupLabel?: string;
    options: { value: string; label: string }[]; // Define options for the radio buttons
};

export interface FieldRadioType
  extends BasicInputType<InputTypes.RADIO, RadioProps> {
    options: { value: string; label: string }[];
}
