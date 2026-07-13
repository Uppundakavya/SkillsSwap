import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    bio: "",
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
      const response = await fetch("http://localhost:9091/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {

        toast.success("Registration Successful 🎉");

        setUser({
          name: "",
          email: "",
          password: "",
          city: "",
          bio: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);

      } else {

        toast.error(data.message || "Registration Failed");

      }

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong!");

    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8F3ED] via-[#FFFDFB] to-[#EFE3D3] flex justify-center items-center px-6 py-10">

      <div className="bg-[#FFF8F1] rounded-[30px] shadow-2xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-[#8C624A]">
          Create Account
        </h1>

        <p className="text-center text-[#6B5B52] mt-3 mb-8">
          Join the Skill Swap community today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8C624A]"
          />

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

          <input
            type="text"
            name="city"
            placeholder="City"
            value={user.city}
            onChange={handleChange}
            className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8C624A]"
          />

          <textarea
            name="bio"
            placeholder="Tell us about yourself..."
            rows="4"
            value={user.bio}
            onChange={handleChange}
            className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 outline-none resize-none focus:ring-2 focus:ring-[#8C624A]"
          />

          <button
            type="submit"
            className="w-full bg-[#8C624A] hover:bg-[#6E4B39] text-white py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;