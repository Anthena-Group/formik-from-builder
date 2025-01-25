import React from "react";
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import Box from "@mui/joy/Box";
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
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
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <ErrorIcon color="error" sx={{ width: "18px", marginRight: "7px" }} />
                        <Typography level="body-xs" color="danger">{errorText}</Typography>
                    </Stack>
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