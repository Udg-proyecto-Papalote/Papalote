import { Button, DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy'
import { DialogActions } from '@mui/material'
import { NumberCircleOne, NumberCircleTwo, PlayCircle } from '@phosphor-icons/react'
import React from 'react'


// const Instruction = () => {
//     const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('md'));

//     const textProps = {
//         fontSize: isSmallScreen ? "18px" : "25px",
//     };
//     return (
//         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, paddingY: 5 }}>

//             <Stack py={5} spacing={2}>
//                 <Typography level='h3' justifyContent='center'>Aquí empieza tu diagnóstico</Typography>
//                 <Typography
//                     sx={textProps}
//                     // startDecorator={<NumberCircleOne size={28} weight="duotone" color="#818cf8"/>}
//                     startDecorator={<div></div>}
//                 >
//                     Presiona <PlayCircle size={30} weight="duotone" style={{ marginLeft: 5, marginRight: 5 }} /> para empezar a hablar
//                 </Typography>
//                 <Button variant='outlined' size='lg' fullWidth><Typography level="h4">Entendido</Typography></Button>
//             </Stack>
//         </Box>

//     )
// }

const DiagnosticHelpModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog variant='outlined' size='lg'>
                {/* <ModalClose /> */}
                <DialogTitle>Aquí empieza tu diagnóstico</DialogTitle>
                <DialogContent>
                    <Typography
                        // sx={textProps}
                        startDecorator={<NumberCircleOne size={28} weight="duotone" color="#818cf8"/>}
                        // startDecorator={<div style={{ marginLeft: -20 }}></div>}
                    >
                        Presiona <PlayCircle size={30} weight="duotone" style={{ marginLeft: 5, marginRight: 5 }} /> para empezar a hablar
                    </Typography>
                    <Typography
                        // sx={textProps}
                        startDecorator={<NumberCircleTwo size={28} weight="duotone" color="#818cf8"/>}
                        // startDecorator={<div style={{ marginLeft: -20 }}></div>}
                    >
                        Da acceso para que la página pueda escucharte
                    </Typography>
                </DialogContent>
                <DialogActions>

                    <Button variant='outlined' size='sm' fullWidth onClick={onClose}>Entendido</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}

export default DiagnosticHelpModal
