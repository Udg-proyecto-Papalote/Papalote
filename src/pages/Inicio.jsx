import { Grid, Typography } from "@mui/joy"
import { StreakDays } from "../components/Inicio/StreakDays"
import { ProgressBar } from "../components/Inicio/ProgressBar"
import { StartDiagnostic } from "../components/Inicio/StartDiagnostic"
import Carousel from "../components/Inicio/Carousel"

export const Inicio = () => {

    return (
        <Grid container >
            <Grid container lg={8} lgOffset={2} gap={2} mx={3}>
                <StreakDays />
                <ProgressBar />
                <StartDiagnostic />
                <Carousel />
            </Grid>
        </Grid>
    )
}
