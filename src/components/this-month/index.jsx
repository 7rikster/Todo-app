import { addNewTodo, fetchListOfTodos } from "../../todos";
import "./style.css";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import TodoCard from "../todo-card";
import { useState, useEffect, useContext } from "react";
import CalendarThisMonth from "./calendar-this-month";
import { AuthContext } from "../../context";

function ThisMonth() {
    const {user} = useContext(AuthContext);
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

    const {data: todoList=[], isLoading} = useQuery({
        queryKey : ['todoList'],
        queryFn : ()=> fetchListOfTodos(),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        
    });
    const {data: pendingList=[], isLoading: isLoadingPending} = useQuery({
        queryKey : ['pendingList'],
        queryFn : ()=> todoList.filter(todo => todo.state == "pending" && todo.month == month && todo.year == year),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        enabled: !!todoList.length,
    });
    const {data: completedList=[], isLoading: isLoadingCompleted} = useQuery({
        queryKey : ['completed'],
        queryFn : ()=> todoList.filter(todo => todo.state == "completed" && todo.month == month && todo.year == year),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        enabled: !!todoList.length,
    });
    
    function handleCheckbox(){
        getQueryClient.invalidateQueries(["todoList"]);
        getQueryClient.invalidateQueries(["pendingList"]);
    }





    return ( 
        <div className="today" >
            <h1>Hello {user.displayName}</h1>
            {
                isLoading && <h2>Fetching your tasks for This Month</h2>
            }
            <CalendarThisMonth/>
            <div className="task-container">
                <div className="pending">
                {pendingList?.length > 0 ? 
                pendingList.map(todo => <TodoCard key={todo.id} task ={todo.todo} id={todo.id} onCheckChange={handleCheckbox} checked={false}/>)
                : !isLoadingPending && <h3>Well Done! You have completed all your tasks for today</h3>}
                </div>
                <div className="completed">
                <h2>Completed tasks:</h2>
                {completedList?.length > 0 ? 
                completedList.map(todo => <TodoCard key={todo.id} task ={todo.todo} id={todo.id} onCheckChange={handleCheckbox} checked={true}/>)
                : !isLoadingCompleted && <h3>You haven't completed any task yet!</h3>}
                </div>
            </div>
            
            
            

        </div>
     );
}

export default ThisMonth;