import TextField, { TextFieldProps } from '@mui/material/TextField'
import { useField } from "formik";


type FieldMultiTextProps = TextFieldProps & {
    name: string;
}

export const FieldMultiText: React.FC<FieldMultiTextProps> = ({ name, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <TextField
            multiline
            {...field} 
            {...props}
            error={Boolean(meta.touched && meta.error)} // Show error if touched and there's an error
            helperText={meta.touched && meta.error ? meta.error : undefined} // Show error message if touched and there's an error
        />
    )
}