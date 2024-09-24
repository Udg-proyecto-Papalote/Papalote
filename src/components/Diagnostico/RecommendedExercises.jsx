import { Button, Card, CardContent, Stack, Typography, Chip } from "@mui/joy"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { exercises } from "../../pages/exercises/data"



const emojis = ['🍭', '🧃', '🎃', '🪅', '🎏', '🎈', '🍋']

const RecommendedExercises = ({ title = <></>, ex = [] }) => {

    const [recommended, setRecommended] = useState([{
        title: 'Respiración diafragmática', theme: 'Respiración', type: 'Video/Gif', id: 'Respiración I'
    }])

    useEffect(() => {
                ex?.length > 0 && setRecommended(
          ex
            .filter((name) => exercises.hasOwnProperty(name)) // Check if the key exists
            .map((name) => ({
              id: name,
              title: exercises[name].title,
              theme: exercises[name].theme,
              type: exercises[name].type
            }))
        );
    }, [ex])    
    return (
        <Card sx={{ mt: 2.5 }}>
            <CardContent>
                {title}
                <CardContent orientation='vertical' sx={{ pt: 1, display: 'flex' }}>
                    <Stack useFlexGap sx={{ flexWrap: 'wrap' }}>
                        {
                            recommended.map(({ title, theme, type, id }) => (
                                <Link to={`/ejercicios/${type}/${id}`} style={{ textDecoration: 'none', flexGrow: 1 }} key={id}>
                                    <Button size='lg' color='neutral' variant='plain' sx={{ width: '100%', justifyContent: 'flex-start', alignContent: 'baseline' }} startDecorator={<Typography fontSize={22}>
                                        {emojis[Math.floor(Math.random() * emojis.length)]}
                                    </Typography>
                                    }>
                                        {title} <Chip variant="soft" color="warning" size="sm" sx={{ ml: 1 }}>{theme.toUpperCase()}</Chip>
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
