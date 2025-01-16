import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Box from '@mui/joy/Box';
import { useField } from 'formik';
import { HelperText } from '../common';
import { FieldRadioProps } from '../../types';


export const FieldRadio: React.FC<FieldRadioProps> = ({ name, groupLabel,
    helperText, options, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <FormControl error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{groupLabel}</FormLabel>
            <RadioGroup
                name={name}
                value={field.value}
                onChange={field.onChange}
                sx={{ gap: 1 }}
            >
                {options.map((option) => (
                    <Box key={option.value}>
                        <Radio label={option.label}
                            value={option.value}
                            variant="soft" {...props} />
                        {option.description &&
                            (<HelperText error={false}
                                helperText={option.description} errorText={""} />)}
                    </Box>
                ))}
            </RadioGroup>
            <HelperText error={meta.touched && meta.error}
                helperText={helperText} errorText={meta.error} />
        </FormControl>
    );
};