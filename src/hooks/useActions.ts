import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as TickerActionCreators from '../store/action-creators/ticker'

export const useActions = () => {
    const dispatch = useDispatch() 
    return bindActionCreators(TickerActionCreators,dispatch)
}