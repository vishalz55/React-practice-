//without the form ithe kel apn smjl ka 

// craete the submit button it also and i want result only when the i click on submit

import { useState } from "react"

export default function Basictwo(){

    let[inputvalue,setInputvalue]= useState("")
    let[submitvalue,setSubmitvalue]=useState("")

    function handlesubmit(){
        setSubmitvalue(inputvalue)
    }
     
    return(
        <>
        <h1>Type something to dipslay</h1>

        <label htmlFor="hi">Input Name</label>
        <input
        type = 'text'
        placeholder="Name"
        onChange = {(e)=>setInputvalue((prev)=>e.target.value)}
        
        ></input>
        <button type = "submit" onClick={handlesubmit}>Click me</button>

        {submitvalue && <p>you submitted :  {submitvalue}</p>}


        </>
    )
}