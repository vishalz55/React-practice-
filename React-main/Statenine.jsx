//ha tr question zala ye na mage ho bahava smjl ka

import { useState } from 'react';

const Statenine = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value); // Update text state with input value
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
};

export default Statenine;
