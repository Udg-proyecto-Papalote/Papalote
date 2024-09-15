import { HouseOutlined } from "@mui/icons-material"
import { Card, CardContent, Checkbox, Grid, Typography } from "@mui/joy"

const CheckboxCard = ({ icon = <HouseOutlined />, title = "Escucha", coso = <audio controls src={'https://res.cloudinary.com/ds8hfmrth/video/upload/v1725379369/papalote/wgx7snrtak1blwi8jqhy.webm'} style={{maxWidth: '100%', zoom: 0.8 }}/> }) => {
    const audioLink = 'https://res.cloudinary.com/ds8hfmrth/video/upload/v1725379369/papalote/wgx7snrtak1blwi8jqhy.webm';
    

    return (
        <Grid lg={4} sm={4} md={4} xs={12}>
            <Card >
                <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between' }}>
                    <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                        {icon}
                        <Typography level="title-lg">{title}</Typography>
                    </CardContent>
                    <Checkbox variant='outlined' color='neutral' />
                </CardContent>
                <CardContent sx={{ alignItems: 'center' }}>
                    { coso }
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CheckboxCard
