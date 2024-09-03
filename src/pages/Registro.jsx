import { Grid, Stack, useTheme } from "@mui/joy"
import ModeToggle from "../components/ToggleTheme"
import { keyframes } from '@emotion/react';
import { useMediaQuery } from "@mui/material"
import { FormPart2 } from "../components/Registro/FormPart2"
import { FormPart3 } from "../components/Registro/FormPart3"
import { FormPart1 } from "../components/Registro/FormPart1"
import { createContext, useContext, useEffect, useState } from "react";

const gradient = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

export const Registro = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [nForm, setnForm] = useState(1);

	const setNumberForm = (number) => {
		setnForm(number)
		// Store the number in the local storage
		localStorage.setItem('formNumber', number)
	}

	useEffect(() => {
		const number = localStorage.getItem('formNumber') || 1
		if (number) {
			setnForm(parseInt(number))
		}
	}, [])

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
			<Grid lg={6} md={6} xs={12} p='30px' alignContent='center' justifyContent='center' className="animate__animated animate__slideInLeft" sx={{ backgroundColor: 'var(--joy-palette-background-body)' }}>
				<Stack spacing={3} width={isMobile ? '100%' : '75%'} marginX='auto' >

					<h1>Crea una cuenta</h1>
					<ModeToggle />

					{
						nForm === 1 && <FormPart1 nextFunction={() => setNumberForm(2)} />
					}
					{
						nForm === 2 && <FormPart2 nextFunction={() => setNumberForm(3)} prevFunction={() => setNumberForm(1)} />
					}
					{
						nForm === 3 && <FormPart3 prevFunction={() => setNumberForm(2)} nextFunction={() => setNumberForm(1)} />
					}
			</Stack>
			</Grid>
		</Grid>
	)
}
