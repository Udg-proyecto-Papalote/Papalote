import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from "./slices/userSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const reducers = combineReducers({
    user: userSlice.reducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true
});