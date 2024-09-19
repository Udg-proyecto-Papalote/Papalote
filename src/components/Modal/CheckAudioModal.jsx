import { Button, CircularProgress, DialogContent, DialogTitle, Modal, ModalDialog, Stack, Typography } from '@mui/joy'
import { ArrowCounterClockwise, Checks } from '@phosphor-icons/react'
import axios from 'axios'
import { Cloudinary } from 'cloudinary-core';
import { useState } from 'react'

const cloudName = 'ds8hfmrth'
const presetName = 'papalote'
const cld = new Cloudinary({ cloud_name: cloudName });

const CheckAudioModal = ({ open, deleteRecording, sendRecording, audioRef, audioURL }) => {

    const [loading, setLoading] = useState(false)

    const urlToBlob = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    };
    
    const uploadAudio = async () => {
        if (!audioURL) return;

        try {
            setLoading(true);

            // Convert URL of the recorded audio into Blob
            const audioBlob = await urlToBlob(audioURL);

            // Create FormData and add the .webm audio Blob
            const formData = new FormData();
            formData.append('file', audioBlob, 'audio.webm');
            formData.append('upload_preset', presetName); // Replace with your Cloudinary upload preset

            // Upload the audio file to Cloudinary
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                formData
            );

            console.log('Audio uploaded:', response.url);

            const publicId = response.data.public_id;

            const wavURL = cld.url(publicId, { 
                resource_type: 'video', 
                format: 'wav', 
                transformation: [{ start_offset: "0", duration: "180" }] 
            });

            console.log('Audio in .wav format:', wavURL);

            setLoading(false);
            sendRecording(wavURL); // Send the transformed .wav URL

        } catch (error) {
            setLoading(false);
            console.error('Error uploading audio:', error);
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
