import { Card, CardContent, Grid, Step, StepIndicator, Stepper, Typography } from "@mui/joy"
import PropTypes from "prop-types";
import { Heart } from "@phosphor-icons/react"
import { useEffect, useState } from "react";

const weekDays = ['Lunes', 'Martes', 'Xiércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

export const StreakDays = ({ streakDays = 12, lastWeek = ['Lunes', 'Miércoles', 'Jueves' ] }) => {
    const today = new Date().getDay()
    const [days, setDays] = useState(weekDays)
    const isDay = (day) => lastWeek.includes(day)

    useEffect(() => {
        setDays([...weekDays.slice(today), ...weekDays.slice(0, today)])
        // eslint-disable-next-line
    }, [])

    return (
        <Grid width='500px'>
            <Card sx={{padding:'34px', height: '233px'}}>
                <CardContent orientation="horizontal" sx={{mb:2, mt:1}}>
                    <Heart size={85} weight="duotone" color="#fb7185" />
                    <CardContent>
                        <Typography level="title-lg">Racha de días</Typography>
                        <Typography level="h1">{streakDays} días</Typography>
                    </CardContent>
                </CardContent>
                <CardContent orientation="horizontal">
                    <Grid justifyContent='center' width='100%'>

                        <Stepper>
                            {
                                days.map((day, index) => (
                                    <Step key={index} indicator={
                                        <StepIndicator color={isDay(day) ? 'success' : 'neutral'} sx={{ width: 400}}>
                                            <Typography fontWeight="lg" level="h4" color="neutral" p={1}>
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
    streakDays: PropTypes.number,
    lastWeek: PropTypes.array
}
