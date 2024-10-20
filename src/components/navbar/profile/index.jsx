import { CgProfile } from "react-icons/cg";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../../context";

function Profile() {

    const {user} = useContext(AuthContext);



    return ( 
        <div className="profile-container" 
        style={{display:"flex", alignItems:"center"}}
        >
            <i><CgProfile /></i> <h3>{user.displayName}</h3>
        </div>
     );
}

export default Profile;