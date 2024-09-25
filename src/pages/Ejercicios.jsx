import { Grid, Typography } from "@mui/joy"
import ExerciseCard from "../components/Ejercicios/ExerciseCard"
import { exercises } from "./exercises/data";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export const Ejercicios = () => {
	const { exercisesDone, currentDiagnostic } = useSelector((state) => state.user)
	const { recomendaciones } = currentDiagnostic
	const isClicked = (id) => {
		return exercisesDone.hasOwnProperty(id)
	}

	const [isRendered, setIsRendered] = useState(false)

	useEffect(() => {
		setIsRendered(true)
	}, [isRendered])
	return (
		isRendered && <Grid mx={4} my={3} >
			<Grid container spacing={2} lg={8} lgOffset={2} md={12} sx={{ flexGrow: 1, alignItems: 'stretch', justifyItems: 'center' }}>
				{recomendaciones.length > 1 &&
					<>
						<Grid item xs={12}>
							<Typography level="h1" my={2}>✨ Ejercicios Recomendados</Typography>
						</Grid>
						{
							recomendaciones.map((key) => {
								const exercise = exercises[key];
								return (
									<Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column' }} key={key}>
										<ExerciseCard
											title={exercise.title}
											id={key}
											theme={exercise.theme}
											type={exercise.type}
											level={isClicked(key) ? exercisesDone[key].percentage : 0}
										/>
									</Grid>
								)
							})
						}
					</>}
				<Grid item xs={12}>
					<Typography level="h1" my={2}>🌀 Ejercicios</Typography>
				</Grid>
				{
					Object.keys(exercises).map((key) => {
						const exercise = exercises[key];
						return (
							!recomendaciones.includes(key) &&
							<Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column' }} key={key}>
								<ExerciseCard
									title={exercise.title}
									id={key}
									theme={exercise.theme}
									type={exercise.type}
									level={isClicked(key) ? exercisesDone[key].percentage : 0}
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
