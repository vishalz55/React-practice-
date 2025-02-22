
// now see the same output without the  useeffect
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>       
      <button
        onClick={() => { setCount(count + 1); 
        document.title = `You clicked ${count + 1} times`; // Updating title directly inside the click handler
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
};

export default App;
