// // import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";
// import "./Signup.css";

// export const Signup = () => {
//     const navigate = useNavigate();
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         age: "",
//         email: "",
//         password: "",
//         roleId: "",
//     });

//     const togglePasswordVisibility = () => {
//         setShowPassword((prev) => !prev);
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSignup = async (e) => {
//         e.preventDefault(); // Prevent page reload
//         const data = { ...formData, roleId: "67bd47f4f8dd881ac10d6ec9" };

//         try {
//             const res = await axios.post("/user/signup", data);
//             if (res.status === 201) {
//                 toast.success("🚀 Signup successful!", {
//                     position: "top-right",
//                     autoClose: 5000,
//                     theme: "dark",
//                     style: { fontFamily: "Poppins, sans-serif" },
//                 });
//                 setTimeout(() => {
//                     navigate("/login");
//                 }, 2000);
//             } else {
//                 toast.error("⚠️ Signup failed, please try again.", {
//                     autoClose: 5000,
//                     style: { fontFamily: "Poppins, sans-serif" },
//                 });
//             }
//         } catch (error) {
//             console.error("Error during signup:", error);
//             toast.error("❌ This Email Already Exists, Please Enter a Different Email ID", {
//                 autoClose: 5000,
//                 style: { fontFamily: "Poppins, sans-serif" },
//             });
//         }
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <h2>Signup</h2>
//                 <form onSubmit={handleSignup}>
//                     <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
//                     <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
//                     <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} />
//                     <input name="roleId" type="string" placeholder="Role" value={formData.role} onChange={handleChange} required/>
                    



//                     <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                     <input
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                     <button type="button" onClick={togglePasswordVisibility}>
//                         {showPassword ? "Hide" : "Show"} Password
//                     </button>
//                     <div className="password-strength">
//                         <p>Password Strength: <span>{formData.password.length < 6 ? "Weak" : "Strong"}</span></p>
//                     </div>
//                     <button type="submit">Signup</button>
//                     <div className="social-signup">
//                         <p>Or signup with:</p>
//                         <button className="google-btn">Google</button>
//                         <button className="facebook-btn">Facebook</button>
//                     </div>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import "./Signup.css";

// export const Signup = () => {
//     const navigate = useNavigate();
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         role: "User",
//         skillsOffered: "",
//         skillsWanted: "",
//         rating: 0
//     });

//     const togglePasswordVisibility = () => {
//         setShowPassword((prev) => !prev);
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSignup = async (e) => {
//         e.preventDefault();
        
//         try {
//             const res = await axios.post("http://localhost:3000/api/users/signup", formData);
//             if (res.status === 201) {
//                 toast.success("🚀 Signup successful!", {
//                     position: "top-right",
//                     autoClose: 5000,
//                     theme: "dark",
//                     style: { fontFamily: "Poppins, sans-serif" },
//                 });
//                 setTimeout(() => {
//                     navigate("/login");
//                 }, 2000);
//             } else {
//                 toast.error("⚠️ Signup failed, please try again.", {
//                     autoClose: 5000,
//                     style: { fontFamily: "Poppins, sans-serif" },
//                 });
//             }
//         } catch (error) {
//             console.error("Error during signup:", error);
//             toast.error("❌ This Email Already Exists, Please Enter a Different Email ID", {
//                 autoClose: 5000,
//                 style: { fontFamily: "Poppins, sans-serif" },
//             });
//         }
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <h2>Signup</h2>
//                 <form onSubmit={handleSignup}>
//                     <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
//                     <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
//                     <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                     <input
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                     <button type="button" onClick={togglePasswordVisibility}>
//                         {showPassword ? "Hide" : "Show"} Password
//                     </button>

//                     <select name="role" value={formData.role} onChange={handleChange} required>
//                         <option value="User">User</option>
//                         <option value="Admin">Admin</option>
//                     </select>

//                     <input name="skillsOffered" placeholder="Skills Offered (comma-separated)" value={formData.skillsOffered} onChange={handleChange} />
//                     <input name="skillsWanted" placeholder="Skills Wanted (comma-separated)" value={formData.skillsWanted} onChange={handleChange} />
//                     <input name="rating" type="number" placeholder="Rating" value={formData.rating} onChange={handleChange} disabled />

//                     <button type="submit">Signup</button>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import "./Signup.css";

// export const Signup = () => {
//     const navigate = useNavigate();
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         role: "User",
//         skillsOffered: "",
//         skillsWanted: "",
//         rating: 0
//     });

//     const skillsOptions = ["JavaScript", "Python", "React", "Node.js", "MongoDB", "UI/UX Design", "Data Science", "Machine Learning"];

//     const togglePasswordVisibility = () => {
//         setShowPassword((prev) => !prev);
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:3000/api/users/signup", formData);
//             if (res.status === 201) {
//                 toast.success("🚀 Signup successful!", {
//                     position: "top-right",
//                     autoClose: 5000,
//                     theme: "dark",
//                     style: { fontFamily: "Poppins, sans-serif" },
//                 });
//                 setTimeout(() => {
//                     navigate("/login");
//                 }, 2000);
//             } else {
//                 toast.error("⚠️ Signup failed, please try again.", {
//                     autoClose: 5000,
//                     style: { fontFamily: "Poppins, sans-serif" },
//                 });
//             }
//         } catch (error) {
//             console.error("Error during signup:", error);
//             toast.error("❌ This Email Already Exists, Please Enter a Different Email ID", {
//                 autoClose: 5000,
//                 style: { fontFamily: "Poppins, sans-serif" },
//             });
//         }
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <h2>Signup</h2>
//                 <form onSubmit={handleSignup}>
//                     <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
//                     <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
//                     <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                     <input
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                     <button type="button" onClick={togglePasswordVisibility}>
//                         {showPassword ? "Hide" : "Show"} Password
//                     </button>

//                     <select name="role" value={formData.role} onChange={handleChange} required>
//                         <option value="User">User</option>
//                         <option value="Admin">Admin</option>
//                     </select>

//                     <select name="skillsOffered" value={formData.skillsOffered} onChange={handleChange} required>
//                         <option value="">Select Skill Offered</option>
//                         {skillsOptions.map((skill, index) => (
//                             <option key={index} value={skill}>{skill}</option>
//                         ))}
//                     </select>

//                     <select name="skillsWanted" value={formData.skillsWanted} onChange={handleChange} required>
//                         <option value="">Select Skill Wanted</option>
//                         {skillsOptions.map((skill, index) => (
//                             <option key={index} value={skill}>{skill}</option>
//                         ))}
//                     </select>

//                     <input name="rating" type="number" placeholder="Rating" value={formData.rating} onChange={handleChange} disabled />

//                     <button type="submit">Signup</button>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

export const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "User",
        skillsOffered: "",
        skillsWanted: "",
        rating: 0
    });

    const skillsOptions = ["JavaScript", "Python", "React", "Node.js", "MongoDB", "UI/UX Design", "Data Science", "Machine Learning"];

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/users/signup", formData);
            if (res.status === 201) {
                toast.success("🚀 Signup successful!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                    style: { fontFamily: "Poppins, sans-serif" },
                });
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                toast.error("⚠️ Signup failed, please try again.", {
                    autoClose: 5000,
                    style: { fontFamily: "Poppins, sans-serif" },
                });
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("❌ This Email Already Exists, Please Enter a Different Email ID", {
                autoClose: 5000,
                style: { fontFamily: "Poppins, sans-serif" },
            });
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>
                    <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? "Hide" : "Show"} Password
                    </button>

                    <select name="role" value={formData.role} onChange={handleChange} required>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <select name="skillsOffered" value={formData.skillsOffered} onChange={handleChange} required>
                        <option value="">Select Skill Offered</option>
                        {skillsOptions.map((skill, index) => (
                            <option key={index} value={skill}>{skill}</option>
                        ))}
                    </select>

                    <select name="skillsWanted" value={formData.skillsWanted} onChange={handleChange} required>
                        <option value="">Select Skill Wanted</option>
                        {skillsOptions.map((skill, index) => (
                            <option key={index} value={skill}>{skill}</option>
                        ))}
                    </select>

                    <input name="rating" type="number" placeholder="Rating" value={formData.rating} onChange={handleChange} disabled />

                    <button type="submit">Signup</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};
