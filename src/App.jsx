import { Grid } from '@mui/joy'
import { ExtendedNavBar } from './components/ExtendedNavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Diagnostico } from './pages/Diagnostico'
import { Ejercicios } from './pages/Ejercicios'
import { InicioSesion } from './pages/InicioSesion'
import { Registro } from './pages/Registro'

function App() {
	const { pathname } = useLocation()
	return (
		<Grid width='100%'>
			{
				pathname !== '/iniciarsesion' && pathname !== '/registro' && <ExtendedNavBar />
			}
			<Grid>
				<Routes>
					<Route path='*' element={<Inicio />} />
					<Route path='/ejercicios' element={<Ejercicios />} />
					<Route path='/diagnostico' element={<Diagnostico />} />
					<Route path='/iniciarsesion' element={<InicioSesion />} />
					<Route path='/registro' element={<Registro />} />
				</Routes>
			</Grid>
		</Grid>
	)
}

export default App
