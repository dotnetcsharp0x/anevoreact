import { lazy } from 'react'
import { Route, Navigate, Routes, useLocation} from 'react-router-dom'
import { checkPathMatch, paths } from './helpers'
import InstrumentsPage from '../pages/InstrumentsPage/InstrumentsPage'
import BlogPage from '../pages/BlogPage/BlogPage'
import APIPage from '../pages/APIPage/APIPage'
import HomePage from '../pages/HomePage/HomePage'

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
        <Route path='*' element={!isMatch ? <Navigate to={paths.home}/> : null} />
    </Routes>
)
}

export default PublicRoutes