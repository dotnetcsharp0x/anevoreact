import {Route,Routes} from 'react-router-dom'
import { DetailPage } from './pages/detail/DetailPage';
import { AboutPage } from './pages/about/AboutPage';
import { createStore } from 'redux';
import { ITickers } from './models/Tickers/ITickers';
import { useDispatch, useSelector } from 'react-redux';
import TickerList from './components/TickerList';

export const App = () => {
return ( 
  <div>
    <TickerList/>
  </div>
)
}

