import './App.css'
import Layout from './components/layout';
import Tomorrow from './components/tomorrow';
import ThisMonth from './components/this-month';
import NextMonth from './components/next-month';
import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout2 from './components/layout/index2';
import TodayTaskAdd from './components/today-task-add';
import AddTask from './components/add-task';
import Pending from './components/navbar/state-of-task/pending';
import Incompleted from './components/navbar/state-of-task/incompleted';
import Completed from './components/navbar/state-of-task/completed';

function App() {
  


  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path="tomorrow" element = {<Tomorrow/>}/>
          <Route path="/" element = {<Layout2/>}>
            <Route path="add-today" element = {<TodayTaskAdd/>}/>
          </Route>
          <Route path="this-month" element = {<ThisMonth/>}/>
          <Route path="next-month" element = {<NextMonth/>}/>
          <Route path="/pending" element = {<Pending/>}/>
          <Route path="/incompleted" element = {<Incompleted/>}/>
          <Route path="/completed" element = {<Completed/>}/>
        </Route>
          <Route path="/task-add" element = {<AddTask/>}/>
          
      </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App;
