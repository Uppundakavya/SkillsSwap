import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9091/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        toast.error("Invalid Email or Password");
        return;
      }

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));

      toast.success("Login Successful 🎉");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8F3ED] via-[#FFFDFB] to-[#EFE3D3] flex justify-center items-center px-6 py-10">

      <div className="bg-[#FFF8F1] shadow-2xl rounded-[35px] p-10 w-full max-w-md">

        <h1 className="text-4xl font-extrabold text-center text-[#8C624A]">
          Welcome Back
        </h1>

        <p className="text-center text-[#6B5B52] mt-3 mb-8">
          Login to continue your Skill Swap journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8C624A]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8C624A]"
          />

          <button
            type="submit"
            className="w-full bg-[#8C624A] hover:bg-[#6E4B39] text-white py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
          >
            Login
          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-[#6B5B52]">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="text-[#8C624A] font-semibold hover:underline"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;