import { AspectRatio, Button, ButtonGroup, Card, CardContent, Grid, IconButton, Typography } from "@mui/joy"
import Title from "../../components/Ejercicios/Title"
import { useParams } from "react-router-dom"
import { exercises } from "./data"
import { useEffect, useState } from "react"
import Instructions from "../../components/Ejercicios/Instructions"
import Ending from "../../components/Ejercicios/Ending"
import { SelfImprovement, AccessAlarm, PlayArrow } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { setTrabalenguasExercise } from "../../store/slices/userSlice"
import { startSaveTrackExercises } from "../../store/slices/userThunks"

const Design4 = () => {
    const { id } = useParams()
    const { title, theme, image, instructions, recommendations, exercise, ending } = exercises[id]

    const [ready, setReady] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [play, setPlay] = useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
        setReady(true)
        dispatch(startSaveTrackExercises({ name: id, maxLevel: 1, percentage: 100 }))
    }

    useEffect(() => {
        if (play) {
            const interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [play])

    useEffect(() => {
        if (seconds === 5) {
            setPlay(false)
            setSeconds(0)
        }
    }, [seconds])
    return (
        <Grid container direction='column' gap={1} lg={6} lgOffset={3} mdOffset={2} sm={12} md={8} xs={12} px={{ xs: 2 }}>
            <Title title={title} theme={theme} />
            {
                !ready ?
                    <>
                        <Instructions instructions={instructions} recommendations={recommendations} />
                        <Card sx={{ flex: 1 }}>
                            <CardContent sx={{ flexDirection: 'column', gap: 2, justifyContent: 'center', justifyItems: 'center' }}>
                                <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                                    <SelfImprovement />
                                    <Typography level="title-lg">Imita</Typography>
                                </CardContent>
                                <CardContent sx={{ alignItems: 'center', flex: 2, gap: 2 }}>
                                    <AspectRatio ratio={1} sx={{ width: '200px' }} color='none'>
                                        <img src={image} />
                                    </AspectRatio>
                                    <Typography fontWeight={600} fontSize={20} textAlign='center' px={4} fontStyle='italic' mx={4}>
                                        {exercise[0]}
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                        <Card sx={{ flex: 1, mb: 1 }}>
                            <CardContent sx={{ flexDirection: 'column', gap: 2, justifyContent: 'center', justifyItems: 'center' }}>
                                <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                                    <AccessAlarm />
                                    <Typography level="title-lg">Temporizador</Typography>
                                </CardContent>
                                <CardContent sx={{ alignItems: 'center', flex: 2, gap: 2 }}>
                                    <CardContent orientation="horizontal" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <ButtonGroup>
                                            <IconButton onClick={() => setPlay(true)} disabled={play} color='primary'>
                                                <PlayArrow />
                                            </IconButton>
                                        </ButtonGroup>
                                        <Typography fontWeight={600} fontSize={20} fontStyle='italic'>
                                            {seconds} s
                                        </Typography>
                                    </CardContent>
                                    <Typography fontWeight={600} fontSize={20} textAlign='center' px={4} fontStyle='italic' mx={4}>
                                        {exercise[1]}
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                        <Grid ml='auto' justifyContent='flex-end' mb={2}>
                            <Button color='neutral' size='lg' variant="outlined" startDecorator='🎉' onClick={handleClick}>
                                ¡Listo!</Button>
                        </Grid>
                    </> :
                    <Ending ending={ending} theme={theme} resetFunction={() => setReady(false)} image={<AspectRatio ratio={1} sx={{ width: '150px', height: '100px', mb: 5 }} color='none'>
                        <img src='https://i.pinimg.com/originals/a0/34/8b/a0348b5589dfbec85e05a4a39c741441.gif' />
                    </AspectRatio>} />
            }
        </Grid>
    )
}

export default Design4
