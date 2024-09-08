import DaysCard from "./days";
import Profile from "./profile";
import "./navbar-style.css";
import AddButton from "./add";
import StateOfTasks from "./state-of-task";

function Navbar() {
    return ( 
        <div className="nav">
            <Profile/>
            <DaysCard/>
            <AddButton/>
            <StateOfTasks/>
        </div>
     );
}

export default Navbar;