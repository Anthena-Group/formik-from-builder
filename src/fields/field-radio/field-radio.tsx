import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useField } from 'formik';
import React from 'react';
import { FieldRadioProps } from '../../types';


export const FieldRadio: React.FC<FieldRadioProps> = ({ name, groupLabel, options, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <FormControl component="fieldset" error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{groupLabel}</FormLabel>
            <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                name={name}
                value={field.value} // Set the value from Formik state
                onChange={field.onChange} // Handle change event
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio
                            {...props}
                        />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
            {meta.touched && meta.error ? (
                <FormHelperText>{meta.error}</FormHelperText> // Display error message if applicable
            ) : null}
        </FormControl>


    );
};