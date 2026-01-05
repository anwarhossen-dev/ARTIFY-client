// import { use } from "react";
// import { AuthContext } from "../Providers/AuthContext";


// const useAuth = () => {
//   const authInfo = use(AuthContext);
//   return authInfo;
// };
// export default useAuth;

import { use } from "react"; // Only for React 19+
import { AuthContext } from "../Providers/AuthContext";

const useAuth = () => {
  const context = use(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};

export default useAuth;