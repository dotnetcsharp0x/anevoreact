import BottomNavbar from "../../components/Header/BottomNavbar";
import { TickerDetail } from "../../components/Tickers/TickerDetail";

export function DetailPage() {
        return (
            <>
            <div className="">
            <BottomNavbar/>
                <TickerDetail />
            </div>
            </>
        )
}