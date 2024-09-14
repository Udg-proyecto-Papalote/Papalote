import { HouseOutlined } from "@mui/icons-material"
import { Card, CardContent, Checkbox, Grid, Typography } from "@mui/joy"

const CheckboxCard = ({ icon = <HouseOutlined />, title = "Hola Mundo" }) => {
    return (
        <Grid lg={4} sm={4} md={4}>
            <Card >
                <CardContent orientation="horizontal" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <CardContent orientation="horizontal">
                        {icon}
                        <Typography level="title-md">{title}</Typography>
                    </CardContent>
                    <Checkbox variant='outlined' color='neutral' />
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CheckboxCard
