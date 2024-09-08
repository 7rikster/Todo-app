import "./style.css";
import { useNavigate } from "react-router-dom";





function CalendarThisMonth() {

    const navigate = useNavigate(); 


    return ( 
        <div className="calendar-container">
            <div className="cont">
                <h2>Your Tasks for This Month: </h2>
            </div>
            
        </div>
     );
}

export default CalendarThisMonth;