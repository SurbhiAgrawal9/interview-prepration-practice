import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  });

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
            <img src={item.image} style={{ width: "400px" }} alt="img" />
          </div>
        );
      })}
    </div>
  );
}
