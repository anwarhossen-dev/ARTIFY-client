// import React, { use } from 'react';
// import { AuthContext } from './AuthContext';
// import { Navigate, useLocation } from 'react-router';
// import LoadingSpinner from '../Components/LoadingSpinner';

// const PrivateRoute = ({ children }) => {
//     const {user,loading} = use(AuthContext)
//     const location = useLocation()

//     if(loading){
//         return (
//             <div className='flex justify-center items-center mt-50'>
//                 <LoadingSpinner/>
//             </div>
//         )
//     }
//     if(!user){
//         return <Navigate state={location.pathname} to="/auth/login"></Navigate>
//     }
//     return children
// };

// export default PrivateRoute;


import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({ children, requireAdmin = false, requireArtist = false }) => {
  const { user, loading, userRole } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (!user) return <Navigate to="/auth/login" state={{ from: location }} replace />;

  if (requireAdmin && userRole !== 'admin') return <Navigate to="/" replace />;
  if (requireArtist && !['admin', 'artist'].includes(userRole)) return <Navigate to="/" replace />;

  return children;
};

export default PrivateRoute;