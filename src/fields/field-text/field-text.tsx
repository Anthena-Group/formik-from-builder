import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

import Input from '@mui/joy/Input';
import { useField } from "formik";
import { FieldTextProps } from "../../types";
import { HelperText } from '../common';

export const FieldText: React.FC<FieldTextProps> = ({ name, required, label, placeholder, helperText, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <FormControl error={Boolean(meta.touched && meta.error)}>
            <FormLabel>{label}
                {required && <span style={{ color: 'red' }}>*</span>}

                {/* <Tooltip title={label} variant="solid">
                    <InfoOutlined sx={{ width: "16px", marginRight: "7px" }} />
                </Tooltip> */}
            </FormLabel>
            <Input
                variant="soft"
                placeholder={placeholder}
                {...props} {...field}
            />
            <HelperText error={meta.touched && meta.error} helperText={helperText} errorText={meta.error} />
        </FormControl>
    )
}