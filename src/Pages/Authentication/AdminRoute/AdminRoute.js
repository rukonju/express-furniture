import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({children, ...rest}) => {

    const {user, admin,  loading} = useAuth();
    
    if(loading){return <Box sx={{display:''}}>
        <CircularProgress sx={{position:'absolute', top:'50%', left:'47%'}}/> 
        </Box>}
    return(

        <Route
        {...rest}
        render={({ location }) =>
        user?.email && admin  ? (
            children
            ) : (
                <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
                />
                )
            }
            />
     )
};

export default AdminRoute;