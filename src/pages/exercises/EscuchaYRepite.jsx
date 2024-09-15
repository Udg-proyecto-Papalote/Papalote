import { AspectRatio, Grid } from "@mui/joy"
import Instructions from "../../components/Ejercicios/Instructions"
import Title from "../../components/Ejercicios/Title"
import { exercises } from "./data"
import Ending from "../../components/Ejercicios/Ending"
import CheckboxCard from "../../components/Ejercicios/CheckboxCard"
import { Image } from "@mui/icons-material"

const EscuchaYRepite = ({ exerciseName = 'Diccion7' }) => {
    const { title, theme, intructions, recommendations, words, ending } = exercises[exerciseName]

    return (
        <Grid container width='100%' direction='column' gap={1} lg={6} mx='auto' sm={12} md={8}>
            <Title title={ title } theme={ theme } />
            <>
                <Instructions instructions={ intructions } recommendations={ recommendations } />

                <Grid container spacing={2}>
                    <CheckboxCard />
                    <CheckboxCard coso ={ <AspectRatio ratio={1} sx={{ width: '120px', height: '80px', mt: -3, mb: 2 }} color='none'>
                    <img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI1bWNyeWRyejhnMWl2OHAzcHQyM2VvOWY5bm10NDQ3NGI0bXZsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BGkUHWRF5ZiXmkWdmO/giphy.webp' alt='Celebration' />
                </AspectRatio> } />
                    <CheckboxCard />
                </Grid>
            </>

            {/* <Ending ending={ ending } theme={ theme } /> */}
        </Grid>
    )
}

export default EscuchaYRepite
