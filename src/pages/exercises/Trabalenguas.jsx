import { Info, LibraryBooks, Replay, StarRounded, YardOutlined } from "@mui/icons-material"
import { Alert, Button, Card, CardContent, Chip, Grid, LinearProgress, List, ListItem, Option, Select, Stack, Tab, TabList, TabPanel, Tabs, Typography, useColorScheme, AspectRatio } from "@mui/joy"
import { exercises } from "./data"
import { useEffect, useState } from "react"
import { CardActions } from "@mui/material"

export const Trabalenguas = ({ exerciseName = 'Diccion1' }) => {
    const { title, theme, instructions, recommendations, trabalenguas, ending } = exercises[exerciseName]
    const [trabalengua, setTrabalengua] = useState(0)
    const [maxTrabalengua, setMaxTrabalengua] = useState(0)
    const [ready, setReady] = useState(false)
    const { mode } = useColorScheme()

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
        setMaxTrabalengua(Math.max(maxTrabalengua, trabalengua))
        localStorage.setItem(exerciseName, maxTrabalengua)
    }, [trabalengua]);

    useEffect(() => {
        setMaxTrabalengua(localStorage.getItem(exerciseName) || 0)
    }, []);

    return (
        <Grid container width='100%' direction='column' gap={1} lg={6} mx='auto' sm={12} md={8}>
            <Grid container
                direction="row"
                gap={1}
                sx={{
                    alignItems: 'center',
                }}>
                <Typography level='h2'>{title}</Typography>
                <Chip variant="soft" color="primary" size="lg" sx={{ mt: 1 }}>{theme.toUpperCase()}</Chip>
            </Grid>

            {!ready ?
                <>
                    <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
                        <TabList
                            disableUnderline
                            sx={{
                                p: 0.1,
                                gap: 0.5,
                                borderRadius: '10px'
                            }}
                        >
                            <Tab disableIndicator variant="outlined" color='primary'>Instrucciones</Tab>
                            <Tab disableIndicator variant="outlined" color='success'>Recomendaciones</Tab>
                        </TabList>
                        <TabPanel value={0} sx={{ px: 0, pt: 0.4, pb: 1 }}>
                            <Alert variant='soft' color='primary' size='lg'>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Info fontSize='30' sx={{ mr: 1 }} />
                                        <span style={{ fontSize: 20 }}>Instrucciones</span>
                                    </div>
                                    <List marker="circle" sx={{ ml: 3 }}>
                                        {
                                            instructions.split('.').map((instruction, index) => (
                                                instruction.length > 0 && <ListItem key={index}>
                                                    <Typography level="body-md" >
                                                        {instruction + '.'}
                                                    </Typography>
                                                </ListItem>
                                            ))
                                        }
                                        <ListItem sx={{ py: 0 }}>
                                            <Typography level="body-md" >
                                                Pasa tu mouse sobre la oración para enfatizarla.
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </div>
                            </Alert>
                        </TabPanel>
                        <TabPanel value={1} sx={{ px: 0, pt: 0.4, pb: 1 }}>
                            <Alert variant='soft' color='success' size='lg'>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <StarRounded fontSize='30' sx={{ mr: 1 }} />
                                        <span style={{ fontSize: 20 }}>Recomendaciones</span>
                                    </div>
                                    <List marker="circle" sx={{ ml: 3 }}>
                                        {
                                            recommendations.split('.').map((recommendation, index) => (
                                                recommendation.length > 0 && <ListItem key={index}>
                                                    <Typography level={{ lg: 'body-md', sm: 'body-xs' }} >
                                                        {recommendation + '.'}
                                                    </Typography>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </div>
                            </Alert>
                        </TabPanel>
                    </Tabs>
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
                                    trabalenguas[trabalengua].map((sentence, index) => (
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
                            trabalengua === trabalenguas.length - 1 ?
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
                <Card sx={{ mt: 0 }}>
                    <CardContent  sx={{ alignItems: 'center', justifyItems: 'center' }}>
                        <AspectRatio ratio={1} sx={{ width: '120px', height: '80px', mt: -4, mb:2 }} color='none'>
                            <img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI1bWNyeWRyejhnMWl2OHAzcHQyM2VvOWY5bm10NDQ3NGI0bXZsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BGkUHWRF5ZiXmkWdmO/giphy.webp' alt='Celebration' />
                        </AspectRatio>
                        <Typography level='h3' >
                            ¡Terminaste el ejercicio!
                        </Typography>
                        <Typography fontSize={20} textAlign='center' fontStyle='italic'>
                            {
                                ending.split(' ').map((word, index) => (
                                    <Typography key={index} fontWeight={word.startsWith(theme.toLowerCase()) ? 800 : 400}>
                                        {word + ' '}
                                    </Typography>
                                ))
                            }
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        {/* Reiniciar */}
                        <Button color='primary' size='lg' variant='outlined' onClick={() => setReady(false)} startDecorator={<Replay />}>
                            Reiniciar
                        </Button>

                        {/* Volver */}
                        <Button color='danger' size='lg' variant='outlined' onClick={() => {}}>
                            Volver a la página de ejercicios
                        </Button>
                    </CardActions>
                </Card>
            }
        </Grid>
    )
}

