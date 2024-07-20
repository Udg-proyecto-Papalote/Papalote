import { Grid, Typography } from "@mui/joy"
import { StreakDays } from "../components/Inicio/StreakDays"
import { ProgressBar } from "../components/Inicio/ProgressBar"
import { StartDiagnostic } from "../components/Inicio/StartDiagnostic"

export const Inicio = () => {
    return (
        <Grid mx={10}>
            {/* <Typography level='h1'>Inicio</Typography> */}
            <Grid container gap={2}>
                <StreakDays />
                <ProgressBar percentage={20} />
                <StartDiagnostic isFirstTime={true} />
            </Grid>
        </Grid>
    )
}
