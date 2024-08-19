import { Card, CardContent, CardOverflow, CircularProgress, Grid, Typography } from '@mui/joy'

const ExerciseCard = ({ title, description, level }) => {    
    return (
        <Card onClick={() => console.log("HOLA")} orientation='horizontal' sx={{ ":hover": { transition: "background-color 0.5s ease-in-out", backgroundColor: 'var(--joy-palette-neutral-softHoverBg)' }, 'mouse': 'cursor' }}>
            <CircularProgress size="lg" determinate  value={(100 * level / 10)} >
                Nivel { level }
            </CircularProgress>
            <CardContent>
                <Typography level='h4'>{ title }</Typography>
                <Typography level='body-md'>{ description }</Typography>
            </CardContent>
        </Card>
    )
}

export default ExerciseCard
