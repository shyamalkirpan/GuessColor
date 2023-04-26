import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);

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
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 1 - Math.random()
      )
    );
  }, []);

  return (
    <div className="App">
      <div>
        <div className="guess-me" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button key={answer}>{answer}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
