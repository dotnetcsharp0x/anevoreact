import { useSelector } from "react-redux"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchTickers } from "../../../store/action-creators/ticker"
import { useActions } from "../../../hooks/useActions"

export const Table: React.FC = () => {
    const {tickers,loading,error} = useTypedSelector(state=>state.ticker)
    const {fetchTickers} = useActions()
    useEffect(() => {
        fetchTickers()
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

export default Table

