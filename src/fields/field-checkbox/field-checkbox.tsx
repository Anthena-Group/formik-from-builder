import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { useField } from 'formik';
import { FieldCheckBoxProps } from '../../types';


export const FieldCheckBox: React.FC<FieldCheckBoxProps> = ({ name, groupLabel, options, ...props }) => {
    const [field, meta, helpers] = useField(name);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        const newValue = checked
            ? [...field.value, value] // Add value if checked
            : field.value.filter((v: string) => v !== value); // Remove value if unchecked

        helpers.setValue(newValue); // Update Formik state
    };

    return (
        <FormControl component="fieldset" error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{groupLabel}</FormLabel>
            <FormGroup>
                {options?.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        control={
                            <Checkbox
                                {...props}
                                value={option.value}
                                checked={field.value.includes(option.value)} // Check if the value is in the array
                                onChange={handleChange} // Handle change event
                            />
                        }
                        label={option.label}
                    />
                ))}
            </FormGroup>
            {meta.touched && meta.error ? (
                <FormHelperText>{meta.error}</FormHelperText> // Display error message if applicable
            ) : null}
        </FormControl>
    );
};