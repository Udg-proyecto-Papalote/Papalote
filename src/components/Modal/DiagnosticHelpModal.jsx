import { Button, DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy'
import { DialogActions } from '@mui/material'
import { NumberCircleOne, NumberCircleTwo, PlayCircle } from '@phosphor-icons/react'
import React from 'react'

const DiagnosticHelpModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog variant='outlined' size='lg'>
                <DialogTitle>Instrucciones</DialogTitle>
                <DialogContent>
                    <Typography
                        startDecorator={<NumberCircleOne size={28} weight="duotone" color="#818cf8"/>}
                    >
                        Presiona <PlayCircle size={30} weight="duotone" style={{ marginLeft: 5, marginRight: 5 }} /> para empezar a hablar
                    </Typography>
                    <Typography
                        startDecorator={<NumberCircleTwo size={28} weight="duotone" color="#818cf8"/>}
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
