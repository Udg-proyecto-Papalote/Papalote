import { Grid } from '@mui/joy'
import { ExtendedNavBar } from './components/ExtendedNavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Diagnostico } from './pages/Diagnostico'
import { Ejercicios } from './pages/Ejercicios'
import { InicioSesion } from './pages/InicioSesion'
import { Registro } from './pages/Registro'
import { useMediaQuery } from '@mui/material'
import ModeToggle from './components/ToggleTheme'

function App() {
	const { pathname } = useLocation()
	const isMobile  = useMediaQuery('(min-width: 400px)')
	return (
		<Grid width='100%'>
			{
				pathname !== '/iniciarsesion' && pathname !== '/registro' && <ExtendedNavBar />
			}
			<Grid justifyContent='center' alignContent='center'>
				<Routes>
					<Route path='*' element={<Inicio />} />
					<Route path='/ejercicios' element={<Ejercicios />} />
					<Route path='/diagnostico' element={<Diagnostico />} />
					<Route path='/iniciarsesion' element={<InicioSesion />} />
					<Route path='/registro' element={<Registro />} />
				</Routes>
			</Grid>
			<Grid container justifyContent='center' alignContent='center'>

			{
				!isMobile && <ModeToggle />
			}
			</Grid>
		</Grid>
	)
}

export default App
