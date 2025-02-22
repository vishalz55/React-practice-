import { useState, useEffect } from 'react';

const Statetwelve = () => {
  const [count, setCount] = useState(0);

  // useEffect to update the document title
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Re-run the effect whenever the count changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default Statetwelve;
