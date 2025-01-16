import React from 'react';
import { useField } from 'formik';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { FieldAutoCompleteProps } from '../../types';
import { HelperText } from '../common';

export const FieldAutoComplete: React.FC<FieldAutoCompleteProps> = ({ name, label, placeholder, helperText, options, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
        <FormControl error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{label}</FormLabel>
            <Autocomplete
                placeholder={placeholder}
                options={options}
                getOptionLabel={(option) => option.label || ''}
                onChange={(_, value) => helpers.setValue(value ? value.value : '')}
                value={options.find((option) => option.value === field.value) || null}
                {...props}
            />
            <HelperText error={meta.touched && meta.error}
                helperText={helperText} errorText={meta.error} />
        </FormControl>
    );
};