import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8F3ED] via-[#FFFDFB] to-[#EFE3D3]">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 lg:px-12 py-20">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left Side */}
          <div className="lg:w-1/2">

            <span className="bg-[#EAD8C0] text-[#8C624A] px-5 py-2 rounded-full font-semibold shadow">
              🤝 Learn • Teach • Grow
            </span>

            <h1 className="text-7xl font-extrabold text-[#8C624A] mt-8">
              Skill Swap
            </h1>

            <h2 className="text-5xl font-bold text-[#3F2A20] mt-6 leading-tight">
              Learn.
              <br />
              Teach.
              <br />
              Grow Together.
            </h2>

            <p className="mt-8 text-xl leading-9 text-[#6B5B52]">
              Skill Swap is a community where passionate learners exchange
              knowledge, collaborate with others, and grow together through
              skill sharing instead of expensive courses.
            </p>

            <div className="flex gap-6 mt-10">

              <Link
                to="/register"
                className="bg-[#8C624A] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#6E4B39] transition duration-300"
              >
                Get Started
              </Link>

              <Link
                to="/skills"
                className="border-2 border-[#8C624A] text-[#8C624A] px-8 py-4 rounded-xl hover:bg-[#8C624A] hover:text-white transition duration-300"
              >
                Explore Skills
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="lg:w-1/2 flex justify-center">

            <div className="bg-[#FFF8F1] rounded-[40px] p-6 shadow-2xl">

              <img
                src="https://images.ctfassets.net/nnyjccrtyeph/7nx8HjFqWUnExmzp1URdeP/192d4f599365ed0901505c80016bb918/Teamwork_Skills_Best_Practices_for_Successful_Collaboration.png?w=1250&h=1250&q=50&fm=png"
                alt="Skill Swap"
                className="w-[520px]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-24 bg-[#FDF8F3]">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-[#5B3A29] mb-16">
            Why Choose Skill Swap?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#FFF8F1] rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

              <div className="text-6xl">📚</div>

              <h3 className="text-2xl font-bold mt-6 text-[#5B3A29]">
                Learn New Skills
              </h3>

              <p className="text-[#6B5B52] mt-5 leading-8">
                Learn programming, designing, languages, music and many more
                skills from talented people around you.
              </p>

            </div>

            <div className="bg-[#FFF8F1] rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

              <div className="text-6xl">👨‍🏫</div>

              <h3 className="text-2xl font-bold mt-6 text-[#5B3A29]">
                Teach Others
              </h3>

              <p className="text-[#6B5B52] mt-5 leading-8">
                Share your expertise and help others while building your own
                reputation in the community.
              </p>

            </div>

            <div className="bg-[#FFF8F1] rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">

              <div className="text-6xl">🤝</div>

              <h3 className="text-2xl font-bold mt-6 text-[#5B3A29]">
                Build Connections
              </h3>

              <p className="text-[#6B5B52] mt-5 leading-8">
                Connect with developers, designers, students and professionals
                to exchange knowledge and opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-8">

          <div className="bg-[#FFF8F1] rounded-2xl shadow-lg p-8">
            <h2 className="text-5xl font-bold text-[#8C624A]">500+</h2>
            <p className="mt-3 text-[#6B5B52]">Active Learners</p>
          </div>

          <div className="bg-[#FFF8F1] rounded-2xl shadow-lg p-8">
            <h2 className="text-5xl font-bold text-[#8C624A]">250+</h2>
            <p className="mt-3 text-[#6B5B52]">Skills Shared</p>
          </div>

          <div className="bg-[#FFF8F1] rounded-2xl shadow-lg p-8">
            <h2 className="text-5xl font-bold text-[#8C624A]">1000+</h2>
            <p className="mt-3 text-[#6B5B52]">Successful Swaps</p>
          </div>

          <div className="bg-[#FFF8F1] rounded-2xl shadow-lg p-8">
            <h2 className="text-5xl font-bold text-[#8C624A]">50+</h2>
            <p className="mt-3 text-[#6B5B52]">Categories</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#8C624A] py-24">

        <div className="max-w-4xl mx-auto text-center px-8">

          <h2 className="text-5xl font-bold text-white">
            Ready to Start Learning?
          </h2>

          <p className="text-[#F7EDE2] text-xl mt-6 leading-8">
            Become part of a growing community where knowledge is exchanged,
            friendships are built, and everyone grows together.
          </p>

          <Link
            to="/register"
            className="inline-block mt-10 bg-[#FFF8F1] text-[#8C624A] px-10 py-4 rounded-xl font-bold hover:bg-[#EAD8C0] transition"
          >
            Join Skill Swap
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;