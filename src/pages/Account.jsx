// //Cierra will build this page
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

//   return <div className="max-w-4xl mx-auto p-6"></div>;
// };

// export default Account;
