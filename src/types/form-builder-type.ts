import { GridProps } from "@mui/joy/Grid";
import { FieldType } from "./field-type";

export interface FormBuilderProps {
    group: string;
    fields: FieldType[];
    "data-test": string;
    gridProps?: GridProps;
}