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