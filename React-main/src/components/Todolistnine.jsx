

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


//single emenet update krtoy apn smjl ka 
//aplyala na yat done task ch krych smjl ka kay krnar aon mg done task sathi 
//done task vrti click kel  ka mark as done yay la pahije 
//

//how to do hint 
//object madhe na task ,key ahe briber 
//yat na bhava isdone navhacah vegka varibel store krava lagel 
//by default done sathji value false asel 
//buuton create kra ani click kela ka  done chi value update houn true hoil smjl ak 
//true zali ka value syling madje na true janaar value ani line through add krnear





export default function Todolistnine()
{

    let [todos,setTodos] = useState([{task:"sample-task",id:uuidv4(),isDone:false}]);  //new line
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () =>{
      setTodos((prevTodos) =>{
      return[...todos,{task:newTodo,id:uuidv4(),isDone:false}] ;       // new task add isdpne value false asel      
                     });               
           setNewTodo("");
 };

   let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);
   };

   let deleteTodo = (id) =>{
   setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id !=id));
   
   };




  let markallAsDone =() =>{
                   
    setTodos( (prevTodos)=>
        prevTodos.map((todo) =>{
          return{
             ...todo,
            
             isDone:true,   
    };

    })
  ); 
  
  };



  
  let markAsDone =(id) =>{                       //chaneg name fo the function 
                   
    setTodos( (prevTodos)=>
         prevTodos.map((todo) =>{
      if(todo.id == id){
        return{
            ...todo,
           isDone:true,                              //baki serbv same this line is new 
        };
    }                                                    //mnje change ha yekactch asto 
    else{
        return todo;
    }   
    
    })
);
};


    return(
        <div>
          <h2>To Do List</h2>
      
        <input placeholder = "Add the task" value = {newTodo} onChange = {updateTodoValue}></input>
        <br></br>
        <button onClick = {addNewTask}>Add Task</button>
        <br></br><br></br><br></br>
 
        <hr></hr>
        <h2>Task List</h2>
        <ul>
   

          {   todos.map((todo) =>(
            
               <li key = {todo.id}>              

                                             {/* style dya jethe pn print hotay smjl ka mark as done ok                              */}
                 <span style ={ todo.isDone  ? { textDecorationLine: "line-through" }:{}}>
            
                 {todo.task}
                 </span>
                 &nbsp;&nbsp;&nbsp;
                 <button onClick={() =>deleteTodo(todo.id)}>delete</button>     
                 <button onClick={() =>markAsDone(todo.id)}>markAsDone</button>     
                            


               </li> 
          ))
             
        }
        </ul>
                                                

        <br></br>
        <button onClick={markallAsDone }>markallAsDone </button>       





        </div>
    );
}

