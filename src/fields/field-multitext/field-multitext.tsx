import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import { useField } from "formik";
import { FieldMultiTextProps } from "../../types";
import { HelperText } from '../common';

export const FieldMultiText: React.FC<FieldMultiTextProps> = ({ name, label, placeholder, helperText, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Textarea variant="soft" placeholder={placeholder} minRows={4}
                {...props} {...field} />
            <HelperText error={meta.touched && meta.error}
                helperText={helperText} errorText={meta.error}/>
        </FormControl>

    )
}