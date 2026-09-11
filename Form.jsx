import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Form() {

   let [store,setStore] = useState("")
   let[display,setDisplay] = useState([{text : "sample text",id:uuidv4()}])

   let handleClick = (e)=>{
        e.preventDefault();
        setDisplay([...display,{text : store,id:uuidv4()}])
        setStore("")
   }
   
//    let handledeleteonClick = (id)=>{
//     //  change kashy ahe bhava dipslnay na so bhava yat na tu kay kr bhava diplsya set cha use krav sjl ka 
   
//    }


 let  handledeleteClick = (id)=>{
       setDisplay(display.filter((items)=>items.id!==id))
 }
  
 let handleDeleteAll = () => {
    setDisplay([])   // list रिकामी ani list jr rikami asel tr madhe kahi rahnar ch nahi smjl ka 
  }

  let handleUppercaseAll = () => {
    setDisplay(display.map((items) => {
      return { ...items, text: items.text.toUpperCase() }
    }))
  }

  let handleUppercaseOne = (id) => {
      setDisplay(display.map((items) =>
         items.id === id ? { ...items, text: items.text.toUpperCase() } : items
      ))
   }

  return (
    <div>
      <input
      placeholder='Enter text'
      type = "text"
      onChange = {(e)=>setStore(e.target.value)}
      value = {store}
      ></input>
      <button onClick = {handleClick}>Click me</button>

      <button onClick={handleDeleteAll}>
        Delete All
      </button> 

      <button onClick = {handleUppercaseAll}>uppercaseAll</button>

     <ul>{display.map((items,index)=>(
        
        <li key ={items.id}>
        <span>{items.text}</span>
        <button onClick = {()=>handledeleteClick(items.id)}>Delete</button>
        <button onClick={() => handleUppercaseOne(items.id)}>Uppercase</button>
        </li>
        
        ))}</ul>
     
    </div>
  )
}

export default Form
