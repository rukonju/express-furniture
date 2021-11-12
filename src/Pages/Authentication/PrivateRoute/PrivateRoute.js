import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {loading, user} = useAuth();
    
    if(loading){return <CircularProgress/>}
    return !user?.email?<Navigate  to="/login" state={{ from: location }} />:children;   
};

export default PrivateRoute;