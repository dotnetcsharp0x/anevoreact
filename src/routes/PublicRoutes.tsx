import { lazy } from 'react'
import { Route, Navigate, Routes, useLocation} from 'react-router-dom'
import { checkPathMatch, paths } from './helpers'
import InstrumentsPage from '../pages/InstrumentsPage/InstrumentsPage'
import BlogPage from '../pages/BlogPage/BlogPage'
import APIPage from '../pages/APIPage/APIPage'
import HomePage from '../pages/HomePage/HomePage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import { DetailPage } from '../pages/DetailPage/DetailPage'
import LoginPage from '../pages/LoginPage/LoginPage'

// const HomePage = lazy(() => import('pages/HomePage')) 

const PublicRoutes: React.FC = () => {
    const location = useLocation()

    const isMatch = checkPathMatch(location.pathname, paths)

return (
    <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.instruments} element={<InstrumentsPage />} />
        <Route path={paths.blog} element={<BlogPage />} />
        <Route path={paths.api} element={<APIPage />} />
        <Route path={paths.profile} element={<ProfilePage />} />
        <Route path={paths.detail} element={<DetailPage />} />
        <Route path={paths.login} element={<LoginPage />} />
        <Route path='*' element={!isMatch ? <Navigate to={paths.home}/> : null} />
    </Routes>
)
}

export default PublicRoutes