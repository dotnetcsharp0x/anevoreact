import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import Loading from "../Loading"
import { Link, useLocation } from "react-router-dom"


/* This example requires Tailwind CSS v2.0+ */
  
  export const TickerList: React.FC = () => {
    const location = useLocation()
console.log("Test1");
    console.log("href: " + window.location.hostname+"/Detail/" + location.state); 
    const {tickers,loading,error} = useTypedSelector((state: { ticker: any })=>state.ticker)
    const {fetchTickers} = useActions()
    useEffect(() => {
        fetchTickers()
    }, [])
    const reactStringReplace = require('react-string-replace');

    return (
      <div className="columns-2xl columns-1lg columns-2sm mx-auto max-w-7xl">
        {loading &&
                  <h3 className="text-center w-full"><Loading /></h3>
                }
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ticker
                    </th>
                    <th
                      scope="col"
                      className="hidden md:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      
                    </th> 
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>*/}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tickers.map((ticker: { id: Key | null | undefined; ticker: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; closePrice: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; currency_name: any }) => (
                    <Link to={"Detail/" + ticker.ticker} className="contents align-middle">
                      <tr key={ticker.id} className="hover:bg-slate-100 hover:cursor-pointer">
                      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {/* "/img/stocks/AAPL.png" */}
                        <img src={'/img/stocks/'+ticker.ticker+'.png'} className="h-11 w-12 rounded-full"></img>  
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticker.ticker}</td>
                      <td className="hidden md:block px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticker.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticker.closePrice}
                      {reactStringReplace(ticker.currency_name , 'usd', (match: any, i: any) => (
                        <div className="inline-flex">$</div>
                      ))}
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        <svg className="h-8 w-8 text-slate-600 inline-flex"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="112" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                        </a>
                      </td> */}
                    </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  