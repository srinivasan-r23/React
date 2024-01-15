import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );

const CounterComponent = (initialCount) => {
  // State management using closure
  let count = initialCount || 0;

  // The returned function represents the render function
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => count++}>Increment</button>
      </div>
    );
};
const jsxHeading = <h1>Hello React!</h1>;
const Counter1 = CounterComponent(1); //I.  call function and assingn to element
console.log(Counter1)
const Component1 = () => {
  return (
    <div>
   I'm from component but coming from from element 
      
    </div>
  );
};
const ele = <span><Component1 /></span>
const TitleComponent = () => {
  return (
    <div>
      <h1>Counter 1</h1>
      {/* {<CounterComponent initialCount={1} />}  if call as component, then make this component to accept and read the props via props.*/}
      {Counter1} 
      {/* I. call the react element like this */}
      <h1>Counter 2</h1>
      {ele}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent />);
