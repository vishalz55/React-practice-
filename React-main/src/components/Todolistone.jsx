// step 2 
// new state vaible create kela 
//tyachi intialile value placeholder madhe dili
// button sathi onclick evenet ani function crate kr smjl ka

// state madhe value kadli smjl ka ata yach value la gheun print krysch yesmjl ak 

// state madhe value kadli smjl ka 



import { useState } from "react";


export default function Todolistone()
{

    let [todos,setTodos] = useState(["sample Tasks","vishal","mungal"]);
    let [newTodo,setNewTodo] = useState("");   // new statw varibel kela 

   let addNewTask = () =>{
    console.log("we have to add new task in to do");

   }

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
               <li>{todo}</li>

          ))
             
        }
        </ul>





        </div>
    );
}




// In React, the onChange property (or event handler) is used to handle changes in input fields, text areas, checkboxes, select elements, and other form elements. It allows React to track and update the component state whenever the value of an input changes.

// Why Use onChange in React?
// Controlled Components:

// React recommends using controlled components, where form elements get their value from the component state.
// The onChange event updates the state whenever the input value changes.
// Real-time Input Handling:

// It allows real-time updates and validations while typing (e.g., live search, form validation, character limits).
// State Synchronization:

// Ensures that the UI reflects the current state of the component.
// Event Handling:

// Helps in capturing user inputs and executing functions accordingly.
// Example of onChange in a Controlled Component
// jsx
// Copy
// Edit
// import { useState } from "react";

// function MyComponent() {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Typed Text: {text}</p>
//     </div>
//   );
// }

// export default MyComponent;
// How It Works
// The input field's value is controlled by the text state.
// onChange updates the state with setText(event.target.value), so changes reflect instantly.
// Let me know if you need more clarification! 🚀