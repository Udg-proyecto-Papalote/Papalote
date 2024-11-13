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
        <Link to={`/ejercicios/${type}/${id}`} style={{ textDecoration: 'none', height: '100%' }}>
            <Card 
                orientation="horizontal" 
                sx={{
                    transition: "background-color 0.5s ease-in-out",  // Apply transition to the base style
                    ":hover": { backgroundColor: 'var(--joy-palette-neutral-softHoverBg)', border:
                    '1px solid', borderColor: 'var(--joy-palette-neutral-400)'
                     }, // Only background color changes on hover
                    cursor: 'pointer', 
                    flex: 1 ,
                    height: '100%'
                }}
            >
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
