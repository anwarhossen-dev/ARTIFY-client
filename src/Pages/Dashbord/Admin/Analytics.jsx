// src/Pages/Dashboard/Admin/Analytics.jsx
import React, { useEffect, useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { FaDollarSign, FaShoppingCart, FaUsers, FaClock } from "react-icons/fa";

const COLORS = ["#a78bfa", "#f472b6", "#60a5fa", "#34d399", "#fbbf24"];

// Mock data - looks real and beautiful
const mockOverview = {
  revenue: 84920,
  orders: 1847,
  artists: 512,
  uptime: "99.9%"
};

const mockRevenue = [
  { month: "Jan", revenue: 18900, orders: 142 },
  { month: "Feb", revenue: 22500, orders: 168 },
  { month: "Mar", revenue: 26800, orders: 201 },
  { month: "Apr", revenue: 31200, orders: 234 },
  { month: "May", revenue: 35800, orders: 268 },
  { month: "Jun", revenue: 41200, orders: 309 },
  { month: "Jul", revenue: 45800, orders: 343 },
  { month: "Aug", revenue: 49200, orders: 369 },
  { month: "Sep", revenue: 53800, orders: 403 },
  { month: "Oct", revenue: 59200, orders: 444 },
  { month: "Nov", revenue: 64800, orders: 486 },
  { month: "Dec", revenue: 71200, orders: 534 },
];

const mockCategories = [
  { name: "Digital Art", value: 38 },
  { name: "NFT", value: 25 },
  { name: "Generative", value: 18 },
  { name: "Abstract", value: 12 },
  { name: "Illustration", value: 7 },
];

const mockTraffic = [
  { name: "Direct", value: 45 },
  { name: "Social Media", value: 30 },
  { name: "Search", value: 15 },
  { name: "Referral", value: 10 },
];

const Analytics = () => {
  const [overview, setOverview] = useState(mockOverview);
  const [revenue, setRevenue] = useState(mockRevenue);
  const [categories, setCategories] = useState(mockCategories);
  const [traffic, setTraffic] = useState(mockTraffic);
  const [loading, setLoading] = useState(false);

  // Optional: Connect to real backend later
  // useEffect(() => {
  //   setLoading(true);
  //   // Replace with your actual API when ready
  //   // axios.get("/api/analytics/overview")...
  //   setLoading(false);
  // }, []);

  const monthlySales = revenue.map(r => ({
    month: r.month,
    sales: Math.round(r.revenue / 1000)
  }));

  if (loading) {
    return <div className="text-center py-20 text-2xl">Loading analytics...</div>;
  }

  return (
    <div className="space-y-12 p-8">
      <div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Analytics Dashboard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Deep insights into Artify's growth and performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard icon={<FaDollarSign className="text-4xl text-emerald-600" />} value={`$${overview.revenue.toLocaleString()}`} label="Total Revenue" change="+23.5%" />
        <StatCard icon={<FaShoppingCart className="text-4xl text-purple-600" />} value={overview.orders.toLocaleString()} label="Total Orders" change="+41%" />
        <StatCard icon={<FaUsers className="text-4xl text-pink-600" />} value={overview.artists} label="Active Artists" change="+18%" />
        <StatCard icon={<FaClock className="text-4xl text-amber-600" />} value={overview.uptime} label="Platform Uptime" />
      </div>

      {/* Revenue Trend */}
      <ChartCard title="Revenue & Orders Trend">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={revenue}>
            <defs>
              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="orders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f472b6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f472b6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
            <Area type="monotone" dataKey="revenue" stroke="#a78bfa" fill="url(#revenue)" name="Revenue" />
            <Area type="monotone" dataKey="orders" stroke="#f472b6" fill="url(#orders)" name="Orders" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Categories & Monthly Sales */}
      <div className="grid lg:grid-cols-2 gap-8">
        <ChartCard title="Sales by Category">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie data={categories} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                {categories.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Monthly Sales (K)">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#60a5fa" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Traffic Sources */}
      <ChartCard title="Traffic Sources">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie data={traffic} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={120} label>
              {traffic.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

const StatCard = ({ icon, value, label, change }) => (
  <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
    <div className="flex items-center justify-between mb-4">
      {icon}
      {change && <span className="text-green-500 font-bold text-lg">↑ {change}</span>}
    </div>
    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
    <p className="text-gray-600 dark:text-gray-400">{label}</p>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
    {children}
  </div>
);

export default Analytics;