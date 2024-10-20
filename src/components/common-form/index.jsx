import { useContext } from "react";
import CommonInput from "../common-input";
import "./formStyle.css"
import { AuthContext } from "../../context";

function CommonForm({formControls = [], buttonText, formData, setFormData, onSubmit}) {

    const {loading} = useContext(AuthContext);

    function renderFormElement(getCurrentFormControl, getFormData){

        let element = null;

        switch (getCurrentFormControl.componentType) {
            case 'input':
                element = (
                <CommonInput 
                    type={getCurrentFormControl.type} 
                    placeholder={getCurrentFormControl.placeholder} 
                    value={getFormData[getCurrentFormControl.name]} 
                    name={getCurrentFormControl.name}  
                    onChange={(event)=>
                        setFormData({
                            ...formData,
                            [getCurrentFormControl.name]: event.target.value, 
                        })
                    }    
                />
                );
                break;
        
            default:
                element = (
                    <CommonInput 
                        type={getCurrentFormControl.type} 
                        placeholder={getCurrentFormControl.placeholder} 
                        value={getFormData[getCurrentFormControl.name]} 
                        name={getCurrentFormControl.name}  
                        onChange={(event)=>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name]: event.target.value, 
                            })
                        }    
                    />
                    );
                break;
        }

        return element;
    }


    return ( 
        <form onSubmit={onSubmit}>
            {Array.isArray(formControls) && formControls.map((singleFormControl) =>
                renderFormElement(singleFormControl, formData)
            )}
        
            <div style={{display:"flex", justifyContent:"center"}}>
            <button className="register-button" type="submit" disabled={loading}>{buttonText || 'Submit'}</button>
            </div>
            
        </form>
     );
}

export default CommonForm;