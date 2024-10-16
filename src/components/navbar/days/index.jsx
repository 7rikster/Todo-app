import { PiCalendarBold } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { useNavigate, useResolvedPath, useMatch, useParams } from "react-router-dom";
import "./style.css";

function DaysCard() {

    const navigate = useNavigate();
    function addClass( link ){
        const resolvedPath = useResolvedPath(link);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true});
        return isActive? "nav-item active" : "nav-item";
    }

    return ( 
        <div className="container">
            <div className={addClass('/')} onClick={() => navigate('/')}> <i><FaCalendarCheck /></i> Today</div>
            <div className={addClass('tomorrow')} onClick={() => navigate('/tomorrow')}> <i><FaCalendar /></i>Tomorrow</div>
            <div className={addClass('this-month')} onClick={() => navigate('/this-month')}> <i><IoCalendarNumberOutline /></i>This Month</div>
            <div className={addClass('next-month')} onClick={() => navigate('/next-month')}> <i><IoCalendarNumberOutline /></i>Next Month</div>
        </div>
    );
}

export default DaysCard;