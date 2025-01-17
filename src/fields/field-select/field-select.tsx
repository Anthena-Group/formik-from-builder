import React from 'react';
import FormControl from '@mui/joy/FormControl';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useField } from 'formik';
import { FieldSelectProps } from '../../types';
import FormLabel from '@mui/joy/FormLabel';
import { HelperText } from '../common';

export const FieldSelect: React.FC<FieldSelectProps> = ({ name, label, placeholder, helperText,
    options, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <FormControl error={Boolean(meta.touched && meta.error)}>
            <FormLabel component="legend">{label}</FormLabel>
            <Select
                id={name}
                placeholder={placeholder}
                indicator={<KeyboardArrowDown />}
                multiple={false}
                variant='soft'
                sx={{
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                }}
                onChange={(event, newValue) => {
                    helpers.setValue(newValue);
                }}
                value={field.value}
                {...props}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
            <HelperText error={meta.touched && meta.error}
                helperText={helperText} errorText={meta.error} />
        </FormControl>
    );
};