import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-xl w-96 animate-fade-in"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Login
        </button>

        <p className="text-center mt-4">
          New user?{" "}
          <Link to="/register" className="text-indigo-600 font-bold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
