import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import Loading from "../Loading"
import { useActionsTickerDetail } from "../../hooks/useActionsTickerDetail"
import { useParams, useSearchParams } from "react-router-dom"
import { AreaChart } from 'react-native-svg-charts'
import Chart from "./Chart"
import { Tab, initTE } from "tw-elements";
initTE({ Tab });

export const TickerDetail: React.FC = () => {
    const params = useParams();
    
    const {tickers,loading,error} = useTypedSelector((state: { ticker: any })=>state.ticker)
    const {fetchTickerDetail} = useActionsTickerDetail()
        useEffect(() => {
        fetchTickerDetail(String(params.url_ticker))
    }, [])
    const reactStringReplace = require('react-string-replace');

    return (
      <div className="columns-2xl columns-1lg columns-2sm mx-auto max-w-7xl m-3 px-2 sm:px-6 lg:px-8">
        {loading &&
                  <h3 className="text-center w-full"><Loading /></h3>
                }
                  {tickers.map((ticker: { id: Key;
                    ticker: string;
                    name: string;
                    description: string;
                    current_price: number;
                  }) => (
        <>
    <div className=" flex mb-4">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl w-9/12 p3 flex">
        
                              <div className="w-10/12">
                                <div className="hidden md:block px-6 py-4 whitespace-nowrap text-gray-900 text-3xl">{ticker.name}</div>
                                <div className="px-6 py-4 whitespace-nowrap font-medium text-gray-400 text-2xl">{ticker.ticker}</div>
                              </div>
                              <div className="w-2/12 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 mt-auto mb-auto right-0 text-right">
                                  <img src={'/img/stocks/' + ticker.ticker + '.png'} className="h-24 w-24 rounded-full"></img>
                              </div>
                              </div>

        <div className="flex w-3/12 p-3 ml-12 rounded-2xl bg-gradient-to-r from-gray-50 to-green-100 text-right">
            <div className="w-full pr-3">
            <p className="text-gray-400 font-bold block">
                Price
            </p>
            <p className="block text-3xl font-bold text-gray-600 mt-3">
                {ticker.current_price} $
            </p>   
            {/* <p className="text-green-500 mt-2">
                +1.2 % (1.2 $)
            </p> */}
        </div>
        </div>
        
        </div>
        <ul
  className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation">
    <a
      href="#tabs-main"
      className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-main"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-main"
      aria-selected="true"
      >Main</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-info"
      className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-info"
      role="tab"
      aria-controls="tabs-info"
      aria-selected="false"
      >Info</a
    >
  </li>
</ul>
<div className="mb-6">
<div
    className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-main"
    role="tabpanel"
    aria-labelledby="tabs-main-tab"
    data-te-tab-active>
        <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-base h-10 mt-3 mb-3">
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
        5M
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
        15M
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
        30M
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
        1H
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
        4H
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
        1D
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
        7D
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-5 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
        1M
      </a>
    </li>
  </ul>
</nav>
        <div className="w-9/12">
            <Chart />
        </div>
                              <div className="w-9/12">
                                <h2 className="text-3xl py-4">
                                  About {ticker.name}
                                </h2>
                              <p className="text-xl">
                                {ticker.description}
                              </p>
                              </div>
  </div>
  <div
    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-info"
    role="tabpanel"
    aria-labelledby="tabs-info-tab">
    Tab 2 content
  </div>
</div>

        </>
                  ))}
      </div>
    )
}
