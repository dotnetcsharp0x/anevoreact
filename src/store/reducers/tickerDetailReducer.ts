import { ITickerAction, ITickerDetailState, TickerActionTypes } from "../../types/tickerDetail"

const defaultState: ITickerDetailState = {
    ticker: [],
    loading: false,
    error: null,
    url_ticker:null
}

export const tickerDetailReducer = (state = defaultState, action: ITickerAction): ITickerDetailState => {
    switch(action.type) {
        case TickerActionTypes.FETCH_TICKERS: {
            return {loading: true, error:null, ticker: [], url_ticker: null}
        }
        case TickerActionTypes.FETCH_TICKERS_SUCCESS: {
            return {loading: false, error:null, ticker: action.payload, url_ticker: action.payload}
        }
        case TickerActionTypes.FETCH_TICKERS_ERROR: {
            return {loading: false, error:action.payload, ticker: [], url_ticker: null}
        }
        default: {
            return state
        }
    }
}