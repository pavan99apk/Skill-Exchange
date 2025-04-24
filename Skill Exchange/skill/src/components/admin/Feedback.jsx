// import { useState, useEffect } from "react";
// import axios from "axios";

// const Feedback = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/feedbacks/feedbacks") // Ensure this matches the backend route
//       .then((res) => {
//         setFeedbacks(res.data.data); // Ensure `.data.data` to access feedback array
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading feedback...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Manage Feedback</h2>
//       <table className="table table-striped table-bordered">
//         <thead className="thead-dark">
//           <tr>
//             <th>ID</th>
//             <th>Session</th>
//             <th>From User</th>
//             <th>To User</th>
//             <th>Rating</th>
//             <th>Comments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbacks.length > 0 ? (
//             feedbacks.map((feedback, index = 1) => (
//               <tr key={index}>
//                 <td>{index}</td>
//                 <td>{feedback.sessionId?._id}</td>
//                 <td>{feedback.fromUserId?.name}</td>
//                 <td>{feedback.toUserId?.name}</td>
//                 <td>{feedback.rating}</td>
//                 <td>{feedback.comments || "No comments"}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center">
//                 No feedback found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Feedback;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('/api/feedbacks/feedbacks');
      setFeedbacks(res.data.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">User Feedbacks</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-center text-gray-600">No feedbacks available.</p>
      ) : (
        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <div
              key={feedback._id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{feedback.name}</h3>
                <span className="text-yellow-500 font-medium">
                  ⭐ {feedback.rating}/5
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Email:</strong> {feedback.email}
              </p>
              {feedback.comments && (
                <p className="text-gray-800 mt-2">
                  <strong>Comments:</strong> {feedback.comments}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminFeedback;
