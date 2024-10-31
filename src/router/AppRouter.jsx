import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../components/Auth/CheckingAuth";
import { AuthRoutes } from "./AuthRoutes";
import DashboardRouter from "./DashboardRouter";
// import { AuthRoutes } from "../auth/routes/AuthRoutes";
// import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const AppRouter = () => {
    const { status } = useCheckAuth();

    if (status === "checking") {
        return <CheckingAuth />;
    }

    return (
        <Routes>
            {status === "authenticated" ? (
                <Route path="/*" element={<DashboardRouter />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};