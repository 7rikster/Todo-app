import "./style.css";
import { useNavigate } from "react-router-dom";





function CalendarNextMonth() {

    const navigate = useNavigate(); 


    return ( 
        <div className="calendar-container">
            <div className="cont">
                <h2>Your Tasks for the Next Month: </h2>
            </div>
            
        </div>
     );
}

export default CalendarNextMonth;