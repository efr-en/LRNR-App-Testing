import React from "react";

const QuizResults = ({ questions, userAnswers, quizSettings, onRetake }) => {
  // Calculate score
  const correctAnswers = questions.filter(
    (question, index) => question.correctAnswer === userAnswers[index]
  );

  const score = correctAnswers.length;
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  // Determine result message based on score
  let resultMessage = "";
  if (percentage >= 90) {
    resultMessage = "Excellent! You have a strong understanding of this topic.";
  } else if (percentage >= 70) {
    resultMessage = "Good job! You have a solid grasp of the material.";
  } else if (percentage >= 50) {
    resultMessage = "Not bad! You understand some of the core concepts.";
  } else {
    resultMessage = "Keep learning! This topic might need more study.";
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Quiz Results</h1>
      <h2 className="text-xl text-gray-600 mb-6">
        {quizSettings.topic} - {quizSettings.expertise} level
      </h2>

      <div className="p-6 bg-gray-50 border rounded-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-lg font-medium">Your Score:</p>
            <p className="text-3xl font-bold">
              {score}/{totalQuestions}
            </p>
          </div>
          <div className="h-24 w-24 rounded-full border-8 border-teal-500 flex items-center justify-center">
            <span className="text-2xl font-bold">{percentage}%</span>
          </div>
        </div>

        <p className="text-gray-700">{resultMessage}</p>
      </div>

      <h3 className="text-xl font-medium mb-4">Question Summary</h3>

      <div className="space-y-4 mb-6">
        {questions.map((question, index) => {
          const isCorrect = question.correctAnswer === userAnswers[index];

          return (
            <div
              key={index}
              className={`p-4 border rounded-lg ${
                isCorrect
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <p className="font-medium mb-2">
                {index + 1}. {question.question}
              </p>
              <p className="text-sm">
                <span className="font-medium">Your answer:</span>{" "}
                {userAnswers[index] || "(No answer)"}
              </p>
              <p
                className={`text-sm ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                <span className="font-medium">Correct answer:</span>{" "}
                {question.correctAnswer}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onRetake}
          className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded"
        >
          Take Another Quiz
        </button>

        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
        >
          Print Results
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
