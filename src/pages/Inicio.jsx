import { Grid, Typography } from "@mui/joy"
import { StreakDays } from "../components/Inicio/StreakDays"
import { ProgressBar } from "../components/Inicio/ProgressBar"
import { StartDiagnostic } from "../components/Inicio/StartDiagnostic"
import Carousel from "../components/Inicio/Carousel"

export const Inicio = () => {
    
    return (
        <Grid mx={10} sx={{ '@media (min-width: 1500px)': { mx: '400px' } }}>
            <Grid container gap={2}>
                <StreakDays />
                <ProgressBar percentage={20} />
                <StartDiagnostic isFirstTime={true} />
                <Carousel />
            </Grid>
        </Grid>
    )
}
