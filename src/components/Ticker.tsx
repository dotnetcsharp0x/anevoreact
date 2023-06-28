import { ITickers } from "../models/Tickers/ITickers";
import React,{useState} from "react"

interface TickerProps {
    ticker: ITickers
}

export function Ticker({ticker}: TickerProps) {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]
    return (
        <div className="container">
            <div className="border py-2 px-4 rounded flex flex-coll items-center mb-2">
            <p>
                {ticker.ticker}
            </p>
            <p>
                <button className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
                >
                    {details? 'Hide details':'Show details'}
                </button>
            </p>
            {details&&<div>
                <p className="">
                    {ticker.name}
                </p>
                <p>
                    <span>{ticker.closePrice}</span>
                </p>
                </div>}
            </div>
        </div>
    )
}