import { ChatRounded, EnergySavingsLeaf, Equalizer, RollerSkatingRounded, StickyNote2, VolumeUpRounded } from '@mui/icons-material';
import { Card, CardContent, Grid, Typography } from '@mui/joy';
import PieChartWithNeedle from '../components/Diagnostico/PieChartWithNeedle';
import Modulacion from '../components/Diagnostico/Modulacion';
import AreasDeMejora from '../components/Diagnostico/AreasDeMejora';
import RecommendedExercises from '../components/Diagnostico/RecommendedExercises';

const Title = ({ title, icon, level = 'h3' }) => {
    return (
        <CardContent orientation='horizontal' sx={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <Typography level={level} ml={-1}>{title}</Typography>
        </CardContent>
    )
}

const MyPieChart = () => {
    return (
        <Grid container lg={10} lgOffset={1} spacing={2} md={12} sm={12} xs={12} px={4}>
            <Grid lg={12} sm={12} md={12} xs={12}>
                <Typography level='h1' mt={2} ml={2}>Resultados</Typography>
            </Grid>
            <Grid lg={4} gap={3} sm={12} md={8} xs={12}>
                <AreasDeMejora title={<Title title='Áreas de mejora' icon={<EnergySavingsLeaf />} />} />
                <RecommendedExercises title={<Title title='Ejercicios recomendados' icon={<RollerSkatingRounded />} />} />
            </Grid>
            <Grid lg={4} md={6} sm={12} xs={12}>
                <Modulacion title={<Title title='Modulación' icon={<StickyNote2 />} />} />
                <Card sx={{ mt: 2 }}>
                    <Title title='Audio' icon={<VolumeUpRounded />} />
                    <CardContent sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <audio controls src={''} style={{ maxWidth: '100%', zoom: .8 }} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid lg={4} md={6} sm={12} xs={12}>
                <PieChartWithNeedle title={<Title title='Tono' icon={<Equalizer />} />} />
                <Card sx={{ mt: 2 }}>
                    <Title title='Dicción' icon={<ChatRounded />} />
                    <Typography level='body-lg' fontStyle='italic' textAlign='center' mx={4}>
                La dicción es la forma en que pronuncias las palabras.
            </Typography>
                    <Typography level='title-lg' textAlign='center' mb={4}>Leíste 96% de las palabras correctamente.</Typography>

                </Card>
            </Grid>
        </Grid>
    );
};

export default MyPieChart;
