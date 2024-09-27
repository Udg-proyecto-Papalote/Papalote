import { Box, Card, CardContent, Grid, Typography } from "@mui/joy"
import { Sparkle } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const StartDiagnostic = () => {
    const { currentDiagnostic } = useSelector((state) => state.user)
    const isFirstTime = !currentDiagnostic.url; 
    return (
        isFirstTime &&
        <Grid width='185px'>
            <Link to='/diagnostico' style={{ textDecoration: 'none' }}>
                <Card sx={{ paddingY: '25px', height: '180px' }}>
                    <CardContent>
                        <Box
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
                        >
                            <Typography level="h3" justifyContent='center'>Empieza tu</Typography>
                            <Typography level="h3" justifyContent='center' mb={1}>diagnóstico</Typography>
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
