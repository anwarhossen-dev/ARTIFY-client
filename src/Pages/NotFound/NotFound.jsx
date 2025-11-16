import React from "react";
import { Link } from "react-router-dom";
import errorimage from '../../assets/error.png';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-black flex flex-col justify-center items-center text-center text-white">
      <img
        src={errorimage}
        alt="404 Illustration"
        className="w-80 mb-6 animate-bounce"
      />
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 rounded-full text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
