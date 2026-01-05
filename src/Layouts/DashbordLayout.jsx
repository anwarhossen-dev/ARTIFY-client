
// // import React, { useState } from 'react';
// // import { Link, Outlet, useLocation } from 'react-router-dom';
// // import { GrOverview } from "react-icons/gr";
// // import { 
// //   FaHome, FaPalette, FaUsers, FaShoppingBag, FaChartBar, FaCog, 
// //   FaBell, FaMoon, FaSun, FaSignOutAlt, FaBars, FaTimes, FaPlus, FaImages,
// //   FaUser,
// //   FaTachometerAlt
// // } from 'react-icons/fa';
// // import { useContext } from 'react';
// // import { AuthContext } from '../Providers/AuthContext'; // Adjust path
// // import { AiOutlineUsergroupDelete } from 'react-icons/ai';

// // const DashboardLayout = () => {
// //   const { user, logout } = useContext(AuthContext);
// //   const [sidebarOpen, setSidebarOpen] = useState(true);
// //   const [darkMode, setDarkMode] = useState(false);
// //   const location = useLocation();

// //   // const menuItems = [
// //   //   { path: '/', icon: FaHome, label: 'Home' },
// //   //   { path: '/dashboard', icon: GrOverview, label: 'Overview' },
// //   //   { path: '/dashboard/artworks', icon: FaPalette, label: 'All Artworks' },
// //   //   { path: '/dashboard/add-artwork', icon: FaPlus, label: 'Add Artwork' },
// //   //   { path: '/dashboard/artists', icon: FaUsers, label: 'Artists' },
// //   //   { path: '/dashboard/sales', icon: FaShoppingBag, label: 'Sales & Orders' },
// //   //   { path: '/dashboard/analytics', icon: FaChartBar, label: 'Analytics' },
// //   //   { path: '/dashboard/profile', icon: FaUser, label: 'Profile' },
// //   //   { path: '/dashboard/settings', icon: FaCog, label: 'Settings' },
// //   // ];

// //   // ... imports
// // const menuItems = [
// //   { path: '/dashboard', icon: FaTachometerAlt, label: 'Overview', roles: ['admin', 'artist'] },
// //   { path: '/dashboard/artworks', icon: FaPalette, label: 'All Artworks', roles: ['admin'] },
// //   { path: '/dashboard/add-artwork', icon: FaPlus, label: 'Add Artwork', roles: ['admin', 'artist'] },
// //   { path: '/dashboard/artists', icon: FaUsers, label: 'Artists', roles: ['admin'] },
// //   { path: '/dashboard/sales', icon: FaShoppingBag, label: 'Sales', roles: ['admin', 'artist'] },
// //   { path: '/dashboard/analytics', icon: FaChartBar, label: 'Analytics', roles: ['admin'] },
// //   { path: '/dashboard/profile', icon: FaUser, label: 'Profile', roles: ['admin', 'artist', 'user'] },
// //   { path: '/dashboard/settings', icon: FaCog, label: 'Settings', roles: ['admin'] },
// // ];

// // // In render:
// // {menuItems.filter(item => item.roles.includes(userRole)).map(item => (
// //   <Link key={item.path} to={item.path}>...</Link>
// // ))}

// //   // Toggle dark mode on body
// //   React.useEffect(() => {
// //     if (darkMode) {
// //       document.documentElement.classList.add('dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //     }
// //   }, [darkMode]);

// //   return (
// //     <div className={`min-h-screen flex ${darkMode ? 'dark' : ''}`}>
// //       {/* Sidebar */}
// //       <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} duration-300 bg-gradient-to-b from-indigo-800 to-purple-900 text-white fixed inset-y-0 left-0 z-50 shadow-2xl`}>
// //         <div className="flex items-center justify-between p-5 border-b border-white/10">
// //           <h1 className={`font-bold text-2xl ${!sidebarOpen && 'hidden'}`}>Artify Admin</h1>
// //           <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:bg-white/10 p-2 rounded-lg">
// //             {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
// //           </button>
// //         </div>

// //         <nav className="mt-8">
// //           {menuItems.map((item) => (
// //             <Link
// //               key={item.path}
// //               to={item.path}
// //               className={`flex items-center px-6 py-4 hover:bg-white/10 transition ${location.pathname === item.path ? 'bg-white/20 border-l-4 border-pink-400' : ''}`}
// //             >
// //               <item.icon size={22} />
// //               <span className={`ml-4 ${!sidebarOpen && 'hidden'}`}>{item.label}</span>
// //             </Link>
// //           ))}
// //         </nav>

// //         <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
// //           <button onClick={logout} className={`flex items-center text-red-300 hover:text-red-100 ${!sidebarOpen && 'justify-center'}`}>
// //             <FaSignOutAlt size={22} />
// //             <span className={`ml-4 ${!sidebarOpen && 'hidden'}`}>Logout</span>
// //           </button>
// //         </div>
// //       </aside>

// //       {/* Main Content */}
// //       <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} duration-300 bg-gray-50 dark:bg-gray-900`}>
// //         {/* Top Bar */}
// //         <header className="bg-white dark:bg-gray-800 shadow-lg px-8 py-5 flex justify-between items-center sticky top-0 z-40 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
// //           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
// //             {menuItems.find(m => m.path === location.pathname)?.label || 'Dashboard'}
// //           </h2>

// //           <div className="flex items-center gap-6">
// //             <button className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600">
// //               <FaBell size={24} />
// //               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
// //             </button>

// //             <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300">
// //               {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
// //             </button>

// //             <div className="flex items-center gap-3">
// //               <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
// //                 {user?.name?.[0]?.toUpperCase() || 'A'}
// //               </div>
// //               <div className="text-right">
// //                 <p className="font-medium text-gray-800 dark:text-white">{user?.name || 'Admin'}</p>
// //                 <p className="text-xs text-gray-500">admin@artify.com</p>
// //               </div>
// //             </div>
// //           </div>
// //         </header>

// //         {/* Page Content */}
// //         <main className="p-8">
// //           <Outlet /> {/* This renders your dashboard pages like Overview, Artworks list, etc. */}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;

// // src/Layouts/DashboardLayout.jsx
// import React, { useState } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import { FaTachometerAlt, FaPalette, FaUsers, FaShoppingBag, FaChartBar, FaCog, FaBell, FaMoon, FaSun, FaSignOutAlt, FaBars, FaTimes, FaPlus, FaUser } from 'react-icons/fa';
// import useAuth from '../hooks/useAuth';

// const DashboardLayout = () => {
//   const { user, logOut, userRole } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     { path: '/dashboard', icon: FaTachometerAlt, label: 'Overview', roles: ['admin', 'artist','user'] },
//     { path: '/dashboard/artworks', icon: FaPalette, label: 'All Artworks', roles: ['admin'] },
//     { path: '/dashboard/add-artwork', icon: FaPlus, label: 'Add Artwork', roles: ['admin', 'artist'] },
//     { path: '/dashboard/artists', icon: FaUsers, label: 'Artists', roles: ['admin'] },
//     { path: '/dashboard/sales', icon: FaShoppingBag, label: 'Sales & Orders', roles: ['admin', 'artist'] },
//     { path: '/dashboard/analytics', icon: FaChartBar, label: 'Analytics', roles: ['admin'] },
//     { path: '/dashboard/profile', icon: FaUser, label: 'Profile', roles: ['admin', 'artist', 'user'] },
//     { path: '/dashboard/settings', icon: FaCog, label: 'Settings', roles: ['admin', 'user'] },
//   ];

//   const visibleItems = menuItems.filter(item => item.roles.includes(userRole || 'user'));

//   React.useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   return (
//     <div className={`min-h-screen flex ${darkMode ? 'dark' : ''}`}>
//       {/* Sidebar */}
//       <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-indigo-800 to-purple-900 text-white fixed h-full z-50 shadow-2xl transition-all`}>
//         <div className="flex items-center justify-between p-5 border-b border-white/10">
//           <h1 className={`font-bold text-2xl ${!sidebarOpen && 'hidden'}`}>Artify Admin</h1>
//           <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//             {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button>
//         </div>

//         <nav className="mt-8">
//           {visibleItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`flex items-center px-6 py-4 hover:bg-white/10 transition ${location.pathname === item.path ? 'bg-white/20 border-l-4 border-pink-400' : ''}`}
//             >
//               <item.icon size={22} />
//               <span className={`ml-4 ${!sidebarOpen && 'hidden'}`}>{item.label}</span>
//             </Link>
//           ))}
//         </nav>

//         <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
//           <button onClick={logOut} className={`flex items-center ${!sidebarOpen && 'justify-center'}`}>
//             <FaSignOutAlt size={22} />
//             <span className={`ml-4 ${!sidebarOpen && 'hidden'}`}>Logout</span>
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all bg-gray-50 dark:bg-gray-900`}>
//         <header className="bg-white dark:bg-gray-800 shadow-lg p-6 flex justify-between items-center sticky top-0 z-40">
//           <h2 className="text-2xl font-bold">{visibleItems.find(m => m.path === location.pathname)?.label || 'Dashboard'}</h2>
//           <div className="flex items-center gap-6">
//             <button><FaBell size={24} /></button>
//             <button onClick={() => setDarkMode(!darkMode)}>
//               {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
//             </button>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
//                 {user?.displayName?.[0] || 'A'}
//               </div>
//               <div>
//                 <p className="font-medium">{user?.displayName || 'User'}</p>
//                 <p className="text-xs text-gray-500">{userRole || 'user'}</p>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


// import React, { useState, useEffect } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   FaUser,
//   FaPalette,
//   FaHeart,
//   FaPlus,
//   FaUsers,
//   FaClipboardList,
//   FaStar,
//   FaShoppingBag,
//   FaChartBar,
//   FaCog,
//   FaBell,
//   FaMoon,
//   FaSun,
//   FaSignOutAlt,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import useAuth from "../hooks/useAuth";
// import useRole from "../hooks/useRole";

// const DEFAULT_AVATAR = "/default-avatar.png";

// const DashboardLayout = () => {
//   const { user, logOut } = useAuth();
//   const { role = "user" } = useRole();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation();

//   /* -------------------- DARK MODE -------------------- */
//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved === "true") setDarkMode(true);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//     localStorage.setItem("darkMode", darkMode.toString());
//   }, [darkMode]);

//   /* -------------------- LOGOUT -------------------- */
//   const handleLogout = async () => {
//     try {
//       await logOut();
//     } catch (err) {
//       console.error("Logout error:", err);
//     }
//   };

//   /* -------------------- IMAGE SECURITY (FINAL FIX) -------------------- */
//   const resolvePhotoURL = (photoURL) => {
//     if (!photoURL) return DEFAULT_AVATAR;

//     // ❌ BLOCK ALL BASE64 IMAGES
//     if (photoURL.startsWith("data:image")) {
//       return DEFAULT_AVATAR;
//     }

//     // ✅ ALLOW ONLY REAL URLS
//     if (
//       photoURL.startsWith("http://") ||
//       photoURL.startsWith("https://")
//     ) {
//       return photoURL;
//     }

//     return DEFAULT_AVATAR;
//   };

//   /* -------------------- MENU ITEMS -------------------- */
//   const menuItems = [
//     { path: "/dashboard/my-Profile", icon: FaUser, label: "My Profile", roles: ["user", "artist", "admin"] },

//     // User
//     { path: "/dashboard/my-Orders", icon: FaClipboardList, label: "My Orders", roles: ["user"] },
//     { path: "/dashboard/my-Reviews", icon: FaStar, label: "My Reviews", roles: ["user"] },
//     { path: "/dashboard/favorites", icon: FaHeart, label: "Favorites", roles: ["user"] },

//     // Artist
//     { path: "/dashboard/add-artwork", icon: FaPlus, label: "Add Artwork", roles: ["artist", "admin"] },
//     { path: "/dashboard/Artists", icon: FaPalette, label: "My Gallery", roles: ["artist", "admin"] },
//     { path: "/dashboard/sales", icon: FaShoppingBag, label: "Sales & Orders", roles: ["artist", "admin"] },

//     // Admin
//     { path: "/dashboard/Overview", icon: FaChartBar, label: "Overview", roles: ["admin"] },
//     { path: "/dashboard/manage-users", icon: FaUsers, label: "Manage Users", roles: ["admin"] },
//     { path: "/dashboard/manage-requests", icon: FaChartBar, label: "Manage Requests", roles: ["admin"] },
//     { path: "/dashboard/analytics", icon: FaChartBar, label: "Analytics", roles: ["admin"] },
//     { path: "/dashboard/settings", icon: FaCog, label: "Settings", roles: ["admin"] },
//   ];

//   const visibleItems = menuItems.filter(item =>
//     item.roles.includes(role)
//   );

//   const currentTitle =
//     visibleItems.find(i => i.path === location.pathname)?.label ||
//     "Dashboard";

//   return (
//     <div className={`min-h-screen flex ${darkMode ? "dark" : ""}`}>
//       {/* ================= SIDEBAR ================= */}
//       <aside
//         className={`${sidebarOpen ? "w-64" : "w-20"
//           } bg-gradient-to-b from-purple-700 to-indigo-900 text-white fixed inset-y-0 left-0 z-50 shadow-2xl transition-all duration-300`}
//       >
//         <div className="flex items-center justify-between p-6 border-b border-white/10">
//           <h1
//             className={`font-black text-2xl transition-all ${!sidebarOpen && "opacity-0 scale-0"
//               }`}
//           >
//             <span className="text-purple-300">A</span>RTIFY
//           </h1>

//           {/* <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 hover:bg-white/10 rounded-lg"
//           >
//             {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button> */}
//         </div>

//         <nav className="mt-8 px-4">
//           {visibleItems.map(item => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center ${sidebarOpen ? "px-2 justify-start" : "justify-center"
//                 } py-3 mb-2 rounded-lg transition-all ${isActive
//                   ? "bg-white/20 border-l-4 border-pink-400 font-bold"
//                   : "hover:bg-white/10"
//                 }`
//               }
//             >
//               {/* <item.icon size={22} /> */}
//               {
//                 item.icon && <item.icon className=" text-white" size={22} />
//               }
//               <span
//                 className={`ml-4 transition-all ${!sidebarOpen && "opacity-0 w-0 overflow-hidden"
//                   }`}
//               >
//                 {item.label}
//               </span>
//             </NavLink>
//           ))}
//         </nav>

//         <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
//           <button
//             onClick={handleLogout}
//             className={`flex items-center w-full text-red-300 hover:text-red-100 ${!sidebarOpen && "justify-center"
//               }`}
//           >
//             <FaSignOutAlt size={22} />
//             <span
//               className={`ml-4 transition-all ${!sidebarOpen && "opacity-0 w-0"
//                 }`}
//             >
//               Logout
//             </span>
//           </button>
//         </div>
//       </aside>

//       {/* ================= MAIN ================= */}
//       <div
//         className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"
//           } transition-all bg-gray-50 dark:bg-gray-900 min-h-screen`}
//       >
//         <header className="bg-white dark:bg-gray-800 shadow px-8 py-6 flex justify-between items-center sticky top-0 z-40">
//           <div className="flex justify-center items-center gap-2">
//              <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 hover:bg-white/10 rounded-lg"
//           >
//             {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button>
//           <h2 className="text-3xl font-bold">{currentTitle}
//           </h2>
//           </div>

//           <div className="flex items-center gap-8">
//             <button className="relative">
//               <FaBell size={26} />
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
//                 5
//               </span>
//             </button>

//             <button onClick={() => setDarkMode(!darkMode)}>
//               {darkMode ? (
//                 <FaSun size={26} className="text-yellow-400" />
//               ) : (
//                 <FaMoon size={26} className="text-indigo-600" />
//               )}
//             </button>

//             <div className="flex items-center gap-4">
//               <img
//                 src={resolvePhotoURL(user?.photoURL)}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full ring-4 ring-purple-500 object-cover"
//                 onError={(e) => (e.target.src = DEFAULT_AVATAR)}
//               />
//               <div className="text-right">
//                 <p className="font-semibold">
//                   {user?.displayName || "User"}
//                 </p>
//                 <p className="text-sm text-gray-500 capitalize">
//                   {role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="p-8 lg:p-12">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FaUser,
  FaPalette,
  FaHeart,
  FaPlus,
  FaUsers,
  FaClipboardList,
  FaStar,
  FaShoppingBag,
  FaChartBar,
  FaCog,
  FaBell,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DEFAULT_AVATAR = "/default-avatar.png";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const { role, isLoading } = useRole();
  const normalizedRole = role?.toLowerCase() || "user";

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  /* -------------------- DARK MODE -------------------- */
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  /* -------------------- LOGOUT -------------------- */
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  /* -------------------- IMAGE SECURITY -------------------- */
  const resolvePhotoURL = (photoURL) => {
    if (!photoURL) return DEFAULT_AVATAR;
    if (photoURL.startsWith("data:image")) return DEFAULT_AVATAR;
    if (photoURL.startsWith("http")) return photoURL;
    return DEFAULT_AVATAR;
  };

  /* -------------------- MENU ITEMS -------------------- */
  const menuItems = [
    { path: "/dashboard/my-profile", icon: FaUser, label: "My Profile", roles: ["user", "artist", "admin"] },

    // User
    { path: "/dashboard/my-orders", icon: FaClipboardList, label: "My Orders", roles: ["user", "admin"] },
    { path: "/dashboard/my-reviews", icon: FaStar, label: "My Reviews", roles: ["user", "admin"] },
    { path: "/dashboard/favorites", icon: FaHeart, label: "Favorites", roles: ["user", "admin"] },

    // Artist
    { path: "/dashboard/add-artwork", icon: FaPlus, label: "Add Artwork", roles: ["artist", "admin"] },
    { path: "/dashboard/artists", icon: FaPalette, label: "My Artists", roles: ["artist", "admin"] },
    { path: "/dashboard/sales", icon: FaShoppingBag, label: "Sales & Orders", roles: ["artist", "admin"] },

    // Admin
    { path: "/dashboard/overview", icon: FaChartBar, label: "Overview", roles: ["admin"] },
    { path: "/dashboard/manage-users", icon: FaUsers, label: "Manage Users", roles: ["admin"] },
    { path: "/dashboard/manage-requests", icon: FaChartBar, label: "Manage Requests", roles: ["admin"] },
    { path: "/dashboard/analytics", icon: FaChartBar, label: "Analytics", roles: ["admin"] },
    { path: "/dashboard/settings", icon: FaCog, label: "Settings", roles: ["admin"] },
  ];

  const visibleItems = menuItems.filter(item =>
    item.roles.includes(normalizedRole)
  );

  const currentTitle =
    visibleItems.find(i => i.path === location.pathname)?.label || "Dashboard";

  /* -------------------- LOADING -------------------- */
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex ${darkMode ? "dark" : ""}`}>
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-20"}
        bg-gradient-to-b from-purple-700 to-indigo-900
        text-white fixed inset-y-0 left-0 z-50
        shadow-2xl transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h1 className={`font-black text-2xl transition-all ${!sidebarOpen && "opacity-0 scale-0"}`}>
            <span className="text-purple-300">A</span>RTIFY
          </h1>
        </div>

        {/* Menu (SCROLL SAFE) */}
        <nav className="mt-8 px-4 pb-28 overflow-y-auto h-[calc(100vh-160px)]">
          {visibleItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center py-3 mb-2 rounded-lg transition-all
                ${sidebarOpen ? "px-3" : "justify-center"}
                ${isActive
                  ? "bg-white/20 border-l-4 border-pink-400 font-bold"
                  : "hover:bg-white/10"}`
              }
            >
              <item.icon size={22} />
              <span className={`ml-4 transition-all ${!sidebarOpen && "hidden"}`}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full p-6 border-t border-white/10 bg-gradient-to-t from-indigo-900">
          <button
            onClick={handleLogout}
            className={`flex items-center w-full text-red-300 hover:text-red-100
            ${!sidebarOpen && "justify-center"}`}
          >
            <FaSignOutAlt size={22} />
            <span className={`ml-4 ${!sidebarOpen && "hidden"}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all bg-gray-50 dark:bg-gray-900`}>
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow px-8 py-6 flex justify-between items-center sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
            <h2 className="text-2xl font-bold">{currentTitle}</h2>
          </div>

          <div className="flex items-center gap-6">
            <FaBell size={22} />

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>

            <div className="flex items-center gap-3">
              <img
                src={resolvePhotoURL(user?.photoURL)}
                onError={(e) => (e.target.src = DEFAULT_AVATAR)}
                className="w-11 h-11 rounded-full ring-2 ring-purple-500 object-cover"
                alt="profile"
              />
              <div>
                <p className="font-semibold">{user?.displayName || "User"}</p>
                <p className="text-sm capitalize text-gray-400">{normalizedRole}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
