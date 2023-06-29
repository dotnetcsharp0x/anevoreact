import { Helmet } from 'react-helmet'
import HeaderNavbar from '../../components/Header/HeaderNavbar'
import { TickerList } from '../../components/Index/Body/TickerList'
import { navigation } from '../../App'
import { TitlesIndex, Titles } from '../../routes/helpers'

const HomePage: React.FC = () => {
    navigation[TitlesIndex.Home].current=true
    return <>
        <Helmet>
            <title>
                {Titles.Home}
            </title>
        </Helmet>
        <TickerList/>
    </>
}

export default HomePage