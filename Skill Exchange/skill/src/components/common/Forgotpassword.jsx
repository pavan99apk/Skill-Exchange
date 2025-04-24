import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // Reuse your auth styling if needed

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/users/forgot-password", { email });

            if (response.status === 200) {
                toast.success("📧 Password reset link sent to your email.", {
                    autoClose: 5000,
                    theme: "dark",
                });
            }
        } catch (error) {
            console.error("Forgot Password Error:", error);
            toast.error(
                error.response?.data?.message || "❌ Something went wrong. Try again later.",
                { autoClose: 5000 }
            );
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Send Reset Link</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;
