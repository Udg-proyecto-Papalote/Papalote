import { AspectRatio, Button, Grid, LinearProgress, Option, Select, Stack, Typography, useColorScheme } from "@mui/joy"
import Instructions from "../../components/Ejercicios/Instructions"
import Title from "../../components/Ejercicios/Title"
import { exercises } from "./data"
import Ending from "../../components/Ejercicios/Ending"
import CheckboxCard from "../../components/Ejercicios/CheckboxCard"
import { Looks3, LooksOne, LooksTwo } from "@mui/icons-material"
import { useEffect, useState } from "react"


const cardsContent = [
    {
        title: 'Escucha',
        description: 'Escucha la pronunciación de la palabra',
        icon: <LooksOne size={32} />
    }, {
        title: 'Imita',
        description: 'Posiciona tu lengua de esta manera al pronunciar la letra \'d\'',
        icon: <LooksTwo />
    }, {
        title: 'Repite',
        description: 'Repite la palabra en voz alta',
        icon: <Looks3 />
    }
]

const Audio = ({ src }) => {
    return (
        <audio controls src={src} style={{ maxWidth: '100%', zoom: .8 }} />
    )
}

const Image = ({ src }) => {
    return (
        <AspectRatio ratio={1} sx={{ maxWidth: '200px', width: '170px', minWidth: '100px' }} color='none'>
            <img src={src} />
        </AspectRatio>
    )
}

const WordToSay = ({ word, mode }) => {
    return (
        <Typography level='h3' textAlign='center' sx={{ textDecoration: 'underline', textDecorationColor: mode === 'dark' ? '#db2777' : '#ec4899', textDecorationThickness: 5, overflowWrap: "break-word" }} px={2} >
            {word}
        </Typography>
    )
}

const EscuchaYRepite = ({ exerciseName = 'Diccion7' }) => {
    const { title, theme, intructions, recommendations, words, ending, audio, image } = exercises[exerciseName]


    const { mode } = useColorScheme()

    const [checkedBoxes, setCheckedBoxes] = useState(0)

    const [wordNumber, setWordNumber] = useState(0)
    const [maxWordNumber, setMaxWordNumber] = useState(0)

    useEffect(() => {
        setMaxWordNumber(Math.max(maxWordNumber, wordNumber))
        localStorage.setItem(exerciseName, maxWordNumber)
    }, [wordNumber]);

    useEffect(() => {
        setMaxWordNumber(localStorage.getItem(exerciseName) || 0)
    }, []);


    return (
        <Grid container width='100%' direction='column' gap={1} lg={8} mx='auto' sm={12} md={8}>
            <Title title={title} theme={theme} />
            <>
                <Instructions instructions={intructions + '.Marca las casillas de cada tarjeta para continuar'} recommendations={recommendations} />
                <Grid container spacing={1} sx={{ flexGrow: 1, alignItems: 'stretch', justifyItems: 'center' }}>
                    {
                        cardsContent.map((card, index) => (
                            <Grid item='true' lg={4} sm={12} md={4} xs={12} sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
                                <CheckboxCard {...card} coso={
                                    index === 0 ? <Audio src={audio} /> :
                                        index === 1 ? <Image src={image} /> :
                                            <WordToSay word={words[wordNumber]} mode={mode} />
                                } checkedBoxes={checkedBoxes} setCheckedBoxes={setCheckedBoxes} setUncheckedBoxes={() => setCheckedBoxes(checkedBoxes - 1)
                                } />
                            </Grid>
                        ))
                    }
                </Grid>
                <Stack direction='row' alignItems='center' gap={2}>
                    <LinearProgress determinate value={Math.min((wordNumber + 1) * 100 / words.length, words.length)} size='lg' />
                    <Select defaultValue={wordNumber} value={wordNumber} variant="soft" size='md' onChange={(e) => setWordNumber(e?.target?.value)} sx={{ py: 1.4, width: '150px' }}>
                        {
                            Array.from({ length: maxWordNumber + 1 }, (_, index) => (
                                <Option key={index} value={index}>
                                    {words[index]?.length > 10 ? words[index].slice(0, 10) + '...' : words[index]}
                                </Option>
                            ))
                        }
                    </Select>
                    <Button disabled={checkedBoxes !== cardsContent.length || wordNumber + 1 === words.length} color='neutral' size='lg' variant="soft" onClick={() => setWordNumber(wordNumber + 1)}>Siguiente</Button>
                </Stack>
            </>

            {/* <Ending ending={ ending } theme={ theme } /> */}
        </Grid>
    )
}

export default EscuchaYRepite
