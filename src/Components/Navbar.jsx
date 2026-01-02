// import React, { use, useEffect, useState } from 'react';
// import MyLink from './MyLink';
// import { Link } from 'react-router';
// import { AuthContext } from '../Providers/AuthContext';
// //import { AuthContext } from '../Provider/AuthContext';

// const Navbar = () => {
//   const { user, logOut } = use(AuthContext)

//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

//   useEffect(() => {
//     const html = document.querySelector('html')
//     html.setAttribute('data-theme', theme)
//     localStorage.setItem("theme", theme)
//   }, [theme])

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light")
//   }

//   const handleLogOut = () => {
//     logOut()
//       .then()
//       .catch()
//   }
//   return (
//     // <div className=' text-white  z-[9999]'>
//     //   <div className="w-11/12 mx-auto bg-gray-900 flex justify-between items-center py-2 px-2 rounded-xl mb-10">
//     //     <div className="flex items-center">
//     //       <div className="dropdown">
//     //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pt-1">
//     //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//     //         </div>
//     //         <ul
//     //           tabIndex="-1"
//     //           className="menu menu-sm dropdown-content bg-[#B6AE9F] text-[#062941] font-bold rounded-box z-1 mt-3 w-52 p-2 ">
//     //           <li>
//     //             <MyLink className="hover:bg-[#a19788] hover:text-white rounded-md px-2 py-2" to="/">Home</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="hover:bg-[#a19788] hover:text-white rounded-md px-2 py-2" to="/explore-artworks">Explore Artworks</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="hover:bg-[#a19788] hover:text-white rounded-md px-2 py-2" to="/add-artwork">Add Artwork</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="hover:bg-[#a19788] hover:text-white rounded-md px-2 py-2" to="/my-gallery">My Gallery</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="hover:bg-[#a19788] hover:text-white rounded-md px-2 py-2" to="/my-favorites">My Favorites</MyLink>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //       <div className='font-extrabold text-3xl ' ><span className='text-[#9B5DE0] hover:underline'>A</span><span className='text-pink-600 hover:underline'>r</span><span className='text-green-600 hover:underline'>t</span><span className='text-yellow-500 hover:underline'>i</span><span className='text-blue-500 hover:underline'>f</span><span className='text-cyan-500 hover:underline'>y</span></div>
//     //     </div>
//     //     <div className='flex items-center gap-5'>
//     //       <div className=" hidden lg:flex">
//     //         <ul className="flex gap-4 px-1 text-sm">
//     //           <li>
//     //             <MyLink className="px-3 py-2 rounded-md hover:bg-gray-300 hover:text-[#062941] font-medium" to="/">Home</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="px-3 py-2 rounded-md hover:bg-gray-300 hover:text-[#062941] font-medium" to="/explore-artworks">Explore Artworks</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="px-3 py-2 rounded-md hover:bg-gray-300 hover:text-[#062941] font-medium" to="/add-artwork">Add Artwork</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="px-3 py-2 rounded-md hover:bg-gray-300 hover:text-[#062941] font-medium" to="/my-gallery">My Gallery</MyLink>
//     //           </li>

//     //           <li>
//     //             <MyLink className="px-3 py-2 rounded-md hover:bg-gray-300 hover:text-[#062941] font-medium" to="/my-favorites">My Favorites</MyLink>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //       <div className="space-x-3 flex items-center">
//     //         {
//     //           user?.photoURL ? (

//     //             <div className="dropdown dropdown-hover dropdown-end">
//     //               <div tabIndex={0} role="" className="">
//     //                 <img className='w-10 h-10 rounded-full' src={user.photoURL} alt={user?.displayName} />
//     //               </div>

//     //               <ul tabIndex={-1} className="dropdown-content   bg-[#a09d97] text-[#062941] rounded-box z-50 w-40 p-2 space-y-2 shadow">
//     //                 <li className='space-x-2'><input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultValue={localStorage.getItem('theme') === "dark"} className='toggle' /><span className='text-xs'>Theme Toggle</span></li>
//     //                 <li><h3 className='hover:bg-[#B6AE9F] p-2 rounded-xl text-sm flex items-center gap-3'><img className='w-7 h-7 rounded-full' src={user.photoURL} alt="" />{user.displayName}</h3></li>

//     //                 <li><button onClick={handleLogOut} className='btn btn-sm btn-secondary w-full rounded-xl font-bold '>Log Out</button></li>
//     //               </ul>
//     //             </div>
//     //           )
//     //             :
//     //             (<div className='space-x-3'>
//     //               <Link to="/auth/login" className='btn btn-secondary rounded-xl font-bold '>Log In</Link>
//     //               <Link to="/auth/register" className='btn btn-secondary rounded-xl font-bold '>Register</Link>
//     //             </div>)
//     //         }
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className='bg-gray-900 text-white  z-[9999]'>
//       <div className="w-11/12 mx-auto flex justify-between items-center py-2">
//         <div className="flex items-center">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pt-1">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//             </div>
//             <ul
//               tabIndex="-1"
//               className="menu menu-sm dropdown-content bg-[#B6AE9F] text-[#062941] font-bold rounded-box z-1 mt-3 w-52 p-2 ">
//               <li><MyLink to="/">Home</MyLink></li>
//               {/* {
//     user && (
//         <div> */}
//               <li><MyLink to="/explore-artworks">Explore Artworks</MyLink></li>
//               <li><MyLink to="/add-artwork">Add Artwork</MyLink></li>
//               <li><MyLink to="/my-gallery">My
//                 Gallery</MyLink></li>
//               <li><MyLink to="/my-favorites">My Favorites</MyLink></li>
//               {/* </div>
//     )
//    } */}
//             </ul>
//           </div>
//           <div className='font-extrabold text-3xl ' ><span className='text-[#9B5DE0] hover:underline'>A</span><span className='text-pink-600 hover:underline'>r</span><span className='text-green-600 hover:underline'>t</span><span className='text-yellow-500 hover:underline'>i</span><span className='text-blue-500 hover:underline'>f</span><span className='text-cyan-500 hover:underline'>y</span></div>
//         </div>
//         <div className='flex items-center gap-5'>
//           <div className=" hidden lg:flex">
//             <ul className="flex gap-4 px-1 text-sm">
//               <li><MyLink to="/">Home</MyLink></li>
//               {/* {
//     user && (
//         <div className='flex items-center gap-3'> */}
//               <li><MyLink to="/explore-artworks">Explore Artworks</MyLink></li>
//               <li><MyLink to="/add-artwork">Add Artwork</MyLink></li>
//               <li><MyLink to="/my-gallery">My Gallery</MyLink></li>
//               <li><MyLink to="/my-favorites">My Favorites</MyLink></li>
//               {/* </div>
//     )
//    } */}
//             </ul>
//           </div>
//           <div className="space-x-3 flex items-center">
//             {
//               user?.photoURL ? (

//                 <div className="dropdown dropdown-hover dropdown-end">
//                   <div tabIndex={0} role="" className="">
//                     <img className='w-10 h-10 rounded-full' src={user.photoURL} alt={user?.displayName} />
//                   </div>

//                   <ul tabIndex={-1} className="dropdown-content   bg-[#a09d97] text-[#062941] rounded-box z-50 w-40 p-2 space-y-2 shadow">
//                     <li className='space-x-2'><input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultValue={localStorage.getItem('theme') === "dark"} className='toggle' /><span className='text-xs'>Theme Toggle</span></li>
//                     <li><h3 className='hover:bg-[#B6AE9F] p-2 rounded-xl text-sm flex items-center gap-3'><img className='w-7 h-7 rounded-full' src={user.photoURL} alt="" />{user.displayName}</h3></li>

//                     <li><button onClick={handleLogOut} className='btn btn-sm btn-secondary w-full rounded-xl font-bold '>Log Out</button></li>
//                   </ul>
//                 </div>
//               )
//                 :
//                 (<div className='space-x-3'>
//                   <Link to="/auth/login" className='btn btn-secondary rounded-xl font-bold '>Log In</Link>
//                   <Link to="/auth/register" className='btn btn-secondary rounded-xl font-bold '>Register</Link>
//                 </div>)
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import MyLink from "./MyLink";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const handleLogOut = () => {
    logOut().catch((err) => console.error(err));
  };

  return (
    <nav className="bg-gray-900 text-white z-50 sticky top-0 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center gap-4 font-extrabold text-3xl">
          <span className="text-[#9B5DE0] hover:underline">A</span>
          <span className="text-pink-600 hover:underline">r</span>
          <span className="text-green-600 hover:underline">t</span>
          <span className="text-yellow-500 hover:underline">i</span>
          <span className="text-blue-500 hover:underline">f</span>
          <span className="text-cyan-500 hover:underline">y</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-4 text-sm">
          <MyLink to="/">Home</MyLink>
          <MyLink to="/explore-artworks">Explore Artworks</MyLink>
          {user && <MyLink to="/add-artwork">Add Artwork</MyLink>}
          {user && <MyLink to="/my-gallery">My Gallery</MyLink>}
          {user && <MyLink to="/my-favorites">My Favorites</MyLink>}
        </div>

        {/* User/Auth */}
        <div className="flex items-center gap-3">
          {user?.photoURL ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0}>
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
              <ul className="dropdown-content bg-[#a09d97] text-[#062941] rounded-box w-40 p-2 space-y-2 shadow-lg">
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={theme === "dark"}
                    onChange={(e) => handleTheme(e.target.checked)}
                  />
                  <span className="text-xs">Dark Mode</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-[#B6AE9F]">
                  <img className="w-7 h-7 rounded-full" src={user.photoURL} alt="" />
                  {user.displayName}
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-secondary w-full rounded-xl font-bold"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/auth/login" className="btn btn-secondary rounded-xl font-bold">
                Log In
              </Link>
              <Link to="/auth/register" className="btn btn-secondary rounded-xl font-bold">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden dropdown">
          <div tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul className="dropdown-content menu-compact bg-[#B6AE9F] text-[#062941] rounded-box mt-2 p-2 shadow-lg">
            <li><MyLink to="/">Home</MyLink></li>
            <li><MyLink to="/explore-artworks">Explore Artworks</MyLink></li>
            {user && <li><MyLink to="/add-artwork">Add Artwork</MyLink></li>}
            {user && <li><MyLink to="/my-gallery">My Gallery</MyLink></li>}
            {user && <li><MyLink to="/my-favorites">My Favorites</MyLink></li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthContext';
// import { FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Apply theme
//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const handleTheme = (checked) => setTheme(checked ? 'dark' : 'light');

//   const handleLogOut = () => {
//     logOut().catch(() => {});
//   };

//   const links = [
//     { name: 'Home', to: '/' },
//     { name: 'Explore Artworks', to: '/explore-artworks' },
//     { name: 'Add Artwork', to: '/add-artwork' },
//     { name: 'My Gallery', to: '/my-gallery' },
//     { name: 'My Favorites', to: '/my-favorites' },
//   ];

//   return (
//     <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="flex items-center gap-4">
//           <Link to="/" className="font-extrabold text-2xl text-teal-400 hover:underline">Artify</Link>

//           {/* Mobile menu toggle */}
//           <div className="lg:hidden">
//             <button onClick={() => setMobileOpen(!mobileOpen)}>
//               {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Desktop menu */}
//         <div className="hidden lg:flex items-center gap-6">
//           {links.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className="hover:text-teal-300 transition px-3 py-2 rounded-md"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Right side */}
//         <div className="flex items-center gap-4">
//           {/* Theme toggle */}
//           <label className="swap swap-rotate cursor-pointer">
//             <input type="checkbox" checked={theme === 'dark'} onChange={(e) => handleTheme(e.target.checked)} />
//             <span className="swap-on text-xl">🌙</span>
//             <span className="swap-off text-xl">☀️</span>
//           </label>

//           {/* Auth menu */}
//           {user?.photoURL ? (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="cursor-pointer">
//                 <img className="w-10 h-10 rounded-full" src={user.photoURL} alt={user.displayName} />
//               </label>
//               <ul tabIndex={0} className="dropdown-content bg-gray-700 text-white rounded-md w-48 mt-2 p-2 shadow space-y-2">
//                 <li className="flex items-center gap-2 px-2 py-1"><FaUserAlt /> {user.displayName}</li>
//                 <li>
//                   <Link to="/dashboard" className="block w-full text-center py-1 hover:bg-gray-600 rounded-md">Dashboard</Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogOut} className="w-full py-1 bg-red-500 hover:bg-red-600 rounded-md text-white font-medium">Log Out</button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <div className="flex gap-2">
//               <Link to="/auth/login" className="px-3 py-1 bg-teal-500 rounded-md hover:bg-teal-600 transition">Log In</Link>
//               <Link to="/auth/register" className="px-3 py-1 bg-indigo-500 rounded-md hover:bg-indigo-600 transition">Register</Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-gray-800 px-4 py-4 space-y-2">
//           {links.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className="block py-2 px-3 rounded hover:bg-gray-700"
//               onClick={() => setMobileOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           {user?.photoURL && (
//             <Link to="/dashboard" className="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
