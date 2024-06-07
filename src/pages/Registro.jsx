import { FormControl, Grid, Input, FormLabel, Typography, Button, Stack, Divider, useTheme, Link, FormHelperText } from "@mui/joy"
import ModeToggle from "../components/ToggleTheme"
import { Google, Mail, Person } from "@mui/icons-material"
import { Key } from "@mui/icons-material"
import { Star, Repeat } from "@phosphor-icons/react"
import { keyframes } from '@emotion/react';
import { useMediaQuery } from "@mui/material"
import { useForm } from "../hooks/useForm"
import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom"

const gradient = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const formData = {
    name: "",
    email: "",
    password: "",
    repeatedPassword: "",
};

const formValidations = {
    name: [
        (value) => String(value).length >= 3,
        "El nombre debe tener mínimo 3 caracteres",
    ],
    email: [(value) => String(value)
		.toLowerCase()
		.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), 
		"El correo no es válido"],
    password: [
        (value) => String(value).length >= 8 && String(value).length <= 16,
		"La contraseña debe tener entre 8 y 16 caracteres",
    ],
    repeatedPassword: [
        (value, currentPassword) => String(value) === currentPassword,
        "Las contraseñas no coinciden",
    ],
};

export const Registro = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [isPasswordValid, setIsPasswordValid] = useState(true)
	const [isEmailValid, setIsEmailValid] = useState(true)
    const [isRepeatedPasswordValid, setIsRepeatedPasswordValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)

	const {
        name,
        email,
        password,
        repeatedPassword,
        onInputChange,
        nameValid,
        emailValid,
        passwordValid,
        repeatedPasswordValid,
        isFormValid,
        formState,
    } = useForm(formData, formValidations);

	const handleClick = () => {
		console.log(formState)

		if(!isFormValid || repeatedPassword !== password) {

			!!emailValid && setIsEmailValid(false)
			!!passwordValid && setIsPasswordValid(false)
            repeatedPassword !== password && setIsRepeatedPasswordValid(false)
            !!nameValid && setIsNameValid(false)
		}
	}

	const handleFocus = () => {
		setIsEmailValid(true)
		setIsPasswordValid(true)
        setIsRepeatedPasswordValid(true)
        setIsNameValid(true)
	}

	return (
		<Grid container height='100vh' >
            {
				!isMobile &&
				<Grid lg={6}
					md={6}
					sx={{
						background: 'linear-gradient(45deg, #572dff, #13b2f7, #2de3c2)',
						backgroundSize: '600% 600%',
						animation: `${gradient} 4s ease infinite`
					}}>
				</Grid>
			}
			<Grid lg={6} md={6} xs={12} p='30px' alignContent='center' justifyContent='center' className="animate__animated animate__slideInLeft" sx={{backgroundColor: 'var(--joy-palette-background-body)'}}>
				<Stack spacing={3} width={isMobile ? '100%' : '75%'} marginX='auto' >

					<h1>Crea una cuenta</h1>
					<ModeToggle />
					<Button startDecorator={<Google />} variant='soft' color='neutral' size="lg"><Typography level="body-lg">Regístrate con Google</Typography></Button>
					<Divider><Star weight="fill" /></Divider>
                    <FormControl>
                        <FormLabel sx={{ fontWeight: 'bold' }}>Nombre</FormLabel>
                        <Input type='text' name="name" startDecorator={<Person color='primary' />} value={ name } onChange={ onInputChange } onFocus={ handleFocus }/>
                        {
                            !isNameValid && <FormHelperText sx={{ fontSize: '0.8rem' }}>{ nameValid }</FormHelperText>
                        }
                    </FormControl>
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
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Repite contraseña</FormLabel>
                            <Input type='password' name='repeatedPassword' startDecorator={<Repeat size={22} weight="bold"/>} value={ repeatedPassword } onChange={ onInputChange } onFocus={ handleFocus }/>
						{
							!isRepeatedPasswordValid && <FormHelperText sx={{ fontSize: '0.8rem' }}>{ repeatedPasswordValid }</FormHelperText>
						}
					</FormControl>
					<Button onClick={ handleClick }>Registrarse</Button>
					
					<Typography level='body-xs'>¿Ya estás registrado? <Link component={LinkRouter} to='/iniciarsesion'>Inicia Sesión</Link></Typography>
				</Stack>
			</Grid>
		</Grid>
	)
}
