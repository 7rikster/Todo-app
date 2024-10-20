import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { loginFormControls } from "../../config";
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CommonForm from "../../components/common-form";

function LoginPage() {

    const {loginFormData, setLoginFormData, loginWithFirebase, setLogin} = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function handleLoginOnSubmit(event){
        event.preventDefault();

        
        setError("");
        loginWithFirebase().then(result=> {
            
            if(result.user){
                navigate('/profile');
                setLogin(false);
            }
        })
        .catch((e) => {
            const errorCode = e.code;
            const errorMessage = e.message;
            if (errorCode === 'auth/invalid-credential') {
                return setError("Invalid credentials!");
            }
            else if(errorCode === 'auth/invalid-email' ){
                return setError("Enter an email!")
            }
            else if(errorCode === 'auth/missing-password' ){
                return setError("Enter the password!")
            }
            else {
              return setError(errorMessage);
            }
        });
        

    }



    return ( 
        <div className="formContainer">
            <div className="form">
                <h1>Welcome Back!</h1>
                
                <h1>Login </h1>
                {
                    error && <Alert severity="error">{error}</Alert>
                }
                <CommonForm
                formControls={loginFormControls}
                formData={loginFormData}
                setFormData={setLoginFormData}
                onSubmit={handleLoginOnSubmit}
                buttonText={'Login'}
                />
                <p>Don't have an account? <span onClick={()=> navigate("/register")}>Create account</span></p>
                <p>Forgot Password? <span onClick={()=> navigate("/forgot-password")}>Click here</span></p>
            </div>
        </div>
    );
}

export default LoginPage;