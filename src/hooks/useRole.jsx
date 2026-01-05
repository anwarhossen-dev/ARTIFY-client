// import React from 'react';
// // import useAuth from './useAuth';
// // import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import { User, Users } from 'lucide-react';
// //import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';

import useAuth from "./useAuth";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role = "user", isLoading: roleLoading } = useQuery({
    queryKey: ['user-role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data?.role || "user";
    },
  });

  return { role, roleLoading };
};

export default useRole;