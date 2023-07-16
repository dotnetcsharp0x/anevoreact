import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import Loading from "../Loading"
import { useActionsTickerDetail } from "../../hooks/useActionsTickerDetail"
import { useParams, useSearchParams } from "react-router-dom"
import { AreaChart } from 'react-native-svg-charts'
import Chart from "./Chart"

export const TickerDetail: React.FC = () => {
    const params = useParams();
    
    const {tickers,loading,error} = useTypedSelector((state: { ticker: any })=>state.ticker)
    const {fetchTickerDetail} = useActionsTickerDetail()
        useEffect(() => {
        fetchTickerDetail(String(params.url_ticker))
    }, [])
    const reactStringReplace = require('react-string-replace');

    return (
      <div className="columns-2xl columns-1lg columns-2sm mx-auto max-w-7xl m-3">
        {loading &&
                  <h3 className="text-center w-full"><Loading /></h3>
                }
                  {tickers.map((ticker: { id: Key;
                    ticker: string;
                    name: string;
                    description: string
                  }) => (
        <>
<div className=" flex mb-4">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl w-9/12 p3 flex">
        
                              <div className="w-10/12">
                                <div className="hidden md:block px-6 py-4 whitespace-nowrap text-gray-900 text-3xl">{ticker.name}</div>
                                <div className="px-6 py-4 whitespace-nowrap font-medium text-gray-400 text-2xl">{ticker.ticker}</div>
                              </div>
                              <div className="w-2/12 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 mt-auto mb-auto right-0 text-right">
                                  <img src={'/img/stocks/' + ticker.ticker + '.png'} className="h-24 w-24 rounded-full"></img>
                              </div>
                              </div>
        <div className="w-1/12">

        </div>
        <div className="flex w-2/12 p-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50">
            <div>
            <p className="text-gray-400 font-bold block">
                Price
            </p>
            <p className="block text-3xl font-bold text-gray-600 mt-3">
                11223.53 $
            </p>   
            <p className="text-green-500 mt-2">
                +1.2 % (1.2 $)
            </p>
        </div>
        </div>
        
        </div>
        <div className="w-9/12">
            <Chart />
        </div>
                              <div className="w-9/12">
                              <p>
                                {ticker.description}
                              </p>
                              </div>
        </>
                  ))}
      </div>
    )
}
