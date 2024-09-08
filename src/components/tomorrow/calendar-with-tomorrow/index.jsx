import "./style.css";
import { useNavigate } from "react-router-dom";





function CalendarTomorrow() {

    const navigate = useNavigate(); 


    return ( 
        <div className="calendar-container">
            <div className="cont">
                <h2>Your Tasks for Tomorrow: </h2>
            </div>
            
        </div>
     );
}

export default CalendarTomorrow;