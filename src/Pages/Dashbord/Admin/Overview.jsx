import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import {
  FaDollarSign, FaImage, FaUsers, FaShoppingBag,
  FaArrowUp, FaArrowDown, FaEye, FaHeart, FaPlus
} from "react-icons/fa";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import axios from "axios";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [dashboard, setDashboard] = useState({
    stats: {},
    recentArtworks: [],
    topArtists: [],
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
  axios(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/admin/dashboard`)
    .then((res) => {
      const data = res.data; // ✅ fix here
      setDashboard(data);

      const chart = data.recentArtworks.map((art, idx) => ({
        month: `Art ${idx + 1}`,
        sales: art.likes || 0,
      }));
      setChartData(chart);
    })
    .catch((err) => console.error(err));
}, []);


  const statsCards = [
    { title: "Total Revenue", value: `$${dashboard.stats.totalSales || 0}`, change: "+23.5%", trend: "up", icon: FaDollarSign, color: "from-emerald-500 to-teal-600" },
    { title: "Total Artworks", value: dashboard.stats.totalArtworks || 0, change: "+189 this week", trend: "up", icon: FaImage, color: "from-purple-500 to-indigo-600" },
    { title: "Active Artists", value: dashboard.stats.totalArtists || 0, change: "+28 new", trend: "up", icon: FaUsers, color: "from-pink-500 to-rose-600" },
    { title: "Total Sales", value: dashboard.stats.totalSales || 0, change: "+12% this month", trend: "up", icon: FaShoppingBag, color: "from-amber-500 to-orange-600" },
  ];

  return (
    <div className="space-y-10">
      <div className="text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.name?.split(" ")[0] || "Admin"}!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Here's your Artify platform overview
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsCards.map((stat, i) => (
          <div key={i} className={`relative overflow-hidden bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/20 dark:border-gray-700/50`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</h3>
                <div className="flex items-center gap-2 mt-4">
                  <span className={`text-sm font-semibold flex items-center gap-1 ${stat.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                    {stat.trend === "up" ? <FaArrowUp /> : <FaArrowDown />} {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                <stat.icon size={32} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="lg:col-span-2 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Likes Trend (Recent Artworks)
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: "rgba(15, 23, 42, 0.9)", border: "none", borderRadius: "12px", padding: "12px" }} />
              <Area type="monotone" dataKey="sales" stroke="#a78bfa" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Artworks */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Recently Added Artworks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboard.recentArtworks.map((art) => (
            <div key={art._id} className="p-4 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-lg">
              <img src={art.image} className="rounded-xl mb-3 w-full h-48 object-cover" alt={art.title} />
              <h4 className="font-bold text-gray-900 dark:text-white">{art.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">by {art.artist}</p>
              <p className="font-semibold text-emerald-600 mt-1">{art.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Artists */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Top Artists</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboard.topArtists.map((artist) => (
            <div key={artist.rank} className="p-4 bg-gradient-to-br from-purple-100/50 to-indigo-100/50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-900 dark:text-white">{artist.name}</h4>
              <p className="text-gray-600 dark:text-gray-400">{artist.artworks} artworks</p>
              <p className="font-semibold text-purple-600 dark:text-purple-400">{artist.sales}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
