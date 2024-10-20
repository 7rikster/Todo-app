import DaysCard from "./days";
import Profile from "./profile";
import "./navbar-style.css";
import AddButton from "./add";
import StateOfTasks from "./state-of-task";
import LogoutButton from "./logoutButton";

function Navbar() {
    return ( 
        <div className="nav">
            <Profile/>
            <DaysCard/>
            <AddButton/>
            <StateOfTasks/>
            <LogoutButton/>
        </div>
     );
}

export default Navbar;