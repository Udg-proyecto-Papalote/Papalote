import { Info, LibraryBooks, StarRounded } from "@mui/icons-material"
import { Alert, Card, CardContent, Chip, Grid, List, ListItem, Tab, TabList, TabPanel, Tabs, Typography, useColorScheme } from "@mui/joy"
import trab from '../../assets/trabalenguas.json'
import { exercises } from "./data"
import { useState } from "react"

export const Trabalenguas = ({ exerciseName = 'Diccion1' }) => {
    const { title, theme, instructions, recommendations, trabalenguas } = exercises[exerciseName]
    const [trabalengua, setTrabalengua] = useState(0)
    const mode = useColorScheme()

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
                <Typography level='h2'>{title}</Typography>
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
                                            <Typography level={{lg: 'body-md', sm: 'body-xs'}} >
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
                    <LibraryBooks />
                    <Typography level='title-lg' ml={-1}>
                        Lee
                    </Typography>
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
        </Grid>
    )
}

