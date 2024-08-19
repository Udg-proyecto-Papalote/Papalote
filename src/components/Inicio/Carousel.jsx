import { Box, Button, Card, CardContent, Divider, Grid, IconButton, Stack, Typography } from '@mui/joy'
import { ArrowLeft, ArrowRight, Ear, SoundcloudLogo, UserSound, Star, MicrophoneStage } from '@phosphor-icons/react'
import { useState } from 'react'


const slides = [
	{
		title: 'Ejercicio 1',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis nec nisl ultricies aliquam. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Aenean nec nisl ultricies, aliquam nisl nec, ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia.',
		icon: <Ear size={110} color='#7dd3fc' weight='duotone' style={{ filter: 'drop-shadow(0 0 0.4rem #7dd3fc)' }}/>
	},
	{
		title: 'Ejercicio 2',
		content: 'Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Aenean nec nisl ultricies, aliquam nisl nec, ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia.',
		icon: <MicrophoneStage size={110} color='#7dd3fc' weight='duotone' style={{ filter: 'drop-shadow(0 0 0.4rem #7dd3fc)' }}/>
	},
	{
		title: 'Ejercicio 3',
		content: 'Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Donec nec ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia. Aenean nec nisl ultricies, aliquam nisl nec, ultricies nisi. Nulla facilisi. Sed nec libero nec enim lacinia lacinia.',
		icon: <Star size={110} color='#7dd3fc' weight='duotone'style={{ filter: 'drop-shadow(0 0 0.4rem #7dd3fc)' }} />
	}
]

const Dot = ({ isSelected }) => (
	<Box
		sx={{
			width: 10,
			height: 10,
			borderRadius: '50%',
			border: '1px solid var(--joy-palette-neutral-400)',
			backgroundColor: isSelected ? 'var(--joy-palette-neutral-400)' : 'transparent',
			transition: 'background-color 0.3s',
		}}
	/>
);

const Carousel = () => {
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
						<Typography level='h3'>
							Ejercicios disponibles
						</Typography>
					</CardContent>
					<Divider sx={{ my: 1 }}></Divider>
					<Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
						<IconButton onClick={prevSlide}><ArrowLeft /></IconButton>
						<CardContent orientation='horizontal'>
							<Stack direction={{ xs: 'column', md: 'row' }} gap={2} >
								<CardContent >
									<Typography level='h4'>{slides[currentSlide].title}</Typography>
									<Typography align="justify">{slides[currentSlide].content}</Typography>
								</CardContent>
								<Stack mx={1} gap={1} alignContent='center' justifyContent='center'>
									<IconButton sx={{
										cursor: 'unset', '&:hover': {
											backgroundColor: 'transparent',
										}
									}}>
										{
											slides[currentSlide].icon
										}
									</IconButton>
									<Button variant='soft' size='lg'>Iniciar</Button>
								</Stack>
							</Stack>
						</CardContent>
						<IconButton onClick={nextSlide}><ArrowRight /></IconButton>
					</Box>
				</CardContent>
				<CardContent>
					<Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }} gap={1}>
						{slides.map((_, index) => (
							<Dot key={index} isSelected={currentSlide === index} />
						))}
					</Box>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default Carousel
