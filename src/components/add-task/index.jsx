import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { addNewTodo, fetchListOfTodos } from "../../todos";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css'; 
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function AddTask() {
    const navigate = useNavigate();
  const [task, setTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const getQueryClient = useQueryClient();

    const {data: todoList} = useQuery({
        queryKey : ['todoList'],
        queryFn : ()=> fetchListOfTodos()
    });

    function handleTaskInput(event){
        setTask(event.target.value);
    }

    async function handleTaskAdd(){
        await handleAddNewTodoMutation(task);
        setTask("");
        navigate("/");
    }

    const {mutateAsync: handleAddNewTodoMutation} = useMutation({
        mutationFn: addNewTodo,
        onSuccess: ()=>{
            getQueryClient.invalidateQueries(["todoList"]);
        }
    })

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  const getFormattedDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return {day,month,year};
  };

async function handleTaskAdd(){
    if(!selectedDate){
        alert("Choose a Date!");
    }
    else if(task.trim() === ""){
        alert("Enter the task!");
    }
    else{
        const gotDate = getFormattedDate(selectedDate);
        const {day,month,year} = gotDate;
        await handleAddNewTodoMutation({task, day, month, year});
        setTask("");
        navigate("/");
    }
  }

  return (
    <div className="add-task-container">
      <i onClick={()=>{navigate("/")}}><IoMdClose /></i>
      <h2 className='select'>Select a Date</h2>
      <div className='input'>
      <input className='task-input' name="name" value={task} placeholder="Enter your task" onChange = {handleTaskInput}/>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Pick a date!"
        showPopperArrow={false}
        className="custom-datepicker-input"
        popperClassName="custom-datepicker-popper"
      />
        <button onClick={handleTaskAdd}>Add</button>
      </div>
      
    </div>
  );
}

export default AddTask;
