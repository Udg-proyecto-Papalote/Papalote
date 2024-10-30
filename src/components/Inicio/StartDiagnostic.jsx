import { Box, Card, CardContent, Grid, Typography } from "@mui/joy"
import { Sparkle } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const StartDiagnostic = () => {
    const { currentDiagnostic } = useSelector((state) => state.user)
    const isFirstTime = true;
    return (
        isFirstTime &&
        <Grid width='230px'>
            <Link to='/diagnostico' style={{ textDecoration: 'none' }}>
                <Card sx={{ paddingY: '25px', height: '233px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}>
                        <Box
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, height: '100%', justifyContent: 'center' }}
                        >
                            <Typography level="h2" fontWeight='500' textAlign='center'>Empieza tu</Typography>
                            <Typography level="h2" fontWeight='500' textAlign='center' mb={1}>diagnóstico</Typography>
                            <Sparkle weight="duotone" size={50} color="#a78bfa" />
                        </Box>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}


StartDiagnostic.propTypes = {
    isFirstTime: PropTypes.bool
}
