import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
const jsxHeading = <h1>Hello React!</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello React!</h1>)
