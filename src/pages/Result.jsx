import { ChatRounded, EnergySavingsLeaf, Equalizer, Notes, RollerSkatingRounded, StickyNote2, VolumeUpRounded } from '@mui/icons-material';
import { Card, CardContent, Grid, Stack, Typography } from '@mui/joy';
import PieChartWithNeedle from '../components/Diagnostico/PieChartWithNeedle';
import Modulacion from '../components/Diagnostico/Modulacion';
import AreasDeMejora from '../components/Diagnostico/AreasDeMejora';
import RecommendedExercises from '../components/Diagnostico/RecommendedExercises';
import { useDispatch, useSelector } from 'react-redux';
import LoadingReport from './LoadingReport';
import { useEffect } from 'react';
import { startSaveDiagnostics } from '../store/slices/userThunks';

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
    const { loading, url, buena_diccion, buena_modulacion, palabras_correctas, palabras_incorrectas, total_palabras_transcritas, tono_voz, recomendaciones = ['Respiración I'], palabras_con_r_correctas, palabras_con_r_incorrectas } = currentDiagnostic;

    const dispatch = useDispatch();

    const areas = ['Respiración', !buena_diccion ? 'Dicción' : '', !buena_modulacion ? 'Modulación' : '', tono_voz !== 'moderado' ? 'Tono' : ''].filter((area) => area !== '');

    useEffect(() => {
        if (!loading && Object.keys(currentDiagnostic).length > 0) {
            // dispatch(setDiagnostics(currentDiagnostic));
            dispatch(startSaveDiagnostics(currentDiagnostic));
        }
    }, [loading]);

    // Validación y mapeo del valor de tono_voz
    const tonoValido = ['grave', 'moderado', 'agudo'].includes(tono_voz) ? tono_voz : 'moderado';  // Se valida que tono_voz sea uno de los tres valores

    return (
        loading ? <LoadingReport /> :
            <Grid container lg={10} lgOffset={1} spacing={2} md={12} sm={12} xs={12} px={4}>
                <Grid lg={12} sm={12} md={12} xs={12}>
                    <Typography level='h1' mt={2} ml={2}>🌟 Tus resultados, {name.split(' ')[0] || 'usuario favorito'}</Typography>
                </Grid>
                <Grid lg={4} gap={3} sm={12} md={8} xs={12}>

                    <AreasDeMejora title={<Title title='Áreas de mejora' icon={<EnergySavingsLeaf />} />} areasDeMejora={areas} />
                    <RecommendedExercises title={<Title title='Ejercicios recomendados' icon={<RollerSkatingRounded />} />} ex={[...recomendaciones]} />

                </Grid>
                <Grid lg={4} md={6} sm={12} xs={12}>
                    {total_palabras_transcritas < 100 ? (
                        <Card>
                            <Title title='Modulación' icon={<StickyNote2 />} />
                            <Typography level='title-lg' textAlign='center' mb={4}>
                                Mala modulación:
                            </Typography>
                            <Typography level='title-lg' textAlign='center' mb={4}>
                                No pronunciaste correctamente suficientes palabras para poder darte un resultado. Puedes mejorar tu dicción haciendo más ejercicios.
                            </Typography>
                        </Card>
                    ) : (
                        <Modulacion title={<Title title='Modulación' icon={<StickyNote2 />} />} miModulacion={{ 'Tu modulación': (total_palabras_transcritas / 2).toFixed(0) }} />
                    )}
                    <Card sx={{ mt: 2 }}>
                        <Title title='Audio' icon={<VolumeUpRounded />} />
                        <CardContent sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <audio controls src={url} style={{ maxWidth: '100%', zoom: .8 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid lg={4} md={6} sm={12} xs={12}>
                    {/* Aquí se pasa el valor validado de tono_voz */}
                    <PieChartWithNeedle title={<Title title='Tono' icon={<Equalizer />} />}
                        value={tonoValido}  // Pasamos el valor ya validado
                    />
                    <Card sx={{ mt: 2 }}>
                        <Title title='Pronunciación' icon={<ChatRounded />} />
                        <Typography level='body-lg' fontStyle='italic' textAlign='center' mx={4}>
                            La pronunciación es la forma en que expresas las palabras.
                        </Typography>
                        {total_palabras_transcritas < 100 ? (
                            <Typography level='body-lg' textAlign='center' mb={4}>
                                Mala pronunciacion: No pronunciaste correctamente suficientes palabras para poder darte un resultado. Puedes mejorar tu dicción haciendo más ejercicios.
                            </Typography>

                        ) : (
                            <Typography level='title-lg' textAlign='center' mb={4}>
                                Pronunciaste el {(100 * palabras_correctas / total_palabras_transcritas).toFixed(1)}% de las palabras correctamente.
                            </Typography>
                        )}
                    </Card>
                    <Card sx={{ mt: 2 }}>
                        <Title title='Letra R' icon={<Notes />} />
                        <Typography level='body-lg' fontStyle='italic' textAlign='center' mx={4}>
                            La letra R es una de las letras más difíciles de pronunciar.
                        </Typography>
                        <Typography level='title-lg' textAlign='center'>
                            Palabras con R
                        </Typography>
                        <Grid direction='row' container>
                            <Grid spacing={1} xs={12} lg={4} md={12}>
                                <Typography level='title-lg' textAlign='center' >
                                    {palabras_con_r_correctas + palabras_con_r_incorrectas}
                                </Typography>
                                <Typography level='title-lg' textAlign='center' textColor='primary.400'>
                                    Capturadas
                                </Typography>
                            </Grid>
                            <Grid spacing={1} xs={12} lg={4} md={12}>
                                <Typography level='title-lg' textAlign='center' >
                                    {palabras_con_r_correctas}
                                </Typography>
                                <Typography level='title-lg' textAlign='center' textColor='success.400'>
                                    Pronunciaste correctamente
                                </Typography>
                            </Grid>
                            <Grid spacing={1} xs={12} lg={4} md={12}>
                                <Typography level='title-lg' textAlign='center' >
                                    {palabras_con_r_incorrectas}
                                </Typography>
                                <Typography level='title-lg' textAlign='center' textColor='danger.400'>
                                    Pronunciaste incorrectamente
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
    );
};

export default MyPieChart;
