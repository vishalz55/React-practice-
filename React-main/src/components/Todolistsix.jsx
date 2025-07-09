

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// array amdeh yekdahi ghost nahi pahije react madhe used filter method smjl ka 
//ks zal delete
// array madhun filter out zal tsch mg set method la call keltttsch rerender zala compoenent mg double to do sla pahto apn 
// component rerender check to dos  map call task disnar nahi mg rerender nahi honar  task nahi disla tr smjlka 
export default function Todolistsix()
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

   //new line 
//    let deleteTodo = (id) =>{
//    setTodos( todos.filter((todo) => todo.id !=id));
   
//    };

   //call back add kra 

   let deleteTodo = (id) =>{
   setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id !=id));
   
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

