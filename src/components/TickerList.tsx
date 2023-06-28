import { useSelector } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchTickers } from "../store/action-creators/ticker"

export const TickerList: React.FC = () => {
    const {tickers,loading,error} = useTypedSelector(state=>state.ticker)
    console.log(tickers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTickers())
    }, [])
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {tickers.map(ticker =>
                <div key={ticker.id}>{ticker.name}</div>)}
        </div>
    )
}

export default TickerList

//21.13