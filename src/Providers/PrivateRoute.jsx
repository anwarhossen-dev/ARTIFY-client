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

import React, { useContext } from 'react'; // <-- useContext, not use
//import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';
import { AuthContext } from './AuthProvider';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); // <-- fixed here
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
