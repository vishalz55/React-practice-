//create an array of object and map it using the map functoin 

// users.map() loops through the users array.
// 🔹 It returns <li> for each object in the array.
// 🔹 key={user.id} ensures each list item has a unique key.

// 🔥 Final Answer
// ✔ map() is used to iterate over an array and display dynamic data in JSX.
// ✔ It returns JSX elements for each item in the array.
// ✔ It must have a unique key when rendering lists in React.

export default function Mapfive()
{
    const data = [

        
   // id : 1,2,3,4        //    id : 1,2,3,4
   {
   id : 1,
   name :"vishal",     // wrong way yekch id la as deta yet nahi 
    age : 20,
    gender:"male",
   },
   {
    id :2 ,
    name :"rahul",     // wrong way yekch id la as deta yet nahi 
     age : 21,
     gender:"male",
},
 {
        id : 3,
        name :"kartik",     // wrong way yekch id la as deta yet nahi 
         age : 22,
     gender:"male",
 },
  

 {
    id : 4,
    name :"surti",     // wrong way yekch id la as deta yet nahi 
     age : 22,
    gender:"female",
}

   ];

    return(
     <div>

     <h1>Student data </h1>


     <ul>
      {
          data.map((index)=>(

        <li key = {index.id}>{index.id}</li>

          ))
      }
     </ul>

     <ul>
      {
          data.map((index)=>(

        <li key = {index.id}>{index.name}</li>

          ))
      }
     </ul>
     <ul>
      {
          data.map((index)=>(

        <li key = {index.id}>{index.age}</li>

          ))
      }
     </ul>
     <ul>
      {
          data.map((index)=>(

        <li key = {index.id}>{index.gender}</li>

          ))
      }
     </ul>

     </div>
    );
}


// imp imp imp ha kay vishayt ahe te pha 
// ✔ If the names array is empty, it shows "No names available".
// ✔ If it has data, it displays the list.
// Example 3: Show Message Only if List is Empty



// const App = () => {
//     const names = [];
  
//     return (
//       <div>
//         {names.length === 0 ? <p>No names available</p> : names.map((name, index) => <p key={index}>{name}</p>)}
//       </div>
//     );
//   };
  
//   export default App;
  