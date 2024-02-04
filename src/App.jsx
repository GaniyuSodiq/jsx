import React from "react";

function App() {
  // HOW REACT CHANGE JSX BEHIND THE SCENE

  // return (
  //   <h1 id="5">
  //     Hello World <span>Bye</span>
  //   </h1>
  // ); // JSX SYNTAX

  return React.createElement(
    "h1",
    { id: 5 },
    "Hello World ",
    React.createElement("span", null, "Bye")
  ); //REACT SYNTAX

  // BOTH LINE OF CODES ABOVE RENDER THE SAME THING
  // JSX WAS CREATED BCS IT IS DIFICULT TO WRITE IN PLAIN REACT
}

export default App;
