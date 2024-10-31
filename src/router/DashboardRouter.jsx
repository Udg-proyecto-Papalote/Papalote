import { Grid } from "@mui/joy"
import { ExtendedNavBar } from "../components/ExtendedNavBar"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Inicio } from "../pages/Inicio"
import { Diagnostico } from "../pages/Diagnostico"
import Result from "../pages/Result"
import { Ejercicios } from "../pages/Ejercicios"
import { Trabalenguas } from "../pages/exercises/Trabalenguas"
import EscuchaYRepite from "../pages/exercises/EscuchaYRepite"
import ModeToggle from "../components/ToggleTheme"
import { constant } from "lodash"
import { useMediaQuery } from "@mui/material"

const DashboardRouter = () => {
    const { pathname } = useLocation()
    const isMobile = useMediaQuery('(min-width: 400px)')
    return (
        <Grid width='100%'>
            <ExtendedNavBar />

            <Grid justifyContent='center' alignContent='center'>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/diagnostico' element={<Diagnostico />} />
                    <Route path='/diagnostico/resultado' element={<Result />} />
                    <Route path='/ejercicios' element={<Ejercicios />} />
                    <Route path='/ejercicios/trabalenguas/:id' element={<Trabalenguas />} />
                    <Route path='/ejercicios/escuchayrepite/:id' element={<EscuchaYRepite />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </Grid>
            <Grid container justifyContent='center' alignContent='center'>

                {
                    !isMobile && pathname !== '/diagnostico' && <ModeToggle />
                }
            </Grid>
        </Grid>
    )
}

export default DashboardRouter
