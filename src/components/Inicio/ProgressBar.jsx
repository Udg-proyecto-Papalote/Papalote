import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/joy"
import PropTypes from "prop-types";

export const ProgressBar = ({ percentage = 20 }) => {
	return (
		<Grid width='185px'>
			<Card>
				<CardContent>
					<CircularProgress sx={{ '--CircularProgress-size': '145px', '--CircularProgress-thickness': '12px' }} determinate value={ percentage }>
						<Box
							sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
						>
							<Typography level="h3">{ percentage }%</Typography>
							<Typography level="body-sm">Ejercicios</Typography>
							<Typography level="body-sm">realizados</Typography>
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
