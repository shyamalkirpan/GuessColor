import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

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

enum Result {
  Correct,
  Wrong,
}

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | undefined>(undefined);

  const generateRandomColour = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateRandomColour();
    // TODO : generate random colors
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(Result.Correct);
      generateRandomColour();
    } else {
      setResult(Result.Wrong);
    }
  };

  return (
    <div className="App">
      <div>
        <div className="guess-me" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {result === Result.Wrong && <div className="Wrong">Wrong Answer</div>}
        {result === Result.Correct && <div className="correct">Correct!!</div>}
      </div>
    </div>
  );
}

export default App;
