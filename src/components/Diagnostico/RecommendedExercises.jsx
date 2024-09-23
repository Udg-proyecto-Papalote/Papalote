import { Button, Card, CardContent, Stack, Typography, Chip } from "@mui/joy"
import { Link } from "react-router-dom"



const emojis = ['🍭', '🧃', '🎃', '🪅', '🎏', '🎈', '🍋']

const RecommendedExercises = ({ title = <></>, exercises = [
    {
        title: 'Trabalenguas Populares I',
        theme: 'dicción',
        type: 'trabalenguas',
        id: 'Dicción 1',
    },
    {
        title: 'Trabalenguas Populares II',
        theme: 'dicción',
        type: 'trabalenguas',
        id: 'Dicción 2'
    },
    {
        title: 'Combinaciones consonantes con R',
        theme: 'letra r',
        type: 'escuchayrepite',
        id: 'Letra R III'
    }
] }) => {
    return (
        <Card sx={{ mt: 2.5 }}>
            <CardContent>
                {title}
                <CardContent orientation='vertical' sx={{ pt:1, display: 'flex' }}>
                    <Stack useFlexGap sx={{ flexWrap: 'wrap' }}>
                        {
                            exercises.map(({ title, theme, type, id, progress }) => (
                                <Link to={`/ejercicios/${type}/${id}`} style={{ textDecoration: 'none', flexGrow: 1 }} key={id}>
                                    <Button size='lg' color='neutral' variant='plain' sx={{ width: '100%', justifyContent: 'flex-start', alignContent: 'baseline' }} startDecorator={<Typography fontSize={22}>
                                       {emojis[Math.floor(Math.random() * emojis.length)]}
                                    </Typography>
                                    }>
                                        {title} <Chip variant="soft" color="warning" size="sm" sx={{ ml:1 }}>{theme.toUpperCase()}</Chip>
                                    </Button>
                                </Link>
                            ))
                        }
                    </Stack>
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default RecommendedExercises
