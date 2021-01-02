import {searchReducer} from "./search-slice";
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const appRootReducer = rootReducer;
