import { useEffect } from "react"
import { useActions } from "../../../hooks/useActions"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { ITickers } from "../../../models/Tickers/ITickers"

/* This example requires Tailwind CSS v2.0+ */
  
  export const TickerList: React.FC = () => {
    const {tickers,loading,error} = useTypedSelector(state=>state.ticker)
    const {fetchTickers} = useActions()
    useEffect(() => {
        fetchTickers()
    }, [])
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tickers.map((ticker) => (
                    <tr key={ticker.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticker.ticker}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticker.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticker.closePrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticker.currency_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  