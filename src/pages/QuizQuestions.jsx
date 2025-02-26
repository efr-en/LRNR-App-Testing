import { useState } from "react";
import { useLocation } from "react-router-dom";

const h2Heading = "text-left text-4xl mb-4";
const defaultPadding = "p-4";
const pReg = "text-left text-2xl";

const btn =
  "flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-4";

const btn2 =
  "flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-9";

const questions = [
  {
    question: "Can you explain what JavaScript is?",
    answer: "A programming language.",
  },
  {
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
  },
  {
    question: "What is a closure?",
    answer: "A function that retains access to its lexical scope.",
  },
];

const QuizAnswers = ({ isCorrect, correctAnswer, onNext }) => {
  return (
    <div className={defaultPadding}>
      <h2 className="text-left text-4xl mb-4 mt-20">Evaluation</h2>
      <div className="flex m-1">
        <div className="w-1/2">
          <p>{isCorrect ? "Correct!" : "Incorrect"}</p>
        </div>
        <div className="w-1/2 whitespace-no-wrap">
          <p>
            Answer: <span className="font-bold">{correctAnswer}</span>
          </p>
        </div>
      </div>

      <button onClick={onNext} className={btn2}>
        NEXT
      </button>
    </div>
  );
};

const QuizForm = ({ userAnswer, setUserAnswer, handleAnswer, submitting, emptyAnswer }) => {
  return (
    <div className="p-4">
      <h2 className="text-left text-4xl mb-4 mt-10">Your Answer</h2>
      {emptyAnswer && (
        <p className="text-red-500 text-sm">Please provide an answer</p>
      )}
      <form className="w-full" onSubmit={handleAnswer}>
        <label className="pl-1">Answer</label>
        <div className="flex-column items-center border-b border-teal-500 py-2 w-lg">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={submitting}
          />
        </div>
        <button disabled={submitting} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-4" type="submit">
          Submit Answer
        </button>
      </form>
    </div>
  );
};

const QuizQuestions = () => {
const location = useLocation();
const questions = location.state?.questions || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerOn, setAnswerOn] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [emptyAnswer, setEmptyAnswer] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (!userAnswer) {
      setEmptyAnswer(true);
      return;
    }

    setAnswerOn(true);

      const correct =
        userAnswer.trim().toLowerCase() ===
        questions[currentQuestion].answer.toLowerCase();
      setIsCorrect(correct);
      setCorrectAnswer(questions[currentQuestion].answer);
      setEmptyAnswer(false);
      setSubmitting(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswerOn(false);
      setUserAnswer("");
      setIsCorrect(null);
      setEmptyAnswer(false);
      setCorrectAnswer("");
      setSubmitting(false);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <div className={defaultPadding}>
        <h1 className="text-center text-5xl p-8">Quiz Completed!</h1>
      </div>
    );
  }


  return (
    <>
      <h1 className="text-center text-5xl p-8">
        {currentQuestion + 1} of {questions.length}
      </h1>
      <div className={defaultPadding}>
        <h2 className={h2Heading}>Question</h2>
        <p className={pReg}>{questions[currentQuestion].question}</p>
      </div>

      <QuizForm
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        handleAnswer={handleAnswer}
        submitting={submitting}
        emptyAnswer={emptyAnswer}
      />

      {answerOn && (
        <QuizAnswers
          correctAnswer={correctAnswer}
          onNext={handleNextQuestion}
          isCorrect={isCorrect}
        />
      )}
    </>
  );
};

export default QuizQuestions;
