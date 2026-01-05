// import React, { useState, useEffect } from 'react';

// const ManageUsers = () => {
//   // Sample data - replace with API fetch in a real app
//   const initialUsers = [
//     { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
//     { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
//     { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
//     { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active' },
//     { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'Active' },
//   ];

//   const [users, setUsers] = useState(initialUsers);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState(initialUsers);

//   // Filter users based on search term
//   useEffect(() => {
//     const filtered = users.filter(
//       (user) =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   }, [searchTerm, users]);

//   // Placeholder functions for CRUD operations
//   const handleAddUser = () => {
//     alert('Add user functionality - open modal or navigate to create page');
//   };

//   const handleEditUser = (user) => {
//     alert(`Edit user: ${user.name}`);
//   };

//   const handleDeleteUser = (userId) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       setUsers(users.filter((u) => u.id !== userId));
//     }
//   };

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <div className="mb-8 flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
//         <button
//           onClick={handleAddUser}
//           className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           + Add New User
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search by name, email, or role..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Users Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Role
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
//                   No users found.
//                 </td>
//               </tr>
//             ) : (
//               filteredUsers.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-600">{user.email}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-3 py-1 text-xs font-medium rounded-full ${
//                         user.status === 'Active'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-red-100 text-red-800'
//                       }`}
//                     >
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button
//                       onClick={() => handleEditUser(user)}
//                       className="text-indigo-600 hover:text-indigo-900 mr-4"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteUser(user.id)}
//                       className="text-red-600 hover:text-red-900"
//                     >
//                       Delete
//                     </button>
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

// export default ManageUsers;

import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/users`)
      .then((res) => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter users based on search
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // Placeholder functions for CRUD operations
  const handleAddUser = () => alert("Add user - open modal or navigate to create page");
  const handleEditUser = (user) => alert(`Edit user: ${user.name}`);
  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/users/${userId}`);
        setUsers(users.filter((u) => u._id !== userId));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
        <button
          onClick={handleAddUser}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Add New User
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleEditUser(user)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteUser(user._id)} className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
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

export default ManageUsers;
