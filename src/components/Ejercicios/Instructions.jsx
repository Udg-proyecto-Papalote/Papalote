import { Info, StarRounded } from '@mui/icons-material'
import { Alert, Badge, List, ListItem, Tab, TabList, TabPanel, Tabs, Typography } from '@mui/joy'
import { useState } from 'react'

const Instructions = ({ instructions = 'uno.dos', recommendations = 'uno.dos' }) => {
    const [invisible, setInvisible] = useState(false)
    return (
        <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}
            onClick={e => e.target.innerText === 'Recomendaciones' && setInvisible(true)}
        >
            <TabList
                disableUnderline
                sx={{
                    p: 0.1,
                    gap: 0.5,
                    borderRadius: '10px'
                }}
            >
                <Tab disableIndicator variant="outlined" color='primary'>Instrucciones</Tab>
                {
                    recommendations !== 'uno.dos' &&
                    <Badge invisible={invisible} color='primary' size='lg'>
                        <Tab disableIndicator variant="outlined" color='success'
                        >Recomendaciones</Tab>
                    </Badge>
                }
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
    )
}

export default Instructions
