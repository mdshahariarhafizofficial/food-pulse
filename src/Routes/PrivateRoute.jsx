import React from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const user = null;
    if (user) {
        return children;
    }
    return <Navigate to='/Login'></Navigate>
};

export default PrivateRoute;