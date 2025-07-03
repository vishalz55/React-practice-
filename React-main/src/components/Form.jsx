// forms cha abhyas krtana react madhe thod vegl krav lagte smjl ak 
// input submit button he vgle astata 
// te preserve krtata tyachi na internal satate 

//internal state mnje react chi srte nahi tr 
//yachy kde na swtach internal information data asto 
//ani kahide fault behgaviours pn yetat sobt 
//forms sumit vachy agodarch infro mation gyab houn jate smjl ka 
//tyalach from chy element ch default behaviopur as bolave 
//ashani kay hote data chi acces form chy aplylan kadhi bhetel jevha form ha compoelete submit zala thavach smjl ak 

//rreact la control kryach mg ty case madhe yeteat controlled components a
//react chi state single source of truth aste 
//apn tag la n vicharta react chy element la ti ghost vicahrto br ka smjl 


import { useState } from "react";

export default function Form() {


    let [fullName,setFullName] = useState("");


//at amla connect kruyach fomrm la sate varible sobt smjlk ka
//are bhav he apn agodarch kelo smjl ka to do madhe kay krto input madhe ji value ahe na tila  eaual krto na state varible sobt smjl ak 
//input madhe eveent asto onchange smjl ak 


  let handleNameChange = (event) =>{
    setFullName(event.target.value);
  }


  return (
    <>
     <div>
      <h1>Enter data </h1>
      <form>

       <input placeholder = "Enter your name" type = "text" value = {fullName} onChange = {handleNameChange}></input>   
       {/* input madhe ji pn value yeil na ti satte varible ci value yeil smjl ak  */}
      <br></br>
       <button>Submit</button>

      </form>
      </div>
    </>
  )
}


