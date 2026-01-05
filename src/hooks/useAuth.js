// import { use } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// //import { AuthContext } from "../Providers/AuthContext";


// const useAuth = () => {
//   const authInfo = use(AuthContext);
//   return authInfo;
// };
// export default useAuth;

import { use, useContext } from "react"; // Only for React 19+
import { AuthContext } from "../Providers/AuthProvider";


const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("useAuth context:", context);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};

export default useAuth;