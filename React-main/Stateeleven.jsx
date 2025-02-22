// this is really an imporatant problem multiple concept single problem 


//controll from using multiple inputs smjl ka 
//yat na multiple input gheto aon smjl ka 

import { useState } from 'react';    // use state import kel 


const Stateeleven = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', //servsathi lihiypeksha object dya takun smjl ka 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;    // event targget name event target vaue short form 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update corresponding state based on the name attribute
    }));
    };

// function handleInputChange(event) {
//   const { name, value } = event.target;
//   setFormData(function (prevData) {
//     return {
//       ...prevData,
//       [name]: value, // Update corresponding state based on the name attribute
//     };
//   });
// }


// 🔹 What is event.target?
// When an event occurs (like typing in an input field), event contains information about that event.

// event.target refers to the DOM element that triggered the event (for example, an <input> field).
// 🔹 What is { name, value } = event.target; doing?
// It is extracting the name and value properties from event.target using object destructuring.

// ✅ Example Without Destructuring:
// javascript
// Copy
// Edit
// const eventTarget = event.target; 
// const name = eventTarget.name;  // Getting 'name' attribute of input
// const value = eventTarget.value; // Getting 'value' of input field
// ✔ This is the same as:

// javascript
// Copy
// Edit
// const { name, value } = event.target;

// ✔ Explanation:
//     You can convert the arrow function to a regular function like this:

// 🔹 Without Arrow Function:
// jsx
// Copy
// Edit

// Removed the arrow function and used the function keyword.
// Used a regular function inside setFormData instead of an arrow function.
// This works exactly the same way as the arrow function version. 🚀








//   };
//   document.body.innerHTML = `<p>Name: ${formData.name}</p>`;
//   🔹 So, Name: ${formData.name}, Email: ${formData.email} is just a formatted string that inserts values dynamically! 🚀

// he na only alert message sathi ashe smkl ak 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>           
    {/* // yekch form tyar kela tyat na don input  ghete le smjl ka  */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Stateeleven;
