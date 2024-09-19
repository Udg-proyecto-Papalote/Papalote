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
import { createContext, useState } from 'react'
import { Trabalenguas } from './pages/exercises/Trabalenguas'
import EscuchaYRepite from './pages/exercises/EscuchaYRepite'

export const UserContext = createContext()

function App() {
	const { pathname } = useLocation()
	const isMobile = useMediaQuery('(min-width: 400px)')

	const [user, setUser] = useState({})

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Grid width='100%'>
				{
					pathname !== '/iniciarsesion' && pathname !== '/registro' && <ExtendedNavBar />
				}
				<Grid justifyContent='center' alignContent='center'>
					<Routes>
						<Route path='/' element={<Inicio />} />
						<Route path='/diagnostico' element={<Diagnostico />} />
						<Route path='/iniciarsesion' element={<InicioSesion />} />
						<Route path='/registro' element={<Registro />} />
						<Route path="/ejercicios" element={<Ejercicios />} />
						<Route path="/ejercicios/trabalenguas/:id" element={<Trabalenguas />} />
						<Route path="/ejercicios/escuchayrepite/:id" element={<EscuchaYRepite />} />
					</Routes>
				</Grid>
				<Grid container justifyContent='center' alignContent='center'>

					{
						!isMobile && pathname !== '/diagnostico' && <ModeToggle />
					}
				</Grid>
			</Grid>
		</UserContext.Provider>
	)
}

export default App
