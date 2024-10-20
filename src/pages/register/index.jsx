import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import CommonForm from "../../components/common-form";
import { registerFormControls } from "../../config";
import "./registerStyle.css";
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { updateProfile } from "firebase/auth";
import auth from "../../firebaseConfig";

function RegisterPage() {
    const [error, setError] = useState('');
    const {registerFormData, setRegisterFormData, registerWithFirebase, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    
    async function handleRegisterFormSubmit(event){
        event.preventDefault();
        const {name, email, password, confirmPassword} = registerFormData;



        if(password !== confirmPassword){
            return setError('Passwords do not match!');
        }
        if(name === ""){
            return setError("Enter a name!");
        }
        
        setError("");
        registerWithFirebase().then(result=> {
                
            updateProfile(result.user, {
                displayName: name
            }).then(()=>{
                console.log(auth.currentUser.displayName)
                if(auth.currentUser.displayName){
                    setLoading(false);
                    navigate('/');
                } 
            })
        })
        .catch((e) => {
            const errorCode = e.code;
            const errorMessage = e.message;
            setLoading(false);
            if (errorCode === 'auth/email-already-in-use') {
                return setError("Email already in use!");
            }
            else if(errorCode === 'auth/missing-email' ){
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
                <h1>Welcome!</h1>
                
                <h2>Register your account</h2>
                {
                    error && <Alert severity="error">{error}</Alert>
                }
                <CommonForm
                formControls={registerFormControls}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                onSubmit={handleRegisterFormSubmit}
                buttonText={'Register'}
                />
                <p>Already have an account? <span onClick={()=> navigate("/login")}>Log in</span></p>
            </div>
        </div>
     );
}

export default RegisterPage;