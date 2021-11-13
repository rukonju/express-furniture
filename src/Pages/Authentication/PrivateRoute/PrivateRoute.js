import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {loading, user} = useAuth();
    
        if(loading){return <CircularProgress sx={{position:'absolute', top:'50%', left:'47%'}}/> }
        return (
            <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    
        );


};

export default PrivateRoute;