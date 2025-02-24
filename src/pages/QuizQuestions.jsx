import React, { useState } from "react";

const QuizQuestions = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    onComplete(answers);
  };

  // Calculate progress percentage
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-4">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-full bg-teal-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-1">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <div className="p-6 border rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                answers[currentQuestionIndex] === option
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-200"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded ${
            currentQuestionIndex === 0
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          Previous
        </button>

        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded"
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestions;
