import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8F3ED] via-[#FFFDFB] to-[#EFE3D3] py-12 px-6">
      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#FFF8F1] rounded-[30px] shadow-xl p-10">
          <h1 className="text-5xl font-extrabold text-[#8C624A]">
            Welcome, {user.name} 👋
          </h1>

          <p className="text-[#6B5B52] mt-3 text-lg">
            Glad to see you back! Continue learning, teaching and growing with
            the Skill Swap community.
          </p>

          <button
            onClick={() => navigate("/skills")}
            className="mt-8 bg-[#8C624A] hover:bg-[#6E4B39] text-white px-8 py-4 rounded-xl shadow-lg transition duration-300"
          >
            Explore Skills →
          </button>
        </div>

        {/* User Details */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-[#FFF8F1] rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl">👤</div>

            <h2 className="text-2xl font-bold text-[#8C624A] mt-4">Name</h2>

            <p className="text-[#6B5B52] mt-2 text-lg">{user.name}</p>
          </div>

          <div className="bg-[#FFF8F1] rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl">📧</div>

            <h2 className="text-2xl font-bold text-[#8C624A] mt-4">Email</h2>

            <p className="text-[#6B5B52] mt-2 text-lg break-all">
              {user.email}
            </p>
          </div>

          <div className="bg-[#FFF8F1] rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl">📍</div>

            <h2 className="text-2xl font-bold text-[#8C624A] mt-4">City</h2>

            <p className="text-[#6B5B52] mt-2 text-lg">{user.city}</p>
          </div>

          <div className="bg-[#FFF8F1] rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl">📝</div>

            <h2 className="text-2xl font-bold text-[#8C624A] mt-4">Bio</h2>

            <p className="text-[#6B5B52] mt-2 text-lg">{user.bio}</p>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="bg-[#8C624A] rounded-[30px] mt-12 p-10 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold">Ready to Learn Something New?</h2>

          <p className="mt-4 text-lg text-[#F8F3ED]">
            Browse skills, connect with people, and start exchanging knowledge.
          </p>

          <button
            onClick={() => navigate("/skills")}
            className="mt-8 bg-white text-[#8C624A] px-8 py-4 rounded-xl font-bold hover:bg-[#F1E4D3] transition"
          >
            Browse Skills
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
