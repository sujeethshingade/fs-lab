import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Initialize state variable count to 0
  const [count, setCount] = useState(0);

  // Simulate fetching initial data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an API call (could fetch data and update count)
        const initialCount = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(0); // Assume the initial count is fetched as 0
          }, 1000); // Simulating a delay for data fetching
        });
        // Update the state with the fetched count
        setCount(initialCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handle increment action
  const increment = () => setCount(count + 1);

  // Handle decrement action
  const decrement = () => setCount(count - 1);

  // Handle doubling the count value
  const double = () => setCount(count * 2);

  // Handle resetting the count to 0
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={double}>Double</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        {/* Additional messages to demonstrate edge cases */}
        {count < 0 && <p>The count cannot be less than 0!</p>}
        {count === 0 && <p>Count is at the initial value!</p>}
      </div>
    </div>
  );
};

export default Counter;
