// hey but i also want to see the resultin form of list i dosent not destory
//  while i next type on page


import { useState } from 'react'


function Basicfour() {

   let[input,setInput] =useState("");
   let[display,setdisplay] = useState("");

   let handleClick(){
     if(input.length()===" ")return;
     setdisplay([...input])

   }


  return (
    <>
     <h1>To do list</h1>   

     <label htmlFor='vish'>Enter the items</label>
     <input
     placeholder='intems'
     type = 'text'
     id= 'vish'
     onChange= {(e)=>setInput((prev)=>e.target.value)}

     ></input>

     <button type = "submit" onClick={handleClick}>Click me !</button>


    </>   
  )
}






export default Basicfour
