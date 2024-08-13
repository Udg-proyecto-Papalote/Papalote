import { Button, DialogContent, DialogTitle, Modal, ModalDialog, Stack, Typography } from '@mui/joy'
import { ArrowCounterClockwise, Checks } from '@phosphor-icons/react'

const CheckAudioModal = ({ open, deleteRecording, sendRecording, audioRef, audioURL }) => {
    return (
        <Modal open={open}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
        >
            <ModalDialog variant='outlined' size='lg'>
                <DialogTitle>Audio grabado</DialogTitle>
                <DialogContent>
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
                        <Button startDecorator={<Checks size={32} />} onClick={sendRecording} sx={{ borderRadius: '100px' }} color="success" variant="outlined" size="lg">
                            Enviar diagnóstico
                        </Button>
                    </Stack>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}

export default CheckAudioModal