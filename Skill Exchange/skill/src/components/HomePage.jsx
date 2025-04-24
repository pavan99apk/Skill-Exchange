// //import React from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css"

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="hero-section">
//         <h1>Welcome to Skill Exchange</h1>
//         <p>Connect, Learn, and Grow by Sharing Skills</p>
//         <div className="cta-buttons">
//           <Link to="/signup" className="btn btn-primary">Get Started</Link>
//           <Link to="/login" className="btn btn-secondary">Login</Link>
//         </div>
//       </header>
      
//       <section className="features-section">
//         <h2>Why Join Skill Exchange?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h3>Peer-to-Peer Learning</h3>
//             <p>Exchange skills with like-minded individuals.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Smart Matching</h3>
//             <p>Find the perfect skill partner with our AI-driven recommendations.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Flexible Scheduling</h3>
//             <p>Book sessions at your convenience, online or in-person.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Ratings & Reviews</h3>
//             <p>Build credibility through user feedback.</p>
//           </div>
//         </div>
//       </section>
      
//       <footer className="footer">
//         <p>&copy; 2025 Skill Exchange. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import  { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      title: "Peer-to-Peer Learning",
      description: "Exchange skills with like-minded individuals.",
      details: "Join a community where users teach and learn from each other through personalized sessions and collaboration."
    },
    {
      title: "Smart Matching",
      description: "Find the perfect skill partner with our AI-driven recommendations.",
      details: "Our smart algorithm pairs you with users whose skills match your learning goals for maximum value."
    },
    {
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, online or in-person.",
      details: "No rigid schedules—set your own timing and learn at your pace with flexibility."
    },
    {
      title: "Ratings & Reviews",
      description: "Build credibility through user feedback.",
      details: "After each session, users can rate and review their experience, helping maintain a high-quality platform."
    },
  ];

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Skill Exchange</h1>
        <p>Connect, Learn, and Grow by Sharing Skills</p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>Why Join Skill Exchange?</h2>
        <div className="features-grid">
          {skills.map((skill, index) => (
            <div
              className="feature-card"
              key={index}
              onClick={() => setSelectedSkill(skill)}
            >
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSkill.title}</h2>
            <p>{selectedSkill.details}</p>
            <button className="btn btn-close" onClick={() => setSelectedSkill(null)}>Close</button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2025 Skill Exchange. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
