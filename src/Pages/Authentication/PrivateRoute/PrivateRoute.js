import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user} = useAuth();
    
    if(!user.email){return <CircularProgress/>}
    else{
        if(user.email){
        return children;
        }
        else{
        return <Navigate  to="/login" state={{ from: location }} />
        }
    }
    
       
};

export default PrivateRoute;