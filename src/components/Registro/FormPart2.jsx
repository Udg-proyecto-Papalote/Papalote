import { Button, FormControl, FormLabel, Grid, Input, Option, Select } from "@mui/joy"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import PropTypes from 'prop-types'

const genres = ['Mujer', 'Hombre', 'No binario', 'Otro']

export const FormPart2 = ({ prevFunction, nextFunction }) => {

	return (
		<Grid className='animate__fadeInRight'>

			<Grid container spacing={1}>
				<Grid sm={6} xs={12} md={12} lg={6} xl={6} justifyContent='center' gap={1}>
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Género</FormLabel>
						<Select
							placeholder="Selecciona tu género"
							name="genero"
							required
							variant="soft"
						>
							{
								genres.map((genre) => (
									<Option key={genre} value={genre}>{genre}</Option>
								))
							}
						</Select>
					</FormControl>
				</Grid>
				<Grid sm={6} xs={12} md={12} lg={6} xl={6} gap={1}>
					<FormControl>
						<FormLabel sx={{ fontWeight: 'bold' }}>Edad</FormLabel>
						<Input type='number' name="edad" variant="soft" placeholder="Escribe tu edad" />
					</FormControl>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid sm={6} xs={6} md={6} lg={6} xl={6} gap={1}>
					<Button sx={{ mt: 2 }} fullWidth variant="soft" onClick={prevFunction}><ArrowLeft size={30} /></Button>
				</Grid>
				<Grid sm={6} xs={6} md={6} lg={6} xl={6} gap={1}>
					<Button sx={{ mt: 2 }} fullWidth variant="soft" onClick={nextFunction}><ArrowRight size={30} /></Button>
				</Grid>
			</Grid>
		</Grid>
	)
}


// Props
FormPart2.propTypes = {
	nextFunction: PropTypes.func.isRequired,
	prevFunction: PropTypes.func.isRequired
}
