
import "./style.css";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"

import { useState, useEffect } from "react";
import { fetchListOfTodos } from "../../../../todos";
import TodoCard from "../../../todo-card";

function Completed() {

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

    const getQueryClient = useQueryClient();

    const {data: todoList, isLoading} = useQuery({
        queryKey : ['todoList'],
        queryFn : ()=> fetchListOfTodos()
    });
    const {data: completedList, isLoading: isLoadingCompleted} = useQuery({
        queryKey : ['completedList'],
        queryFn : ()=> todoList.filter(todo => todo.state == "completed" && (todo.month == month || todo.month == month-1))
    });
    
    
    function handleCheckbox(){
        getQueryClient.invalidateQueries(["todoList"]);
        getQueryClient.invalidateQueries(["completedList"]);
    }





    return ( 
        <div className="pending-container" >
            <h1>Hello Priyanshu</h1>
            {
                isLoading && <h2>Fetching all of your completed tasks</h2>
            }
            <h2>Your Completed Tasks: </h2>
            <div className="task-container">
                <div className="pending">
                {completedList?.length > 0 ? 
                completedList.map(todo => <TodoCard key={todo.id} task ={todo.todo} id={todo.id} onCheckChange={handleCheckbox} checked={true}/>)
                : !isLoadingCompleted && <h3>You have not completed any Task yet!</h3>}
                </div>
            </div>
            
            
            

        </div>
     );
}

export default Completed;