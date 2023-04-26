import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${color}`;
  };

  useEffect(() => {
    // TODO : generate random colors
    setColor(getRandomColor());
  }, []);

  return (
    <div className="App">
      <div className="guess-me" style={{ background: color }}></div>
    </div>
  );
}

export default App;
