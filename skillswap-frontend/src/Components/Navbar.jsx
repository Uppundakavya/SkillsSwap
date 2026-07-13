import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  function logout() {
    localStorage.removeItem("user");

    toast.success("Logged out successfully 👋");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF8F1]/90 backdrop-blur-md shadow-md border-b border-[#E7D8C8]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-extrabold text-[#8C624A] tracking-wide"
        >
          Skill Swap
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-[#5B3A29] font-medium hover:text-[#8C624A] transition"
          >
            Home
          </Link>

          <Link
            to="/skills"
            className="text-[#5B3A29] font-medium hover:text-[#8C624A] transition"
          >
            Skills
          </Link>

          <Link
            to="/swaprequests"
            className="text-[#5B3A29] font-medium hover:text-[#8C624A] transition"
          >
            Swap Requests
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-[#5B3A29] font-medium hover:text-[#8C624A] transition"
              >
                Dashboard
              </Link>

              <div className="flex items-center gap-3 bg-[#F8F3ED] px-4 py-2 rounded-full">
                <div className="w-10 h-10 rounded-full bg-[#8C624A] text-white flex items-center justify-center font-bold text-lg">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <span className="font-semibold text-[#5B3A29]">
                  {user.name}
                </span>
              </div>

              <button
                onClick={logout}
                className="bg-[#8C624A] hover:bg-[#6E4B39] text-white px-5 py-2 rounded-xl font-semibold transition duration-300 shadow"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-[#8C624A] text-[#8C624A] px-5 py-2 rounded-xl hover:bg-[#8C624A] hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-[#8C624A] hover:bg-[#6E4B39] text-white px-5 py-2 rounded-xl transition shadow"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
