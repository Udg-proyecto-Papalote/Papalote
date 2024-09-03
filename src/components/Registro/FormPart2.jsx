import { Button, FormControl, FormLabel, Grid, Input, Option, Select } from "@mui/joy"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import PropTypes from 'prop-types'
import { useContext, useState } from "react"
import { UserContext } from "../../App"

const genres = ['Mujer', 'Hombre', 'No binario', 'Otro']

export const FormPart2 = ({ prevFunction, nextFunction }) => {
	const { user, setUser } = useContext(UserContext);
	const [userGenre, setUserGenre] = useState(user.genero || '')
	const [age, setAge] = useState(0)


	const handleClick = () => {
		if (userGenre && age) {
			setUser({ ...user, genero: userGenre, edad: age })
			nextFunction()
		}
	}

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
							value={userGenre}
							onChange={(e) => setUserGenre(e?.target?.textContent)}
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
						<Input type='number' name="edad" variant="soft" placeholder="Escribe tu edad" value={age} onChange={(e) => setAge(e.target.value)} />
					</FormControl>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid sm={6} xs={6} md={6} lg={6} xl={6} gap={1}>
					<Button mt={2} fullWidth variant="soft" onClick={prevFunction}><ArrowLeft size={30} /></Button>
				</Grid>
				<Grid sm={6} xs={6} md={6} lg={6} xl={6} gap={1}>
					<Button mt={2} fullWidth variant="soft" onClick={handleClick} disabled={
						!userGenre || !age
					}><ArrowRight size={30} /></Button>
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
