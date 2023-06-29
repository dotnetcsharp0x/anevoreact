import { Helmet } from 'react-helmet'
import HeaderNavbar from '../../components/Header/HeaderNavbar'
import { navigation } from '../../App'
import { TitlesIndex, Titles } from '../../routes/helpers'
import { TickerList } from '../../components/Tickers/TickerList'
import BodyContent from './BodyContent'

const HomePage: React.FC = () => {
    navigation[TitlesIndex.Home].current=true
    return <>
        <Helmet>
            <title>
                {Titles.Home}
            </title>
        </Helmet>
        <BodyContent />
        <TickerList />
    </>
}

export default HomePage