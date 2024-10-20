import { useContext } from "react";
import { AuthContext } from "../../../context";


function LogoutButton() {
    const { handleLogout} = useContext(AuthContext);

    return ( 
        <div style={{display: "flex", justifyContent:"center", marginTop:"2rem"}}> <button onClick={handleLogout} className="register-button" type="submit" >Log Out</button></div>
     );
}

export default LogoutButton;