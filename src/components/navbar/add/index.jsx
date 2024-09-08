
import { useNavigate } from "react-router-dom";
import "./style.css";

function AddButton() {

    const navigate = useNavigate();

    return ( 
        <div className="add-button">
            <button onClick={() => navigate("/task-add")}>Add Task</button>
        </div>
     );
}

export default AddButton;