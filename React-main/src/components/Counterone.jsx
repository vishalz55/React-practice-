//how to pass depeendies in the use effect 
//depenedieces mnjech state varible astata smjlka 
//dpemndeiecs are nothing but state varibles 





//Example: Logging out the user after 5 minutes of inactivity.
import {useState ,useEffect} from 'react';

export default function Counter ()
{

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

     let incCountx = ()=>{
    setCountx((currCount)=>currCount + 1);
     };

     let incCounty = ()=>{
        setCounty((currCount)=>currCount + 1);
         };
    
     useEffect(function printSomenthing(){
       console.log("This is the side effect ");
     },[countx]                    // yethe doni pass kru shkto kahi nahi doni pass doni lihil doni pass
                                 // ani [] he lihil mnje bhava afirst time pass nantr effect honar nahi yekach veles hoil 
    );             //ithe lihi la pha effect ha only x value change madhech hoooan r smjl ka
     
                    // bhai sabh yek commoa rahila t bg kay zal smjl ka 
    return(
     <div>

    <h1> world</h1>
    <h3>countx = {countx}</h3>
    <button onClick = {incCountx}>+1</button>

    <h1> world</h1>
    <h3>county = {county}</h3>
    <button onClick = {incCounty}>+1</button>

     </div>
     

    );

}