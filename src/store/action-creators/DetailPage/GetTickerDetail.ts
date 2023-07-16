import { Dispatch, useState } from "react"
import { TickerAction, TickerActionTypes } from "../../../types/tickerDetail"
import axios from "axios"
import { ITickerDetail } from "../../../models/Tickers/ITickerDetail"
import { useParams } from "react-router-dom"

export const fetchTickerDetail = (url_ticker: string) : any => {
    return async (dispatch: Dispatch<TickerAction>) => {
        try {
            dispatch({type: TickerActionTypes.FETCH_TICKERS})
            const response = await axios.get("https://api.allinoneapi.app/api/Stock/GetInstruments/Detail?ticker=" + url_ticker,)
            dispatch({type:TickerActionTypes.FETCH_TICKERS_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({type: TickerActionTypes.FETCH_TICKERS_ERROR, payload: 'Ошибка'})
        }
    }
}