import { Card, CardContent, Chip, CircularProgress, Typography } from '@mui/joy'
import { Link } from 'react-router-dom'

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

const ExerciseCard = ({ title, level = 0, theme = '', type = '', id = '' }) => {
    return (
        <Link to={`/ejercicios/${type}/${id}`} style={{ textDecoration: 'none' }}>
            <Card orientation='horizontal' sx={{ ":hover": { transition: "background-color 0.5s ease-in-out", backgroundColor: 'var(--joy-palette-neutral-softHoverBg)' }, 'mouse': 'cursor', flex: 1 }}>
                <CircularProgress size="lg" determinate value={level}>
                    {level.toFixed(0)} %
                </CircularProgress>
                <CardContent>
                    <CardContent orientation='horizontal' sx={{ alignItems: 'center' }}>
                        <Chip variant="soft" color={colors[theme.toLocaleLowerCase()]} size='sm'>{theme.toLocaleUpperCase()}</Chip>
                    </CardContent>
                    <CardContent>
                        <Typography level='h4'>{title}</Typography>
                    </CardContent>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ExerciseCard
