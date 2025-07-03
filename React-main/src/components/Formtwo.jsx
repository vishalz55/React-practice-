
//labesls tyatr krtoy react madhe apn smjlak 
//labesl ch html ch expamle gheun pha for and label ch smjle 


//nultiple input handle ktoy apn smjl ak how 
//new box new ,new mahiod new state varible


//form madhe kiti 
//ata jr mla na mutiple input ghyche tr thrvdhe bhava ml sna state varibke te krave lagtat smjla ka ya case madhe 
//use lrych aste handle input change () cha common handle change krto apn for all emenents 
//common hander servachy madhe jauninvoke hoil smjl ka   satate sathi apn na object bnvtoy smjl ka
//abe generoc krtoy smjl ka


//single object tyar krto form madhe serv elemets la change krel smjl ka 
//console log krun phaa value submit hoata ka te ok
//jy value aly na console madhe tyana na submmison hoipryant vat pagych garj nahi smjl ka 
//agodar pn accsess krta yetat 




// last la na easy syntax ahe video madhe te pha ok 
import { useState } from "react";

export default function Formtwo() {


    let [formData,setFormData] = useState({
      fullName:"",
      username:""  
    });




//   let handleNameChange = (event) =>{
//     setFullName(event.target.value);
//   }



//common method
    let handleInputChange = (event)=>{
        let fieldName = event.target.name;  //target madhun name madhun yeil te mg kahli na name lihav kagel name "" as smjl ka 
        let newValue = event.target.value;
     
        setFormData((currData) =>{

           currData[fieldName]    = newValue;            // it na array nahi bhava to te tr field la na access krtoy apn smjl ka 
             return { ...currData };
        } )                                      // dot n vaprta te used krtpoy apn smjl ka 
    };
                                              // [] computed property name ase bolave 
    
                                              // mnje aplykde exact nav nahi tyach propertiy nav ahe yeka varible chh smjl ka bhava 

   let handleSubmit = (event) =>{
       event.preventDefault();
       setFormData({

         fullName: "",                            // ya mule la form madhil ghoti khali hotat smjl ka
         username: ""
       })
   }




  return (
    <>
     <div>
      <h1>Enter data </h1>
     

      <form onSubmit = {handleSubmit}>
      <label htmlFor = "username">Full Name</label>   
      {/* // full name yeoil an ho bahava  */}
       <input
        placeholder = "Enter your name" 
        type = "text"
        value = {formData.fullName}
       // onChange = {handleNameChange}
        id = "fullname"
        name = "fullname"
        onChange = {handleInputChange}
         >
       </input>   
       {/* input madhe ji pn value yeil na ti satte varible ci value yeil smjl ak  */}
      <br></br>
       <button>Submit</button>
           <br></br>
           <br></br>

    
      <label htmlFor = "username">Full Name</label>
       <input placeholder = "Enter your name" 
        type = "text"
        value = {formData.username}
     //   onChange = {handleUserName}
        id = "username"
        name = "username"
        onChange = {handleInputChange}
        >

       </input>   
       {/* input madhe ji pn value yeil na ti satte varible ci value yeil smjl ak  */}
      <br></br>
       <button>Submit</button>

      </form>
         
      </div>
    </>
  )
}


