import { ITickerAction, ITickerState, TickerActionTypes } from "../../types/tickers"

const defaultState: ITickerState = {
    tickers: [],
    loading: false,
    error: null
}

export const tickerReducer = (state = defaultState, action: ITickerAction): ITickerState => {
    switch(action.type) {
        case TickerActionTypes.FETCH_TICKERS: {
            return {loading: true, error:null, tickers: []}
        }
        case TickerActionTypes.FETCH_TICKERS_SUCCESS: {
            return {loading: false, error:null, tickers: action.payload}
        }
        case TickerActionTypes.FETCH_TICKERS_ERROR: {
            return {loading: false, error:action.payload, tickers: []}
        }
        default: {
            return state
        }
    }
}