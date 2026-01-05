// // src/Providers/AuthContext.jsx
// import React, { createContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../Firebase/firebase.config";

// export const AuthContext = createContext(AuthContext);

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Create User
//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Sign In User
//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Google SignIn
//   const signInGoogle = () => {
//     return signInWithPopup(auth, googleProvider);
//   };

//   // Log Out
//   const logOut = () => {
//     return signOut(auth);
//   };

//   // Update Firebase profile (name or photoURL)
//   const updateUserProfile = async (profile) => {
//     if (!auth.currentUser) return;
//     return updateProfile(auth.currentUser, profile).then(() => {
//       setUser({ ...auth.currentUser, ...profile });
//     });
//   };

//   // imgbb upload
//   const uploadProfilePhoto = async (file) => {
//     const formData = new FormData();
//     formData.append("image", file);

//     const res = await fetch(
//       `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
//       { method: "POST", body: formData }
//     );
//     const data = await res.json();
//     if (data.success) {
//       await updateUserProfile({ photoURL: data.data.url });
//       return data.data.url;
//     } else {
//       throw new Error("Image upload failed");
//     }
//   };

//   // Auth state change
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     setUser,
//     setLoading,
//     createUser,
//     signInUser,
//     signInGoogle,
//     logOut,
//     updateUserProfile,
//     uploadProfilePhoto,
//   };

//   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

// import React, { createContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../Firebase/firebase.config";

// export const AuthContext = createContext();

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const signInGoogle = () => signInWithPopup(auth, googleProvider);
//   const logOut = () => signOut(auth);

//   const updateUserProfile = async (profile) => {
//     if (!auth.currentUser) return;
//     await updateProfile(auth.currentUser, profile);
//     setUser({ ...auth.currentUser, ...profile });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signInUser,
//     signInGoogle,
//     logOut,
//     updateUserProfile,
//     setUser,
//     setLoading,
//   };

//   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;


import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

// Create AuthContext
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null); // admin / artist / user
  const [loading, setLoading] = useState(true);

  // ----------------- Auth Functions -----------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userProfile) => {
    if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, userProfile);
  };

  const logOut = () => {
    setUserRole(null);
    return signOut(auth);
  };

  // ----------------- Auth State Listener -----------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          // Sync user to backend (create or update)
          await axios.post("https://artify-server-six.vercel.app/users", {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          });

          // Fetch user role from backend
          const res = await axios.get(`https://artify-server-six.vercel.app/users/${currentUser.email}`);
          setUserRole(res.data.role || "user");
        } catch (err) {
          console.error("Auth Sync Error:", err);
          setUserRole("user");
        }
      } else {
        setUserRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ----------------- Context Value -----------------
  const authInfo = {
    user,
    userRole,
    loading,
    setUser,
    setLoading,
    createUser,
    signInUser,
    signInGoogle,
    updateUser,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;


