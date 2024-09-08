import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { changeState, fetchListOfTodos, getDetails } from "../../todos";
import "./style.css"
import TodoDetails from '../todo-details';

function TodoCard({task, id, onCheckChange, checked}) {

    const [trial, setTrial] = useState(false);
    const [todoDetails, setTodoDetails] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const getQueryClient = useQueryClient();

    const {data: todoList, isLoading} = useQuery({
        queryKey : ['todoList'],
        queryFn : ()=> fetchListOfTodos()
    });

    async function handleStateChange(){
        await handleStateChangeMutation(id);
        onCheckChange();
    }

    const {mutateAsync: handleStateChangeMutation} = useMutation({
        mutationFn: changeState,
        onSuccess: ()=>{
            getQueryClient.invalidateQueries(["todoList"]);
        }
    })

    let details = null;
    function handleGetDetails(){
        details = todoList[id-1];
        console.log(details);
        setTodoDetails(details);
        setOpenDialog(true);
    }

    




    return ( 
        <div className="card">
            <FormControlLabel control={<Checkbox defaultChecked={checked}/>}  onChange={handleStateChange}/>
            <div className="task">
                <p>{task}</p>
                <button onClick={handleGetDetails}>Details</button>
            </div>
            <TodoDetails setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails} openDialog={openDialog} details={todoDetails}/>
        </div>
     );
}

export default TodoCard;