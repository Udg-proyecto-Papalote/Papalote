import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/joy"
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { exercises } from "../../pages/exercises/data";

export const ProgressBar = () => {
	const {exercisesDone} = useSelector((state) => state.user)

	const totalExercises = Object.keys(exercisesDone).reduce((acc, key) => {
		if (exercisesDone[key].percentage === 100) {
			acc += 1
		}
		return acc
	}, 0)
	const [percentage, setPercentage] = useState( 0)

	useEffect(() => {
		setPercentage(totalExercises * 100 / Object.keys(exercises).length)
	}, [exercisesDone])
	return (
		<Grid width='230px'>
			<Card>
				<CardContent>
					<CircularProgress sx={{ '--CircularProgress-size': '200px', '--CircularProgress-thickness': '15px' }} determinate value={ percentage }>
						<Box
							sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
						>
							<Typography level="h2">{ percentage.toFixed(2) }%</Typography>
							<Typography level="body-md">Ejercicios</Typography>
							<Typography level="body-md">realizados</Typography>
						</Box>
					</CircularProgress>
				</CardContent>
			</Card>
		</Grid>
	)
}

// Props
ProgressBar.propTypes = {
	percentage: PropTypes.number
}
