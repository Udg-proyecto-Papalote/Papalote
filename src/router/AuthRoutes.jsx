
import { Navigate, Route, Routes } from "react-router-dom";
import { InicioSesion } from "../pages/InicioSesion";
import { Registro } from "../pages/Registro";
import { createContext, useEffect, useState } from "react";
import { Button, Snackbar } from "@mui/joy";
import { useSelector } from "react-redux";
import { Warning } from "@mui/icons-material";

export const UserContext = createContext()
export const AuthRoutes = () => {
    const [user, setUser] = useState({})
    const [open, setOpen] = useState(false)
    const { errorMessage } = useSelector(state => state.auth)

    useEffect(() => {
        !!errorMessage ? setOpen(true) : setOpen(false)
    }, [errorMessage])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Routes>
                <Route path="iniciarsesion" element={<InicioSesion />} />
                <Route path="registro" element={<Registro />} />

                <Route path="/*" element={<Navigate to="/auth/iniciarsesion" />} />
            </Routes>
            <Snackbar
                variant="soft"
                color="danger"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                startDecorator={<Warning />}
                endDecorator={
                    <Button
                        onClick={() => setOpen(false)}
                        size="sm"
                        variant="soft"
                        color="danger"
                    >
                        Aceptar
                    </Button>
                }
            >
                { errorMessage }
            </Snackbar>
        </UserContext.Provider>
    );
};