// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Account = () => {
//   // Mock user data
//   const [userData, setUserData] = useState({
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     joined: "January 15, 2023",
//     profilePicture: "/api/placeholder/80/80", // Placeholder image
//   });

//   // Mock quiz history data
//   const [quizHistory, setQuizHistory] = useState([
//     {
//       id: 1,
//       date: "2024-02-20",
//       topic: "Science",
//       score: 85,
//       total: 10,
//     },
//     {
//       id: 2,
//       date: "2024-02-15",
//       topic: "History",
//       score: 70,
//       total: 10,
//     },
//     {
//       id: 3,
//       date: "2024-02-10",
//       topic: "Mathematics",
//       score: 90,
//       total: 10,
//     },
//     {
//       id: 4,
//       date: "2024-02-05",
//       topic: "Geography",
//       score: 80,
//       total: 10,
//     },
//   ]);

//   const [activeTab, setActiveTab] = useState("profile");

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">My Account</h1>
//         <Link to="/" className="text-teal-500 hover:text-teal-600">
//           Back to Home
//         </Link>
//       </div>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Sidebar */}
//         <div className="w-full md:w-1/3">
//           <div className="p-6 border rounded-lg shadow-sm mb-6">
//             <div className="flex items-center mb-4">
//               <img
//                 src={userData.profilePicture}
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full mr-4"
//               />
//               <div>
//                 <h2 className="text-xl font-semibold">{userData.name}</h2>
//                 <p className="text-gray-600 text-sm">
//                   Member since {userData.joined}
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <button
//                 onClick={() => setActiveTab("profile")}
//                 className={`block w-full text-left p-2 rounded ${
//                   activeTab === "profile"
//                     ? "bg-teal-500 text-white"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 Profile
//               </button>
//               <button
//                 onClick={() => setActiveTab("history")}
//                 className={`block w-full text-left p-2 rounded ${
//                   activeTab === "history"
//                     ? "bg-teal-500 text-white"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 Quiz History
//               </button>
//               <button
//                 onClick={() => setActiveTab("settings")}
//                 className={`block w-full text-left p-2 rounded ${
//                   activeTab === "settings"
//                     ? "bg-teal-500 text-white"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 Settings
//               </button>
//             </div>
//           </div>

//           <Link
//             to="/quiz"
//             className="block w-full p-3 bg-teal-500 hover:bg-teal-600 text-white rounded text-center font-medium transition-colors"
//           >
//             Take a New Quiz
//           </Link>
//         </div>

//         {/* Main content */}
//         <div className="w-full md:w-2/3 border rounded-lg shadow-sm p-6">
//           {activeTab === "profile" && (
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Profile Information</h2>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-gray-500 mb-1">
//                     Name
//                   </label>
//                   <p className="font-medium">{userData.name}</p>
//                 </div>

//                 <div>
//                   <label className="block text-sm text-gray-500 mb-1">
//                     Email
//                   </label>
//                   <p className="font-medium">{userData.email}</p>
//                 </div>

//                 <div>
//                   <label className="block text-sm text-gray-500 mb-1">
//                     Member Since
//                   </label>
//                   <p className="font-medium">{userData.joined}</p>
//                 </div>

//                 <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded mt-4">
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           )}

//           {activeTab === "history" && (
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Quiz History</h2>

//               {quizHistory.length > 0 ? (
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-gray-50">
//                         <th className="p-3 text-left border-b">Date</th>
//                         <th className="p-3 text-left border-b">Topic</th>
//                         <th className="p-3 text-left border-b">Score</th>
//                         <th className="p-3 text-left border-b">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {quizHistory.map((quiz) => (
//                         <tr key={quiz.id} className="hover:bg-gray-50">
//                           <td className="p-3 border-b">
//                             {formatDate(quiz.date)}
//                           </td>
//                           <td className="p-3 border-b">{quiz.topic}</td>
//                           <td className="p-3 border-b">
//                             <span
//                               className={`px-2 py-1 rounded ${
//                                 quiz.score >= 80
//                                   ? "bg-green-100 text-green-800"
//                                   : quiz.score >= 60
//                                   ? "bg-yellow-100 text-yellow-800"
//                                   : "bg-red-100 text-red-800"
//                               }`}
//                             >
//                               {quiz.score}%
//                             </span>
//                           </td>
//                           <td className="p-3 border-b">
//                             <button className="text-teal-500 hover:text-teal-700">
//                               View Details
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <p className="text-gray-600">
//                   You haven't taken any quizzes yet.
//                 </p>
//               )}
//             </div>
//           )}

//           {activeTab === "settings" && (
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Account Settings</h2>

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-lg font-medium mb-2">
//                     Notification Preferences
//                   </h3>
//                   <div className="space-y-2">
//                     <label className="flex items-center">
//                       <input type="checkbox" className="mr-2" defaultChecked />
//                       Email notifications for new features
//                     </label>
//                     <label className="flex items-center">
//                       <input type="checkbox" className="mr-2" defaultChecked />
//                       Quiz result summaries
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-medium mb-2">Privacy Settings</h3>
//                   <div className="space-y-2">
//                     <label className="flex items-center">
//                       <input type="checkbox" className="mr-2" defaultChecked />
//                       Show my scores on leaderboards
//                     </label>
//                     <label className="flex items-center">
//                       <input type="checkbox" className="mr-2" />
//                       Share my activity with friends
//                     </label>
//                   </div>
//                 </div>

//                 <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded">
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;
