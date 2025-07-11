import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from '../Context/AuthContext';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;