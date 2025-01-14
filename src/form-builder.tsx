import React from 'react';
import { FieldCheckBox, FieldMultiText, FieldRadio, FieldText } from "./fields";
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
            return <FieldText key={fieldKey} name={fieldName} label={field.label} {...field.muiProps} />;
        case InputTypes.CHECKBOX:
            return <FieldCheckBox key={fieldKey} name={fieldName} options={field.options}
                {...field.muiProps} groupLabel={field.groupLabel}/>;
        case InputTypes.RADIO:
            return <FieldRadio key={fieldKey} name={fieldName}
                groupLabel={field.groupLabel} {...field.muiProps} options={field.options} />;
        case InputTypes.MULTI_TEXT:
            return <FieldMultiText key={fieldKey} name={fieldName} label={field.label} {...field.muiProps} />;
        default:
            return null;
    }
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ group, fields, "data-test": dataTestId }) => {
    return (
        <div data-test={dataTestId}>
            {fields.map((field, index) => getFieldByType(group, field, index))}
        </div>
    )
}
