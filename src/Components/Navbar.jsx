// import React, { use, useEffect } from 'react';
// import { Link, NavLink } from 'react-router';
// import { AuthContext } from '../Providers/AuthContext';
// import { useState } from 'react';

// const Navbar = () => {
//      const { user, signOutUser} = use(AuthContext);
//      const [Theme, setTheme] = useState(localStorage.getItem('theme') || "light")

//      useEffect(() => {
//     const html = document.querySelector('html')
//      html.setAttribute("data-theme", Theme)
//      localStorage.setItem("theme", Theme)
//   }, [Theme])


//     const handleTheme = (checked) => {
//     setTheme(checked ? "dark": "light")
//   }


//        const handleSignOut = () => {
//         signOutUser()
//             .then()
//             .catch()
//     }
//     const Links  = <>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/explore">Explore</NavLink></li>
//         {
//             user && <>
//                 <li><NavLink to="/addArtwork">AddArtwork</NavLink></li>
//                 <li><NavLink to="/myGallery">My Gallery</NavLink></li>
//                 <li><NavLink to="/myFavorites">MyFavorites</NavLink></li>
//                 <li><NavLink to="/artworkDetails">ArtworkDetails</NavLink></li>
//             </>
//         }

//     </>



//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//        {Links}
//       </ul>
//     </div>
//     <Link className="btn btn-ghost text-xl">ARTIFY</Link>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {Links}
//     </ul>
//   </div>
//    <div className="navbar-end">
//                 {
//                     user ?
//                         <a onClick={handleSignOut} className="btn btn-primary">Sign Out</a> :
//                         <Link to="/register">Login</Link>
//                 }
//             </div>
// </div>
//     );
// };

// export default Navbar;
import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out"))
      .catch((err) => console.log(err));
  };

  const Links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold text-pink-500" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/explore" className={({ isActive }) => (isActive ? "font-bold text-pink-500" : "")}>
          Explore
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addArtwork" className={({ isActive }) => (isActive ? "font-bold text-pink-500" : "")}>
              Add Artwork
            </NavLink>
          </li>
          <li>
            <NavLink to="/myGallery" className={({ isActive }) => (isActive ? "font-bold text-pink-500" : "")}>
              My Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/myFavorites" className={({ isActive }) => (isActive ? "font-bold text-pink-500" : "")}>
              My Favorites
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 py-2 max-w-7xl mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-3">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {Links}
            {user && (
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn w-full text-white bg-gradient-to-r from-pink-500 to-red-600 hover:scale-105 transition-transform rounded-full"
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>

        <Link to="/" className="text-xl font-bold btn btn-ghost">
          ARTIFY
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{Links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        <ThemeToggle />
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn text-white bg-gradient-to-r from-pink-500 to-red-600 hover:scale-105 transition-transform rounded-full"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn text-white bg-gradient-to-r from-pink-500 to-red-600 hover:scale-105 transition-transform rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
