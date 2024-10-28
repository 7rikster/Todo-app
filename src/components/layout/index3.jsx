import { Route, Routes } from "react-router-dom";
import Layout from ".";
import Layout2 from "./index2";
import Tomorrow from "../tomorrow";
import TodayTaskAdd from "../today-task-add";
import ThisMonth from "../this-month";
import NextMonth from "../next-month";
import Pending from "../navbar/state-of-task/pending";
import Incompleted from "../navbar/state-of-task/incompleted";
import Completed from "../navbar/state-of-task/completed";
import AddTask from "../add-task";




function Layout3() {
    return ( <>

    

        <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path="tomorrow" element = {<Tomorrow/>}/>
          <Route path="/" element = {<Layout2/>}/>
          
          <Route path="add-today" element = {<TodayTaskAdd/>}/>

          <Route path="this-month" element = {<ThisMonth/>}/>
          <Route path="next-month" element = {<NextMonth/>}/>
          <Route path="/pending" element = {<Pending/>}/>
          <Route path="/incompleted" element = {<Incompleted/>}/>
          <Route path="/completed" element = {<Completed/>}/>
        </Route>
          <Route path="/task-add" element = {<AddTask/>}/>
        </Routes>

    </> );
}

export default Layout3;