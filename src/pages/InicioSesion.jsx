import { FormControl, Grid, Input, FormLabel, Typography, Button, Stack, Divider } from "@mui/joy"
import ModeToggle from "../components/ToggleTheme"
import { Google, Mail, Person } from "@mui/icons-material"
import { Key } from "@mui/icons-material"
import { Star } from "@phosphor-icons/react"
import { keyframes } from '@emotion/react';

const gradient = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

export const InicioSesion = () => {
	return (
		<Grid container height='100%'>

			<Grid lg={6} md={6} p='30px' alignContent='center' justifyContent='center' sx={{borderRight: '2px solid var(--demo-palette-neutral-outlinedBorder)'}}>
				<Stack spacing={4} useFlexGap={false}>

					<h1>Inicio de Sesión</h1>
					<ModeToggle />
					<Button startDecorator={<Google />} variant='outlined' color='neutral' size="lg"><Typography level="body-lg">Iniciar con Google</Typography></Button>

					<Divider><Star weight="fill" /></Divider>

					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Nombre completo</FormLabel>
						<Input variant='soft' startDecorator={<Person color='primary' />} />
					</FormControl>
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Correo electrónico</FormLabel>
						<Input variant='soft' type='email' startDecorator={<Mail color='warning' />} />
					</FormControl>
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Contraseña</FormLabel>
						<Input variant='soft' type='password' startDecorator={<Key />} />
						{/* <FormHelperText>This is a helper text.</FormHelperText> */}
					</FormControl>
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Repite contraseña</FormLabel>
						<Input variant='soft' type='password' startDecorator={<Key />} />
						{/* <FormHelperText>This is a helper text.</FormHelperText> */}
					</FormControl>
				</Stack>
			</Grid>
			<Grid lg={6}
				md={6}
				sx={{
					background: 'linear-gradient(45deg, #64DCFF, #DD4AFF, #64DCFF)',
					backgroundSize: '600% 600%',
					animation: `${gradient} 6s ease infinite`
				}}>

			</Grid>

		</Grid>
	)
}
