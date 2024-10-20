import { addNewTodo, fetchListOfTodos } from "../../todos";
import "./style.css";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import TodoCard from "../todo-card";
import { useState, useEffect, useContext } from "react";
import CalendarTomorrow from "./calendar-with-tomorrow";
import { AuthContext } from "../../context";

function Tomorrow() {
    const {user} = useContext(AuthContext);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    let month = date.getMonth()+1;
    let day = date.getDate()+1;
    let year = date.getFullYear();
    if(day == 32 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)){
        day = 1;
        month = month+1;
        if(month == 13){
            month = 1;
            year = year+1;
        }
    }
    else if(day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)){
        day = 1;
        month = month+1;
    }
    else if(day == 29 && month == 2){
        day = 1;
        month = month+1;
    }



    const getQueryClient = useQueryClient();

    const {data: todoList, isLoading} = useQuery({
        queryKey : ['todoList'],
        queryFn : ()=> fetchListOfTodos()
    });
    const {data: pendingList, isLoading: isLoadingPending} = useQuery({
        queryKey : ['pendingList'],
        queryFn : ()=> todoList.filter(todo => todo.state == "pending" && todo.day == day && todo.month == month && todo.year == year)
    });
    const {data: completedList, isLoading: isLoadingCompleted} = useQuery({
        queryKey : ['completed'],
        queryFn : ()=> todoList.filter(todo => todo.state == "completed" && todo.day == day && todo.month == month && todo.year == year)
    });
    
    function handleCheckbox(){
        getQueryClient.invalidateQueries(["todoList"]);
        getQueryClient.invalidateQueries(["pendingList"]);
    }





    return ( 
        <div className="today" >
            <h1>Hello {user.displayName}</h1>
            {
                isLoading && <h2>Fetching your tasks for Tomorrow</h2>
            }
            <CalendarTomorrow/>
            <div className="task-container">
                <div className="pending">
                {pendingList?.length > 0 ? 
                pendingList.map(todo => <TodoCard key={todo.id} task ={todo.todo} id={todo.id} onCheckChange={handleCheckbox} checked={false}/>)
                : !isLoadingPending && <h3>Well Done! You have completed all your tasks for Tomorrow</h3>}
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

export default Tomorrow;