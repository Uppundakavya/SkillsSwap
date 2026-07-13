import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Skills() {
  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    skillName: "",
    category: "",
    description: "",
  });

  const [skills, setSkills] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  }

  async function fetchSkills() {
    try {
      const response = await fetch("http://localhost:9091/skills");

      if (!response.ok) {
        throw new Error("Failed to fetch skills");
      }

      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch skills");
    }
  }

  useEffect(() => {
    fetchSkills();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let url = "http://localhost:9091/skills";
      let method = "POST";

      if (editId !== null) {
        url = `http://localhost:9091/skills/${editId}`;
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skill),
      });

      if (response.ok) {
        toast.success(
          editId
            ? "Skill Updated Successfully 🎉"
            : "Skill Added Successfully 🎉"
        );

        setSkill({
          skillName: "",
          category: "",
          description: "",
        });

        setEditId(null);

        fetchSkills();
      } else {
        toast.error("Operation Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  function editSkill(item) {
    setSkill({
      skillName: item.skillName,
      category: item.category,
      description: item.description,
    });

    setEditId(item.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function deleteSkill(id) {
    try {
      const response = await fetch(
        `http://localhost:9091/skills/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Skill Deleted");
        fetchSkills();
      } else {
        toast.error("Delete Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8F3ED] via-[#FFFDFB] to-[#EFE3D3] py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-[#8C624A]">
              Skills
            </h1>

            <p className="text-[#6B5B52] mt-2">
              Manage your skills and showcase your expertise.
            </p>

          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#8C624A] hover:bg-[#6E4B39] text-white px-6 py-3 rounded-xl transition"
          >
            ← Dashboard
          </button>

        </div>

        <div className="bg-[#FFF8F1] rounded-[30px] shadow-xl p-8 mb-12">

          <h2 className="text-3xl font-bold text-[#8C624A] mb-6">

            {editId ? "Update Skill" : "Add New Skill"}

          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="skillName"
              placeholder="Skill Name"
              value={skill.skillName}
              onChange={handleChange}
              required
              className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 focus:ring-2 focus:ring-[#8C624A] outline-none"
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={skill.category}
              onChange={handleChange}
              required
              className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 focus:ring-2 focus:ring-[#8C624A] outline-none"
            />

            <textarea
              rows="4"
              name="description"
              placeholder="Description"
              value={skill.description}
              onChange={handleChange}
              required
              className="w-full bg-[#F8F3ED] border border-[#D8C3B1] rounded-xl p-4 resize-none focus:ring-2 focus:ring-[#8C624A] outline-none"
            />

            <button
              className="w-full bg-[#8C624A] hover:bg-[#6E4B39] text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              {editId ? "Update Skill" : "Add Skill"}
            </button>

          </form>

        </div>
                {/* Skills List */}

        <h2 className="text-4xl font-bold text-[#8C624A] mb-8">
          Available Skills
        </h2>

        {skills.length === 0 ? (

          <div className="bg-[#FFF8F1] rounded-3xl shadow-lg p-16 text-center">

            <div className="text-7xl mb-5">📚</div>

            <h2 className="text-3xl font-bold text-[#8C624A]">
              No Skills Available
            </h2>

            <p className="text-[#6B5B52] mt-4 text-lg">
              Add your first skill and start exchanging knowledge.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {skills.map((item) => (

              <div
                key={item.id}
                className="bg-[#FFF8F1] rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div className="flex justify-between items-center">

                  <div className="text-5xl">
                    💡
                  </div>

                  <span className="bg-[#EAD8C0] text-[#8C624A] px-4 py-2 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>

                </div>

                <h2 className="text-3xl font-bold text-[#5B3A29] mt-6">
                  {item.skillName}
                </h2>

                <p className="text-[#6B5B52] mt-4 leading-8">
                  {item.description}
                </p>

                <div className="flex gap-4 mt-8">

                  <button
                    onClick={() => editSkill(item)}
                    className="flex-1 bg-[#D8A15D] hover:bg-[#C48A46] text-white py-3 rounded-xl font-semibold transition"
                  >
                    ✏ Edit
                  </button>

                  <button
                    onClick={() => deleteSkill(item.id)}
                    className="flex-1 bg-[#8C624A] hover:bg-[#6E4B39] text-white py-3 rounded-xl font-semibold transition"
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Skills;