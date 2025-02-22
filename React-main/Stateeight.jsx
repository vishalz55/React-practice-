// right code smjl ka 

// import { useState } from 'react';

// export default function Stateeight()
// {
//    // let  count = 0;  // yachi na garj nahi intializa krach smj,l ka karanbhava usestate madhe intiolza kel tyla 
      

//     const [count, setCount] = useState(0); 

//     function pass()
//     {
//         console.log("Button clicked");
    
//         setCount(count+1);
//         console.log("Count is:",count);

//     }
//     return(
//      <div>
//      <button onClick = {pass}>Click me </button>
//      {/* display kay kraych tr intila state smjl ka  */}
//      <p >{count}</p>     
//      {/* intilae state dakaychi smjl ka  */}
//      </div>

//     );
// }

import {useState} from 'react'
export default function Stateeight(){

 // let count =0; 
const[isvalue,setIsvalue] = useState(0);
// const[values,setValues]=useState("enter tex " ); ara bhai ha text na direct dispal hota typeksha pacemaker used kr light shade yeil
// ani ho text deleet pn krav alagto 

const push=()=>{
    // return setIsvalue(count++);   // this is not working 
     setIsvalue(prev => prev + 1); // Correct way to update state
};

    return (

      <div>
        <h1> world</h1>
        <button onClick ={push}>click me</button>
        <h2>{isvalue}</h2>


      </div>   
    );

}


//read it important 

// prev => prev + 1 explain this i dont understand
// ChatGPT said:
// Understanding prev => prev + 1 in setIsvalue(prev => prev + 1);
// This is an updater function in useState. Let's break it down step by step:

// 1️⃣ useState Recap
// useState(initialValue) is a React hook that declares state variables.
// It returns an array:
// js
// Copy
// Edit
// const [state, setState] = useState(initialValue);
// state: Holds the current value.
// setState(newValue): Updates the value.
// 2️⃣ Normal setState Call (Direct Assignment)
// If you do:

// js
// Copy
// Edit
// setIsvalue(isvalue + 1);
// React does not guarantee immediate updates because state updates are asynchronous.
// If multiple updates happen in a short time, some may be lost.
// 3️⃣ Using the Updater Function (prev => prev + 1)
// js
// Copy
// Edit
// setIsvalue(prev => prev + 1);
// Here, prev is the latest state value.
// prev + 1 means incrementing it by 1.
// Why use prev?
// If multiple updates happen, React ensures each one uses the most recent value.
// Example:
// js
// Copy
// Edit
// setIsvalue(prev => prev + 1);
// setIsvalue(prev => prev + 1);
// This guarantees isvalue increases by 2, instead of possibly missing one update.
// 4️⃣ Example to Understand the Difference
// js
// Copy
// Edit
// const [count, setCount] = useState(0);

// const handleClick = () => {
//   setCount(count + 1);
//   setCount(count + 1);
// };
// Expected: count increases by 2.
// Actual: It may increase only by 1 because count is not updated immediately.
// ✅ Correct way using prev:

// js
// Copy
// Edit
// const handleClick = () => {
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
// };
// Now count will always increase by 2 correctly.

// 5️⃣ Key Takeaways
// ✔ prev => prev + 1 ensures updates use the latest state.
// ✔ Useful when updating the same state multiple times in one function.
// ✔ Prevents stale state issues.

// Would you like me to explain with a more detailed example? 🚀