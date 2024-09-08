
import "./style.css";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"

import { useState, useEffect } from "react";
import { fetchListOfTodos } from "../../../../todos";
import TodoCard from "../../../todo-card";

function Pending() {

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
    const {data: pendingList, isLoading: isLoadingPending} = useQuery({
        queryKey : ['pendingList'],
        queryFn : ()=> todoList.filter(todo => todo.state == "pending" && todo.day >= day && todo.month >= month && todo.year >= year)
    });
    
    
    function handleCheckbox(){
        getQueryClient.invalidateQueries(["todoList"]);
        getQueryClient.invalidateQueries(["pendingList"]);
    }





    return ( 
        <div className="pending-container" >
            <h1>Hello Priyanshu</h1>
            {
                isLoading && <h2>Fetching all of your pending tasks</h2>
            }
            <h2>Your Pending Tasks: </h2>
            <div className="task-container">
                <div className="pending">
                {pendingList?.length > 0 ? 
                pendingList.map(todo => <TodoCard key={todo.id} task ={todo.todo} id={todo.id} onCheckChange={handleCheckbox} checked={false}/>)
                : !isLoadingPending && <h3>Well Done! You have completed all your pending tasks</h3>}
                </div>
            </div>
            
            
            

        </div>
     );
}

export default Pending;