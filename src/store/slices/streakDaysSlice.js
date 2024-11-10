import { createSlice } from "@reduxjs/toolkit";

export const streakDaysSlice = createSlice({
    name: "streakDays",
    initialState: {
        streakDays: [],
        days: 0,
    },

    reducers: {
        setStreakDays: (state, action) => {
            state.streakDays = action.payload;
            state.days = action.payload.length;
        },
        addStreakDay: (state, action) => {
            state.streakDays = [...state.streakDays, action.payload];
            state.days += 1;
        },
    },
});

export const { setStreakDays, addStreakDay } = streakDaysSlice.actions;