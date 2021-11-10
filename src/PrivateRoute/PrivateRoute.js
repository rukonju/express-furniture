import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const location = useLocation()
    const {user} = useAuth()
    if (!user?.email) {
        
        return <Navigate to="/login" state={{ from: location }} />;
    }
    else{
        return children;
    }
};

export default PrivateRoute;