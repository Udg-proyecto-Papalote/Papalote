import { Grid, Stack, useTheme } from "@mui/joy"
import ModeToggle from "../components/ToggleTheme"
import { useMediaQuery } from "@mui/material"
import { FormPart2 } from "../components/Registro/FormPart2"
import { FormPart3 } from "../components/Registro/FormPart3"
import { FormPart1 } from "../components/Registro/FormPart1"
import { useEffect, useState } from "react";
import LandingPage from "../components/Registro/LandingPage";


export const Registro = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
				!isMobile && <LandingPage />
			}
			<Grid lg={5} md={5} xs={12} p='30px' alignContent='center' justifyContent='center' className="animate__animated animate__slideInLeft" sx={{ backgroundColor: 'var(--joy-palette-background-body)' }}>
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
