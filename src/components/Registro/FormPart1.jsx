import { FormControl, Input, FormLabel, Typography, Button, Divider, Link, FormHelperText } from "@mui/joy"
import { Google, Mail, Person } from "@mui/icons-material"
import { Key } from "@mui/icons-material"
import { Star } from "@phosphor-icons/react"
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom"
import PropTypes from 'prop-types'

const formData = {
    name: "",
    email: "",
    password: ""
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
    ]
};

export const FormPart1 = ({ nextFunction }) => {
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)

    const {
        name,
        email,
        password,
        onInputChange,
        nameValid,
        emailValid,
        passwordValid,
        isFormValid,
        formState,
    } = useForm(formData, formValidations);

    const handleClick = () => {
        console.log(formState)

        if (!isFormValid) {

            !!emailValid && setIsEmailValid(false)
            !!passwordValid && setIsPasswordValid(false)
            !!nameValid && setIsNameValid(false)
        }
        else {
            nextFunction()
        }
    }

    const handleFocus = () => {
        setIsEmailValid(true)
        setIsPasswordValid(true)
        setIsNameValid(true)
    }

    return (

        <>
            <Button startDecorator={<Google />} variant='soft' color='neutral' size="lg"><Typography level="body-lg">Regístrate con Google</Typography></Button>
            <Divider><Star weight="fill" /></Divider>
            <FormControl>
                <FormLabel sx={{ fontWeight: 'bold' }}>Nombre</FormLabel>
                <Input type='text' name="name" startDecorator={<Person color='primary' />} value={name} onChange={onInputChange} onFocus={handleFocus} />
                {
                    !isNameValid && <FormHelperText sx={{ fontSize: '0.8rem' }}>{nameValid}</FormHelperText>
                }
            </FormControl>
            <FormControl>
                <FormLabel sx={{ fontWeight: 'bold' }}>Correo electrónico</FormLabel>
                <Input type='email' name="email" startDecorator={<Mail color='warning' />} value={email} onChange={onInputChange} onFocus={handleFocus} />
                {
                    !isEmailValid && <FormHelperText sx={{ fontSize: '0.8rem' }}>{emailValid}</FormHelperText>
                }
            </FormControl>
            <FormControl>
                <FormLabel sx={{ fontWeight: 'bold' }}>Contraseña</FormLabel>
                <Input type='password' name='password' startDecorator={<Key />} value={password} onChange={onInputChange} onFocus={handleFocus} />
                {
                    !isPasswordValid && <FormHelperText sx={{ fontSize: '0.8rem' }}>{passwordValid}</FormHelperText>
                }
            </FormControl>
            <Button onClick={handleClick}>Registrarse</Button>

            <Typography level='body-xs'>¿Ya estás registrado? <Link component={LinkRouter} to='/iniciarsesion'>Inicia Sesión</Link></Typography>
        </>
    )
}

// Props
FormPart1.propTypes = {
    nextFunction: PropTypes.func.isRequired
}