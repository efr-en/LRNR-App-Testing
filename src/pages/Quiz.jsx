import React, { useState } from "react";
import QuizQuestions from "./QuizQuestions";
import QuizResults from "./QuizResults";

const Quiz = () => {
  const [formData, setFormData] = useState({
    topic: "",
    expertise: "",
    numberOfQuestions: "5",
    styleOfQuestions: "normal",
  });

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Here you would typically fetch or generate questions based on the form data
    // For this example, we'll create some placeholder questions
    const dummyQuestions = Array(parseInt(formData.numberOfQuestions))
      .fill(null)
      .map((_, index) => ({
        id: index,
        question: `Sample question ${index + 1} about ${formData.topic} (${
          formData.expertise
        } level)`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option A",
      }));

    setGeneratedQuestions(dummyQuestions);
    setQuizStarted(true);
  };

  const handleQuizComplete = (answers) => {
    setUserAnswers(answers);
    setQuizCompleted(true);
  };

  const handleRetakeQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  if (quizCompleted) {
    return (
      <QuizResults
        questions={generatedQuestions}
        userAnswers={userAnswers}
        quizSettings={formData}
        onRetake={handleRetakeQuiz}
      />
    );
  }

  if (quizStarted) {
    return (
      <QuizQuestions
        questions={generatedQuestions}
        onComplete={handleQuizComplete}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz Generation Options</h1>

      <p className="text-gray-600 mb-6">
        Please choose your preferences below to generate your personalized quiz
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="topic" className="block text-sm text-gray-500 mb-2">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="short-answer"></option>
            <option value="golang">golang</option>
            <option value="aws">aws</option>
            <option value="javascript">javascript</option>
            <option value="ci/cd">CI/CD</option>
            <option value="home gardens">home gardens</option>
            <option value="coffee">coffee</option>
            <option value="finger foods">finger foods</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="expertise"
            className="block text-sm text-gray-500 mb-2"
          >
            Expertise
          </label>
          <select
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="" disabled>
              Select expertise level
            </option>
            <option value="short-answer"></option>
            <option value="novice">novice</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="numberOfQuestions"
            className="block text-sm text-gray-500 mb-2"
          >
            Number of questions
          </label>
          <select
            id="numberOfQuestions"
            name="numberOfQuestions"
            value={formData.numberOfQuestions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="styleOfQuestions"
            className="block text-sm text-gray-500 mb-2"
          >
            Style of questions
          </label>
          <select
            id="styleOfQuestions"
            name="styleOfQuestions"
            value={formData.styleOfQuestions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="short-answer"></option>
            <option value="master oogway">master oogway</option>
            <option value="1940's ganster">1940's ganster</option>
            <option value="like I'm a 8 year old">
              like I'm an 8 year old
            </option>
            <option value="normal">normal</option>
            <option value="jedi">jedi</option>
            <option value="captain jack sparrrow">captain jack sparrow</option>
            <option value="matthew mcconaugheyl">matthew mcconaughey</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded transition-colors"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Quiz;
