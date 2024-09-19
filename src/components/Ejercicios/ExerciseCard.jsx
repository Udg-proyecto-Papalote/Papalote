import { Card, CardContent, Chip, CircularProgress, Typography } from '@mui/joy'

const colors = {
    'dicción': 'primary',
    'letra r': 'success',
    'caudal y control de aire': 'warning',
    'palabras de difícil pronunciación': 'danger',
    'vocalización': 'neutral',
    // 'impostación': 'secondary',
    // 'potencia': 'info',
    // 'articulación': 'accent',
}

const ExerciseCard = ({ title, level = 0, theme = '' }) => {
    return (
        <Card onClick={() => console.log("HOLA")} orientation='horizontal' sx={{ ":hover": { transition: "background-color 0.5s ease-in-out", backgroundColor: 'var(--joy-palette-neutral-softHoverBg)' }, 'mouse': 'cursor', flex: 1 }}>
            <CircularProgress size="lg" determinate value={(100 * level / 10)}>
                {level} %
            </CircularProgress>
            <CardContent>
                <CardContent orientation='horizontal' sx={{ alignItems: 'center' }}>
                    <Chip variant="soft" color={colors[theme.toLocaleLowerCase()]} size='sm'>{theme.toLocaleUpperCase()}</Chip>
                </CardContent>
                <CardContent>
                    <Typography level='h4'>{ title }</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default ExerciseCard
