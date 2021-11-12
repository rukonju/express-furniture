import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({children}) => {
    const location = useLocation();
    const {loading, admin} = useAuth();
    
    if(loading){return <CircularProgress/>}
    return admin?children:<Navigate  to="/login" state={{ from: location }} />;   
};

export default AdminRoute;