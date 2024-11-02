import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    illness: false,
    loading: false,
    exercisesDone: {},
    currentDiagnostic: {
        url: '',
        buena_diccion: null,
        buena_modulacion: null,
        palabras_correctas: 0,
        palabras_incorrectas: 0,
        total_palabras_transcritas: 0,
        tono_voz: '',
        recomendaciones: ['Respiración I'],
        loading: false,
        date: null
    },
    diagnostics: {}
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

        setNameGender: (state, action) => {
            state.name = action.payload.name;
            state.gender = action.payload.gender;
        },
        setProfile: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.email = action.payload.email;
            state.gender = action.payload.gender;
            state.illness = action.payload.illness;
            state.loading = false;
        },

        // Exercises
        setTrabalenguasExercise: (state, action) => {
            state.exercisesDone = {
                ...state.exercisesDone,
                // key as the name of the exercise
                [action.payload.name]: action.payload
            };
        },
        setExercises: (state, action) => {
            state.exercisesDone = action.payload;
        },

        // Diagnostics
        setCurrentDiagnostic: (state, action) => {
            state.currentDiagnostic = { ...state.currentDiagnostic, ...action.payload };
        },
        setDiagnostics: (state, action) => {
            state.diagnostics[action.payload.date] = action.payload;
        },
        setAllDiagnostics: (state, action) => {
            state.diagnostics = action.payload;
        },
        setDiagnosticLoading: (state, action) => {
            state.currentDiagnostic.loading = action.payload;
        },
        setUrl: (state, action) => {
            state.currentDiagnostic.url = action.payload;
        },
        setDate: (state, action) => {
            state.currentDiagnostic.date = action.payload;
        },

        loadingProfile: (state) => {
            state.loading = true;
        },
        clearUser: (state) => {
            state.name = "";
            state.email = "";
            state.password = "";
            state.illness = false;
            state.gender = "";
            state.age = "";
            state.exercisesDone = {};
            state.currentDiagnostic = {
                url: '',
                buena_diccion: null,
                buena_modulacion: null,
                palabras_correctas: 0,
                palabras_incorrectas: 0,
                total_palabras_transcritas: 0,
                tono_voz: '',
                recomendaciones: ['Respiración I'],
                loading: false,
                date: null
            };
            state.diagnostics = {};
        }
    }
});

export const { setNameEmailPassword, setAge, setIllness, setGender, setTrabalenguasExercise,
    setCurrentDiagnostic, setDiagnostics, setDiagnosticLoading, setUrl, setDate, setNameGender, setProfile, loadingProfile, clearUser, setExercises, setAllDiagnostics
} = userSlice.actions;
