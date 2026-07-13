
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SwapRequests() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [request, setRequest] = useState({
    receiverId: "",
    senderSkill: "",
    receiverSkill: "",
  });

  const [users, setUsers] = useState([]);

  const [sentRequests, setSentRequests] = useState([]);

  const [receivedRequests, setReceivedRequests] = useState([]);

  const [contacts, setContacts] = useState({});

  function handleChange(e) {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  }

  // Fetch Users

  async function fetchUsers() {
    try {
      const response = await fetch("http://localhost:9091/users");

      const data = await response.json();

      setUsers(data.filter((u) => u.id !== currentUser.id));

    } catch (error) {

      console.log(error);

      toast.error("Unable to fetch users");

    }
  }

  // Fetch Swap Requests

  async function fetchRequests() {

    try {

      const response = await fetch(
        "http://localhost:9091/swaprequests"
      );

      const data = await response.json();

      const sent = data.filter(
        (item) => item.senderId === currentUser.id
      );

      const received = data.filter(
        (item) => item.receiverId === currentUser.id
      );

      setSentRequests(sent);

      setReceivedRequests(received);

    } catch (error) {

      console.log(error);

      toast.error("Unable to fetch requests");

    }
  }

  useEffect(() => {

    fetchUsers();

    fetchRequests();

  }, []);

  // Send Request

  async function handleSubmit(e) {

    e.preventDefault();

    const newRequest = {

      senderId: currentUser.id,

      receiverId: request.receiverId,

      senderSkill: request.senderSkill,

      receiverSkill: request.receiverSkill,

    };

    try {

      const response = await fetch(
        "http://localhost:9091/swaprequests",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newRequest),
        }
      );

      if (response.ok) {

        toast.success("Swap Request Sent");

        setRequest({
          receiverId: "",
          senderSkill: "",
          receiverSkill: "",
        });

        fetchRequests();

      }

    } catch (error) {

      console.log(error);

      toast.error("Unable to send request");

    }
  }

  async function acceptRequest(id) {

    await fetch(
      `http://localhost:9091/swaprequests/${id}/accept`,
      {
        method: "PUT",
      }
    );

    toast.success("Request Accepted");

    fetchRequests();
  }

  async function rejectRequest(id) {

    await fetch(
      `http://localhost:9091/swaprequests/${id}/reject`,
      {
        method: "PUT",
      }
    );

    toast.success("Request Rejected");

    fetchRequests();
  }

  async function deleteRequest(id) {

    await fetch(
      `http://localhost:9091/swaprequests/${id}`,
      {
        method: "DELETE",
      }
    );

    toast.success("Request Deleted");

    fetchRequests();
  }

  async function viewContact(receiverId) {

    if (contacts[receiverId]) return;

    const response = await fetch(
      `http://localhost:9091/users/${receiverId}`
    );

    const data = await response.json();

    setContacts((prev) => ({
      ...prev,
      [receiverId]: data,
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8F3ED] via-[#FFFDFB] to-[#EFE3D3] py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-[#8C624A]">
              Skill Swap Requests
            </h1>

            <p className="text-[#6B5B52] mt-2">
              Manage your sent and received requests.
            </p>

          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#8C624A] text-white px-6 py-3 rounded-xl hover:bg-[#6E4B39]"
          >
            Dashboard
          </button>

        </div>

        {/* Create Request */}

        <div className="bg-[#FFF8F1] p-8 rounded-3xl shadow-xl mb-12">

          <h2 className="text-3xl font-bold text-[#8C624A] mb-6">
            Send New Request
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <select
              name="receiverId"
              value={request.receiverId}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-[#D8C3B1]"
            >

              <option value="">
                Select Receiver
              </option>

              {users.map((user) => (

                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.name} ({user.city})
                </option>

              ))}

            </select>

            <input
              type="text"
              name="senderSkill"
              placeholder="Your Skill"
              value={request.senderSkill}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-[#D8C3B1]"
              required
            />

            <input
              type="text"
              name="receiverSkill"
              placeholder="Skill You Want"
              value={request.receiverSkill}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-[#D8C3B1]"
              required
            />

            <button className="w-full bg-[#8C624A] hover:bg-[#6E4B39] text-white py-4 rounded-xl">
              Send Request
            </button>

          </form>

        </div>
                {/* Sent Requests */}

        <h2 className="text-4xl font-bold text-[#8C624A] mb-8">
          Requests Sent
        </h2>

        {sentRequests.length === 0 ? (

          <div className="bg-[#FFF8F1] p-12 rounded-3xl shadow-lg text-center mb-16">

            <div className="text-6xl mb-5">📤</div>

            <h2 className="text-2xl font-bold text-[#8C624A]">
              No Requests Sent
            </h2>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            {sentRequests.map((item) => {

              const receiver = users.find(
                (user) => user.id === item.receiverId
              );

              return (

                <div
                  key={item.id}
                  className="bg-[#FFF8F1] rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition"
                >

                  <div className="flex justify-between items-center">

                    <h2 className="text-2xl font-bold text-[#5B3A29]">
                      Request #{item.id}
                    </h2>

                    {item.status === "PENDING" && (
                      <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
                        Pending
                      </span>
                    )}

                    {item.status === "ACCEPTED" && (
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                        Accepted
                      </span>
                    )}

                    {item.status === "REJECTED" && (
                      <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm">
                        Rejected
                      </span>
                    )}

                  </div>

                  <div className="mt-6 space-y-3 text-[#5B3A29]">

                    <p>
                      <strong>Receiver :</strong>{" "}
                      {receiver ? receiver.name : item.receiverId}
                    </p>

                    <p>
                      <strong>Your Skill :</strong>{" "}
                      {item.senderSkill}
                    </p>

                    <p>
                      <strong>Requested Skill :</strong>{" "}
                      {item.receiverSkill}
                    </p>

                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">

                    {item.status === "ACCEPTED" ? (

                      <button
                        onClick={() => viewContact(item.receiverId)}
                        className="bg-[#8C624A] hover:bg-[#6E4B39] text-white py-3 rounded-xl"
                      >
                        View Contact
                      </button>

                    ) : (

                      <button
                        disabled
                        className="bg-gray-300 text-gray-600 py-3 rounded-xl cursor-not-allowed"
                      >
                        Waiting...
                      </button>

                    )}

                    <button
                      onClick={() => deleteRequest(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
                    >
                      Delete
                    </button>

                  </div>

                  {contacts[item.receiverId] && (

                    <div className="mt-6 bg-[#F8F3ED] rounded-2xl p-5 border border-[#D8C3B1]">

                      <h3 className="text-xl font-bold text-[#8C624A] mb-4">
                        Contact Details
                      </h3>

                      <p>
                        👤 <strong>Name:</strong>{" "}
                        {contacts[item.receiverId].name}
                      </p>

                      <p>
                        📧 <strong>Email:</strong>{" "}
                        {contacts[item.receiverId].email}
                      </p>

                      <p>
                        📍 <strong>City:</strong>{" "}
                        {contacts[item.receiverId].city}
                      </p>

                      <p>
                        📝 <strong>Bio:</strong>{" "}
                        {contacts[item.receiverId].bio}
                      </p>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        )}
                {/* Received Requests */}

        <h2 className="text-4xl font-bold text-[#8C624A] mb-8">
          Requests Received
        </h2>

        {receivedRequests.length === 0 ? (

          <div className="bg-[#FFF8F1] p-12 rounded-3xl shadow-lg text-center">

            <div className="text-6xl mb-5">
              📥
            </div>

            <h2 className="text-2xl font-bold text-[#8C624A]">
              No Requests Received
            </h2>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {receivedRequests.map((item) => (

              <div
                key={item.id}
                className="bg-[#FFF8F1] rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-bold text-[#5B3A29]">
                    Request #{item.id}
                  </h2>

                  {item.status === "PENDING" && (
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Pending
                    </span>
                  )}

                  {item.status === "ACCEPTED" && (
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Accepted
                    </span>
                  )}

                  {item.status === "REJECTED" && (
                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Rejected
                    </span>
                  )}

                </div>

                <div className="mt-6 space-y-3 text-[#5B3A29]">

                  <p>
                    <strong>Sender ID :</strong> {item.senderId}
                  </p>

                  <p>
                    <strong>Offered Skill :</strong> {item.senderSkill}
                  </p>

                  <p>
                    <strong>Requested Skill :</strong> {item.receiverSkill}
                  </p>

                </div>

                <div className="grid grid-cols-3 gap-3 mt-8">

                  {item.status === "PENDING" && (
                    <>
                      <button
                        onClick={() => acceptRequest(item.id)}
                        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() => rejectRequest(item.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl transition"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {item.status !== "PENDING" && (
                    <div className="col-span-2 flex justify-center items-center font-semibold text-[#8C624A]">
                      Request Closed
                    </div>
                  )}

                  <button
                    onClick={() => deleteRequest(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition"
                  >
                    Delete
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

export default SwapRequests;