import { DialogContent, DialogTitle, Modal, ModalDialog, List, ListItem, Typography, Box, ModalClose } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDiagnostic } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";


const ReportList = ({ open, onClose }) => {
    const { diagnostics } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = (report) => {
        dispatch(setCurrentDiagnostic(report));
        navigate('/diagnostico/resultado');
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
                                <ListItem
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
                                            Diagnóstico {index + 1}
                                        </Typography>
                                        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                            Fecha: {report.date}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            );
                        })}
                    </List>
                </DialogContent>
            </ModalDialog>
        </Modal>
    );
};

export default ReportList;