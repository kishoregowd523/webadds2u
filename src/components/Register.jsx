import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input className="w-full mb-3 p-2 border" placeholder="Username" />
        <input className="w-full mb-3 p-2 border" placeholder="Email" />
        <input className="w-full mb-3 p-2 border" placeholder="Password" />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Register
        </button>

        <p className="text-center mt-4">
          Already user?{" "}
          <Link to="/" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
