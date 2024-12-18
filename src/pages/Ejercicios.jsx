import { Accordion, AccordionDetails, accordionDetailsClasses, AccordionGroup, AccordionSummary, accordionSummaryClasses, Checkbox, Grid, Input, List, ListItem, Stack, Typography } from "@mui/joy"
import ExerciseCard from "../components/Ejercicios/ExerciseCard"
import { exercises } from "./exercises/data";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";


const themes = ['Dicción', 'Letra R', 'Impostación', 'Caudal y control de aire', 'Vocalización', 'Palabras de difícil pronunciación', 'Potencia', 'Articulación', 'Respiración']
export const Ejercicios = () => {
	const { exercisesDone, currentDiagnostic } = useSelector((state) => state.user)
	const { recomendaciones } = currentDiagnostic
	const isClicked = (id) => {
		return exercisesDone.hasOwnProperty(id)
	}

	const [isRendered, setIsRendered] = useState(false)
	const [filteredExercises, setFilteredExercises] = useState(exercises)
	const [recommendedExercises, setRecommendedExercises] = useState({})

	const [value, setValue] = useState(themes)

	const [search, setSearch] = useState('')

	useEffect(() => {
		// set filtered exercises depending on the themes selected. 'exercises' is the object with all the exercises
		const filtered = Object.keys(exercises).reduce((acc, key) => {
			if (value.some((theme) => exercises[key].theme.includes(theme) && exercises[key].title.toLowerCase().includes(search.toLowerCase()))) {
				acc[key] = exercises[key]
			}
			return acc
		}, {})
		setFilteredExercises(filtered)

		// set recommended exercises depending on the themes selected
		const recommended = Object.keys(exercises).map((key) => {
			const exercise = exercises[key]
			if (recomendaciones.includes(key) && value.some((theme) => exercise.theme.includes(theme) && exercise.title.toLowerCase().includes(search.toLowerCase()))) {
				return key
			}
		}).filter((key) => key !== undefined)

		setRecommendedExercises(recommended)

	}, [value, search])

	useEffect(() => {
		setIsRendered(true)
		setValue(themes)
		setRecommendedExercises(Object.keys(exercises).filter((key) => recomendaciones.includes(key)))
	}, [isRendered])

	// open first accordion by default
	const [expanded, setExpanded] = useState(true)
	return (
		isRendered && <Grid mx={4} my={3} >
			<Grid container spacing={2} lg={8} lgOffset={2} md={12} sx={{ flexGrow: 1, alignItems: 'stretch', justifyItems: 'center' }}>
				<Grid item xs={12}>
					<Stack direction='row' justifyContent='space-between' alignItems='baseline'>
						<Typography level="h1" my={2}>🌀 Ejercicios</Typography>
						<Input placeholder="Busca un ejercicio..." variant="outlined" startDecorator={<Search />} size='lg' onChange={(e) => setSearch(e.target.value)} />
					</Stack>
					<AccordionGroup
						variant="outlined"
						transition="0.2s"
						sx={(theme) => ({
							borderRadius: 'lg',
							[`& .${accordionSummaryClasses.button}:hover`]: {
								bgcolor: 'transparent',
							},
							[`& .${accordionDetailsClasses.content}`]: {
								boxShadow: `inset 0 1px ${theme.vars.palette.divider}`,
								[`&.${accordionDetailsClasses.expanded}`]: {
									paddingBlock: '0.75rem',
								},
							},
						})}
					>
						<Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)}>
							<AccordionSummary>Filtros</AccordionSummary>
							<AccordionDetails variant="soft">
								<Typography id="rank" level="body-sm" sx={{ fontWeight: 'lg', mb: 1.5 }}>
									Selecciona los temas de los ejercicios que deseas ver
								</Typography>
								<div role="group" aria-labelledby="rank">
									<List
										orientation="horizontal"
										wrap
										sx={{
											'--List-gap': '20px',
											'--ListItem-radius': '20px',
											'--ListItem-minHeight': '32px',
											'--ListItem-gap': '4px',
										}}
									>
										{themes.map(
											(item, index) => (
												<ListItem key={item}>
													<Checkbox
														size="sm"
														disableIcon
														overlay
														label={item}
														checked={value.includes(item)}
														variant={value.includes(item) ? 'soft' : 'outlined'}
														onChange={(event) => {
															if (event.target.checked) {
																setValue((val) => [...val, item]);
															} else {
																setValue((val) => val.filter((text) => text !== item));
															}
														}}
														slotProps={{
															action: ({ checked }) => ({
																sx: checked
																	? {
																		border: '1px solid',
																		borderColor: 'primary.500',
																	}
																	: {},
															}),
														}}
													/>
												</ListItem>
											),
										)}
									</List>
								</div>
							</AccordionDetails>
						</Accordion>
					</AccordionGroup>
				</Grid>
				{recomendaciones.length > 1 && (
					<>
						<Grid item xs={12}>
							<Typography level="h2" my={2}>✨ Ejercicios recomendados</Typography>
						</Grid>
						<Grid container xs={12} mx={1} spacing={1} alignItems="stretch">
							{recommendedExercises.length > 0 &&
								recommendedExercises.map((key) => {
									const exercise = exercises[key];
									return (
										<Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', flex: 1 }} key={key}>
											<ExerciseCard
												title={exercise.title}
												id={key}
												theme={exercise.theme}
												type={exercise.type}
												level={isClicked(key) ? exercisesDone[key].percentage : 0}
												sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}  // Ensure card takes full height of Grid item
											/>
										</Grid>
									);
								})}
						</Grid>
						<Grid item xs={12}>
							<Typography level="h2" my={2}>🍃 Otros ejercicios</Typography>
						</Grid>
					</>
				)}
				<Grid container xs={12} alignItems="stretch">
					{Object.keys(filteredExercises).map((key) => {
						const exercise = exercises[key];
						return (
							(!recomendaciones.includes(key) || key === 'Respiración I') && (
								<Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', flex: 1 }} key={key}>
									<ExerciseCard
										title={exercise.title}
										id={key}
										theme={exercise.theme}
										type={exercise.type}
										level={isClicked(key) ? exercisesDone[key].percentage : 0}
										sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}  // Ensure card takes full height of Grid item
									/>
								</Grid>
							)
						);
					})}
				</Grid>

			</Grid>
		</Grid>
	)
}
