import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    // let token = localStorage.getItem("accessToken")÷\
    // let token = useSelector(state => state.auth.token)
    let isAuth = useSelector(state => state.auth.isAuth)
    return(
        isAuth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes