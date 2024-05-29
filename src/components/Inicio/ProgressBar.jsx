import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/joy"

export const ProgressBar = () => {
	return (
		<Grid md={2}>

			<Card>
				<CardContent>
					<CircularProgress sx={{ '--CircularProgress-size': '140px', '--CircularProgress-thickness': '12px' }} determinate value={20}>
						<Box
							sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
						>
							<Typography level="h4">20%</Typography>
							<Typography level="body-sm">Ejercicios</Typography>
							<Typography level="body-sm">realizados</Typography>

						</Box>
					</CircularProgress>
				</CardContent>
			</Card>
		</Grid>
	)
}
