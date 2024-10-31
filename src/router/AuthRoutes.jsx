
import { Navigate, Route, Routes } from "react-router-dom";
import { InicioSesion } from "../pages/InicioSesion";
import { Registro } from "../pages/Registro";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="iniciarsesion" element={<InicioSesion />} />
            <Route path="registro" element={<Registro />} />

            <Route path="/*" element={<Navigate to="/auth/iniciarsesion" />} />
        </Routes>
    );
};