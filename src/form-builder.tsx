import React from 'react';
import Grid from '@mui/joy/Grid';
import { DynamicFieldRenderer } from "./fields";
import { FormBuilderProps } from "./types";

export const FormBuilder: React.FC<FormBuilderProps> = ({ group, fields,
    "data-test": dataTestId, gridProps }) => {
    return (
        <Grid container
            spacing={2}
            sx={{ flexGrow: 1 }}
            {...gridProps}
            data-test={dataTestId}>
            {fields.map((field, index) =>
                <Grid data-test={`form-item-${field.field}`}  xs={12} key={field.field} {...field.gridProps}>
                    <DynamicFieldRenderer field={field} index={index} name={group} />
                </Grid>
            )}
        </Grid>
    )
}
