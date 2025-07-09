

// deleteling elemenst from array smjl ak 
//kay krtoy apn array madhun na element delete krtoy ok


// delete button tyar kra ni id tyar kra mjl ka 


import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolistfive()
{

    let [todos,setTodos] = useState([{task:"sample-task",id:uuidv4()}]);  //newline //array of object bnva not only object smjl ak 
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () =>{
      setTodos((prevTodos) =>{
      return[...todos,{task:newTodo,id:uuidv4()}] ;          //new line //bhai sahab yeka line ne purn change zla smjl ka
                     });               // bhai sahb yeka line ne bhai te nav je takt hoto box madhe te na gayh hotay smjl ka
           setNewTodo("");
 };

   let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);
   };

 
   let deleteTodo = (id) =>{
    console.log(id);
   }


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
            
               <li key = {todo.id}>              
                                                                    {/* new line each task sobt button yete smjl ak  */}
                 <span>{todo.task}</span>
                 &nbsp;&nbsp;&nbsp;
                 <button onClick={() =>deleteTodo(todo.id)}>delete</button>                                


               </li> 
          ))
             
        }
        </ul>





        </div>
    );
}

