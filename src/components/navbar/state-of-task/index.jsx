import { FaCalendarXmark } from "react-icons/fa6";
import { FaCalendarMinus } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./style.css"

function StateOfTasks() {

    const navigate = useNavigate();

    return ( 
        <div className="states-container">
            <div className="nav-item" onClick={() => navigate('/pending')}> <i><FaCalendarMinus /></i>Pending Tasks</div>
            <div className="nav-item" onClick={() => navigate('/completed')}> <i><FaCalendarCheck /></i>Completed Tasks</div>
            <div className="nav-item" onClick={() => navigate('/incompleted')}> <i><FaCalendarXmark /></i>Incompleted Tasks</div>
        </div>
    );
}

export default StateOfTasks;