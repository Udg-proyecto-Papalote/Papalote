import { Delete } from '@mui/icons-material';
import { Button, CircularProgress, DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Stack, Typography } from '@mui/joy';
import { Checks } from '@phosphor-icons/react';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDiagnostic, setDiagnosticLoading, setUrl } from '../../store/slices/userSlice';

const ReCheckAudioModal = ({ open, deleteRecording, sendRecording, audioURL }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { gender } = useSelector(state => state.user);

    const doDiagnostic = async (audioURL) => {
        const data = {
            url: audioURL,
            genero: gender.toLowerCase()
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
            // dispatch(startSaveFailedAudios(data));
            throw error;
        }
    };

    const uploadAudio = async () => {

        try {
            sendRecording(true); // Send the transformed .wav URL

            await doDiagnostic(audioURL);
            dispatch(setDiagnosticLoading(false));
            dispatch(setUrl(audioURL));
            deleteRecording();
        } catch (error) {
            setLoading(false);
            console.error('Error uploading audio:', error);
            dispatch(setDiagnosticLoading(false));
            localStorage.setItem('error', true);
            sendRecording(false);
        }
    };

    return (
        <Modal open={open}
            // disableBackdropClick={true}
            disableEscapeKeyDown={true}
        >
            <ModalDialog variant='outlined' size='lg' sx={{ p: 4 }}>
                <DialogTitle>Audio grabado</DialogTitle>
                <ModalClose />
                <DialogContent >
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
                                    <Typography level='body-lg'>
                                        Comprueba que el audio grabado sea claro y audible.

                                    </Typography>
                                    <Stack justifyContent="center"
                                        alignItems="center" mb={2}>
                                        <audio src={audioURL} controls />
                                    </Stack>
                                    <Stack
                                        direction={{ sm: 'column', md: 'row' }}
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Button startDecorator={<Checks size={32} />} onClick={uploadAudio} sx={{ borderRadius: '100px' }} color="success" variant="outlined" size="lg"
                                        >
                                            Enviar diagnóstico
                                        </Button>
                                        <Button startDecorator={<Delete size={32} />} onClick={deleteRecording} sx={{ borderRadius: '100px' }} color='danger' variant='outlined' size='lg'>
                                            Eliminar grabación
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
ReCheckAudioModal.propTypes = {
    open: PropTypes.bool.isRequired,
    deleteRecording: PropTypes.func.isRequired,
    sendRecording: PropTypes.func.isRequired,
    audioURL: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired
};

export default ReCheckAudioModal;