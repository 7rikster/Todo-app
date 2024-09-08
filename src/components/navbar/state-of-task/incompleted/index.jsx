
import "./style.css";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"

import { useState, useEffect } from "react";
import { fetchListOfTodos } from "../../../../todos";
import TodoCard from "../../../todo-card";

function Incompleted() {

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
    const {data: incompletedList, isLoading: isLoadingIncompleted} = useQuery({
        queryKey : ['incompletedList'],
        queryFn : ()=> todoList.filter(todo => todo.state == "pending" && todo.day < day && todo.month <= month && todo.year <= year)
    });
    
    
    function handleCheckbox(){
        getQueryClient.invalidateQueries(["todoList"]);
        getQueryClient.invalidateQueries(["incompletedList"]);
    }





    return ( 
        <div className="pending-container" >
            <h1>Hello Priyanshu</h1>
            {
                isLoading && <h2>Fetching all of your pending tasks</h2>
            }
            <h2>Your Incompleted Tasks: </h2>
            <div className="task-container">
                <div className="pending">
                {incompletedList?.length > 0 ? 
                incompletedList.map(todo => <TodoCard key={todo.id} task ={todo.todo} id={todo.id} onCheckChange={handleCheckbox} checked={false}/>)
                : !isLoadingIncompleted && <h3>Well Done! You don't have any incompleted tasks</h3>}
                </div>
            </div>
            
            
            

        </div>
     );
}

export default Incompleted;