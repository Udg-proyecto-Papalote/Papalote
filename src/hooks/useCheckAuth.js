import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/slices/authSlice";
import { useEffect } from "react";

export const useCheckAuth = () => {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout({ errorMessage: null }));

            const { displayName, email, uid } = user;
            dispatch(login({ displayName, email, uid }));
        });
    }, []);

    return {
        status,
    };
};