import { Helmet } from 'react-helmet'
import BottomNavbar from '../../components/Header/BottomNavbar'
import { TickerList } from '../../components/Index/Body/TickerList'
import { navigation } from '../../App'
import { TitlesIndex, Titles } from '../../routes/helpers'

const BlogPage: React.FC = () => {
    navigation[TitlesIndex.Blog].current=true
    return <>
        <Helmet>
            <title>
            {Titles.Blog}
            </title>
        </Helmet>
        <BottomNavbar/>
    </>
}

export default BlogPage