import {configureStore, Action, getDefaultMiddleware} from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk'
import {appRootReducer, RootState} from "./root-reducer";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
} from 'redux-persist'

import logger from 'redux-logger'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // whitelist: ['search']
};

const persistedReducer = persistReducer(persistConfig, appRootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [ ...getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger)]

});

export type AppDispatch = typeof store.dispatch

export let persistor = persistStore(store);


export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
