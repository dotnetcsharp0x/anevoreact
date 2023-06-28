import { Dispatch } from "react"
import { TickerAction, TickerActionTypes } from "../../types/tickers"
import axios from "axios"

export const fetchTickers = () : any => {
    return async (dispatch: Dispatch<TickerAction>) => {
        try {
            dispatch({type: TickerActionTypes.FETCH_TICKERS})
            const response = await axios.get("https://api.allinoneapi.app/api/Stock/GetPriceDetailed?limit=15")
            dispatch({type:TickerActionTypes.FETCH_TICKERS_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({type: TickerActionTypes.FETCH_TICKERS_ERROR, payload: 'Ошибка'})
        }
    }
}