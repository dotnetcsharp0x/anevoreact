import { combineReducers } from "redux";
import { tickerReducer } from "./tickerReducer";
import { tickerDetailReducer } from "./tickerDetailReducer";


export const rootReducer = combineReducers( {
    ticker: tickerReducer,
    tickerDetail: tickerDetailReducer
})

export type RootState = ReturnType<typeof rootReducer>