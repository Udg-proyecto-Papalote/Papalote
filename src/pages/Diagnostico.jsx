import { TextDecrease, TextIncrease, FormatBold, InfoOutlined } from "@mui/icons-material";
import { Grid, Typography, Card, Button, Stack, IconButton, CardContent, ButtonGroup, Alert, Chip } from "@mui/joy"
import { useMediaQuery } from "@mui/material";
import { PlayCircle, Question, Record, XCircle } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import DiagnosticHelpModal from "../components/Modal/DiagnosticHelpModal";

const text = `Instrucciones. Hola. Soy un texto de prueba. Estoy aquí para que puedas leerme.
Nisi aliqua proident exercitation anim amet aute amet veniam in consequat. Nulla id laborum aliquip ad est ipsum reprehenderit reprehenderit fugiat eiusmod pariatur enim. Mollit ad Lorem sunt cupidatat duis reprehenderit ipsum proident elit ipsum. Dolor aute nisi aliquip qui laboris amet elit aliquip occaecat tempor ipsum duis. Cillum ullamco esse pariatur veniam adipisicing consectetur esse officia. Proident tempor do consequat eiusmod ad elit ex nisi anim et enim do.
Anim nisi irure non ad sunt velit sit duis commodo sit laboris deserunt laboris amet. Ullamco laboris fugiat consectetur aute eiusmod aliqua ad consectetur dolor ea ipsum fugiat Lorem. Minim aute in excepteur sint dolor ipsum. Officia dolore dolor amet pariatur officia id mollit ipsum eu ad laborum.
Aute veniam culpa ad ullamco esse labore tempor ex. Sunt irure aute in labore minim eu. Culpa tempor sint officia dolor enim cillum cupidatat ipsum Lorem nulla enim eiusmod. Ullamco adipisicing excepteur dolor aliqua culpa. Et in cillum culpa proident.
Nisi ipsum velit excepteur qui ut officia. Anim fugiat Lorem cupidatat consectetur adipisicing ullamco non sit Lorem. Culpa et aliquip commodo duis et voluptate officia incididunt dolor. Sint ex eu enim laboris adipisicing ut ea aute ut ad ut ea esse fugiat. Voluptate aute do in esse. Laborum aute duis Lorem labore labore. Sunt excepteur sint consequat esse occaecat ad reprehenderit anim et duis amet.
Ex laborum velit amet minim do officia. Dolor enim sint ut nisi duis mollit proident magna cillum cillum minim aliqua non. Anim tempor enim dolore ipsum enim cillum. Quis amet consectetur dolore Lorem magna laboris exercitation consectetur. Amet cupidatat laborum aute id minim dolor laboris nulla excepteur officia deserunt quis.
Id officia sit nulla consectetur id consectetur commodo pariatur ex sint eu ullamco. Irure sint sint voluptate eu proident amet qui ad esse ullamco proident do incididunt. Sunt magna non in eu ut enim anim. Velit dolore esse aliquip occaecat quis enim minim pariatur. Ut eiusmod in voluptate in ullamco. Elit nulla est nisi consectetur nostrud irure amet veniam. Lorem elit magna fugiat eu elit.
Mollit minim ullamco non est aute aliquip. Officia ut Lorem dolore mollit aute consectetur mollit amet nulla eiusmod magna velit velit quis. Exercitation proident aute ea proident tempor anim esse cupidatat nulla cillum. Cupidatat nostrud cillum commodo exercitation Lorem. Commodo eiusmod dolor ut et ex labore nisi deserunt dolore irure enim. Ad non in eu et ea consequat sint velit. Excepteur non enim ex minim voluptate cillum veniam incididunt nostrud.
Excepteur consectetur id adipisicing ex elit veniam ipsum id velit consectetur enim excepteur enim sint. Veniam veniam laboris veniam duis sunt. Excepteur nulla aute cillum est veniam amet nisi ea do. Cillum velit non ut adipisicing minim cupidatat adipisicing esse. Non nulla nostrud duis amet. Commodo nulla nulla nulla aute commodo.
Ut enim nisi pariatur laboris laborum et pariatur magna in consequat. Nisi qui in cupidatat veniam id ipsum Lorem labore sit irure. Esse enim cillum do pariatur ipsum excepteur amet aliqua esse culpa ex anim est consequat.
Mollit ut aliquip ex commodo sunt in adipisicing commodo anim. Do veniam dolor elit voluptate magna nisi elit ex anim. Nulla elit deserunt cupidatat id nisi culpa. Fugiat dolore culpa anim occaecat adipisicing adipisicing est commodo cupidatat laborum.
Consequat officia pariatur est et cillum est eiusmod nisi nisi ipsum. Exercitation esse sit enim pariatur eiusmod mollit et ut minim irure dolore aliquip et. Proident in nisi eu laboris non tempor excepteur sit elit reprehenderit. Voluptate eiusmod consequat sint proident incididunt esse irure qui voluptate id sunt adipisicing.
Nulla quis labore labore sint cillum do culpa amet. Culpa sint culpa aute est dolore dolor elit nulla consequat proident occaecat. Anim ea nostrud ea pariatur veniam ut nisi fugiat dolor ipsum laboris anim exercitation. Laborum est cupidatat culpa tempor aliquip. Amet elit incididunt Lorem laborum nisi adipisicing. Do adipisicing nostrud et cupidatat.
Amet quis et enim ea. Id eiusmod pariatur reprehenderit consequat deserunt dolore exercitation. Anim anim fugiat anim et incididunt duis. Sint deserunt sunt irure sint.
Sit consectetur consequat minim nostrud cupidatat laboris. Dolor fugiat anim esse est consectetur do officia eu in duis consectetur id sint magna. Occaecat deserunt exercitation enim magna anim velit minim.`
export const Diagnostico = () => {
    // text
    const [isBold, setIsBold] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [openModal, setOpenModal] = useState(false);
    const [displayInfo, setDisplayInfo] = useState(true);

    // audio 
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const audioRef = useRef(null);

    // width
    const isMidScreen = useMediaQuery('(max-width: 1150px)');
    const isSmallScreen = useMediaQuery('(max-width: 800px)');

    // time
    const [time, setTime] = useState(0);

    const intervalRef = useRef(null);

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

    const sendDiagnostic = () => {
        // mediaRecorder.ondataavailable = (event) => {
        //     const audioBlob = new Blob([event.data], { type: 'audio/wav' });
        //     const formData = new FormData();
        //     formData.append('audio', audioBlob, 'recording.wav');

        //     // Send the audio file to the backend
        //     // fetch('/upload', {
        //     //     method: 'POST',
        //     //     body: formData,
        //     // })
        //     //     .then(response => response.json())
        //     //     .then(data => {
        //     //         console.log('File uploaded successfully:', data);
        //     //         setAudioURL(data.filePath); // Assuming the backend returns the file path
        //     //     })
        //     //     .catch(error => {
        //     //         console.error('Error uploading file:', error);
        //     //     });
        // };
    }

    // rich text
    const clickOnBold = () => {
        setIsBold(!isBold);
    }

    const clickOnDecrease = () => {
        setFontSize(Math.max(fontSize - 2, 12));
    }

    const clickOnIncrease = () => {
        setFontSize(Math.min(fontSize + 2, 36));
    }

    return (
        <>
            <Grid lg={8} lgOffset={2} md={8} mdOffset={2} mx={5}>
                <Card sx={{ width: '100%', height: 'calc(100vh - 160px)' }} >
                    {
                        displayInfo && <Alert
                            startDecorator={<InfoOutlined size={24} color='primary' />}
                            variant="outlined"
                            color="primary"
                            sx={{ justifyContent: 'center', alignContent: 'center' }}
                        >
                            Aquí empieza tu diagnóstico:
                            presiona el botón para empezar a hablar y lee el siguiente texto en voz alta.
                        </Alert>
                    }
                    <Grid container width='100%' height={isMidScreen ? (audioURL ? '62%': '75%') : '81%'} pt={1}>
                        <Grid xs={2} sm={1} lg={.5} justifyContent='center'>
                            <Stack spacing={2}>
                                <ButtonGroup orientation="vertical" size="lg" mb={2}>
                                    <IconButton onClick={clickOnBold} >
                                        <FormatBold size={32} color={isBold ? 'primary' : 'neutral'} />
                                    </IconButton>
                                    <IconButton onClick={clickOnIncrease} disabled={fontSize === 36}>
                                        <TextIncrease size={32} />
                                    </IconButton>
                                    <IconButton onClick={clickOnDecrease} disabled={fontSize === 12}>
                                        <TextDecrease size={32} />
                                    </IconButton>
                                </ButtonGroup>
                                <IconButton onClick={() => setOpenModal(true)} color='primary' mt={50}>
                                    <Question size={28} weight="duotone" />
                                </IconButton>
                            </Stack>
                        </Grid>
                        <Grid xs={10} sm={11} lg={11.5} height='100%' >
                            <Grid overflow='auto' height='100%' pl={2}>
                                <CardContent>
                                    <Typography level='h3' fontWeight={isBold ? 'bold' : ''} fontSize={fontSize}>Título</Typography>
                                    {
                                        text.split('\n').map((sentence, index) => (
                                            <Typography key={index} fontWeight={isBold ? 'bold' : ''} fontSize={fontSize}>{sentence}</Typography>
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
                            <Stack
                                direction={{ sm: 'column', md: 'row' }}
                                justifyContent="center"
                                alignItems="center"
                                spacing={1}
                            >
                                <audio ref={audioRef} src={audioURL} controls/>
                                <IconButton onClick={deleteRecording} sx={{ borderRadius: '100px' }}>
                                    <XCircle size={45} color='#ef4444' />
                                </IconButton>
                                <Button onClick={sendDiagnostic} sx={{ borderRadius: '100px' }} color="success" variant="outlined" size="lg">
                                    Enviar diagnóstico
                                </Button>
                            </Stack>
                        )}
                    </Grid>
                </Card>
            </Grid>
            <DiagnosticHelpModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    )
}
