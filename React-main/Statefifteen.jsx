give me 3 simple exqaple so i can understand the use effect easily 
ChatGPT said:
Here are 3 simple examples of how useEffect works in different scenarios. 🚀

Example 1️⃣: Running Once on Mount (ComponentDidMount)
📌 Scenario: We want to log a message when the component loads only once.

js
Copy
Edit
import { useEffect } from "react";

const Example1 = () => {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []); // Empty dependency array → Runs only once when mounted

  return <h1>Check the console!</h1>;
};

export default Example1;
✅ What Happens?

"Component Mounted!" is logged only once when the component appears.
Example 2️⃣: Updating on State Change
📌 Scenario: Update the document title every time count changes.

js
Copy
Edit
import { useState, useEffect } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`; // Change title when count updates
  }, [count]); // Runs when `count` changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default Example2;
✅ What Happens?

Clicking the button updates count.
useEffect updates the document title dynamically.
Example 3️⃣: Cleanup on Unmount
📌 Scenario: We add an event listener when the component mounts and remove it when the component unmounts.

js
Copy
Edit
import { useEffect } from "react";

const Example3 = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized!");
    };

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
      console.log("Cleanup done!");
    };
  }, []); // Runs once on mount and removes event listener on unmount

  return <h1>Resize the window and check the console!</h1>;
};

export default Example3;
✅ What Happens?

The function runs once and listens for window resizing.
When the component is removed (unmounted), it cleans up the event listener.
🔹 Summary
Example	When does useEffect run?	What does it do?
1️⃣ Run Once on Mount	Only when the component first appears	Logs a message in the console
2️⃣ Run on State Change	Every time count changes	Updates the document title
3️⃣ Cleanup on Unmount	When component mounts and unmounts	Listens to window resize, then removes the listener
Hope this makes useEffect easier to understand! 🚀 Let me know if you need more examples. 😊