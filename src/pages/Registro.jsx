import { Grid, Stack, useTheme } from "@mui/joy"
import ModeToggle from "../components/ToggleTheme"
import { keyframes } from '@emotion/react';
import { useMediaQuery } from "@mui/material"
import { FormPart2 } from "../components/Registro/FormPart2"
import { FormPart3 } from "../components/Registro/FormPart3"
import { FormPart1 } from "../components/Registro/FormPart1"
import { useState } from "react";

const gradient = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

export const Registro = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [nForm, setnForm] = useState(1);
	console.log(nForm)
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
						nForm === 1 &&<FormPart1 nextFunction={() => setnForm(2)}/>
					}
					{
						nForm === 2 && <FormPart2 nextFunction={() => setnForm(3)} prevFunction={() => setnForm(1)}/>
					}
					{
						nForm === 3 && <FormPart3 nextFunction={() => setnForm(1)} prevFunction={() => setnForm(2)}/>
					}
			</Stack>
			</Grid>
		</Grid>
	)
}
