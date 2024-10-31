import { AspectRatio, Grid, Typography } from "@mui/joy";
// import { AuthLayout } from "../auth/layout/AuthLayout";

export const CheckingAuth = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '80vh' }} direction='column' gap={2}>
            <AspectRatio ratio={1} sx={{ width: 500, borderRadius: 20 }} >
                <img src='https://giphy.com/stickers/hana-tulip-tulips-U7KEuJF5V8J7xegCuB' alt='loading' />
            </AspectRatio>
            <Typography level='h4' align='center' textAlign='center'>
                Cargando...
            </Typography>
        </Grid>
    );
};