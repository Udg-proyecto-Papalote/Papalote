import { AspectRatio, Grid, Typography } from "@mui/joy";
// import { AuthLayout } from "../auth/layout/AuthLayout";

export const CheckingAuth = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '80vh' }} direction='column' gap={2}>
            <AspectRatio ratio={1} sx={{ width: 500, borderRadius: 20 }} >
                <img src='https://cdn.dribbble.com/users/1229287/screenshots/4343870/media/ea77976e38fc7ae888003fe067559acf.gif' alt='loading' />
            </AspectRatio>
            <Typography level='h4' align='center' textAlign='center'>
                Cargando...
            </Typography>
        </Grid>
    );
};