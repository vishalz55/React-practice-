// now see the real use of the use effect smjl ak 
import { useState, useEffect } from "react";
const Stateforteen= () => {
  const [data, setData] = useState(null);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())  // ale la data ha stream forma te madhe asto tyla na convert kela json form at madhe 
      .then((data) => setData(data));  // set data madhe na dta store kela  data store in data 

  }, []); // Runs only once when the component mounts

  return (
  <div>
  {data ? data.title : "Loading..."} 
    {/* // string mazdhe vakue ali ka tiu na true aste trunary kivha js madhe  */}
  </div>
  );
};

export default Stateforteen;



// import { useState, useEffect } from 'react';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []); // Run only once, when the component mounts

//   return (
//     <div>
//       <h1>Data Fetching with useEffect</h1>
//       {data ? (
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default App;

