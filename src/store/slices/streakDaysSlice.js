import { createSlice } from "@reduxjs/toolkit";

export const streakDaysSlice = createSlice({
    name: "streakDays",
    initialState: {
        streak: 0,
        days: []
    },

    reducers: {
        setStreakDays: (state, action) => {
            state.streak = action.payload.streak;
            state.days = action.payload.days;
        },
        incrementStreak: (state) => {
            state.days = [...new Set([...state.days, new Date().toDateString()])];
        },
    },
});

export const { setStreakDays, incrementStreak } = streakDaysSlice.actions;