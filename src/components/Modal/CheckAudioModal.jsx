import { Warning } from '@mui/icons-material';
import { Alert, Button, CircularProgress, DialogContent, DialogTitle, Modal, ModalDialog, Stack, Typography } from '@mui/joy';
import { ArrowCounterClockwise, Checks } from '@phosphor-icons/react';
import axios from 'axios';
import { Cloudinary } from 'cloudinary-core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDiagnostic, setDiagnosticLoading, setUrl } from '../../store/slices/userSlice';
import { startSaveFailedAudios } from '../../store/slices/userThunks';

const cloudName = 'ds8hfmrth';
const presetName = 'papalote';
const cld = new Cloudinary({ cloud_name: cloudName });

const CheckAudioModal = ({ open, deleteRecording, sendRecording, audioRef, audioURL, time }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    // Obtener el estado de `gender` desde Redux
    const { gender } = useSelector((state) => state.user);

    const urlToBlob = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    };

    const doDiagnostic = async (audioURL, gender) => {
        const data = {
            url: audioURL,
            genero: gender.toLowerCase() // Aquí estamos usando el `gender` pasado como argumento
        };

        try {
            dispatch(setDiagnosticLoading(true));
            const response = await axios.post('http://127.0.0.1:5000/diagnostico', data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: 2000000 // Timeout de 2000 segundos (2000000 ms)
            });
            console.log('Diagnóstico procesado:', response);
            dispatch(setCurrentDiagnostic({ ...response.data, ...data, date: new Date().toLocaleString() }));

            return response;
        } catch (error) {
            console.error('Error al procesar el diagnóstico:', error.response ? error.response.data : error.message);
            sendRecording(false);
            dispatch(startSaveFailedAudios(data));
            throw error;
        }
    };

    const uploadAudio = async () => {
        if (!audioURL) return;

        try {
            setLoading(true);

            // Convertir la URL del audio grabado en Blob
            const audioBlob = await urlToBlob(audioURL);

            // Crear FormData y agregar el archivo de audio .webm
            const formData = new FormData();
            formData.append('file', audioBlob, 'audio.webm');
            formData.append('upload_preset', presetName); // Reemplazar con tu preset de Cloudinary

            // Subir el archivo de audio a Cloudinary
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                formData
            );

            console.log('Audio subido:', response.data.url);
            console.log('Género enviado:', gender); // Aquí estamos verificando que `gender` tiene el valor correcto

            const publicId = response.data.public_id;

            const wavURL = cld.url(publicId, {
                resource_type: 'video',
                format: 'wav',
                transformation: [{ start_offset: "0", duration: "120" }]
            });

            console.log('Audio en formato .wav:', wavURL);

            setLoading(false);
            sendRecording(true); // Enviar la URL transformada .wav

            // Pasar `gender` como argumento a la función `doDiagnostic`
            await doDiagnostic(wavURL, gender);
            dispatch(setDiagnosticLoading(false));
            dispatch(setUrl(response.data.url || wavURL));
        } catch (error) {
            setLoading(false);
            console.error('Error al subir el audio:', error);
            dispatch(setDiagnosticLoading(false));
            localStorage.setItem('error', true);
            sendRecording(false);
        }
    };

    return (
        <Modal open={open} disableEscapeKeyDown>
            <ModalDialog variant='outlined' size='lg' sx={{ p: 4 }}>
                <DialogTitle>Audio grabado</DialogTitle>
                <DialogContent>
                    {
                        loading ? (
                            <Stack justifyContent="center" alignItems="center" gap={2}>
                                <CircularProgress size="lg" />
                                <Typography>Cargando...</Typography>
                            </Stack>
                        ) : (
                            <>
                                {
                                    time < 120 && (
                                        <Alert color='danger' variant='soft' sx={{ mb: 1 }} startDecorator={<Warning />}>
                                            <Typography level='title-md' color='error'>Audio demasiado corto. El audio debe durar al menos 2 minutos.</Typography>
                                        </Alert>
                                    )
                                }
                                <Typography level='body-lg'>
                                    Comprueba que el audio grabado sea claro y audible.
                                </Typography>
                                <Typography mb={3} level='body-lg'>
                                    Si no es así, puedes volver a grabar el audio.
                                </Typography>
                                <Stack justifyContent="center" alignItems="center" mb={2}>
                                    <audio ref={audioRef} src={audioURL} controls />
                                </Stack>
                                <Stack direction={{ sm: 'column', md: 'row' }} justifyContent="center" alignItems="center" gap={2}>
                                    <Button startDecorator={<ArrowCounterClockwise size={32} />} onClick={deleteRecording} sx={{ borderRadius: '100px' }} color='neutral' variant='outlined' size='lg'>
                                        Volver a grabar
                                    </Button>
                                    <Button startDecorator={<Checks size={32} />} onClick={uploadAudio} sx={{ borderRadius: '100px' }} color="success" variant="outlined" size="lg">
                                        Enviar diagnóstico
                                    </Button>
                                </Stack>
                            </>
                        )
                    }
                </DialogContent>
            </ModalDialog>
        </Modal>
    );
};

// PropTypes
CheckAudioModal.propTypes = {
    open: PropTypes.bool.isRequired,
    deleteRecording: PropTypes.func.isRequired,
    sendRecording: PropTypes.func.isRequired,
    audioRef: PropTypes.object.isRequired,
    audioURL: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired
};

export default CheckAudioModal;
