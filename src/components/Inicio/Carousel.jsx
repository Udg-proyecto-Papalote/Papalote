import { Box, Button, Card, CardContent, Divider, Grid, IconButton, Stack, Typography } from '@mui/joy';
import { ArrowLeft, ArrowRight, Ear, UserSound, MicrophoneStage, Eye, Article } from '@phosphor-icons/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exercises } from '../../pages/exercises/data.js';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked'; 

const getIconByType = (type) => { 
    const commonStyle = { filter: 'drop-shadow(0 0 0.4rem #7dd3fc)', color: '#7dd3fc' };

    switch(type) {
        case 'trabalenguas':
            return <Article size={110} weight='duotone' style={commonStyle} />; 
        case 'Video/Gif':
            return <Eye size={110} weight='duotone' style={commonStyle} />; 
        case 'escuchayrepite':
            return <MicrophoneStage size={110} weight='duotone' style={commonStyle} />;
        case 'TBD':
            return <Ear size={110} weight='duotone' style={commonStyle} />;
        default:
            return null;
    }
};

const slides = Object.entries(exercises).map(([key, exercise]) => ({
    title: exercise.title,
    content: exercise.instructions || exercise.recommendations || '',
    icon: getIconByType(exercise.type),
    location: `/ejercicios/${exercise.type}/${key.replace(/\s+/g, '%20')}`
}));

const Carousel = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <Grid md={12} lg={12}>
            <Card>
                <CardContent>
                    <CardContent orientation='horizontal'>
                        <UserSound size={35} color='#7dd3fc' weight='duotone' />
                        <Typography level='h3'>Ejercicios disponibles</Typography>
                    </CardContent>
                    <Divider sx={{ my: 1 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
                        <IconButton onClick={prevSlide}><ArrowLeft /></IconButton>
                        <CardContent orientation='horizontal'>
                            <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
                                <CardContent>
                                    <Typography level='h4'>{slides[currentSlide].title}</Typography>
                                    <Typography align="justify">{slides[currentSlide].content}</Typography>
                                </CardContent>
                                <Stack mx={1} gap={1} alignContent='center' justifyContent='center'>
                                    <IconButton sx={{
                                        cursor: 'unset', '&:hover': { backgroundColor: 'transparent' }
                                    }}>
                                        {slides[currentSlide].icon}
                                    </IconButton>
                                    <Button variant='soft' size='lg' onClick={() => 
                                        navigate(slides[currentSlide].location)}>Iniciar</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <IconButton onClick={nextSlide}><ArrowRight /></IconButton>
                    </Box>
                </CardContent>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }} gap={1}>
                        {slides.map((_, index) => (
                            <RadioButtonUnchecked key={index} sx={{ opacity: currentSlide === index ? 1 : 0.5 }} />
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Carousel;
