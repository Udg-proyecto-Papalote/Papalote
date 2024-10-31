import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated",
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null,
    },

    reducers: {
        login: (state, action) => {
            state.status = "authenticated";
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = "not-authenticated";
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = "checking";
        },
        setError: (state, { payload }) => {
            state.errorMessage = payload.errorMessage;
        },
    },
});

export const { login, logout, checkingCredentials, setError } =
    authSlice.actions;