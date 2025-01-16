import React from 'react';
import Box from '@mui/joy/Box';
import { FieldAutoComplete, FieldCheckBox, FieldMultiText, FieldRadio, FieldSelect, FieldText } from "./fields";
import { FieldType, InputTypes } from "./types";

interface FormBuilderProps {
    group: string;
    fields: FieldType[];
    "data-test": string;
}

const getFieldByType = (name: string, field: FieldType, index: number) => {
    const fieldName = `${field.field}`;
    const fieldKey = `${name}-${field.field}-${index}`;
    switch (field.type) {
        case InputTypes.TEXT:
            return <FieldText key={fieldKey} name={fieldName} label={field.label}
                placeholder={field.placeholder} helperText={field.helperText} {...field.muiProps} />;
        case InputTypes.CHECKBOX:
            return <FieldCheckBox key={fieldKey} name={fieldName} options={field.options}
                helperText={field.helperText} groupLabel={field.groupLabel} {...field.muiProps} />;
        case InputTypes.AUTO_COMPLETE:
            return <FieldAutoComplete key={fieldKey} name={fieldName} options={field.options}
                label={field.label} {...field.muiProps}
            />;
        case InputTypes.RADIO:
            return <FieldRadio key={fieldKey} name={fieldName}
                groupLabel={field.groupLabel} {...field.muiProps} options={field.options} />;
        case InputTypes.SELECT:
            return <FieldSelect key={fieldKey} name={fieldName}
                label={field.label} helperText={field.helperText} options={field.options} {...field.muiProps} />;
        case InputTypes.MULTI_TEXT:
            return <FieldMultiText key={fieldKey} name={fieldName}
                placeholder={field.placeholder} helperText={field.helperText}
                label={field.label} {...field.muiProps} />;
        default:
            return null;
    }
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ group, fields, "data-test": dataTestId }) => {
    return (
        <Box data-test={dataTestId}
            sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
        >
            {fields.map((field, index) => getFieldByType(group, field, index))}
        </Box>
    )
}
