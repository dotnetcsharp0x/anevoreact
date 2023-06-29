import { Helmet } from 'react-helmet'
import BottomNavbar from '../../components/Header/BottomNavbar'
import { TickerList } from '../../components/Index/Body/TickerList'
import { navigation } from '../../App'
import { TitlesIndex, Titles } from '../../routes/helpers'

const InstrumentsPage: React.FC = () => {
    navigation[TitlesIndex.Instruments].current=true
    return <>
        <Helmet>
            <title>
            {Titles.Instruments}
            </title>
        </Helmet>
        <BottomNavbar/>
        <TickerList/>
    </>
}

export default InstrumentsPage