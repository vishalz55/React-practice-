//useeffect cha used kryach che na 3 methods astaat smjl ak 
//case 1 yat function pass krto apn tyla setup as bolave 


import {useState ,useEffect} from 'react';

export default function Counter ()
{

    let [count, setCount] = useState(0);

     let incCount = ()=>{

    setCount((currCount)=>currCount + 1);
     };

     useEffect(function printSomenthing(){
       console.log("This is the side effect ");
     });
     

    return(
     <div>

    <h1> world</h1>
    <h3>count = {count}</h3>
    <button onClick = {incCount}>+1</button>

     </div>
     

    );

}