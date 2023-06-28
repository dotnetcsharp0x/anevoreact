import {Route,Routes} from 'react-router-dom'
import { DetailPage } from './pages/detail/DetailPage';
import { AboutPage } from './pages/about/AboutPage';
import { createStore } from 'redux';
import { ITickers } from './models/Tickers/ITickers';
import { useDispatch, useSelector } from 'react-redux';
import HeaderNavbar from './components/Header/Navbar';
import BodyContent from './components/Index/Body/Body';
import { TickerList } from './components/Index/Body/TickerList';

export const App = () => {
return ( 
  <>
  <HeaderNavbar />
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <BodyContent />
        <TickerList/>
    </div>
    </div>
  </div>
  </>
)
}

