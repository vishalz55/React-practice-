//arraya ghetela ani tyachya value na use state madhe takyla ani tyala 
//tya value display kelaya map cha used krun 


// step 1 array madhun ghy ani display kra smjl ka 


// array la pass krtoy apn todo list madhe smjl ka 
// array madhen ghetl aani display kela smjl ka
 import { useState } from "react";


export default function Todlolist()
{

    let [todos,setTodos] = useState(["sample Tasks","vishal","mungal"]);







    return(
        <div>
          <h2>To Do List</h2>
        <input placeholder = "Add the task"></input>
        <br></br>
        <button>Add Task</button>
        <br></br><br></br><br></br>
 
        <hr></hr>
        <h2>Task List</h2>
        <ul>
        {/* list pathavchi smjl ka map ch used kra  */}

          {   todos.map((todo) =>{
                return  <li>{todo}</li>

             })
             
        }
        </ul>

        </div>
    );
}