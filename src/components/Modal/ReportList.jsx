import { DialogContent, DialogTitle, Modal, ModalDialog, Sheet, Typography } from "@mui/joy"

const ReportList = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
             <ModalDialog>
          <DialogTitle>Reportes hechos</DialogTitle>
          <DialogContent>
            Aquí va todo el desmadre. Puedes usar <Typography level='title-md'>Typography</Typography> para mostrar texto, úsalo como quieras. fksljdkfjsdkl

            Mientras más agregues más grande se hará el modal, así que ten cuidado con eso.
          </DialogContent>

        </ModalDialog>
        </Modal>
    )
}

export default ReportList
