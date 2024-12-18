import { AspectRatio, Button, Grid, LinearProgress, Option, Select, Stack, Typography, useColorScheme } from "@mui/joy"
import Instructions from "../../components/Ejercicios/Instructions"
import Title from "../../components/Ejercicios/Title"
import { exercises } from "./data"
import Ending from "../../components/Ejercicios/Ending"
import CheckboxCard from "../../components/Ejercicios/CheckboxCard"
import { Looks3, LooksOne, LooksTwo } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { startSaveTrackExercises } from "../../store/slices/userThunks"

const Audio = ({ src }) => {
    return (
        <audio controls src={src} style={{ maxWidth: '100%', zoom: 1 }} />
    )
}

const WordToSay = ({ word, mode }) => {
    return (
        <Typography level='h2' textAlign='center' sx={{ textDecoration: 'underline', textDecorationColor: mode === 'dark' ? '#db2777' : '#ec4899', textDecorationThickness: 5, wordBreak: 'break-all' }} px={2}>
            {word}
        </Typography>
    )
}

const EscuchaYRepite = () => {
    const { id } = useParams()
    const { title, theme, instructions, recommendations, words, ending, audio, video } = exercises[id]

    const { mode } = useColorScheme()

    const { exercisesDone } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [checkedBoxes, setCheckedBoxes] = useState(0)

    const [wordNumber, setWordNumber] = useState( exercisesDone[id]?.maxLevel || 0 )
    const [maxWordNumber, setMaxWordNumber] = useState(0)

    const [ready, setReady] = useState(false)

    const [isRendered, setIsRendered] = useState(false)

    useEffect(() => {
        setMaxWordNumber(Math.min(Math.max(maxWordNumber, wordNumber), words.length - 1))
        setWordNumber(Math.min(Math.max(wordNumber, 0), words.length - 1))
    }, [wordNumber]);

    useEffect(() => {
        Object.keys(exercisesDone).length > 0 &&
            Object.keys(exercisesDone).includes(id) &&
            setMaxWordNumber(exercisesDone[id].maxLevel) &&
            setWordNumber(exercisesDone[id].maxLevel)
    }, []);

    useEffect(() => {
        words.length > 0 &&
        // dispatch(setTrabalenguasExercise({ name: id, maxLevel: maxWordNumber, percentage: (100 * (maxWordNumber) / words.length) }))
        dispatch(startSaveTrackExercises({ name: id, maxLevel: maxWordNumber, percentage: (100 * (maxWordNumber) / words.length) }))
    }, [maxWordNumber]);

    useEffect(() => {
        setIsRendered(true)
    }, [])

    const unselectCheckboxes = () => {
        // unselect all checkboxes by clicking on the unselect button
        const checkboxes = document.querySelectorAll('input[type="checkbox"]')
        checkboxes.forEach(checkbox => checkbox.click())
        setCheckedBoxes(0)
    }

    return (
        isRendered && <Grid container direction='column' gap={1} lg={6} lgOffset={3} mdOffset={2} sm={12} md={8} xs={12} px={{ xs: 2 }}>
            <Title title={title} theme={theme} />
            {
                !ready ?
                    <>
                        <Instructions instructions={instructions + '.Marca las casillas de cada tarjeta para continuar'} recommendations={recommendations} />
                        <Select value={wordNumber} variant="soft" size='lg' sx={{ ml: 'auto' }} >
                            {
                                Array.from({ length: words.length }, (_, index) => (
                                    <Option key={index} value={index} onClick={() => setWordNumber(index)} disabled={index > maxWordNumber}>
                                        {/* {words[index]?.length > 10 ? words[index].slice(0, 10) + '...' : words[index]} */}
                                        Nivel {index + 1}
                                    </Option>
                                ))
                            }
                        </Select>
                        <Grid container spacing={1} sx={{ flexGrow: 1, alignItems: 'stretch', justifyItems: 'center' }}>
                            {!!video && <Grid item='true' lg={8} sm={12} md={12} xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CheckboxCard title={'Video'} description={'Posiciona tu lengua de esta manera al pronunciar el sonido'} icon={<LooksOne size={32} />} coso={
                                    <AspectRatio ratio={1} sx={{ maxWidth: '380px', width: '100%', minWidth: '100px' }} color='none'>
                                        <video
                                            controls
                                        >
                                            <source
                                                src={video}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </AspectRatio>
                                } checkedBoxes={checkedBoxes} setCheckedBoxes={setCheckedBoxes} setUncheckedBoxes={() => setCheckedBoxes(checkedBoxes - 1)
                                } />
                            </Grid>}
                            <Grid item='true' lg={!!video ? 4 : 12} sm={12} md={12} xs={12} sx={{ display: 'flex', flexDirection: !!video ?'column' : 'row' }} gap={1}>
                                <CheckboxCard title='Audio' description="Pronuncia de esta manera el sonido" icon={!!video ? <LooksTwo size={32} /> :<LooksOne size={32} />} coso={<Audio src={audio} />} checkedBoxes={checkedBoxes} setCheckedBoxes={setCheckedBoxes} setUncheckedBoxes={() => setCheckedBoxes(checkedBoxes - 1)
                                } />
                                <CheckboxCard title='Lee' description="Lee la palabra en voz alta" icon={!!audio && !!video ? <Looks3 size={32} /> : <LooksTwo size={32} />} coso={<WordToSay word={words[wordNumber]} mode={mode} />} checkedBoxes={checkedBoxes} setCheckedBoxes={setCheckedBoxes} setUncheckedBoxes={() => setCheckedBoxes(checkedBoxes - 1)
                                } />
                            </Grid>
                        </Grid>
                        <Stack direction='row' gap={2} mb={2}>
                            <Stack width='100%' justifyItems='center' gap={1}>
                                <LinearProgress determinate value={
                                    (wordNumber + 1) / words.length * 100
                                } size='lg' variant="outlined" />
                                <Typography level='title-md' color='neutral' textAlign='right' fontWeight={600} >
                                    {wordNumber + 1}/{words.length}
                                </Typography>
                            </Stack>
                            {wordNumber === words.length - 1 ?
                                <Button color='neutral' size='lg' variant="outlined" onClick={() => {
                                    setWordNumber(wordNumber + 1)
                                    setReady(true)
                                }} startDecorator='🎉'>
                                    ¡Listo!
                                </Button> :
                                <Button
                                    color='neutral' size='lg' variant="soft" onClick={() => {
                                        setWordNumber(wordNumber + 1)
                                        unselectCheckboxes()
                                    }} disabled={checkedBoxes !== (!!video + !!audio + 1)}>Siguiente</Button>
                            }
                        </Stack>
                    </> :
                    <Ending ending={ending} theme={theme} resetFunction={() => setReady(false)} image={
                        <AspectRatio ratio={1} sx={{ width: '150px', height: '100px', mb: 5 }} color='none'>
                            <img src='https://i.pinimg.com/originals/fc/48/e4/fc48e4677fcff30b3381cb177fea9ccb.gif'/>
                        </AspectRatio>
                    } />
            }

            {/* <Ending ending={ ending } theme={ theme } /> */}
        </Grid>
    )
}

export default EscuchaYRepite
