import { LibraryBooks } from "@mui/icons-material"
import { Button, Card, CardContent, Grid, LinearProgress, Option, Select, Stack, Typography, useColorScheme, AspectRatio } from "@mui/joy"
import { exercises } from "./data"
import { useEffect, useState } from "react"
import Instructions from "../../components/Ejercicios/Instructions"
import Title from "../../components/Ejercicios/Title"
import Ending from "../../components/Ejercicios/Ending"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { startSaveTrackExercises } from "../../store/slices/userThunks"

const colors = [
    ['#5E4DB2', '#9F8FEF'],
    ['#0055CC', '#388BFF'],
    ['#4d7c0f', '#a3e635'],
]

export const Trabalenguas = () => {
    const { id } = useParams()

    const { exercisesDone } = useSelector((state) => state.user)

    const { title, theme, instructions, recommendations, trabalenguas = [' '], ending, poema = false } = exercises[id]
    const [trabalengua, setTrabalengua] = useState(!!exercisesDone[id]?.maxLevel ? exercisesDone[id].maxLevel : 0)
    const [maxTrabalengua, setMaxTrabalengua] = useState(0)
    const [ready, setReady] = useState(false)
    const { mode } = useColorScheme()

    const [randomNumber, setRandomNumber] = useState(0)

    // is rendered
    const [isRendered, setIsRendered] = useState(false)

    const dispatch = useDispatch()

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = mode === 'dark' ? colors[randomNumber][0] : colors[randomNumber][1]
        e.target.style.borderRadius = '5px'
        // Transition
        e.target.style.transition = 'ease 0.2s'
        // Mouse question
        e.target.style.cursor = 'crosshair'
    }

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = 'transparent'
        e.target.style.fontWeight = 'normal'
        e.target.style.borderRadius = '0px'
        e.target.style.padding = '0px'
    }

    useEffect(() => {
        setMaxTrabalengua(Math.max(maxTrabalengua, trabalengua))
        setTrabalengua(Math.min(Math.max(trabalengua, 0), trabalenguas.length - 1))
    }, [trabalengua]);

    useEffect(() => {
        trabalenguas.length > 0 &&
            dispatch(startSaveTrackExercises({ name: id, maxLevel: maxTrabalengua, percentage: (100 * (maxTrabalengua) / trabalenguas.length) }))
    }, [maxTrabalengua]);

    useEffect(() => {
        setIsRendered(true)
        setRandomNumber(Math.floor(Math.random() * colors.length))
    }, [])

    return (
        isRendered && <Grid container direction='column' gap={1} lg={6} sm={8} xs={8} md={8} xl={6} mx='auto' px={2}>
            <Title title={title} theme={theme} />
            {!ready ?
                <>
                    <Instructions instructions={instructions + 'Pasa tu mouse sobre la oración para enfatizarla.'} recommendations={recommendations} />
                    <Card sx={{ mt: 0 }}>
                        <CardContent orientation="horizontal">
                            <CardContent orientation="horizontal" sx={{ gap: 2 }}>
                                <LibraryBooks />
                                <Typography level='title-lg' >
                                    Lee
                                </Typography>
                            </CardContent>
                            <Select defaultValue={trabalengua} value={trabalengua} variant="soft" size='sm' onChange={(e) => setTrabalengua(e?.target?.value)}>
                                {
                                    Array.from({ length: Math.min(maxTrabalengua + 1, trabalenguas.length) }, (_, index) => (
                                        <Option key={index} value={index}>
                                            {`Ejercicio ${index + 1}`}
                                        </Option>
                                    ))
                                }
                            </Select>
                        </CardContent>
                        <CardContent sx={{ py: 2, px: 5 }}>
                            {
                                !poema ?
                                    <Typography textAlign='center'>
                                        {
                                            trabalenguas[trabalengua]?.length > 0 && trabalenguas[trabalengua].map((sentence, index) => (
                                                <Typography fontSize={{ sm: 22, lg: 26, xs: 20, md: 24 }} letterSpacing={1} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} key={index} textAlign='justify'>
                                                    {sentence}
                                                </Typography>
                                            ))
                                        }
                                    </Typography> :
                                    trabalenguas[trabalengua]?.length > 0 && trabalenguas[trabalengua].map((sentence, index) => (
                                        <Typography fontSize={{ sm: 22, lg: 26, xs: 20, md: 24 }} letterSpacing={1} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} key={index} textAlign='center'>
                                            {sentence}
                                        </Typography>
                                    ))

                            }
                        </CardContent>
                    </Card>
                    <Stack direction='row' alignItems='center' gap={2}>
                        <LinearProgress determinate value={(100 * (trabalengua + 1) / trabalenguas.length)} size='lg' />
                        {
                            trabalengua === trabalenguas?.length - 1 ?
                                <Button color='neutral' size='lg' variant="outlined" onClick={() => {
                                    setTrabalengua(trabalengua + 1)
                                    setReady(true)
                                } 
                                } startDecorator='🎉'>
                                    ¡Listo!
                                </Button> :
                                <Button color='neutral' size='lg' variant='soft' onClick={() => setTrabalengua(trabalengua + 1)}>
                                    Siguiente
                                </Button>
                        }
                    </Stack>
                </>
                :
                <Ending image={<AspectRatio ratio={1} sx={{ width: '120px', height: '80px', mt: -3, mb: 2 }} color='none'>
                    <img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI1bWNyeWRyejhnMWl2OHAzcHQyM2VvOWY5bm10NDQ3NGI0bXZsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BGkUHWRF5ZiXmkWdmO/giphy.webp' alt='Celebration' />
                </AspectRatio>} ending={ending} resetFunction={() => setReady(false)} theme={theme} />
            }
        </Grid>
    )
}

