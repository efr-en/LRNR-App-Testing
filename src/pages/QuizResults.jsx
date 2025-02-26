import { Link } from "react-router-dom";

const QuizResults = () => {
    return (
    <div className="flex flex-col min-h-screen">
        
    {/* Main Content */}
    <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
    <h2 className="text-4xl font-bold text-green-700">lrnr</h2>
    <p className="text-lg mt-4">
    Questions Right:{" "}
    <span className="font-mono bg-gray-200 p-1 rounded">0111</span>
    </p>
    <Link to="/quiz">
    <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 uppercase">
    TRY ANOTHER QUIZ
    </button>
    </Link>
    </main>
    </div>
    );
    };
    
    export default QuizResults;
