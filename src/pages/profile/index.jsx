import { useContext } from "react";
import { AuthContext } from "../../context";


function ProfilePage() {

    const {user, handleLogout} = useContext(AuthContext);


    return ( 
        <div>
            <h2>{user.displayName}</h2>
            <h3>{user.email}</h3>
            <button onClick={handleLogout} className="register-button" type="submit" >Log Out</button>
        </div>
     );
}

export default ProfilePage;