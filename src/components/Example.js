import React, { useState } from 'react';

const ExampleComponent = () => {
  // This is a state declared at the top level of the component body
  const [count1, setCount1] = useState(0);

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const LocalStateExample = () => {
    // This is a local state declared inside a function
    const [count2, setCount2] = useState(0);

    const handleClick2 = () => {
      setCount2(count2 + 1);
    };

    return (
      <div>
        <p>Local State Example: {count2}</p>
        <button onClick={handleClick2}>Increment Local State</button>
      </div>
    );
  };

  return (
    <div>
      <p>Top-Level State: {count1}</p>
      <button onClick={handleClick1}>Increment Top-Level State</button>

      <LocalStateExample />
    </div>
  );
};

export default ExampleComponent;
