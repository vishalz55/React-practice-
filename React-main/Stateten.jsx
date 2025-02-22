// now we learn about the contrlled componenet s


// Awesome! Now that you’ve learned Event Handling, let’s move on to Forms and Controlled Components in React. This is an important concept because forms 
// are used frequently in applications to get user input, and in React, we use controlled components to manage that input.

// 🔹 What Are Controlled Components?
// In React, a controlled component is an input element (like <input>, <textarea>, or <select>) whose 
// value is controlled by React state. This means the input's value is stored in state, and any change to the input is reflected in state.

// ✅ How Do Controlled Components Work?
// You link the value of an input element to a state variable using the value prop.
// You update the state when the user interacts with the input using the onChange event.


//controlled componenents form chy case madhe use hotata 
// react madhe na form compoenent astats vegle bheva krtata taychu ji satte ahe ti staore krto state varible madhe apn 


// ara he tr mage kel l ahe na bhava ho na smjl ka ho bhava 
import { useState } from 'react';

const Stateten = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update the state with the input value
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange} // Update state on input change
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
};

export default Stateten;

