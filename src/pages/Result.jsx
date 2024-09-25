import { ChatRounded, EnergySavingsLeaf, Equalizer, RollerSkatingRounded, StickyNote2, VolumeUpRounded } from '@mui/icons-material';
import { Card, CardContent, Grid, Typography } from '@mui/joy';
import PieChartWithNeedle from '../components/Diagnostico/PieChartWithNeedle';
import Modulacion from '../components/Diagnostico/Modulacion';
import AreasDeMejora from '../components/Diagnostico/AreasDeMejora';
import RecommendedExercises from '../components/Diagnostico/RecommendedExercises';
import { useDispatch, useSelector } from 'react-redux';
import LoadingReport from './LoadingReport';
import { useEffect } from 'react';
import { setDate, setDiagnostics } from '../store/slices/userSlice';

const Title = ({ title, icon, level = 'h3' }) => {
    return (
        <CardContent orientation='horizontal' sx={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <Typography level={level} ml={-1}>{title}</Typography>
        </CardContent>
    )
}

const MyPieChart = () => {
    const { name, currentDiagnostic } = useSelector(state => state.user);
    const { loading, url, buena_diccion, buena_modulacion, palabras_correctas, palabras_incorrectas, total_palabras_transcritas, tono_voz, recomendaciones = ['Respiración I'] } = currentDiagnostic;

    const dispatch = useDispatch();

    
    const areas = [ 'Respiración', !buena_diccion ? 'Dicción' : '', !buena_modulacion ? 'Modulación' : '', tono_voz !== 'tono_moderado' ? 'Tono' : '' ].filter((area) => area !== '');

    useEffect(() => {
        if(!loading && Object.keys(currentDiagnostic).length > 0) {
            dispatch(setDate(new Date().toLocaleDateString()));
            dispatch(setDiagnostics(currentDiagnostic));
        }
    }, [loading]);

    return (
        loading ? <LoadingReport /> :
            <Grid container lg={10} lgOffset={1} spacing={2} md={12} sm={12} xs={12} px={4}>
                <Grid lg={12} sm={12} md={12} xs={12}>
                    <Typography level='h1' mt={2} ml={2}>🌟 Tus resultados, {name.split(' ')[0] || 'usuario favorito'}</Typography>
                </Grid>
                    <Grid lg={4} gap={3} sm={12} md={8} xs={12}>
                    
                        <AreasDeMejora title={<Title title='Áreas de mejora' icon={<EnergySavingsLeaf />} />} areasDeMejora={areas}/>                    
                        <RecommendedExercises title={<Title title='Ejercicios recomendados' icon={<RollerSkatingRounded />} />} ex={[...recomendaciones]}/>
                    
                </Grid>
                <Grid lg={4} md={6} sm={12} xs={12}>
                    <Modulacion title={<Title title='Modulación' icon={<StickyNote2 />} />} miModulacion={{ 'Tu modulación': (total_palabras_transcritas / 2).toFixed(0) }} />
                    <Card sx={{ mt: 2 }}>
                        <Title title='Audio' icon={<VolumeUpRounded />} />
                        <CardContent sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <audio controls src={url} style={{ maxWidth: '100%', zoom: .8 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid lg={4} md={6} sm={12} xs={12}>
                    <PieChartWithNeedle title={<Title title='Tono' icon={<Equalizer />} />} 
                    value={tono_voz.includes('moderado') ? 'moderado' : tono_voz.includes('bajo') ? 'grave' : 'agudo'}
                        />
                    <Card sx={{ mt: 2 }}>
                        <Title title='Dicción' icon={<ChatRounded />} />
                        <Typography level='body-lg' fontStyle='italic' textAlign='center' mx={4}>
                            La dicción es la forma en que pronuncias las palabras.
                        </Typography>
                        <Typography level='title-lg' textAlign='center' mb={4}>Leíste {(100 * palabras_correctas / total_palabras_transcritas).toFixed(1)}% de las palabras correctamente.</Typography>
                    </Card>
                </Grid>
            </Grid>
    );
};

export default MyPieChart;
