import { FormControl, Grid, Input, FormLabel, Typography, Button, Stack, Divider, useTheme, Link, FormHelperText } from "@mui/joy"
import ModeToggle from "../components/ToggleTheme"
import { Google, Mail } from "@mui/icons-material"
import { Key } from "@mui/icons-material"
import { Star } from "@phosphor-icons/react"
import { useMediaQuery } from "@mui/material"
import { useForm } from "../hooks/useForm"
import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom"
import LandingPage from "../components/Registro/LandingPage"

const formData = {
    email: "",
    password: "",
};

const formValidations = {
    email: [(value) => String(value)
		.toLowerCase()
		.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), 
		"El correo no es válido"],
    password: [
        (value) => String(value).length >= 8 && String(value).length <= 16,
		"La contraseña debe tener entre 8 y 16 caracteres",
    ],
};

export const InicioSesion = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const [isPasswordValid, setIsPasswordValid] = useState(true)
	const [isEmailValid, setIsEmailValid] = useState(true)

	const {
        email,
        password,
        onInputChange,
        emailValid,
        passwordValid,
        isFormValid,
        formState,
    } = useForm(formData, formValidations);

	const handleClick = () => {
		console.log(formState)

		if(!isFormValid) {

			!!emailValid && setIsEmailValid(false)
			!!passwordValid && setIsPasswordValid(false)
		}
	}

	const handleFocus = () => {
		setIsEmailValid(true)
		setIsPasswordValid(true)
	}

	return (
		<Grid container height='100vh' >
			<Grid lg={5} md={5} xs={12} p='30px' alignContent='center' justifyContent='center' className="animate__animated animate__slideInRight" sx={{backgroundColor: 'var(--joy-palette-background-body)'}}>
				<Stack spacing={3} width={isMobile ? '100%' : '75%'} marginX='auto' >
					<h1>Inicio de sesión</h1>
					<ModeToggle />
					<Button variant='soft' startDecorator={<Google />} color='neutral' size="lg"><Typography level="body-lg">Iniciar con Google</Typography></Button>
					<Divider><Star weight="fill" /></Divider>
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Correo electrónico</FormLabel>
						<Input type='email' name="email" startDecorator={<Mail color='warning' />} value={ email } onChange={ onInputChange } onFocus={ handleFocus }/>
						{
							!isEmailValid && <FormHelperText sx={{ fontSize: '0.8rem' }}>{ emailValid }</FormHelperText>
						}
					</FormControl>
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Contraseña</FormLabel>
						<Input type='password' name='password' startDecorator={<Key />} value={ password } onChange={ onInputChange } onFocus={ handleFocus }/>
						{
							!isPasswordValid && <FormHelperText sx={{ fontSize: '0.8rem' }}>{ passwordValid }</FormHelperText>
						}
					</FormControl>
					<Button onClick={ handleClick }>Iniciar sesión</Button>
					
					<Typography level='body-xs'>¿Aún no tienes cuenta? <Link component={LinkRouter} to='/auth/registro'>Regístrate</Link></Typography>
				</Stack>
			</Grid>
			{
				!isMobile && <LandingPage />
			}
		</Grid>
	)
}
