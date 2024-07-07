import { Alert, Button, ButtonGroup, FormControl, FormLabel, Grid, Stack, Typography } from "@mui/joy";
import { ArrowLeft, ExclamationMark } from "@phosphor-icons/react";
import { useState } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const style = {backgroundColor: 'var(--joy-palette-neutral-outlinedHoverBg)'}

export const FormPart3 = ( {prevFunction, nextFunction} ) => {

    const [isIll, setIsIll] = useState();
    return (
            <Stack spacing={3} >
               
                <FormControl sx={{ justifyContent: 'center' }}>
                    <FormLabel>
                        <Typography level="body-lg">
                            ¿Cuentas con alguna enfermedad que te impida hablar fluidamente?
                        </Typography>
                    </FormLabel>
                    <ButtonGroup size="lg" sx={{ justifyContent: 'center', mt: 2 }}>
                        <Button sx={isIll && {...style}} onClick={() => setIsIll(true)}>Sí</Button>
                        <Button sx={!isIll && {...style}} onClick={() => setIsIll(false)}>No</Button>
                    </ButtonGroup>
                </FormControl>
                {
                    isIll && <Alert color='warning' startDecorator={<ExclamationMark color='warning'/>} variant='soft'><Typography level='title-md' color='warning'>Aviso</Typography></Alert>
                }
                <Grid alignContent='center' container spacing={1}>
                    <Grid sm={6} md={6} lg={6} xs={6} xl={6}>
                        <Button variant='soft' fullWidth size="lg" onClick={prevFunction}><ArrowLeft /></Button>
                    </Grid>
                    <Grid sm={6} md={6} lg={6} xs={6} xl={6}>
                    <Link to='/'>
                        <Button variant='soft' color="success" size="lg" onClick={nextFunction} fullWidth>Listo</Button>
                    </Link>
                    </Grid>
                </Grid>
            </Stack>
    )
}

// Props
FormPart3.propTypes = {
    nextFunction: PropTypes.func.isRequired,
    prevFunction: PropTypes.func.isRequired
}