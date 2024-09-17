import { AspectRatio, Grid } from "@mui/joy"
import Instructions from "../../components/Ejercicios/Instructions"
import Title from "../../components/Ejercicios/Title"
import { exercises } from "./data"
import Ending from "../../components/Ejercicios/Ending"
import CheckboxCard from "../../components/Ejercicios/CheckboxCard"
import { Filter1, Filter2, Filter3 } from "@mui/icons-material"

const cardsContent = [
    {
        title: 'Escucha',
        description: 'Escucha la pronunciación de la palabra',
        icon: <Filter1 />,
        coso: <audio controls src='https://res.cloudinary.com/ds8hfmrth/video/upload/v1725379369/papalote/wgx7snrtak1blwi8jqhy.webm' style={{ maxWidth: '100%', zoom: .8 }} />
    }, {
        title: 'Imita',
        description: 'Posiciona tu lengua de esta manera al pronunciar la letra \'d\'',
        icon: <Filter2 />,
        coso: <AspectRatio ratio={1} sx={{ maxWidth: '200px', width: '170px', minWidth: '100px' }} color='none'>
            <img src='https://pronunciationstudio.com/wp-content/uploads/in5-archives/plosives/Plosives/assets/images/item_833.png' />
        </AspectRatio>
    }, {
        title: 'Repite',
        description: 'Repite la palabra en voz alta',
        icon: <Filter3 />
    }
]

const EscuchaYRepite = ({ exerciseName = 'Diccion7' }) => {
    const { title, theme, intructions, recommendations, words, ending } = exercises[exerciseName]

    return (
        <Grid container width='100%' direction='column' gap={1} lg={8} mx='auto' sm={12} md={8}>
            <Title title={title} theme={theme} />
            <>
                <Instructions instructions={intructions} recommendations={recommendations} />
                <Grid container spacing={1}  sx={{ flexGrow: 1, alignItems: 'stretch', justifyItems: 'center' }}>
                    {
                        cardsContent.map((card, index) => (
                            <Grid item lg={4} sm={12} md={4} xs={12} sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
                                <CheckboxCard {...card} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>

            {/* <Ending ending={ ending } theme={ theme } /> */}
        </Grid>
    )
}

export default EscuchaYRepite
