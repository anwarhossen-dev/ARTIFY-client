import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaSearch, FaBoxOpen, FaDollarSign, FaShoppingCart, FaReceipt, FaEye, FaUndo, FaTruck } from "react-icons/fa";

const SalesOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch orders from backend
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update order status (Refund/Shipped)
  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:3000/orders/${id}/status`, {
        status,
      });
      fetchOrders(); // Refresh orders
    } catch (err) {
      console.error(err);
    }
  };

  // Filter & Search
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Summary
  const totalRevenue = orders.reduce(
    (sum, o) => (o.status === "Completed" || o.status === "Shipped" ? sum + (o.price || 0) : sum),
    0
  );
  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === "Completed" || o.status === "Shipped").length;
  const avgOrderValue = completedOrders > 0 ? Math.round(totalRevenue / completedOrders) : 0;

  if (loading) return <div className="flex items-center justify-center h-96"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div></div>;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Sales & Orders</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Track and manage all transactions on Artify</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 text-center">
          <FaDollarSign className="mx-auto text-5xl text-emerald-600 mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">${totalRevenue.toLocaleString()}</h3>
          <p className="text-gray-600 dark:text-gray-400">Total Revenue</p>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 text-center">
          <FaShoppingCart className="mx-auto text-5xl text-purple-600 mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{totalOrders}</h3>
          <p className="text-gray-600 dark:text-gray-400">Total Orders</p>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 text-center">
          <FaBoxOpen className="mx-auto text-5xl text-indigo-600 mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{completedOrders}</h3>
          <p className="text-gray-600 dark:text-gray-400">Completed</p>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 text-center">
          <FaReceipt className="mx-auto text-5xl text-amber-600 mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">${avgOrderValue.toLocaleString()}</h3>
          <p className="text-gray-600 dark:text-gray-400">Avg. Order Value</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative md:col-span-2">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by Order ID, Customer, or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
              <tr>
                <th className="px-8 py-6 text-left text-gray-800 dark:text-white">Order ID</th>
                <th className="px-8 py-6 text-left text-gray-800 dark:text-white">Customer</th>
                <th className="px-8 py-6 text-left text-gray-800 dark:text-white">Amount</th>
                <th className="px-8 py-6 text-left text-gray-800 dark:text-white">Date</th>
                <th className="px-8 py-6 text-left text-gray-800 dark:text-white">Status</th>
                <th className="px-8 py-6 text-center text-gray-800 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order._id} className="border-t border-gray-200/30 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-700/30 transition">
                  <td className="px-8 py-6 font-semibold text-purple-600 dark:text-purple-400">{order._id}</td>
                  <td className="px-8 py-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-bold text-emerald-600">${order.price?.toLocaleString()}</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-400">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium
                      ${order.status === "Completed" || order.status === "Shipped" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                      order.status === "Pending" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                      order.status === "Refunded" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                      "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center flex justify-center gap-2">
                    <button onClick={() => alert(JSON.stringify(order, null, 2))} className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition" title="View Details"><FaEye className="text-purple-600" /></button>
                    <button onClick={() => updateStatus(order._id, "Refunded")} className="p-2 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg transition" title="Refund"><FaUndo className="text-amber-600" /></button>
                    <button onClick={() => updateStatus(order._id, "Shipped")} className="p-2 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg transition" title="Track Shipment"><FaTruck className="text-indigo-600" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-20">
          <FaShoppingCart className="mx-auto text-8xl text-gray-300 dark:text-gray-700 mb-6" />
          <p className="text-2xl text-gray-500 dark:text-gray-400">No orders found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default SalesOrders;
