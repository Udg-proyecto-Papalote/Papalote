import { DialogContent, DialogTitle, Modal, ModalDialog } from '@mui/joy'

const AvisoDePrivacidad = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ModalDialog>
                <DialogTitle>Aviso de Privacidad</DialogTitle>
                <DialogContent>

                    Aquí va el despapaye
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}

export default AvisoDePrivacidad
