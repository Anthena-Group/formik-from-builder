import React from 'react';
import { useField } from 'formik';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { FieldAutoCompleteProps } from '../../types';
import { HelperText } from '../common';
import Typography from '@mui/joy/Typography';

export const FieldAutoComplete: React.FC<FieldAutoCompleteProps> = ({ name, label, placeholder,
    helperText, options, required, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <FormControl error={Boolean(meta.touched && meta.error)} data-test={`form-control-group-${name}`}>
            <FormLabel component="legend" data-test={`form-label-${name}`} >{label}
                {required && <Typography color='danger'>*</Typography>}
            </FormLabel>
            <Autocomplete
                data-test={`auto-complete-${name}`}
                placeholder={placeholder}
                options={options}
                getOptionLabel={(option) => option.label || ''}
                onChange={(_, value) => helpers.setValue(value ? value.value : '')}
                value={options.find((option) => option.value === field.value) || null}
                {...props}
            />
            <HelperText error={meta.touched && meta.error} name={name}
                helperText={helperText} errorText={meta.error} />
        </FormControl>
    );
};