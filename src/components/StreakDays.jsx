import { Card, CardContent, Grid, Step, StepIndicator, Stepper, Typography } from "@mui/joy"
import PropTypes from "prop-types";
import { Heart } from "@phosphor-icons/react"

export const StreakDays = ({ days = 12, lastWeek = ['Lunes', 'Miércoles', 'Jueves' ] }) => {
    const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

    const isDay = (day) => lastWeek.includes(day)

    return (
        <Grid lg={4} md={4}>
            <Card invertedColors>
                <CardContent orientation="horizontal">
                    <Heart size={65} weight="duotone" color="#fb7185" />
                    <CardContent>
                        <Typography level="body-md">racha de días</Typography>
                        <Typography level="h2">{days} días</Typography>
                    </CardContent>
                </CardContent>
                <CardContent orientation="horizontal">
                    <Grid justifyContent='center' width='100%'>

                        <Stepper>
                            {
                                weekDays.map((day, index) => (
                                    <Step key={index} indicator={
                                        <StepIndicator color={isDay(day) ? 'success' : 'neutral'}>
                                            <Typography fontWeight="lg" level="title-sm" color="neutral">
                                                {day[0]}
                                            </Typography>
                                        </StepIndicator>
                                    }>

                                    </Step>
                                ))

                            }
                        </Stepper>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

// props
StreakDays.propTypes = {
    days: PropTypes.number,
    lastWeek: PropTypes.array
}
