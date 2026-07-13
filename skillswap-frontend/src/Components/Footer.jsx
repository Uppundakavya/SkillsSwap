import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#8C624A] text-[#FFF8F1] mt-20">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-10">
        {/* Logo */}

        <div>
          <h1 className="text-3xl font-extrabold">Skill Swap</h1>

          <p className="mt-5 leading-8 text-[#F6E9DC]">
            Skill Swap is a collaborative platform where people exchange
            knowledge, learn new skills, and build meaningful connections.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h2 className="text-2xl font-bold mb-5">Quick Links</h2>

          <div className="flex flex-col gap-3">
            <Link to="/" className="hover:text-[#EAD8C0] transition">
              Home
            </Link>

            <Link to="/dashboard" className="hover:text-[#EAD8C0] transition">
              Dashboard
            </Link>

            <Link to="/skills" className="hover:text-[#EAD8C0] transition">
              Skills
            </Link>

            <Link
              to="/swaprequests"
              className="hover:text-[#EAD8C0] transition"
            >
              Swap Requests
            </Link>
          </div>
        </div>

        {/* Contact */}

        <div>
          <h2 className="text-2xl font-bold mb-5">Contact</h2>

          <p className="mb-3">📧 support@skillswap.com</p>

          <p className="mb-3">🌍 India</p>

          <p>💻 React • Spring Boot • MySQL</p>
        </div>
      </div>

      <div className="border-t border-[#B08968] py-6 text-center">
        <p className="text-[#F8F3ED]">
          © 2026 Skill Swap Platform | Built with ❤️ using React, Spring Boot &
          MySQL
        </p>
      </div>
    </footer>
  );
}

export default Footer;
