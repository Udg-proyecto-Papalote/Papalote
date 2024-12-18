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
import { useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import LoadingProfile from "../pages/LoadingProfile"
import Design4 from "../pages/exercises/Design4"

const DashboardRouter = () => {
    const { pathname } = useLocation()
    const isMobile = useMediaQuery('(min-width: 400px)')

    const { loading, currentDiagnostic } = useSelector(state => state.user)
    return (
        <Grid width='100%'>
            <ExtendedNavBar />

            {!loading ?
                <Grid justifyContent='center' alignContent='center'>
                    <Routes>
                        <Route path='/' element={<Inicio />} />
                        <Route path='/diagnostico' element={<Diagnostico />} />
                        <Route path='/diagnostico/resultado' element={<Result />} />
                        <Route path='/ejercicios' element={<Ejercicios />} />
                        <Route path='/ejercicios/trabalenguas/:id' element={<Trabalenguas />} />
                        <Route path='/ejercicios/escuchayrepite/:id' element={<EscuchaYRepite />} />
                        <Route path='/ejercicios/leeyrepite/:id' element={<Design4 />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </Grid> :
                <LoadingProfile />
            }
            <Grid container justifyContent='center' alignContent='center'>

                {
                    !isMobile && pathname !== '/diagnostico' && <ModeToggle />
                }
            </Grid>
        </Grid>
    )
}

export default DashboardRouter
