import { Button, CircularProgress, DialogContent, DialogTitle, Modal, ModalDialog, Stack, Typography } from '@mui/joy'
import { ArrowCounterClockwise, Checks } from '@phosphor-icons/react'
import axios from 'axios'
import { useState } from 'react'

const CheckAudioModal = ({ open, deleteRecording, sendRecording, audioRef, audioURL }) => {
    const cloudName = 'ds8hfmrth'
    const presetName = 'papalote'

    const [loading, setLoading] = useState(false)
    const [uploadSuccess, setUploadSuccess] = useState(false)

    const urlToBlob = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    };

    const uploadAudio = async () => {
        if (!audioURL) return;

        try {
            // Mostrar un indicador de carga
            setLoading(true);

            // Convertir URL de audio en Blob
            const audioBlob = await urlToBlob(audioURL);

            // Crear FormData y agregar archivo Blob
            const formData = new FormData();
            formData.append('file', audioBlob, 'audio.mp3'); // Puedes cambiar el nombre del archivo aquí
            formData.append('upload_preset', presetName);

            // Enviar la solicitud a Cloudinary
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                formData
            );

            console.log('Audio subido con éxito:', response.data.url);
            setLoading(false);
            setUploadSuccess(true);
            sendRecording(response.data.url); // Llama a esta función con la URL del archivo subido

        } catch (error) {
            setLoading(false);
            console.error('Error al subir el audio:', error);
        }
    };

    return (
        <Modal open={open}
            // disableBackdropClick={true}
            disableEscapeKeyDown={true}
        >
            <ModalDialog variant='outlined' size='lg'>
                <DialogTitle>Audio grabado</DialogTitle>
                <DialogContent>
                    {
                        loading ? 
                        (
                            <Stack justifyContent="center" alignItems="center" gap={2}>
                                <CircularProgress size="lg" />
                                <Typography>Cargando...</Typography>
                            </Stack>
                        )
                            :
                            (
                                <>
                                    <Typography mb={2}>
                                        Comprueba que el audio grabado sea claro y audible. Si no es así, puedes volver a grabar el audio.
                                    </Typography>
                                    <Stack
                                        direction={{ sm: 'column', md: 'row' }}
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <audio ref={audioRef} src={audioURL} controls />
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
    )
}

export default CheckAudioModal
