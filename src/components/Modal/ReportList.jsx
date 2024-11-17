import { DialogContent, DialogTitle, Modal, ModalDialog, List, ListItem, Typography, Box, ModalClose, Button, IconButton } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDiagnostic, setDiagnosticLoading, setUrl } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Delete } from "@mui/icons-material";
import { startDeleteFailedAudio, startSaveFailedAudios } from "../../store/slices/userThunks";
import axios from "axios";


const FailedAudios = ({ audios, handleClickFailedAudio }) => {

    const [open, setOpen] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
    const [currentAudioKey, setCurrentAudioKey] = useState(null);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(startDeleteFailedAudio(currentAudioKey));
        setOpen(false);
    }

    const doDiagnostic = async (url, gender) => {

        const data = {
            url,
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
            // console.log('Diagnóstico procesado:', response);
            dispatch(setCurrentDiagnostic({ ...response.data, ...data, date: new Date().toLocaleString() }));
            dispatch(startDeleteFailedAudio(currentAudioKey));
            return response;
        } catch (error) {
            console.error('Error al procesar el diagnóstico:', error.response ? error.response.data : error.message);
            // sendRecording(false);
            localStorage.setItem('error', true);
            dispatch(startSaveFailedAudios(data));
            throw error;
        }
    };

    const handleDiagnostic = async (url) => {
        try {
            handleClickFailedAudio(true);
            await doDiagnostic(url, 'mujer');
            dispatch(setUrl(url));
            dispatch(setDiagnosticLoading(false));
            setOpen(false);
        } catch (error) {
            dispatch(setDiagnosticLoading(false));
            console.error('Error al procesar el diagnóstico:', error.response ? error.response.data : error.message);
        }
    }
    return (
        <>
            <DialogTitle>Audios Fallidos</DialogTitle>
            <DialogContent>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 'sm', boxShadow: 'md' }}>
                    {
                        Object.keys(audios).map((key, index) => {
                            const audio = audios[key];
                            return (
                                <ListItem
                                    key={index}
                                    sx={{
                                        padding: 0,
                                        marginBottom: '10px', // Aumentar el espacio entre reportes
                                    }}
                                >
                                    <Box sx={{
                                        width: '100%',
                                        padding: '6px',
                                        borderRadius: '10px',
                                        border: `1px solid`,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 1,
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Box sx={{ display: 'row', gap: 1, alignItems: 'center' }}>
                                            <Typography level="title-sm">
                                                Audio
                                            </Typography>
                                            <Typography level="body-sm">
                                                {audio.date}
                                            </Typography>
                                        </Box>
                                        <Button color="warning" variant="soft" size="md" onClick={() => {
                                            setCurrentAudio(audio);
                                            setOpen(true);
                                            setCurrentAudioIndex(index + 1);
                                            setCurrentAudioKey(key);
                                        }}>
                                            Revisar
                                        </Button>
                                    </Box>
                                </ListItem>
                            );
                        }
                        )
                    }
                </List>
            </DialogContent>

            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Audio {currentAudioIndex}</DialogTitle>
                    <ModalClose />
                    <DialogContent>
                        <audio controls>
                            <source src={currentAudio?.url} type="audio/mpeg" />
                            Tu navegador no soporta el elemento audio.
                        </audio>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', marginTop: 2 }}>
                            <Button color="primary" variant="outlined" size="sm" onClick={() => handleDiagnostic(currentAudio.url)}>
                                Reintentar diagnóstico
                            </Button>
                            <IconButton color='danger' variant="outlined" onClick={handleDelete}><Delete /></IconButton>
                        </Box>
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </>
    )
}

const ReportList = ({ open, onClose }) => {
    const { diagnostics, failedAudios } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = (report) => {
        dispatch(setCurrentDiagnostic(report));
        navigate('/diagnostico/resultado');
    }

    const handleClickFailedAudio = (ok) => {
        if (ok) {
            navigate('/diagnostico/resultado');
        }
    }
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ModalDialog>
                <DialogTitle>Diagnósticos Previos</DialogTitle>
                <ModalClose onClick={onClose} />
                <DialogContent>
                    {/* Lista de reportes visual */}
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 'sm', boxShadow: 'md' }}>

                        {Object.keys(diagnostics).map((key, index) => {
                            const report = diagnostics[key];

                            const colors = ['primary', 'success', 'warning'];
                            const color = colors[index % colors.length]; // Ciclar entre los tres colores 
                            return (
                                key !== 'null' && <ListItem
                                    key={report.id + report.date}
                                    onClick={() => onClick(report)}
                                    sx={{
                                        cursor: 'pointer',
                                        padding: 0,
                                        marginBottom: '10px', // Aumentar el espacio entre reportes
                                    }}
                                >
                                    <Box sx={{
                                        width: '100%',
                                        padding: '6px',
                                        borderRadius: '10px',
                                        border: `1px solid`,
                                        borderColor: color,
                                        backgroundColor: `${color}.softBg`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1,
                                        alignItems: 'flex-start',
                                        color: color
                                    }}>
                                        <Typography level="title-sm" sx={{ color: color }}>
                                            Diagnóstico
                                        </Typography>
                                        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                            Fecha: {report.date}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            );
                        })}
                    </List>
                </DialogContent>{
                    Object.keys(failedAudios).length > 0 &&
                    <FailedAudios audios={failedAudios} handleClickFailedAudio={handleClickFailedAudio}/>
                }
            </ModalDialog>
        </Modal>
    );
};

export default ReportList;