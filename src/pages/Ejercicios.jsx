import { Grid, Typography } from "@mui/joy"
import ExerciseCard from "../components/Ejercicios/ExerciseCard"

const recomendedExercises = [
	{
		title: 'Dicción',
		level: 6,
		description: 'Mejora tu dicción con este ejercicio',
	},
	{
		title: 'Pronunciación',
		level: 1,
		description: 'Mejora tu pronunciación con este ejercicio',
	},
]


const allExercises = [
	{
		title: 'Dicción',
		level: 5,
		description: 'Mejora tu dicción con este ejercicio',
	},
	{
		title: 'Pronunciación',
		level: 1,
		description: 'Mejora tu pronunciación con este ejercicio',
	},
	{
		title: 'Vocalización',
		level: 2,
		description: 'Mejora tu vocalización con este ejercicio',
	},
	{
		title: 'Respiración',
		level: 9,
		description: 'Mejora tu respiración con este ejercicio',
	},
	{
		title: 'Entonación',
		level: 3,
		description: 'Mejora tu entonación con este ejercicio',
	},
	{
		title: 'Volumen',
		level: 4,
		description: 'Mejora tu volumen con este ejercicio',
	}
]

export const Ejercicios = () => {
	return (
		<Grid mx={20} my={3}>
			<Typography level="h1" my={2}>Recomendados</Typography>

			<Grid container spacing={2}>
				{recomendedExercises.map((card) => (
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<ExerciseCard
							{...card}
						/>
					</Grid>
				))}

			</Grid>

			<Typography level="h1" my={2}>Todos los ejercicios</Typography>

			<Grid container spacing={2}>
				{allExercises.map((card) => (
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<ExerciseCard
							{...card}
						/>
					</Grid>
				))}

			</Grid>
		</Grid>
	)
}
