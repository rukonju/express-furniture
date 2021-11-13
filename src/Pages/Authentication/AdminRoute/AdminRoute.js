import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({children}) => {
    const location = useLocation();
    const {admin} = useAuth();
    
    if(!admin){return <CircularProgress/>}
    if(admin){
        return children;
    }
    else{
        return <Navigate  to="/login" state={{ from: location }} />
    }
 
};

export default AdminRoute;