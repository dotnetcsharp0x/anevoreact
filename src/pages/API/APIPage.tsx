import { Helmet } from 'react-helmet'
import { navigation } from '../../App'
import { TitlesIndex, Titles } from '../../routes/helpers'

const APIPage: React.FC = () => {
    navigation[TitlesIndex.API].current=true
    return <>
        <Helmet>
            <title>
                {Titles.API}
            </title>
        </Helmet>
    </>
}

export default APIPage