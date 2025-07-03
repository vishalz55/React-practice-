
//labesls tyatr krtoy react madhe apn smjlak 
//labesl ch html ch expamle gheun pha for and label ch smjle 
//react madhel id ani for cha used krto
import { useState } from "react";

export default function Formone() {


    let [fullName,setFullName] = useState("");

  let handleNameChange = (event) =>{
    setFullName(event.target.value);
  }





  return (
    <>
     <div>
      <h1>Enter data </h1>
     



      <form>
      <label htmlFor = "username">Full Name</label>
       <input placeholder = "Enter your name" 
        type = "text"
        value = {fullName}
        onChange = {handleNameChange}
        id = "username">

       </input>   
       {/* input madhe ji pn value yeil na ti satte varible ci value yeil smjl ak  */}
      <br></br>
       <button>Submit</button>

      </form>
         
      </div>
    </>
  )
}


