import './LudoBoard.css';
import { useState } from "react"

export default function LudoBoard()
{

let [bluemove,setBluemove] =  useState(0)
let [yellowmove,setYellowmove] =  useState(0)
let [greenmove,setGreenmove] =  useState(0)
let [redmove,setRedmove] =  useState(0)


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