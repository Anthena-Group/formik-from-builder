import React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import { useField } from 'formik';
import { FieldCheckBoxProps } from '../../types';
import { HelperText } from '../common';

export const FieldCheckBox: React.FC<FieldCheckBoxProps> = ({ name, groupLabel, helperText, options, direction = "row", ...props }) => {
    const [field, meta, helpers] = useField(name);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        const newValue = checked
            ? (field.value && field.value?.length > 0) ? [...field.value, value] : [value]
            : field.value?.filter((v: string) => v !== value);
        helpers.setValue(newValue);
    };

    return (
        <FormControl error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{groupLabel}</FormLabel>
            <Grid container xs={12} spacing={2} direction={direction} sx={{ flexGrow: 1 }}>
                {options?.map((option) => (
                    <Grid key={option.value} xs={12} sm={"auto"} md={"auto"}>
                        <Checkbox
                            label={option.label}
                            value={option.value || []}
                            checked={field.value?.includes(option.value)}
                            onChange={handleChange}
                            variant='soft'
                            {...props}
                        />
                        {option.description &&
                            (<HelperText error={false}
                                helperText={option.description} errorText={""} />)}
                    </Grid>
                ))}
            </Grid>
            <HelperText error={meta.touched && meta.error}
                helperText={helperText} errorText={meta.error} />
        </FormControl>
    );
};