import React from "react";
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import Box from "@mui/joy/Box";
import Link from '@mui/joy/Link';
import FormHelperText from '@mui/joy/FormHelperText';

interface HelperTextProps {
    error: string | boolean | undefined;
    helperText: string | undefined;
    errorText: string | undefined;
    link?: {
        label: string;
        url: string;
    };
}

export const HelperText: React.FC<HelperTextProps> = ({ error, helperText,
    errorText, link }) => {

    return (
        <FormHelperText>
            <Box style={{
                display: "flex",
                alignItems: "center",
            }}>
                {error ? (
                    <>
                        <ErrorIcon sx={{ width: "18px", marginRight: "7px" }} />
                        {errorText}
                    </>
                ) : (helperText &&
                    <>
                        <InfoOutlined sx={{ width: "18px", marginRight: "7px" }} />
                        {helperText}
                        {link && <Link sx={{ ml: "7px" }} href={link?.url} >{link?.label}.</Link>}
                    </>)}
            </Box>
        </FormHelperText>
    )
}