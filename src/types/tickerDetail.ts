import { ITickerDetail } from "../models/Tickers/ITickerDetail";


export interface ITickerDetailState {
    ticker: ITickerDetail[];
    loading: boolean;
    error: null | string;
    url_ticker: null | string;
}

export interface ITickerAction {
    type: string;
    payload?: any;
}

export enum TickerActionTypes {
    FETCH_TICKERS = 'FETCH_TICKERS',
    FETCH_TICKERS_SUCCESS = 'FETCH_TICKERS_SUCCESS',
    FETCH_TICKERS_ERROR = 'FETCH_TICKERS_ERROR',
}

export interface IFetchTickerAction {
    type: TickerActionTypes.FETCH_TICKERS;
}

export interface IFetchTickerSuccessAction {
    type: TickerActionTypes.FETCH_TICKERS_SUCCESS;
    payload: any[];
}

export interface IFetchTickerErrorAction {
    type: TickerActionTypes.FETCH_TICKERS_ERROR;
    payload: string;
}

export type TickerAction = IFetchTickerAction
    | IFetchTickerSuccessAction
    | IFetchTickerErrorAction