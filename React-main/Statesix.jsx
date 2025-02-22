//Q2 print the mesgeusing button if button lclick then message display 



import { useState } from "react";

export default function Statesix(){

    const [isVisible, setIsVisible] = useState(true);

    const Message = () => {
      setIsVisible(!isVisible); // Toggle the value
    };

    return(


    <div>
      <button onClick={Message}>Toggle Message</button>
      {isVisible && <h2>This message is from vishal!</h2>}
    </div>

    );
}