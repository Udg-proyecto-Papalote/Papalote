import { Button, ButtonGroup, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormLabel, Grid, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { ArrowLeft, Warning } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startCreateUserWithEmailAndPassword } from "../../store/slices/authThunks";
import { UserContext } from "../../router/AuthRoutes";

const style = { backgroundColor: 'var(--joy-palette-neutral-outlinedHoverBg)' }

export const FormPart3 = ({ prevFunction, nextFunction }) => {
    const [isIll, setIsIll] = useState(false);
    const [understood, setUnderstood] = useState(false)
    const [open, setOpen] = useState(false)

    const { user, setUser } = useContext(UserContext)
    const { email, name, password, gender, age } = user;

    const dispatch = useDispatch()

    const onClick = () => {
        setIsIll(true)
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
        setUnderstood(true)
    }

    const handleClick = () => {
        // dispatch(setIllness(isIll))
        setUser({ ...user, illness: isIll })

        dispatch(startCreateUserWithEmailAndPassword({
            email: email,
            password: password,
            displayName: name,
            illness: isIll,
            gender,
            age
        }))
        nextFunction()
    }

    return (
        <Stack spacing={3} >

            <FormControl sx={{ justifyContent: 'center' }}>
                <FormLabel>
                    <Typography level="body-lg">
                        ¿Cuentas con alguna enfermedad que te impida hablar fluidamente?
                    </Typography>
                </FormLabel>
                <ButtonGroup size="lg" sx={{ justifyContent: 'center', mt: 2 }}>
                    <Button sx={isIll && { ...style }} onClick={onClick}>Sí</Button>
                    <Button sx={!isIll && { ...style }} onClick={() => setIsIll(false)}>No</Button>
                </ButtonGroup>
            </FormControl>
            <Grid alignContent='center' container spacing={1}>
                <Grid sm={6} md={6} lg={6} xs={6} xl={6}>
                    <Button variant='soft' fullWidth size="lg" onClick={prevFunction}><ArrowLeft /></Button>
                </Grid>
                <Grid sm={6} md={6} lg={6} xs={6} xl={6}>
                    <Link to='/'>
                        <Button disabled={isIll ? !understood : isIll} variant='soft' color="success" size="lg" onClick={handleClick} fullWidth>Listo</Button>
                    </Link>
                </Grid>
            </Grid>
            <Modal open={open}  onClose={() => setOpen(false)}>
                <ModalDialog variant="outlined" role="alertdialog" size="lg">
                    <DialogTitle>
                        <Warning />
                        Advertencia
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Considera que nuestros desarrolladores no son médicos, esta aplicación es para dar una guía a gente introvertida.
                    </DialogContent>
                    <DialogActions >
                        <Button size="lg" sx={{width: '400px'}} variant="outlined" color="success" onClick={onClose}>
                            Entendido
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </Stack>
    )
}

// Props
FormPart3.propTypes = {
    nextFunction: PropTypes.func.isRequired,
    prevFunction: PropTypes.func.isRequired
}