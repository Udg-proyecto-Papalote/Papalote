import { LibraryBooks } from "@mui/icons-material"
import { Button, Card, CardContent, Grid, LinearProgress, Option, Select, Stack, Typography, useColorScheme, AspectRatio } from "@mui/joy"
import { exercises } from "./data"
import { useEffect, useState } from "react"
import Instructions from "../../components/Ejercicios/Instructions"
import Title from "../../components/Ejercicios/Title"
import Ending from "../../components/Ejercicios/Ending"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setTrabalenguasExercise } from "../../store/slices/userSlice"

export const Trabalenguas = () => {
    const { id } = useParams()

    const { exercisesDone } = useSelector((state) => state.user)
    
    const { title, theme, instructions, recommendations, trabalenguas = [], ending } = exercises[id]
    const [trabalengua, setTrabalengua] = useState(0)
    const [maxTrabalengua, setMaxTrabalengua] = useState(0)
    const [ready, setReady] = useState(false)
    const { mode } = useColorScheme()

    // is rendered
    const [isRendered, setIsRendered] = useState(false)

    const dispatch = useDispatch()

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = mode === 'dark' ? '#4d7c0f' : '#a3e635'
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
        Object.keys(exercisesDone).length > 0 &&
            Object.keys(exercisesDone).includes(id) &&
            setTrabalengua(exercisesDone[id].maxLevel - 1)
    }, []);

    useEffect(() => {
        setMaxTrabalengua(Math.max(maxTrabalengua, trabalengua))
    }, [trabalengua]);
    
    useEffect(() => {
        trabalenguas.length > 0 &&
        dispatch(setTrabalenguasExercise({ name: id, maxLevel: maxTrabalengua, percentage: (100 * (maxTrabalengua) / trabalenguas.length) }))
    }, [maxTrabalengua]);

    useEffect(() => {
        setIsRendered(true)
    }, [])

    return (
        isRendered && <Grid container width='100%' direction='column' gap={1} lg={6} mx='auto' sm={12} md={8}>
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
                                    Array.from({ length: maxTrabalengua + 1 }, (_, index) => (
                                        <Option key={index} value={index}>
                                            {`Trabalenguas ${index + 1}`}
                                        </Option>
                                    ))
                                }
                            </Select>
                        </CardContent>
                        <CardContent sx={{ py: 2, px: 5 }}>
                            <Typography textAlign='center'>
                                {
                                    trabalenguas[trabalengua]?.length > 0 && trabalenguas[trabalengua].map((sentence, index) => (
                                        <Typography fontSize={{ sm: 22, lg: 26, xs: 20, md: 24 }} letterSpacing={1} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} key={index} textAlign='justify'>
                                            {sentence}
                                        </Typography>
                                    ))
                                }
                            </Typography>
                        </CardContent>
                    </Card>
                    <Stack direction='row' alignItems='center' gap={2}>
                        <LinearProgress determinate value={(100 * (trabalengua + 1) / trabalenguas.length)} size='lg' />
                        {
                            trabalengua === trabalenguas?.length - 1 ?
                                <Button color='neutral' size='lg' variant="outlined" onClick={() => setReady(true)} startDecorator='🎉'>
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

