import React from 'react'
import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';



const StaffRoute = ({children}) => {

    const {user, loading} = useAuth();
    const {role, roleLoading} = useUserRole();

    if(loading|| roleLoading){
        return <p className='text-center'><span className="loading loading-spinner text-primary"></span></p>
    }

    if(!user || role!== 'staff'){
        return <Navigate state={{from: location.pathname}} to='/forbidden'></Navigate>
    }

    return children;
};

export default StaffRoute;