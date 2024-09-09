import { keyframes } from "@emotion/react";
import { AspectRatio, Card, Grid, Typography } from "@mui/joy";

const gradient = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const phrases = [
	{
		title: 'Mejora tu fluidez al hablar',
		description: 'Descubre cómo superar barreras al hablar en público y mejorar tu comunicación con nuestro diagnóstico personalizado.',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Megaphone-2--Streamline-Core" height="14" width="14"><desc>Megaphone 2 Streamline Icon: https://streamlinehq.com</desc><g id="megaphone-2--bullhorn-loud-megaphone-share-speaker-transmit"><path id="Union" fill="#2859c5" fill-rule="evenodd" d="M4 3.5H3c-1.65685 0 -3 1.34315 -3 3 0 1.30622 0.834808 2.41746 2 2.82929V10.5c0 1.6569 1.34315 3 3 3h0.5c0.55228 0 1 -0.4477 1 -1s-0.44772 -1 -1 -1H5c-0.55228 0 -1 -0.4477 -1 -1v-7Z" clip-rule="evenodd" stroke-width="1"></path><g id="Vector 1180"><path fill="#8fbffa" d="M11.6634 0.794702 3.99591 3.49994v6l7.74679 2.34186c1.1105 0.3238 2.2573 -0.3992 2.2573 -1.423V2.19271C14 1.13767 12.7877 0.412306 11.6634 0.794702Z" stroke-width="1"></path></g></g></svg>,
	},
	{
		// Hablar con confianza es posible: Analizamos tu tono, dicción, y velocidad para ayudarte a expresarte con mayor seguridad.
		title: 'Hablar con confianza es posible',
		description: 'Analizamos tu tono, dicción, y velocidad para ayudarte a expresarte con mayor seguridad.',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Smiley-Cute--Streamline-Core" height="14" width="14"><desc>Smiley Cute Streamline Icon: https://streamlinehq.com</desc><g id="smiley-cute"><path id="Union" fill="#8fbffa" fill-rule="evenodd" d="M6.999 0a7 7 0 1 0 0 14 7 7 0 0 0 0 -14Z" clip-rule="evenodd" stroke-width="1"></path><path id="Union_2" fill="#2859c5" fill-rule="evenodd" d="M3.936 5.408c0.063 -0.102 0.278 -0.24 0.543 -0.24s0.48 0.138 0.543 0.24a0.625 0.625 0 1 0 1.065 -0.655c-0.34 -0.553 -1.013 -0.835 -1.608 -0.835 -0.595 0 -1.267 0.282 -1.608 0.835a0.625 0.625 0 1 0 1.065 0.655Zm5.583 -0.24c0.265 0 0.48 0.138 0.543 0.24a0.625 0.625 0 1 0 1.065 -0.655c-0.34 -0.553 -1.013 -0.835 -1.608 -0.835 -0.595 0 -1.268 0.282 -1.608 0.835a0.625 0.625 0 1 0 1.065 0.655c0.063 -0.102 0.278 -0.24 0.543 -0.24ZM4.179 8.01c0.345 0 0.625 0.28 0.625 0.625a0.785 0.785 0 0 0 1.57 0 0.625 0.625 0 1 1 1.25 0 0.785 0.785 0 0 0 1.57 0 0.625 0.625 0 1 1 1.25 0 2.035 2.035 0 0 1 -3.445 1.468 2.035 2.035 0 0 1 -3.445 -1.467c0 -0.346 0.28 -0.626 0.625 -0.626Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>,
	},
	{
		// Diagnóstico de voz y fluidez: Identifica tus áreas de mejora y empieza a hablar con mayor claridad y confianza.
		title: 'Diagnóstico de voz y fluidez',
		description: 'Identifica tus áreas de mejora y empieza a hablar con mayor claridad y confianza.',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Ai-Generate-Portrait-Image-Spark--Streamline-Core" height="14" width="14"><desc>Ai Generate Portrait Image Spark Streamline Icon: https://streamlinehq.com</desc><g id="ai-generate-portrait-image-spark--picture-photography-photo-image-artificial-intelligence-ai"><path id="Subtract" fill="#8fbffa" fill-rule="evenodd" d="M0.5 0.443A1.5 1.5 0 0 1 1.56 0.004h8a1.5 1.5 0 0 1 1.5 1.5v4.152c-1.09 -0.434 -2.524 0.063 -2.835 1.485l-0.023 0.104a1.426 1.426 0 0 1 -1.147 1.093c-1.406 0.245 -1.947 1.582 -1.621 2.666H1.56a1.5 1.5 0 0 1 -1.5 -1.5v-8c0 -0.398 0.158 -0.78 0.44 -1.06Z" clip-rule="evenodd" stroke-width="1"></path><path id="Union" fill="#2859c5" fill-rule="evenodd" d="M7.335 3.25a1.774 1.774 0 1 1 -3.548 0 1.774 1.774 0 0 1 3.548 0ZM5.56 5.904A2.956 2.956 0 0 0 2.605 8.86c0 0.163 0.132 0.296 0.295 0.296h2.818c0.285 -0.405 0.73 -0.713 1.337 -0.819a1.427 1.427 0 0 0 1.093 -0.909A2.955 2.955 0 0 0 5.56 5.905Zm3.885 1.503c0.19 -0.868 1.427 -0.874 1.625 -0.007l0.01 0.044 0.02 0.086a2.693 2.693 0 0 0 2.16 2.037c0.904 0.157 0.904 1.457 0 1.614a2.692 2.692 0 0 0 -2.164 2.054l-0.026 0.113c-0.198 0.867 -1.435 0.861 -1.625 -0.007l-0.02 -0.097a2.676 2.676 0 0 0 -2.157 -2.064c-0.903 -0.158 -0.903 -1.454 0 -1.611a2.676 2.676 0 0 0 2.154 -2.054l0.015 -0.071 0.008 -0.037Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>,
	},
	{
		// Comunicación efectiva para introvertidos: Aprende a dominar la impostación y la dicción con nuestro enfoque diseñado especialmente para ti.
		title: 'Comunicación efectiva para introvertidos',
		description: 'Aprende a dominar la impostación y la dicción con nuestro enfoque diseñado especialmente para ti.',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Group-Meeting-Call--Streamline-Core" height="14" width="14"><desc>Group Meeting Call Streamline Icon: https://streamlinehq.com</desc><g id="group-meeting-call--group-meeting-call-work"><path id="Subtract" fill="#8fbffa" fill-rule="evenodd" d="M2.218 0C1.545 0 1 0.545 1 1.218v4.57c0 0.674 0.545 1.22 1.218 1.22h9.564c0.673 0 1.218 -0.546 1.218 -1.22v-4.57C13 0.545 12.455 0 11.782 0H2.218Z" clip-rule="evenodd" stroke-width="1"></path><path id="Union" fill="#2859c5" fill-rule="evenodd" d="M7 3.708a1.35 1.35 0 1 0 0 -2.701 1.35 1.35 0 0 0 0 2.7Zm-2.374 2.9a2.408 2.408 0 0 1 4.748 0c0.037 0.218 -0.146 0.4 -0.368 0.4H4.994c-0.222 0 -0.405 -0.182 -0.368 -0.4Z" clip-rule="evenodd" stroke-width="1"></path><path id="Union_2" fill="#2859c5" fill-rule="evenodd" d="M3.48 10.886a1.441 1.441 0 1 0 0 -2.882 1.441 1.441 0 0 0 0 2.883Zm7.045 0a1.441 1.441 0 1 0 0 -2.882 1.441 1.441 0 0 0 0 2.883Zm-7.046 0.779a2.336 2.336 0 0 0 -2.303 1.947c-0.035 0.212 0.143 0.388 0.358 0.388h3.891c0.215 0 0.393 -0.176 0.358 -0.388a2.336 2.336 0 0 0 -2.304 -1.947Zm4.743 1.947a2.336 2.336 0 0 1 4.607 0c0.035 0.212 -0.143 0.388 -0.358 0.388H8.58c-0.214 0 -0.392 -0.176 -0.357 -0.388Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>,
	}, {
		// Transforma tu manera de comunicarte: Desde la letra ‘r’ hasta la velocidad de tus palabras, te ayudamos a perfeccionar tu expresión.
		title: 'Transforma tu manera de comunicarte',
		description: 'Desde la letra ‘r’ hasta la velocidad de tus palabras, te ayudamos a perfeccionar tu expresión.',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Sprout--Streamline-Core" height="14" width="14"><desc>Sprout Streamline Icon: https://streamlinehq.com</desc><g id="sprout"><path id="Union" fill="#8fbffa" fill-rule="evenodd" d="M9.7027 5.0412C10.4975 5.4649 11.5213 5.3909 12.2365 4.7683C12.9741 4.1918 13.3129 2.2905 13.4334 1.4063C13.4686 1.1485 13.2874 0.9183 13.0285 0.8919C12.139 0.8013 10.2059 0.6829 9.4765 1.2596C8.6031 1.879 8.3167 3.0454 8.7287 3.9895C8.6741 4.021 8.6227 4.06 8.576 4.1067C7.9493 4.7335 7.4061 5.7069 7.0116 6.6592C6.7578 6.3029 6.4381 5.9855 6.0567 5.6711C6.3027 4.8104 5.9991 3.8274 5.2412 3.29C4.5398 2.7353 2.6876 2.8453 1.8203 2.9327C1.5614 2.9589 1.3797 3.1895 1.4152 3.4474C1.5336 4.3093 1.8617 6.1301 2.571 6.6845C3.3117 7.3292 4.3943 7.366 5.1811 6.8549C5.632 7.2352 5.8736 7.5412 6.0202 7.871C6.1856 8.2434 6.265 8.7246 6.265 9.5231C6.265 9.9188 6.5782 10.2434 6.9736 10.2577C7.369 10.2719 7.7047 9.9704 7.7331 9.5758C7.7762 8.9762 8.0076 8.0962 8.3692 7.223C8.7333 6.3438 9.1872 5.5745 9.6155 5.1462C9.6483 5.1133 9.6774 5.0782 9.7027 5.0412Z" clip-rule="evenodd" stroke-width="1"></path><path id="Vector" fill="#2859c5" d="M7 9.523C2.2508 9.523 0.14 11.6338 0.14 11.6338V13.1839H13.86V11.6338S11.7493 9.523 7 9.523Z" stroke-width="1"></path></g></svg>,
	}
]


const LandingPage = () => {
	return (
		<Grid container lg={7}
			md={7}
			sx={{
				background: 'linear-gradient(45deg, #572dff, #13b2f7, #2de3c2)',
				backgroundSize: '600% 600%',
				animation: `${gradient} 4s ease infinite`
			}}
			alignContent='center' justifyContent='center' p='20px'
		// sx={{ backgroundColor: 'var(--joy-palette-background-body)', borderRight: '2px solid var(--joy-palette-primary-outlinedBorder)', padding: '20px' }} className="animate__animated animate__slideInRight"
		>
			<div style={{ textAlign: 'center', mb: 3 }}>
				<AspectRatio ratio='1' color='none'>
					<img src='/kite.png' alt='Papalote' style={{ width: '100%' }} />
				</AspectRatio>
				<Typography ml={-1.5} fontSize='36px' textColor='#fff' fontStyle='italic' fontWeight='600'>Papalote</Typography>
			</div>
			<Grid container spacing={3} p={5} sx={{ flexGrow: 1, alignItems: 'stretch', justifyItems: 'center' }} pt={1}>
				{
					phrases.map((item, index) => (
						<Grid item xs={12} sm={6} md={6} lg={4} key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
							<Card sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'start', borderRadius: 25, backgroundColor: "rgba(255, 245, 255, 0.8)", filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))', backdropFilter: 'blur(100px)', borderColor: 'var(--joy-palette-neutral-300, #CDD7E1)' }}>
									<AspectRatio ratio='1' color='none' sx={{width: 40}}>
										{item.icon}
									</AspectRatio>
								<Typography level="title-md" fontStyle='italic' textColor='#171A1C'>{item.title}</Typography>
								<Typography level="body-xs" textColor='#555E68'>{item.description}</Typography>
							</Card>
						</Grid>
					))
				}
			</Grid>
		</Grid>
	)
}

export default LandingPage
