// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4">Welcome to QuizMaster</h1>
//         <p className="text-xl text-gray-600 mb-8">
//           Test your knowledge with personalized quizzes
//         </p>

//         <div className="flex justify-center gap-4">
//           <Link
//             to="/quiz"
//             className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors shadow-md"
//           >
//             Start a Quiz
//           </Link>
//           <Link
//             to="/account"
//             className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors shadow-md"
//           >
//             My Account
//           </Link>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6 mb-12">
//         <div className="p-6 border rounded-lg shadow-sm text-center">
//           <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
//             <svg
//               className="w-8 h-8 text-teal-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-xl font-semibold mb-2">Personalized Quizzes</h2>
//           <p className="text-gray-600">
//             Create quizzes tailored to your interests and skill level.
//           </p>
//         </div>

//         <div className="p-6 border rounded-lg shadow-sm text-center">
//           <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
//             <svg
//               className="w-8 h-8 text-teal-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//               />
//             </svg>
//           </div>
//           <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
//           <p className="text-gray-600">
//             Save your results and monitor your improvement over time.
//           </p>
//         </div>

//         <div className="p-6 border rounded-lg shadow-sm text-center">
//           <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
//             <svg
//               className="w-8 h-8 text-teal-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-xl font-semibold mb-2">Compare Scores</h2>
//           <p className="text-gray-600">
//             See how your results compare to others in the community.
//           </p>
//         </div>
//       </div>

//       <div className="bg-gray-50 p-8 rounded-lg border">
//         <h2 className="text-2xl font-bold mb-4">Popular Quiz Topics</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[
//             "Science",
//             "History",
//             "Mathematics",
//             "Literature",
//             "Geography",
//             "Technology",
//             "Sports",
//             "Arts",
//           ].map((topic) => (
//             <Link
//               key={topic}
//               to={`/quiz?topic=${topic.toLowerCase()}`}
//               className="p-3 bg-white text-center rounded border hover:border-teal-500 hover:shadow-md transition-all"
//             >
//               {topic}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
