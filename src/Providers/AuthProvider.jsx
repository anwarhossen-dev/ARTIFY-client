import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
//import { auth } from '../Firebase/Firebase.config';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';


const  googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const updateUser = (userProfile) =>{
        return updateProfile(auth.currentUser,userProfile)
    }
    const logOut= () => {
        
        return signOut(auth)
        
    }
    
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        signInGoogle,
        user,
        setUser,
        createUser,
        updateUser,
        logOut,
        signInUser,
        loading,
        setLoading
    }
    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;

// import React, { useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import { AuthContext } from './AuthContext';
// import { auth } from '../Firebase/firebase.config';
// import axios from 'axios';

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [userRole, setUserRole] = useState(null); // 'admin', 'artist', or 'user'
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }
//     const signInUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//     const signInGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }
//     const updateUser = (userProfile) => {
//         return updateProfile(auth.currentUser, userProfile);
//     }
//     const logOut = () => {
//         setUserRole(null);
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//             setUser(currentUser);
            
//             if (currentUser) {
//                 try {
//                     // 1. Sync user to DB
//                     await axios.post('https://n-alpha-rust.vercel.app/users', {
//                         uid: currentUser.uid,
//                         email: currentUser.email,
//                         displayName: currentUser.displayName,
//                         photoURL: currentUser.photoURL
//                     });

//                     // 2. Get Role from DB
//                     const res = await axios.get(`https://n-alpha-rust.vercel.app/users/${currentUser.email}`);
//                     setUserRole(res.data.role || 'user');
//                 } catch (err) {
//                     console.error("Auth Sync Error:", err);
//                     setUserRole('user');
//                 }
//             } else {
//                 setUserRole(null);
//             }
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         signInGoogle,
//         user,
//         userRole, // Now available in your app
//         setUser,
//         createUser,
//         updateUser,
//         logOut,
//         signInUser,
//         loading,
//         setLoading
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;