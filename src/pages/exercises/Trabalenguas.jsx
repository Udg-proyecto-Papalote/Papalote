import { Info, LibraryBooks, StarRounded } from "@mui/icons-material"
import { Alert, Card, CardContent, Chip, Grid, List, ListItem, Tab, TabList, TabPanel, Tabs, Typography, useColorScheme } from "@mui/joy"
import trab from '../../assets/trabalenguas.json'

export const Trabalenguas = ({ title = 'Trabalenguas', theme = 'Dicción', instructions = 'Pronuncia en voz alta el siguiente trabalenguas con claridad y precisión. Hazlo a un ritmo moderado, asegurándote de articular correctamente cada palabra.', content = trab }) => {
    const { mode } = useColorScheme()
    const { tigres } = trab

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

    return (
        <Grid container width='100%' direction='column' gap={1} lg={6} mx='auto' sm={12} md={8}>
            <Grid container
                direction="row"
                gap={1}
                sx={{
                    alignItems: 'center',
                }}>
                <Typography level='h1'>{title}</Typography>
                <Chip variant="soft" color="primary" size="lg" sx={{ mt: 1 }}>{theme.toUpperCase()}</Chip>
            </Grid>
            <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
                <TabList
                    disableUnderline
                    sx={{
                        p: 0.1,
                        gap: 0.5,
                        borderRadius: '10px'
                    }}
                >
                    <Tab disableIndicator variant="outlined" color='primary'>Info</Tab>
                    <Tab disableIndicator variant="outlined" color='success'>Recomendaciones</Tab>
                </TabList>
                <TabPanel value={0} sx={{ px: 0, pt: 0.4, pb: 1 }}>
                    <Alert variant='soft' startDecorator={<Info fontSize='30' />} color='primary' size='lg'>
                        <div>
                            <span style={{ fontSize: 20 }}>Instrucciones</span>
                            <List marker="circle">
                                <ListItem sx={{py:0}}>
                                    <Typography level="body-md" >
                                        {instructions}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{py:0}}>
                                    <Typography level="body-md" >
                                        Pasa tu mouse sobre la oración para enfatizarla.
                                    </Typography>
                                </ListItem>
                            </List>
                        </div>
                    </Alert>
                </TabPanel>
                <TabPanel value={1} sx={{ px: 0, pt: 0.4, pb: 1 }}>
                    <Alert variant='soft' startDecorator={<StarRounded fontSize='100' />} color='success' size='lg'>
                        <div>
                            <span style={{ fontSize: 20 }}>Recomendaciones</span>
                            <Typography level="body-md" >
                                Recuerda, la práctica constante es clave para el dominio. Cuanto más practiques, más mejorarás tu <Typography fontWeight='900'>dicción</Typography>. Avanza al siguiente nivel solo cuando te sientas completamente seguro de haber realizado este ejercicio con precisión y fluidez.
                            </Typography>
                        </div>
                    </Alert>
                </TabPanel>
            </Tabs>

            <Card sx={{ mt: 0 }}>
                <CardContent orientation="horizontal">
                    <LibraryBooks />
                    <Typography level='title-lg' ml={-1}>
                        Lee
                    </Typography>
                </CardContent>
                <CardContent sx={{ py: 2, px: 5 }}>
                    <Typography textAlign='center'>
                        {tigres.map((sentence, index) => (
                            <Typography fontSize={{ sm: 22, lg: 26, xs: 20, md: 24 }} letterSpacing={1} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} key={index} textAlign='justify'>
                                {sentence + '. '}
                            </Typography>
                        ))}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

