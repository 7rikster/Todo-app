import { FaCalendarXmark } from "react-icons/fa6";
import { FaCalendarMinus } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { useNavigate, useResolvedPath, useMatch } from "react-router-dom";
import "./style.css"

function StateOfTasks() {

    const navigate = useNavigate();
    function addClass( link ){
        const resolvedPath = useResolvedPath(link);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true});
        return isActive? "nav-item active" : "nav-item";
    }
    return ( 
        <div className="states-container">
            <div className={addClass('pending')} onClick={() => navigate('/pending')}> <i><FaCalendarMinus /></i>Pending Tasks</div>
            <div className={addClass('completed')} onClick={() => navigate('/completed')}> <i><FaCalendarCheck /></i>Completed Tasks</div>
            <div className={addClass('incompleted')} onClick={() => navigate('/incompleted')}> <i><FaCalendarXmark /></i>Incompleted Tasks</div>
        </div>
    );
}

export default StateOfTasks;