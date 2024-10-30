import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { addNewTodo, fetchListOfTodos } from "../../todos";
import { IoMdClose } from "react-icons/io";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function TodayTaskAdd() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const month = date.getMonth()+1;
    const day = date.getDate();
    const year = date.getFullYear();

    const [task, setTask] = useState('');
    const navigate = useNavigate();
    const getQueryClient = useQueryClient();

    const {data: todoList=[], isLoading} = useQuery({
        queryKey : ['todoList'],
        queryFn : ()=> fetchListOfTodos()
    });

    function handleTaskInput(event){
        setTask(event.target.value);
    }

    async function handleTaskAdd(){
        await handleAddNewTodoMutation({task, day, month, year});
        setTask("");
        navigate("/");
        window.location.reload();
        
    }
 
    const {mutateAsync: handleAddNewTodoMutation} = useMutation({
        mutationFn: addNewTodo,
        onSuccess: ()=>{
            getQueryClient.invalidateQueries(["todoList"]);
            // window.location.reload();

        }
    })



    return ( 
        <div className="today-add-container">
            <i onClick={()=>{
                navigate("/")
            }}><IoMdClose /></i>
            <h2>Add Task for Today</h2>
            <input name="name" value={task} placeholder="Enter your task" onChange = {handleTaskInput}/>
            <button disabled={task.trim() === ""} onClick={handleTaskAdd} >Add</button>
        </div>
     );
}

export default TodayTaskAdd;