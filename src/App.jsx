import { Grid } from '@mui/joy'
import { ExtendedNavBar } from './components/ExtendedNavBar'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Diagnostico } from './pages/Diagnostico'
import { Ejercicios } from './pages/Ejercicios'

function App() {
	return (
		<Grid width='100%'>
			<ExtendedNavBar />
			<Grid>
				<Routes>
					<Route path='/' element={<Inicio />} />
					<Route path='/ejercicios' element={<Ejercicios />} />
					<Route path='/diagnostico' element={<Diagnostico />} />
				</Routes>
			</Grid>
		</Grid>
	)
}

export default App
