import { Grid } from "@mui/joy"
import Instructions from "../../components/Ejercicios/Instructions"
import Title from "../../components/Ejercicios/Title"
import { exercises } from "./data"
import Ending from "../../components/Ejercicios/Ending"
import CheckboxCard from "../../components/Ejercicios/CheckboxCard"

const EscuchaYRepite = ({ exerciseName = 'Diccion7' }) => {
    const { title, theme, intructions, recommendations, words, ending } = exercises[exerciseName]

    return (
        <Grid container width='100%' direction='column' gap={1} lg={6} mx='auto' sm={12} md={8}>
            <Title title={ title } theme={ theme } />
            <>
                <Instructions instructions={ intructions } recommendations={ recommendations } />

                <Grid container spacing={2}>
                    <CheckboxCard />
                    <CheckboxCard />
                    <CheckboxCard />
                </Grid>
            </>

            {/* <Ending ending={ ending } theme={ theme } /> */}
        </Grid>
    )
}

export default EscuchaYRepite
