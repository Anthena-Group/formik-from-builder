import { RadioProps } from '@mui/joy/Radio';
import { BasicInputType } from './basic-input-type';
import { InputTypes } from './input-types';
import { OptionType } from './common-types';


export type FieldRadioProps = RadioProps & {
    name: string;
    groupLabel?: string;
    helperText?: string;
    options: OptionType[];
};

export interface FieldRadioType
  extends BasicInputType<InputTypes.RADIO, RadioProps> {
    options: OptionType[];
}
