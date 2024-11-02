import { Alert, AspectRatio, Grid, Typography } from '@mui/joy'
import { Warning } from '@mui/icons-material'

const LoadingReport = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '80vh' }} direction='column' gap={2}>
            <Typography level='h4' align='center' textAlign='center'>
                Cargando reporte. Por favor, mántente en la página.
            </Typography>
            <AspectRatio ratio={1} sx={{ width: 500, borderRadius: 20 }} >
                <img src='https://cdn.dribbble.com/users/1229287/screenshots/4343870/media/ea77976e38fc7ae888003fe067559acf.gif' alt='loading' />
            </AspectRatio>
            <Alert color='warning' variant='soft' mt={2} startDecorator={<Warning />} size='lg'>
                Si cambias de página, el reporte se perderá.
            </Alert>
        </Grid>
    )
}

export default LoadingReport
