import {BrowserRouter, Route,Routes} from 'react-router-dom'
import HeaderNavbar from './components/Header/HeaderNavbar';
import PublicRoutes from './routes/PublicRoutes';
import { TitlesIndex, pathsPublic } from './routes/helpers';
import FooterContent from './components/Footer/Footer';

export const navigation = [
  { index: TitlesIndex.Home, name: 'Home', href: pathsPublic.home, current: false },
  { index: TitlesIndex.Instruments, name: 'Instruments', href: pathsPublic.instruments, current: false },
  { index: TitlesIndex.Blog, name: 'Blog', href: pathsPublic.blog, current: false },
  { index: TitlesIndex.API, name: 'API docs', href: pathsPublic.api, current: false },
]
export const ProjectTitle = 'Anevo'

export const App = () => {
return ( 
  <>
    <HeaderNavbar />
    <PublicRoutes />
    <FooterContent />
  </>
)
}

