import { useState, useEffect } from "react";
import he from "he";
import "./css/game.css";

const TriviaRequest = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("True");
  const [correctAnswer, setCorrectAnswer] = useState("True");
  // const [incorrectAnswers, setIncorrectAnswers] = useState(null);

  const getTrivia = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=1&category=0&difficulty=easy&type=boolean"
    );
    const json = await response.json();

    setQuestion(json.results[0].question);
    setCorrectAnswer(json.results[0].correct_answer);
    // setIncorrectAnswers(json.results[0].incorrect_answers === false);
  };

  const checkAnswer = (answer) => {
    if (answer === correctAnswer) {
      console.log("Right!!!");
      getTrivia();
    } else {
      console.log("Wrong!!!");
    }
  };

  useEffect(() => {
    getTrivia();
  }, []);

  return (
    <>
    <div className="game__container">
        
      <div className="game__item">
        <p className="game__text">{he.decode(question)}</p>
      </div>

      <div className="game__item">
        <p className="game__text">Your answer: {answer}</p>
      </div>

      <div className="game__item">
        <p className="game__text">The correct answer is: {correctAnswer}</p>
      </div>

      <div>
      <button
        onClick={() => {
          setAnswer("True");
          checkAnswer("True");
          console.log({ answer });
          console.log({ correctAnswer });
        }}
      >
        True
      </button>
      <button
        onClick={() => {
          setAnswer("False");
          checkAnswer("False");
          console.log({ answer });
          console.log({ correctAnswer });
        }}
      >
        False
      </button>
      </div>
      </div>
    </>
  );
};

export default TriviaRequest;
