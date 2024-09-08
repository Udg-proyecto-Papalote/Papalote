import { Info, LibraryBooks } from "@mui/icons-material"
import { Alert, Card, CardContent, Chip, Grid, Typography } from "@mui/joy"
import trab from '../../assets/trabalenguas.json'

export const Trabalenguas = ({ title = 'Trabalenguas', theme = 'Dicción', instructions = 'Repetir los siguientes trabalenguas', content = trab }) => {

    const { tigres } = trab
    
    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = '#A3E635'
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
        <Grid container width='100%' direction='column' gap={2} lg={8} mx='auto' sm={12}>
            <Grid container
                direction="row"
                gap={1}
                sx={{
                    alignItems: 'center',
                }}>
                <Typography level='h1'>{title}</Typography>
                <Chip variant="soft" color="primary" size="lg" sx={{ mt: 1 }}>{theme.toUpperCase()}</Chip>
            </Grid>
            <Alert variant='soft' startDecorator={<Info />} color='primary'>
                <div>
                    <span style={{ fontSize: 20 }}>Instrucciones</span>
                    <Typography level="body-md" >
                        {instructions}
                    </Typography>
                    <Typography level="body-md" >
                        Pasa tu mouse sobre la oración para enfatizarla.
                    </Typography>
                </div>
            </Alert>
            <Card>
                <CardContent orientation="horizontal">
                    <LibraryBooks />
                    <Typography level='title-lg' ml={-1}>
                        Lee
                    </Typography>
                </CardContent>
                <CardContent sx={{ py: 2, px: 5 }}>
                    <Typography textAlign='center'>
                    {tigres.map((sentence, index) => (
                        <Typography fontSize={24} letterSpacing={1} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} key={index} textAlign='justify' fontWeight='500'>
                            {sentence + '. '} 
                        </Typography>
                    ))}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

