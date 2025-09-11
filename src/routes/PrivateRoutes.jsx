import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';


const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();

    const location = useLocation();

    if(loading){
        return <h1>Loading..</h1>;
    }

    if(!user){
        return <Navigate to='/login' state={{from : location.pathname}}></Navigate>
    }

    return children;
};

export default PrivateRoutes;