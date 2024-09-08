import { PiCalendarBold } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./style.css"

function DaysCard() {

    const navigate = useNavigate();


    return ( 
        <div className="container">
            <div className="nav-item" onClick={() => navigate('/')}> <i><FaCalendarCheck /></i> Today</div>
            <div className="nav-item" onClick={() => navigate('/tomorrow')}> <i><FaCalendar /></i>Tomorrow</div>
            <div className="nav-item" onClick={() => navigate('/this-month')}> <i><IoCalendarNumberOutline /></i>This Month</div>
            <div className="nav-item" onClick={() => navigate('/next-month')}> <i><IoCalendarNumberOutline /></i>Next Month</div>
        </div>
    );
}

export default DaysCard;