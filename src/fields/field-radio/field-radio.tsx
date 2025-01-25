import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useField } from 'formik';
import React from 'react';
import { FieldRadioProps } from '../../types';
import { HelperText } from '../common';
import Typography from '@mui/joy/Typography';


export const FieldRadio: React.FC<FieldRadioProps> = ({ name, groupLabel,
    helperText, direction = "row", required, options, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <FormControl error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{groupLabel}
                {(groupLabel && required) && <Typography color='danger'>*</Typography>}
            </FormLabel>
            <RadioGroup
                name={name}
                value={field.value}
                onChange={field.onChange}
                sx={{ gap: 1 }}
            >
                <Grid container xs={12} spacing={2} direction={direction}>
                    {options.map((option) => (
                        <Grid key={option.value} xs={12} sm={"auto"} md={"auto"}>
                            <Radio label={option.label}
                                value={option.value}
                                variant="soft" {...props} />
                            {option.description &&
                                (<HelperText error={false}
                                    helperText={option.description} errorText={""} />)}
                        </Grid>
                    ))}
                </Grid>
            </RadioGroup>
            <HelperText error={meta.touched && meta.error}
                helperText={helperText} errorText={meta.error} />
        </FormControl>
    );
};