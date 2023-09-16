import "./styles.css";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState([]);

  function submition(e) {
    e.preventDefault();
    const data = `username: ${username}, password : ${password} `
    setShow(data);
  }
  return (
    <div className="App">
      <form onSubmit={submition}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      <div>
        <p>{show}</p>
      </div>
    </div>
  );
}
