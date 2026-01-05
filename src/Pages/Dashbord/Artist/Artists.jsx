import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaUserCheck,
  FaUserClock,
  FaEye,
  FaEdit,
  FaBan,
  FaUsers,
  FaTrash,
} from "react-icons/fa";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const API = "https://n-alpha-rust.vercel.app";

  /* ================= FETCH ARTISTS ================= */
  useEffect(() => {
    fetchArtists();
  }, [searchTerm, statusFilter]);

  const fetchArtists = async () => {
    setLoading(true);
    const res = await fetch(
      `${API}/artists?search=${searchTerm}&status=${statusFilter}`
    );
    const data = await res.json();
    setArtists(data);
    setLoading(false);
  };

  /* ================= UPDATE STATUS ================= */
  const updateStatus = async (id, status) => {
    await fetch(`${API}/artists/status/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchArtists();
  };

  /* ================= DELETE ARTIST ================= */
  const deleteArtist = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await fetch(`${API}/artists/${id}`, { method: "DELETE" });
    fetchArtists();
  };

  /* ================= STATS ================= */
  const totalArtists = artists.length;
  const activeArtists = artists.filter((a) => a.status === "active").length;
  const pendingArtists = artists.filter((a) => a.status === "pending").length;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600" />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Artists Management</h1>
        <p className="text-gray-500 mt-2">
          Manage all registered artists
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Stat icon={<FaUsers />} label="Total Artists" value={totalArtists} />
        <Stat
          icon={<FaUserCheck />}
          label="Active Artists"
          value={activeArtists}
          color="text-emerald-600"
        />
        <Stat
          icon={<FaUserClock />}
          label="Pending Artists"
          value={pendingArtists}
          color="text-amber-600"
        />
      </div>

      {/* Search & Filter */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
          <input
            className="w-full pl-12 py-3 rounded-xl bg-gray-100"
            placeholder="Search by name or email"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="py-3 px-4 rounded-xl bg-gray-100"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="w-full">
          <thead className="bg-purple-100">
            <tr>
              <th className="p-4 text-left">Artist</th>
              <th>Email</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist._id} className="border-t">
                <td className="p-4 font-semibold">{artist.name}</td>
                <td>{artist.email}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      artist.status === "active"
                        ? "bg-green-100 text-green-700"
                        : artist.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200"
                    }`}
                  >
                    {artist.status}
                  </span>
                </td>
                <td className="flex gap-3 justify-center p-4">
                  <button
                    onClick={() => updateStatus(artist._id, "active")}
                    className="text-green-600"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => updateStatus(artist._id, "inactive")}
                    className="text-red-600"
                  >
                    <FaBan />
                  </button>
                  <button
                    onClick={() => deleteArtist(artist._id)}
                    className="text-gray-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ================= STAT CARD ================= */
const Stat = ({ icon, label, value, color = "text-purple-600" }) => (
  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <div className={`text-4xl mb-2 ${color}`}>{icon}</div>
    <h2 className="text-3xl font-bold">{value}</h2>
    <p className="text-gray-500">{label}</p>
  </div>
);

export default Artists;
