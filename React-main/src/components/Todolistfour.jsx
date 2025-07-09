//react amdhe jevha pn map cha used krun multiple items add krto apn react bolte ki iten la na track krysathi tykde unique id asli pahije 


//unique id asli pahije
// ks denar yek tr swtach denar prekeka manuualy id 
//uuid used krnar smjl ka 

// he kay krte unique id generate krte smjlak 
//change sadha array ni krta yet nahi used object jyat task and id deta yeil

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolistfour()
{

    let [todos,setTodos] = useState([{task:"sample-task",id:uuidv4()}]);  //newline //array of object bnva not only object smjl ak 
    let [newTodo,setNewTodo] = useState("");

//    let addNewTask = () =>{
//         return [...prevTodos,{task:newTodo,id:uuidv4()}] ;          //new line //bhai sahab yeka line ne purn change zla smjl ka
//         setNewTodo("");  

//    }


   //pn yaar ideal case madhe na bhava apn kay krto tr yagchi value jr depeend asel tr callback cha used krto smjl a 
   
   let addNewTask = () =>{
        setTodos((prevTodos) =>{
        return[...todos,{task:newTodo,id:uuidv4()}] ;          //new line //bhai sahab yeka line ne purn change zla smjl ka
                       });               // bhai sahb yeka line ne bhai te nav je takt hoto box madhe te na gayh hotay smjl ka
             setNewTodo("");
   };

   let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);
   };



    return(
        <div>
          <h2>To Do List</h2>
          {/* new to do chi value varible kothun bhetel tr paceholder madhun na  */}
          {/* main game tr on change property krte */}
        <input placeholder = "Add the task" value = {newTodo} onChange = {updateTodoValue}></input>
        <br></br>
        <button onClick = {addNewTask}>Add Task</button>
        <br></br><br></br><br></br>
 
        <hr></hr>
        <h2>Task List</h2>
        <ul>
        {/* list pathavchi smjl ka map ch used kra  */}

          {   todos.map((todo) =>(
               <li key = {todo.id}>{todo.task}</li>  //new line 

          ))
             
        }
        </ul>





        </div>
    );
}

