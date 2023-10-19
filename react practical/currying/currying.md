```js
import "./styles.css";
import { useState } from "react";
export default function App() {
  const handle = function (action) {
    //  !action? console.log("i am submit"): console.log("i am cancel");
    return function () {
      console.log(`i am ${action} button`);
    };
  };

  return (
    <div className="App">
      <button onClick={handle("submit")}>submit</button>
      <button onClick={handle(" cancel")}>cancel</button>
      <button onClick={handle("click me")}>click me</button>
    </div>
  );
}
```
