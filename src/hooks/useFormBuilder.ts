import * as Yup from 'yup';
import { FieldType, InputTypes } from '../types';
import { FormikValues } from 'formik';

export const useFormBuilder = (fields: FieldType[]) => {
  const schemaFields: Record<string, any> = {};
  const initailValues: FormikValues = {};

  fields.forEach((field) => {

    let validator:any;

    switch(field.type) {
        case InputTypes.CHECKBOX:
            validator = Yup.array();
            break;
        default:
            validator = Yup.string();
            break;
    }

    if (field.validation?.required) {
      validator = validator.required(
        field.validation.message || 'This field is required'
      );
    }

    if (field.validation?.minLength) {
      validator = validator.min(
        field.validation.minLength,
        field.validation.message ||
          `Minimum length is ${field.validation.minLength}`
      );
    }

    if (field.validation?.maxLength) {
      validator = validator.max(
        field.validation.maxLength,
        field.validation.message ||
          `Maximum length is ${field.validation.maxLength}`
      );
    }

    if (field.validation?.pattern) {
      validator = validator.matches(
        field.validation.pattern,
        field.validation.message || 'Invalid format'
      );
    }

    schemaFields[field.field] = validator;
    initailValues[field.field] = field.initialValue;
  });

  return {
    yupSchemaValidation: Yup.object().shape(schemaFields),
    initailValues,
  };
};
