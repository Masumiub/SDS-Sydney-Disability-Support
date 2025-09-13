import React from 'react'
import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';



const StaffRoute = ({children}) => {

    const {user, loading} = useAuth();
    const {role, roleLoading} = useUserRole();

    if(loading|| roleLoading){
        return <p>Loading...</p>
    }

    if(!user || role!== 'staff'){
        return <Navigate state={{from: location.pathname}} to='/forbidden'></Navigate>
    }

    return children;
};

export default StaffRoute;