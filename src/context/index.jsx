import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth';
import auth from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();

    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [loginFormData, setLoginFormData] = useState({
        name: '',
        email: '',
    })

    const [forgotPasswordFormData, setForgotPasswordFormData] = useState({
        name: '',
        email: '',
    })

    


    useEffect(()=>{
        const checkAuthState = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=> {
            checkAuthState()
        }

    }, [])

    useEffect(()=>{
        if(user) navigate("/");
    }, [user])

    if(loading) return <h1>Loading! Please Wait</h1>

    // console.log(user, "User");

    function registerWithFirebase() {
        // setLoading(true);
        const {email, password} = registerFormData;
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    function loginWithFirebase(){
        // setLoading(true);
        const {email, password} = loginFormData;
        return signInWithEmailAndPassword(auth, email, password);
    }

    function handleLogout(){
        return signOut(auth);
    }

    function resetPassword(){
        const {email} = forgotPasswordFormData;
        return sendPasswordResetEmail(auth, email);
    }
    

    



    return <AuthContext.Provider value={{registerFormData, setRegisterFormData, registerWithFirebase, user, loading, loginFormData, setLoginFormData, loginWithFirebase, handleLogout, setLoading, forgotPasswordFormData, setForgotPasswordFormData, resetPassword}} >{children}</AuthContext.Provider>;
}

