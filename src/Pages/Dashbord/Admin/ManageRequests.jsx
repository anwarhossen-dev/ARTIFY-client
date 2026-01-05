// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Users } from 'lucide-react';

// const API_BASE_URL = 'baseURL'; // Your backend port

// const ManageRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('All');

//   // Fetch all requests
//   const fetchRequests = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${API_BASE_URL}/requests`);
//       setRequests(response.data);
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching requests:', err);
//       setError('Failed to load requests. Please check if the server is running.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   // Client-side filtering
//   const filteredRequests = requests.filter((req) => {
//     const matchesSearch =
//       req.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       req.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       req.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       req.requestType?.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesStatus =
//       statusFilter === 'All' || req.requestStatus === statusFilter.toLowerCase();

//     return matchesSearch && matchesStatus;
//   });

//   // Approve Request
//   const handleApprove = async (id, userEmail, requestType) => {
//     if (!window.confirm('Approve this request? The user will be upgraded accordingly.')) return;

//     try {
//       await axios.patch(`${API_BASE_URL}/requests/update/${id}`, {
//         requestStatus: 'approved',
//         userEmail,
//         requestType,
//       });

//       // Optimistic update
//       setRequests((prev) =>
//         prev.map((req) =>
//           req._id === id ? { ...req, requestStatus: 'approved' } : req
//         )
//       );
//     } catch (err) {
//       alert('Failed to approve request.');
//       console.error(err);
//     }
//   };

//   // Reject Request
//   const handleReject = async (id) => {
//     if (!window.confirm('Reject this request?')) return;

//     try {
//       await axios.patch(`${API_BASE_URL}/requests/update/${id}`, {
//         requestStatus: 'rejected',
//       });

//       setRequests((prev) =>
//         prev.map((req) =>
//           req._id === id ? { ...req, requestStatus: 'rejected' } : req
//         )
//       );
//     } catch (err) {
//       alert('Failed to reject request.');
//       console.error(err);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'approved':
//         return 'bg-green-100 text-green-800';
//       case 'rejected':
//         return 'bg-red-100 text-red-800';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   if (loading) {
//     return (
//       <div className="p-8 text-center">
//         <p className="text-gray-600">Loading requests...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-8 text-center">
//         <p className="text-red-600 mb-4">{error}</p>
//         <button
//           onClick={fetchRequests}
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Requests</h1>

//       {/* Search & Filter */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4">
//         <input
//           type="text"
//           placeholder="Search by title, name, email, or type..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="All">All Statuses</option>
//           <option value="Pending">Pending</option>
//           <option value="Approved">Approved</option>
//           <option value="Rejected">Rejected</option>
//         </select>
//       </div>

//       {/* Requests Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Request ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 User
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Type
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Submitted
//               </th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredRequests.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
//                   No requests found.
//                 </td>
//               </tr>
//             ) : (
//               filteredRequests.map((request) => (
//                 <tr key={request._id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm text-gray-900">
//                     #{request._id.toString().slice(-6)}
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                     {request.title || 'Role Upgrade Request'}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">
//                     {request.userName || 'N/A'}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">
//                     {request.userEmail}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
//                       {request.requestType === 'artist' ? 'Become Artist' : 'Become Admin'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
//                         request.requestStatus
//                       )}`}
//                     >
//                       {request.requestStatus.charAt(0).toUpperCase() + request.requestStatus.slice(1)}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600">
//                     {formatDate(request.requestTime)}
//                   </td>
//                   <td className="px-6 py-4 text-right text-sm font-medium">
//                     {request.requestStatus === 'pending' && (
//                       <>
//                         <button
//                           onClick={() =>
//                             handleApprove(
//                               request._id,
//                               request.userEmail,
//                               request.requestType
//                             )
//                           }
//                           className="text-green-600 hover:text-green-900 mr-4 font-medium"
//                         >
//                           Approve
//                         </button>
//                         <button
//                           onClick={() => handleReject(request._id)}
//                           className="text-red-600 hover:text-red-900 font-medium"
//                         >
//                           Reject
//                         </button>
//                       </>
//                     )}
//                     {request.requestStatus !== 'pending' && (
//                       <span className="text-gray-500">Processed</span>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageRequests;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://artify-server-six.vercel.app";

const ManageRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  /* ================= FETCH REQUESTS ================= */
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/requests`);

      // 🔒 Always force array
      const data = Array.isArray(res.data) ? res.data : [];
      setRequests(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load requests. Make sure backend is running.");
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  /* ================= FILTER ================= */
  const filteredRequests = requests.filter((req) => {
    const text =
      `${req?.title} ${req?.userName} ${req?.userEmail} ${req?.requestType}`.toLowerCase();

    const matchesSearch = text.includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ||
      req?.requestStatus === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  /* ================= ACTIONS ================= */
  const handleApprove = async (id, email, type) => {
    if (!window.confirm("Approve this request?")) return;

    try {
      await axios.patch(`${API_BASE_URL}/requests/update/${id}`, {
        requestStatus: "approved",
        userEmail: email,
        requestType: type,
      });

      setRequests((prev) =>
        prev.map((r) =>
          r._id === id ? { ...r, requestStatus: "approved" } : r
        )
      );
    } catch (err) {
      alert("Approval failed");
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Reject this request?")) return;

    try {
      await axios.patch(`${API_BASE_URL}/requests/update/${id}`, {
        requestStatus: "rejected",
      });

      setRequests((prev) =>
        prev.map((r) =>
          r._id === id ? { ...r, requestStatus: "rejected" } : r
        )
      );
    } catch (err) {
      alert("Reject failed");
      console.error(err);
    }
  };

  /* ================= HELPERS ================= */
  const statusColor = (status) => {
    if (status === "approved") return "bg-green-100 text-green-700";
    if (status === "rejected") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  /* ================= UI STATES ================= */
  if (loading) {
    return <p className="p-8 text-center">Loading requests...</p>;
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={fetchRequests}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  /* ================= RENDER ================= */
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Requests</h1>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">
        <input
          className="flex-1 border px-4 py-2 rounded"
          placeholder="Search by name, email, type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRequests.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-10 text-center">
                  No requests found
                </td>
              </tr>
            ) : (
              filteredRequests.map((req) => (
                <tr key={req._id} className="border-t">
                  <td className="px-4 py-2">#{req._id.slice(-6)}</td>
                  <td className="px-4 py-2">{req.userName}</td>
                  <td className="px-4 py-2">{req.userEmail}</td>
                  <td className="px-4 py-2 capitalize">{req.requestType}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${statusColor(
                        req.requestStatus
                      )}`}
                    >
                      {req.requestStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {formatDate(req.requestTime)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {req.requestStatus === "pending" ? (
                      <>
                        <button
                          onClick={() =>
                            handleApprove(
                              req._id,
                              req.userEmail,
                              req.requestType
                            )
                          }
                          className="text-green-600 mr-4"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(req._id)}
                          className="text-red-600"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-400">Processed</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRequests;
