import './LudoBoard.css';
import { useState } from "react"

export default function LudoBoard()
{

let [bluemove,setBluemove] =  useState(0)
let [yellowmove,setYellowmove] =  useState(0)
let [greenmove,setGreenmove] =  useState(0)
let [redmove,setRedmove] =  useState(0)

let [moves,setMoves] = useState({blue:0,red:0,yellow:0,green:0})

let updateBlue = ()=>{
     setMoves((prevMoves)=>
    {
          return{...prevmoves,blue:prevMoves.blue+1};
    });
};

let Target1 = () =>{
    setBluemove(bluemove+1)
  
}

let Target2 = () =>{
    setYellowmove(yellowmove+1)
}

let Target3 = () =>{
    setGreenmove(greenmove+1)
}

let Target4 = () =>{
    setRedmove(redmove+1)
}


    return(

        // div la jodych tr seprate css ni rayc h ka
         
       <div className ="Product">

       <p>Game Begins !</p>

       <p>Blue Moves:{bluemove}</p>
       <button onClick = {Target1} style = {{backgroundColor : "Blue"}}>+1</button>

       <p>Yellow Moves :{yellowmove}</p>
       <button  onClick = {Target2} style = {{backgroundColor:"Yellow"}}>+1</button>

       <p>Green Moves:{greenmove}</p>
       <button onClick = {Target3} style = {{backgroundColor:"Green"}}>+1</button>

       <p>Red Moves:{redmove}</p>
       <button onClick = {Target4} style = {{backgroundColor:"Red"}}>+1</button>

       </div>

    )
}




// 🔍 Code:
// js
// Copy
// Edit
// let updateBlue = () => {
//   setMoves((prevMoves) => {
//     return { ...prevMoves, blue: prevMoves.blue + 1 };
//   });
// };
// 💡 What is prevMoves?
// prevMoves is a function parameter that represents the previous (current) state value of moves before updating it.

// This form:

// js
// Copy
// Edit
// setMoves((prevMoves) => { ... })
// is called the functional update form of useState. It's used when you want to update state based on its previous value to ensure accuracy, especially when multiple state updates are queued.

// 📦 Example Context:
// Suppose you have:

// js
// Copy
// Edit
// const [moves, setMoves] = useState({
//   blue: 0,
//   red: 0,
//   green: 0,
//   yellow: 0,
// });
// Then calling:

// js
// Copy
// Edit
// updateBlue();
// will do:

// js
// Copy
// Edit
// setMoves((prevMoves) => {
//   return {
//     ...prevMoves,
//     blue: prevMoves.blue + 1,
//   };
// });
// So if prevMoves was:

// js
// Copy
// Edit
// { blue: 0, red: 0, green: 0, yellow: 0 }
// Then the result becomes:

// js
// Copy
// Edit
// { blue: 1, red: 0, green: 0, yellow: 0 }
// ✅ Why use prevMoves?
// Because React state updates may be asynchronous, using prevMoves guarantees you're working with the most recent state.

