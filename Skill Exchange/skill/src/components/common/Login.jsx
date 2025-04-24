import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/api/users/login", formData, {
                headers: { "Content-Type": "application/json" }
            });

            if (res.status === 200) {
                const user = res.data.data;
                const role = user.role;

                toast.success("🚀 Login successful!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                });

                localStorage.setItem("user", JSON.stringify(user));

                setTimeout(() => {
                    if (role === "Admin") {
                        navigate("/admin/dashboard");
                    } else if (role === "User") {
                        navigate("/user");
                    } else {
                        toast.warn("⚠️ Unknown role. Redirecting to home.");
                        navigate("/");
                    }
                }, 2000);
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("❌ Invalid Email or Password", {
                autoClose: 5000,
            });
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
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

                    <button type="submit">Login</button>
                </form>

                {/* ✅ Forgot Password Link */}
                <p className="forgot-password-text">
                    <Link to="/forgot-password" className="text-blue-600 hover:underline">
                        Forgot Password?
                    </Link>
                </p>
            </div>

            <ToastContainer />
        </div>
    );
};
