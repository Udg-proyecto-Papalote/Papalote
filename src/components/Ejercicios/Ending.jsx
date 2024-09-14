import { Replay } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/joy'

const Ending = ({ image = <></>, ending = "uno.dos", resetFunction, theme = '' }) => {
    return (
        <Card sx={{ mt: 0 }}>
            <CardContent sx={{ alignItems: 'center', justifyItems: 'center' }}>
                { image }
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
                <Button color='primary' size='lg' variant='outlined' onClick={resetFunction} startDecorator={<Replay />}>
                    Reiniciar
                </Button>

                {/* Volver */}
                <Button color='danger' size='lg' variant='outlined' onClick={() => { }}>
                    Volver a la página de ejercicios
                </Button>
            </CardActions>
        </Card>
    )
}

export default Ending
