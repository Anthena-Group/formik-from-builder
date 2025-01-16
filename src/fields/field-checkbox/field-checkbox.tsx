import React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import { useField } from 'formik';
import { FieldCheckBoxProps } from '../../types';
import { HelperText } from '../common';

export const FieldCheckBox: React.FC<FieldCheckBoxProps> = ({ name, groupLabel, helperText, options, direction = "row",  ...props }) => {
    const [field, meta, helpers] = useField(name);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        const newValue = checked
            ? [...field.value, value]
            : field.value.filter((v: string) => v !== value);

        helpers.setValue(newValue);
    };

    return (
        <FormControl error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{groupLabel}</FormLabel>
            <Stack sx={{ gap: 1, mt: 1, mb: 1 }} direction={direction}>
                {options?.map((option) => (
                    <Box key={option.value}>
                        <Checkbox
                            label={option.label}
                            value={option.value}
                            checked={field.value.includes(option.value)}
                            onChange={handleChange}
                            variant='soft'
                            {...props}
                        />
                        {option.description &&
                            (<HelperText error={false}
                                helperText={option.description} errorText={""} />)}
                    </Box>
                ))}
            </Stack>
            <HelperText error={meta.touched && meta.error}
                helperText={helperText} errorText={meta.error} />
        </FormControl>
    );
};