import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as TickerActionCreators from '../store/action-creators/DetailPage/GetTickerDetail'

export const useActionsTickerDetail = () => {
    const dispatch = useDispatch() 
    return bindActionCreators(TickerActionCreators ,dispatch)
}