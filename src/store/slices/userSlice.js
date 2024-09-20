import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    illness: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setNameEmailPassword: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setIllness: (state, action) => {
            state.illness = action.payload;
        },
    }
});

export const { setNameEmailPassword, setAge, setIllness, setGender } = userSlice.actions;
