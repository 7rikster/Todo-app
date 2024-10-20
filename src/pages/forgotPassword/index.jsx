import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CommonForm from "../../components/common-form";
import { forgotPasswordFormControls } from "../../config";

function ForgotPasswordPage() {

    const { forgotPasswordFormData, setForgotPasswordFormData, resetPassword} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    async function handleForgotPasswordOnSubmit(event){
        event.preventDefault();

        try{
            setSuccessMessage('')
            setError("");
            await resetPassword()
            setSuccessMessage("Check your Email for further instructions");
        }
        catch(e) {
            const errorCode = e.code;
            const errorMessage = e.message;
            if (errorCode === 'auth/invalid-credential') {
                return setError("Invalid credentials!");
            }
            else if(errorCode === 'auth/invalid-email' ){
                return setError("Enter an email!")
            }
            else {
              return setError(errorMessage);
            }
        };
        

    }



    return ( 
        <div className="formContainer">
            <div className="form">
                <h1>Reset your Password</h1>
                
                {
                    error && <Alert severity="error">{error}</Alert>
                    
                }
                {
                    successMessage && <Alert severity="success">{successMessage}</Alert>
                }
                <CommonForm
                formControls={forgotPasswordFormControls}
                formData={forgotPasswordFormData}
                setFormData={setForgotPasswordFormData}
                onSubmit={handleForgotPasswordOnSubmit}
                buttonText={'Reset Password'}
                />
                <p>Need an account? <span onClick={()=> navigate("/register")}>Create account</span></p>
                <p><span onClick={()=> navigate("/login")}>Log In</span></p>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;