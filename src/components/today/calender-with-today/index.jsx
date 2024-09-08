import Calendar from "../../calendar";
import { IoMdAdd } from "react-icons/io";
import "./style.css";
import { useNavigate } from "react-router-dom";





function CalendarToday() {

    const navigate = useNavigate(); 


    return ( 
        <div className="calendar-container">
            <Calendar/>
            <div className="cont">
                <h2>Your Tasks for Today: </h2>
                <i onClick={()=> navigate('/add-today')}><IoMdAdd /></i>
            </div>
            
        </div>
     );
}

export default CalendarToday;