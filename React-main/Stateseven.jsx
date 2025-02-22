//q3 take the input form user and display it as result 


import { useState } from 'react';

export default function Stateseven()
{
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update state with the input value //yaqlach bolave controlled compoenenst smjl kaevent e 
      };

    return(
        <div>
        <input
          type="text"
          value={inputValue}    //intailiaze kel state varible la
          onChange={handleInputChange}
        />
        <p>You typed: {inputValue}</p>
      </div>
    );
}