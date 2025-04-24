// import React, { useEffect, useState } from "react";
// import axios from "axios";
// //import { AdminSidebar } from "../layouts/AdminSidebar";  
// //import { AdminNavbar } from "../layouts/AdminNavbar";    

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalSkills: 0,
//     activeSessions: 0,
//     pendingFeedback: 0,
//   });

//   const [users, setUsers] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const usersRes = await axios.get("http://localhost:3000/api/users/all");
//         const skillsRes = await axios.get("http://localhost:3000/api/skills/count");
//         const sessionsRes = await axios.get("http://localhost:3000/api/sessions/active");
//         const feedbackRes = await axios.get("http://localhost:3000/api/feedback/pending");

//         setStats({
//           totalUsers: usersRes.data.count || usersRes.data.users?.length || 0,
//           totalSkills: skillsRes.data.count || 0,
//           activeSessions: sessionsRes.data.count,
//           pendingFeedback: feedbackRes.data.count,
//         });

//         setUsers(usersRes.data.users || []);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching dashboard stats:", error);
//         setError("Failed to load data.");
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="admin-dashboard d-flex">
     
//       <div className="content-wrapper flex-grow-1 p-4">
        
//         <div className="container-fluid">
//           <h1 className="mb-4">Admin Dashboard</h1>

//           {/* Dashboard Stats */}
//           <div className="row">
//             <div className="col-lg-3 col-md-6">
//               <div className="card text-bg-primary shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">Total Users</h5>
//                   <p className="card-text fs-3">{stats.totalUsers}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6">
//               <div className="card text-bg-success shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">Total Skills</h5>
//                   <p className="card-text fs-3">{stats.totalSkills}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6">
//               <div className="card text-bg-warning shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">Active Sessions</h5>
//                   <p className="card-text fs-3">{stats.activeSessions}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6">
//               <div className="card text-bg-danger shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">Pending Feedback</h5>
//                   <p className="card-text fs-3">{stats.pendingFeedback}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Users Table */}
//           <div className="mt-5">
//             <h2>All Users</h2>
//             {loading ? (
//               <p>Loading users...</p>
//             ) : error ? (
//               <p className="text-danger">{error}</p>
//             ) : (
//               <table className="table table-striped table-bordered">
//                 <thead className="thead-dark">
//                   <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Role</th>
//                     <th>Joined At</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.length > 0 ? (
//                     users.map((user, index) => (
//                       <tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>{user.name || "N/A"}</td>
//                         <td>{user.email}</td>
//                         <td>{user.role}</td>
//                         <td>{new Date(user.createdAt).toLocaleString()}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="5" className="text-center">No users found.</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js component registration
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSkills: 0,
    activeSessions: 0,
    pendingFeedback: 0,
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample chart data (you can replace this with dynamic backend data if needed)
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "New Users This Week",
        data: [5, 10, 8, 12, 7, 9, 15],
        borderColor: "#4c51bf",
        backgroundColor: "#4c51bf",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5 },
      },
    },
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usersRes = await axios.get("http://localhost:3000/api/users/all");
        const skillsRes = await axios.get("http://localhost:3000/api/skills/count");
        const sessionsRes = await axios.get("http://localhost:3000/api/sessions/active");
        const feedbackRes = await axios.get("http://localhost:3000/api/feedbacks/pending");

        setStats({
          totalUsers: usersRes.data.data.length|| 0,
          totalSkills: skillsRes.data.data.length || 0,
          activeSessions: sessionsRes.data.data.length ,
          pendingFeedback: feedbackRes.data.data.length ,
        });

        setUsers(usersRes.data.users || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard d-flex">
      <div className="content-wrapper flex-grow-1 p-4">
        <div className="container-fluid">
          <h1 className="mb-4">Admin Dashboard</h1>

          {/* Dashboard Stats */}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card text-bg-primary shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Total Users:</h5>
                  <p className="card-text fs-3">{stats.totalUsers}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card text-bg-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Total Skills:</h5>
                  <p className="card-text fs-3">{stats.totalSkills}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card text-bg-warning shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Active Sessions:</h5>
                  <p className="card-text fs-3">{stats.activeSessions}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card text-bg-danger shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Pending Feedback:</h5>
                  <p className="card-text fs-3">{stats.pendingFeedback}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Line Chart Section */}
          <div className="mt-5">
            <h2 className="mb-3">Skill Exchange Admin Dashboard</h2>
            <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

           {/* Users Table */}
          
           {/* <div className="mt-5">
            <h2>All Users</h2>
            {loading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Joined At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name || "N/A"}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{new Date(user.createdAt).toLocaleString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table> 
             )
          </div>  */}
        </div>
      </div>
    </div> 
  );
};

export default Dashboard;
