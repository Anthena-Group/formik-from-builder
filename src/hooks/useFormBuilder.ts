/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { FieldType, InputTypes } from '../types';
import { FormikValues } from 'formik';

const assignObjectFields = (
  fieldsValString: string,
  value: any,
  schemaFields: Record<string, any>
): Record<string, any> => {
  const fields = fieldsValString.split('.');
  if (fields.length === 1) return { ...schemaFields, [fieldsValString]: value };
  const [firstVal, ...rest] = fields;
  const result: Record<string, any> = schemaFields;

  result[firstVal] = assignObjectFields(
    rest.join('.'),
    value,
    result[firstVal] || {}
  );
  return result;
};

export const useFormBuilder = (fields: FieldType[]) => {
  const schemaFields: Record<string, any> = {};
  const initailValues: FormikValues = {};

  const nestedFields: { [key: string]: string } = {};
  fields.forEach((field) => {
    let validator: any;
    switch (field.type) {
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
        field.validation.minLengthRuleMsg ||
          `Minimum length is ${field.validation.minLength}` ||
          field.validation.message
      );
    }

    if (field.validation?.maxLength) {
      validator = validator.max(
        field.validation.maxLength,
        field.validation.maxLengthRuleMsg ||
          `Maximum length is ${field.validation.maxLength}` ||
          field.validation.message
      );
    }

    if (field.validation?.pattern) {
      validator = validator.matches(
        field.validation.pattern,
        field.validation.patternRuleMsg ||
          field.validation.message ||
          'Invalid format'
      );
    }

    if (field.field.split('.').length > 1) {
      nestedFields[field.field.split('.')[0]] = 'val';
      assignObjectFields(field.field, validator, schemaFields);
      assignObjectFields(field.field, field.initialValue, initailValues);
    } else {
      schemaFields[field.field] = validator;
      initailValues[field.field] = field.initialValue;
    }
  });

  Object.keys(nestedFields).forEach((f) => {
    schemaFields[f] = Yup.object().shape({ ...schemaFields[f] });
  });

  return {
    yupSchemaValidation: Yup.object().shape(schemaFields),
    initailValues,
  };
};
