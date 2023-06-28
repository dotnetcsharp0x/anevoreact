import { ErrorMessage } from "../../components/ErrorMessage";
import { Loader } from "../../components/Loader";
import { Ticker } from "../../components/Ticker";
import { useTickers } from "../../hooks/tickers";

export function DetailPage() {
    const {loading,tickers,error} = useTickers()
        return (
            <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> } 
            { error && <ErrorMessage error={error}/> }
            { tickers.map(ticker => <Ticker ticker = {ticker} key={ticker.id} />) }
            </div>
        )
}