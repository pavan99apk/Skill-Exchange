// // // import React, { useState, useEffect } from "react";

// // // const Contact = () => {
// // //   const [formData, setFormData] = useState({
// // //     sessionId: "",
// // //     fromUserId: "",
// // //     toUserId: "",
// // //     rating: "",
// // //     comments: "",
// // //   });

// // //   const [sessions, setSessions] = useState([]);
// // //   const [users, setUsers] = useState([]);
// // //   const [message, setMessage] = useState("");

// // //   useEffect(() => {
// // //     // Fetch sessions
// // //     fetch("http://localhost:3000/api/sessions/session")
// // //       .then((res) => res.json())
// // //       .then((data) => setSessions(data))
// // //       .catch((err) => console.error("Failed to load sessions", err));

// // //     // Fetch users
// // //     fetch("http://localhost:3000/api/users/all")
// // //       .then((res) => res.json())
// // //       .then((data) => setUsers(data))
// // //       .catch((err) => console.error("Failed to load users", err));
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch("http://localhost:3000/api/feedbacks/feedback", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       const result = await response.json();

// // //       if (response.ok) {
// // //         setMessage("✅ Feedback submitted successfully!");
// // //         setFormData({
// // //           sessionId: "",
// // //           fromUserId: "",
// // //           toUserId: "",
// // //           rating: "",
// // //           comments: "",
// // //         });
// // //       } else {
// // //         setMessage(`❌ Error: ${result.message || "Something went wrong"}`);
// // //       }
// // //     } catch (err) {
// // //       setMessage(`❌ Error: ${err.message}`);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
// // //       <p>If you have any feedback regarding a session, please fill this form.</p>

// // //       {message && <p className="mb-4 text-green-600">{message}</p>}

// // //       <form onSubmit={handleSubmit} className="mt-4 space-y-3">
// // //         <select
// // //           name="sessionId"
// // //           value={formData.sessionId}
// // //           onChange={handleChange}
// // //           className="w-full p-2 border rounded"
// // //           required
// // //         >
// // //           <option value="">Select Session</option>
// // //           {sessions.map((session) => (
// // //             <option key={session._id} value={session._id}>
// // //               {session.title || session._id}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <select
// // //           name="fromUserId"
// // //           value={formData.fromUserId}
// // //           onChange={handleChange}
// // //           className="w-full p-2 border rounded"
// // //           required
// // //         >
// // //           <option value="">From User</option>
// // //           {users.map((user) => (
// // //             <option key={user._id} value={user._id}>
// // //               {user.name || user.email}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <select
// // //           name="toUserId"
// // //           value={formData.toUserId}
// // //           onChange={handleChange}
// // //           className="w-full p-2 border rounded"
// // //           required
// // //         >
// // //           <option value="">To User</option>
// // //           {users.map((user) => (
// // //             <option key={user._id} value={user._id}>
// // //               {user.name || user.email}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <input
// // //           type="number"
// // //           name="rating"
// // //           placeholder="Rating (1-5)"
// // //           value={formData.rating}
// // //           onChange={handleChange}
// // //           className="w-full p-2 border rounded"
// // //           required
// // //           min="1"
// // //           max="5"
// // //         />

// // //         <textarea
// // //           name="comments"
// // //           placeholder="Comments (optional)"
// // //           value={formData.comments}
// // //           onChange={handleChange}
// // //           className="w-full p-2 border rounded"
// // //           rows="4"
// // //         />

// // //         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
// // //           Submit Feedback
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Contact;
// // import React, { useState, useEffect } from "react";

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     sessionId: "",
// //     fromUserId: "",
// //     toUserId: "",
// //     rating: "",
// //     comments: "",
// //   });

// //   const [sessions, setSessions] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [message, setMessage] = useState("");

// //   useEffect(() => {
// //     // Fetch sessions
// //     fetch("http://localhost:3000/api/sessions/session")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log("Sessions API Response:", data);
// //         const sessionList = Array.isArray(data)
// //           ? data
// //           : Array.isArray(data.sessions)
// //           ? data.sessions
// //           : [];
// //         setSessions(sessionList);
// //       })
// //       .catch((err) => {
// //         console.error("Failed to load sessions", err);
// //         setSessions([]);
// //       });

// //     // Fetch users
// //     fetch("http://localhost:3000/api/users/all")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log("Users API Response:", data);
// //         setUsers(Array.isArray(data) ? data : []);
// //       })
// //       .catch((err) => {
// //         console.error("Failed to load users", err);
// //         setUsers([]);
// //       });
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:3000/api/feedbacks/feedback", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       const result = await response.json();

// //       if (response.ok) {
// //         setMessage("✅ Feedback submitted successfully!");
// //         setFormData({
// //           sessionId: "",
// //           fromUserId: "",
// //           toUserId: "",
// //           rating: "",
// //           comments: "",
// //         });
// //       } else {
// //         setMessage(`❌ Error: ${result.message || "Something went wrong"}`);
// //       }
// //     } catch (err) {
// //       setMessage(`❌ Error: ${err.message}`);
// //     }
// //   };

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
// //       <p>If you have any feedback regarding a session, please fill this form.</p>

// //       {message && <p className="mb-4 text-green-600">{message}</p>}

// //       <form onSubmit={handleSubmit} className="mt-4 space-y-3">
// //         <select
// //           name="sessionId"
// //           value={formData.sessionId}
// //           onChange={handleChange}
// //           className="w-full p-2 border rounded"
// //           required
// //         >
// //           <option value="">Select Session</option>
// //           {Array.isArray(sessions) &&
// //             sessions.map((session) => (
// //               <option key={session._id} value={session._id}>
// //                 {session.title || session._id}
// //               </option>
// //             ))}
// //         </select>

// //         <select
// //           name="fromUserId"
// //           value={formData.fromUserId}
// //           onChange={handleChange}
// //           className="w-full p-2 border rounded"
// //           required
// //         >
// //           <option value="">From User</option>
// //           {Array.isArray(users) &&
// //             users.map((user) => (
// //               <option key={user._id} value={user._id}>
// //                 {user.name || user.email}
// //               </option>
// //             ))}
// //         </select>

// //         <select
// //           name="toUserId"
// //           value={formData.toUserId}
// //           onChange={handleChange}
// //           className="w-full p-2 border rounded"
// //           required
// //         >
// //           <option value="">To User</option>
// //           {Array.isArray(users) &&
// //             users.map((user) => (
// //               <option key={user._id} value={user._id}>
// //                 {user.name || user.email}
// //               </option>
// //             ))}
// //         </select>

// //         <input
// //           type="number"
// //           name="rating"
// //           placeholder="Rating (1-5)"
// //           value={formData.rating}
// //           onChange={handleChange}
// //           className="w-full p-2 border rounded"
// //           required
// //           min="1"
// //           max="5"
// //         />

// //         <textarea
// //           name="comments"
// //           placeholder="Comments (optional)"
// //           value={formData.comments}
// //           onChange={handleChange}
// //           className="w-full p-2 border rounded"
// //           rows="4"
// //         />

// //         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
// //           Submit Feedback
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Contact;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // ⭐ Star Rating Component
// const StarRating = ({ rating, onChange }) => (
//   <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
//     {[...Array(5)].map((_, index) => {
//       const value = index + 1;
//       return (
//         <span
//           key={index}
//           style={{
//             color: value <= rating ? "#ffc107" : "#e4e5e9",
//             fontSize: "1.5rem",
//           }}
//           onClick={() => onChange(value)}
//         >
//           ★
//         </span>
//       );
//     })}
//   </div>
// );

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     sessionId: "",
//     fromUserId: "",
//     toUserId: "",
//     rating: 0,
//     comments: "",
//   });

//   const [sessions, setSessions] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState("");

//   const fetchSessions = async () => {
//     try {
//       const res = await axios.get("/api/sessions/session");
//       setSessions(res.data.data || []);
//     } catch (error) {
//       console.error("Failed to load sessions", error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get("/api/users/all");
//       setUsers(res.data.data || []);
//     } catch (error) {
//       console.error("Failed to load users", error);
//     }
//   };

//   useEffect(() => {
//     fetchSessions();
//     fetchUsers();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/feedbacks/feedbacks", formData);
//       setMessage("✅ Feedback submitted successfully!");
//       setFormData({
//         sessionId: "",
//         fromUserId: "",
//         toUserId: "",
//         rating: 0,
//         comments: "",
//       });
//     } catch (error) {
//       console.error("❌ Feedback submission error:", error);
//       setMessage("❌ Failed to submit feedback.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h2>Feedback Form</h2>
//       <p>If you have any feedback regarding a session, please fill this form.</p>

//       {message && <p style={{ margin: "10px 0", color: "green" }}>{message}</p>}

//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//         {/* Select Session */}
//         <div>
//           <label>Session:</label>
//           <select
//             name="sessionId"
//             value={formData.sessionId}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Session</option>
//             {sessions.map((s) => (
//               <option key={s._id} value={s._id}>
//                 {s.title || s._id}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* From User */}
//         <div>
//           <label>From User:</label>
//           <select
//             name="fromUserId"
//             value={formData.fromUserId}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select User</option>
//             {users.map((u) => (
//               <option key={u._id} value={u._id}>
//                 {u.firstName || u.name || u.email}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* To User */}
//         <div>
//           <label>To User:</label>
//           <select
//             name="toUserId"
//             value={formData.toUserId}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select User</option>
//             {users.map((u) => (
//               <option key={u._id} value={u._id}>
//                 {u.firstName || u.name || u.email}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Star Rating */}
//         <div>
//           <label>Rating:</label>
//           <StarRating
//             rating={formData.rating}
//             onChange={(value) => setFormData((prev) => ({ ...prev, rating: value }))}
//           />
//         </div>

//         {/* Comments */}
//         <div>
//           <label>Comments (optional):</label>
//           <textarea
//             name="comments"
//             value={formData.comments}
//             onChange={handleChange}
//             rows="4"
//             style={{ width: "100%" }}
//           />
//         </div>

//         <button type="submit" style={{ padding: "10px", background: "#007bff", color: "white", borderRadius: "5px" }}>
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedbacks/feedback', formData);
      setMessage('Feedback submitted successfully!');
      setFormData({ name: '', email: '', rating: '', comments: '' });
    } catch (error) {
      setMessage('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact / Feedback</h2>
      {message && <p className="mb-4 text-center text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1 to 5)"
          className="w-full p-2 border rounded"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
        <textarea
          name="comments"
          placeholder="Your Comments"
          className="w-full p-2 border rounded"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Contact;
