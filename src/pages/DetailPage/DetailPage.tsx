import { ErrorMessage } from "../../components/ErrorMessage";
import { Loader } from "../../components/Loader";
import { Ticker } from "../../Test files/Ticker";
import { useTickers } from "../../hooks/tickers";

export function DetailPage() {
    const {loading,tickers,error} = useTickers()
        return (
            <h1>Detail page</h1>
        )
}