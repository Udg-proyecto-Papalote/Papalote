import { TextDecrease, TextIncrease, FormatBold, InfoOutlined, Info } from "@mui/icons-material";
import { Grid, Typography, Card, Stack, IconButton, CardContent, ButtonGroup, Alert, Chip, Tooltip } from "@mui/joy"
import { useMediaQuery } from "@mui/material";
import { PlayCircle, Record } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import CheckAudioModal from "../components/Modal/CheckAudioModal";
import ModeToggle from "../components/ToggleTheme"

const text = `Los primeros reportes de actividad aeronáutica irregular detectada sobre los municipios del Sotavento (Veracruz, Boca del Río, Alvarado y Tlalixcoyan, principalmente) datan de finales de los años ochenta. Los habitantes de las zonas agrestes -dedicados principalmente a la pesca y la cría de ganado- estaban ya habituados a la presencia de las luces nocturnas. Los más viejos las llamaban "brujas"; los más informados, "avionetas". Incluso conocían el lugar en donde las luces descendían: el Llano de la Víbora, una brecha natural bordeada de matorrales y espinos que el Ejército y la Policía Judicial Federal empleaban a menudo como pista de aterrizaje.


En esa planicie natural que se elevaba entre charcas y esteros, la presencia de soldados y agentes federales era algo común para los habitantes de la zona. Después de todo, la pista de La Víbora era usada por las fuerzas armadas para realizar maniobras especiales. Por ello a nadie le extrañó que, a finales de octubre de mil novecientos noventa y uno, llegaran cuadrillas de soldados a tusar la maleza tupida a golpe de machete y limpiar el sendero de obstáculos.
Pero justo una semana después, la mañana del siete de noviembre de ese mismo año, el Ejército, las autoridades federales y una avioneta Cessna de origen colombiano se vieron envueltos en un sangriento escándalo que logró burlar el apretado cerco de censura del gobierno: integrantes del Batallón de Infantería del Ejército abrieron fuego contra un grupo de agentes de la procuraduría que habían llegado a La Víbora supuestamente a detener a los tripulantes de una avioneta de procedencia colombiana que había sido detectada desde las costas de Nicaragua por el Servicio de Aduanas estadounidense. La avioneta Cessna, supuestamente tripulada por traficantes colombianos, aterrizó sobre el Llano de la Víbora en la mañana de aquel siete de noviembre, seguida de los judiciales. Los tripulantes de la avioneta -un hombre afroamericano y una mujer rubia, según los testimonios, abandonaron su cargamento de trescientos cincuenta y cinco kilos de cocaína en costales y desaparecieron en el monte, mientras que los soldados del Batallón de Infantería, apostados en dos columnas a lo largo de la pista, aguardaron a que los agentes federales descendieran de su aeronave para abrir fuego contra ellos para "neutralizarlos".


De aquel suceso recuerdo dos fotos que aparecieron en el periódico local Notiver. En una de ellas, siete hombres yacían en hilera sobre el pasto, boca abajo. Eran los agentes acribillados por el Ejército. Cinco de ellos vestían ropas oscuras y los otros dos iban de paisano, y aunque portaban chamarras negras, sucias de tierra y zacate, ninguno llevaba zapatos. La segunda fotografía mostraba a un agente federal sentado en el suelo, con el cañón de un fusil anónimo apuntándole a la cabeza. El sujeto, que portaba las siglas de la procuraduría en el pecho, miraba directo hacia la lente. Sus labios, congelados a mitad de un espasmo de angustia, dejaban entrever una lengua hinchada y reseca: se trataba del único judicial que había sobrevivido al ataque.


Era diciembre -o quizás enero o febrero- cuando vi aquellas fotos, impresas en una de las páginas de aquel periódico viejo que extendí en el suelo para recoger la hojarasca que pasé la tarde barriendo en el patio. Y digo que debió haber sido en estas fechas porque es la única época del año en que los frentes fríos dejan desnudas las copas para entonces anaranjadas de los almendros tropicales en el puerto. Me recuerdo acuclillada en aquel patio, mirando las imágenes y leyendo con curiosidad las noticias de la sección policiaca extendida sobre el suelo de cemento, pero tuvieron que pasar más de diez años para que yo pudiera relacionar aquellas dos imágenes -la fotografía de los judiciales muertos y el recuerdo de las extrañas luces de colores que vi en el cielo el verano en que cumplí nueve años- y concluir con tristeza que aquel objeto volador no identificado nunca transportó ningún extraterrestre sino puras pacas de cocaína colombiana.
Después del tiroteo de La Víbora y de otros incidentes semejantes ocurridos en Nopaltepec, Cosamaloapan y Carlos A. Carillo, y de varios accidentes automovilísticos protagonizados por adolescentes borrachos, el gobierno de Boca del Río prohibió las visitas nocturnas a las playas durante algunos meses, así que, después de esa última y decepcionante visita, no volvimos a Playa del Muerto sino hasta finales del noventa y dos, y el sitio, para entonces, había perdido todo su encanto. Nuevas escolleras habían ganado terreno al mar y aquello era un hervidero de vendedores ambulantes y turistas. Incluso habían retirado los escabrosos letreros con calaveras que advertían de las pozas, y con el tiempo, el nombre de Playa del Muerto cayó en desuso a favor de un apelativo más turístico y mucho menos tétrico: Playa Los Arcos.
Creo que jamás en la vida volví a creer en algo con tanta fe como creí en los extraterrestres. Ni siquiera en el Ratón de los Dientes, en Santa Claus o en el Hombre sin Cabeza (del que mi padre contaba que todas las noches se aparecía en el Playón de Hornos buscando entre el agua su testa, arrancada por un cañonazo durante la invasión estadounidense del catorce), mucho menos en la mantarraya gigante-antropófaga-voladora de las Islas Fiji, y más tarde, ni siquiera Dios se salvaría de mi incredulidad. Todo era pura mentira, inventos de los grandes. Todos esos seres maravillosos con poderes inauditos no eran más que el fruto de la imaginación de los padres.
Dicen los actuales habitantes de la zona que, cuando la luna está ausente, extrañas luces de colores aún atraviesan la noche para aterrizar en el llano. Pero yo ya no tengo ánimos para buscar extraterrestres. Aquella pequeña y regordeta vigilante intergaláctica ya no existe, como tampoco existe Playa del Muerto ni los valientes idiotas que ahí se ahogaron.
`
export const Diagnostico = () => {
    // text
    const [isBold, setIsBold] = useState(false);
    const [fontSize, setFontSize] = useState(22);

    // audio 
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const audioRef = useRef(null);

    // width
    const isMidScreen = useMediaQuery('(max-width: 1150px)');

    // time
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    // switch theme
    const isNotMobile = useMediaQuery('(min-width: 400px)');

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);

                recorder.ondataavailable = (event) => {
                    const url = URL.createObjectURL(event.data);
                    setAudioURL(url);
                };

                recorder.start();
                setIsRecording(true);
            })
            .catch(error => {
                console.error("Error accessing the microphone", error);
            });
    };

    const stopRecording = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRecording(false);

        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    };

    useEffect(() => {
        if (isRecording) {
            intervalRef.current = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setTime(0);
        }

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalRef.current);
    }, [isRecording]);

    const deleteRecording = () => {
        setAudioURL(null);
    };

    const sendDiagnostic = ( url ) => {
        setAudioURL(null);
        
    }

    // rich text
    const clickOnBold = () => {
        setIsBold(!isBold);
    }

    const clickOnDecrease = () => {
        setFontSize(Math.max(fontSize - 2, 12));
    }

    const clickOnIncrease = () => {
        setFontSize(Math.min(fontSize + 2, 40));
    }

    return (
        <>
            <Grid lg={8} lgOffset={2} md={8} mdOffset={2} mx={5}>
                <Card sx={{
                    width: '100%',
                    height: 'calc(100vh - 150px)',
                    maxHeight: '800px',
                }} >
                    <Alert
                        startDecorator={<InfoOutlined size={24} color='primary' />}
                        variant="outlined"
                        color="primary"
                        sx={{ justifyContent: 'center', alignContent: 'center' }}
                    >
                        Aquí empieza tu diagnóstico:
                        presiona el botón para empezar a hablar y lee el siguiente texto en voz alta.
                    </Alert>
                    <Grid container width='100%' height={{ xs: isNotMobile ? '80%' : '73%', sm: '80%', md: '80%', lg: '79%' }} maxHeight={'900px!important'} pt={1} spacing={0}>
                        <Grid xs={2} sm={1} md={1} lg={1} justifyContent='center'>
                            <Stack spacing={2}>
                                <ButtonGroup orientation="vertical" size="lg" mb={2}>
                                    <IconButton onClick={clickOnBold} >
                                        <FormatBold size={32} color={isBold ? 'primary' : 'neutral'} />
                                    </IconButton>
                                    <IconButton onClick={clickOnIncrease} disabled={fontSize === 40}>
                                        <TextIncrease size={32} />
                                    </IconButton>
                                    <IconButton onClick={clickOnDecrease} disabled={fontSize === 12}>
                                        <TextDecrease size={32} />
                                    </IconButton>
                                </ButtonGroup>
                                <Tooltip title="Texto de Melchor, F. (2021). Aquí no es Miami. Debolsillo" placement="right" size="lg" arrow>
                                    <IconButton variant='outlined' color='neutral'>
                                        <Info size={28} />
                                    </IconButton>
                                </Tooltip>
                                {!isNotMobile && <ModeToggle size={45} />}
                            </Stack>
                        </Grid>
                        <Grid xs={10} sm={11} lg={11} height='100%' >
                            <Grid overflow='auto' height='100%' px={2}>
                                <CardContent>
                                    <Typography level='h3' fontWeight={isBold ? 'bold' : ''} fontSize={fontSize}>Aquí no es Miami</Typography>
                                    {
                                        text.split('\n').map((sentence, index) => (
                                            <Typography key={index} fontWeight={isBold ? 'bold' : ''} fontSize={fontSize} textAlign='justify'>{sentence}</Typography>
                                        ))
                                    }
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid justifyContent='center' alignContent='center' container>
                        {
                            !audioURL ? (!isRecording ?
                                <IconButton variant="plain" onClick={startRecording} sx={{ borderRadius: '100px' }} >
                                    <PlayCircle size={isMidScreen ? 50 : 72} color="#818cf8" weight="fill" />
                                </IconButton> :
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <IconButton variant="plain" onClick={stopRecording} sx={{ borderRadius: '100px' }}>
                                        <Record size={isMidScreen ? 50 : 72} color="#ef4444" weight="fill" />
                                    </IconButton>
                                    <Chip sx={{ maxHeight: '10px' }}>
                                        {time > 0 ? `0${Math.floor(time / 60)}:${time % 60 < 10 ? `0${time % 60}` : time % 60}` : '00:00'}
                                    </Chip>
                                </Stack>
                            ) : null
                        }
                        {audioURL && (
                            <CheckAudioModal open={audioURL} deleteRecording={deleteRecording} sendRecording={sendDiagnostic} audioRef={audioRef} audioURL={audioURL} />
                        )}
                    </Grid>
                </Card >
            </Grid >
        </>
    )
}
