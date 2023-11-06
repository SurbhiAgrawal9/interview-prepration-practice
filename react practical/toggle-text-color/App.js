import "./styles.css";
import Child from "./Child.js";
import React, { useState } from "react";

function App() {
  const [textColor, SetTextColor] = useState("blue");

  const textColorHandler = () => {
    textColor === "blue" ? SetTextColor("red") : SetTextColor("blue");
  };
  return (
    <div className="App">
      <h1 style={{ color: textColor }}>parent component</h1>
      <Child changeTextColor={textColorHandler} />
    </div>
  );
}
export default App;
