import React from 'react';
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router';


const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();

    const location = useLocation();

    if(loading){
        return <h1 className='text-center'><span className="loading loading-spinner text-primary"></span></h1>;
    }

    if(!user){
        return <Navigate to='/auth/login' state={{from : location.pathname}}></Navigate>
    }

    return children;
};

export default PrivateRoutes;