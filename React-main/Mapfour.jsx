// 🔹 Syntax of map() Method in JSX
// In React (JSX), the map() method is used to loop through an array and return JSX elements.

// ✅ Basic Syntax
// jsx
// Copy code
// array.map((element, index) => {
//   return (JSX Code);
// });
// 🔹 array → The 
// 0
// array you want to loop through
// 🔹 element → Each item in the array
// 🔹 index → Position of the item (optional, used for keys)
// 🔹 JSX Code → The UI elements you want to render for each item


//Q1  display the list of the item in an array 



export default function Mapfour()
{



    const Boys = ["Vishal","Rahul","Kunal","Mohit","Krishna"];
    return(
     <div>
      <h1>Playing  5 team from squad </h1>
    
    
     <ul>
      {
       Boys.map((value,index)=>(
         <li key = {index}>{value}</li>


      ));
   
      };

     </ul>


     </div>
    
    );
}