import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation()

    if(loading){
        return (
            <div className='flex justify-center items-center mt-50'>
                <LoadingSpinner/>
            </div>
        )
    }
    if(!user){
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
    return children
};

export default PrivateRoute;