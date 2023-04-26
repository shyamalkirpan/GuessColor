import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isWrongSelection, setIsWrongSelection] = useState(false);

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

  function handleAnswerClicked(answer: string) {
    if (answer === color) {
      setIsWrongSelection(false);
    } else {
      setIsWrongSelection(true);
    }
  }

  return (
    <div className="App">
      <div>
        <div className="guess-me" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {isWrongSelection && <div className="Wrong">Wrong Answer!</div>}
      </div>
    </div>
  );
}

export default App;
