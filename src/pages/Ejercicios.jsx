import { Grid, Typography } from "@mui/joy"
import ExerciseCard from "../components/Ejercicios/ExerciseCard"
import { exercises } from "./exercises/data";


export const Ejercicios = () => {
	return (
		<Grid mx={4} my={3} >
			<Grid container spacing={2} lg={8} lgOffset={2} md={12} sx={{ flexGrow: 1, alignItems: 'stretch', justifyItems: 'center' }}>
				<Grid item xs={12}>
					<Typography level="h1" my={2}>Ejercicios</Typography>
				</Grid>
				{
					Object.keys(exercises).map((key) => {
						const exercise = exercises[key];
						return (
							<Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column' }}>
								<ExerciseCard
									title={exercise.title}
									id={key}
									theme={exercise.theme}
									type={exercise.type}
								/>
							</Grid>
						)
					})
				}
			</Grid>

			{/* <EscuchaYRepite /> */}
			{/* <Trabalenguas /> */}
		</Grid>
	)
}
