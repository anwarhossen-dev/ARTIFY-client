import React from "react";
import { Link } from "react-router-dom";
import errorimage from '../../assets/error.png';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const NotFound = () => {
  return (
      <>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4 py-16 bg-gradient-to-r from-gray-900 via-purple-900 to-black">
        
        {/* Container for spacing */}
        <div className="max-w-2xl mx-auto p-6 md:p-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">

          <img
            src={errorimage}
            alt="404 Illustration"
            className="w-72 md:w-80 mb-6 mx-auto animate-bounce"
          />

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">404</h1>

          <p className="text-lg md:text-xl mb-8">
            Oops! The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-600 
                       rounded-full text-white text-lg font-semibold shadow-lg 
                       hover:scale-105 transition-transform"
          >
            Go Back Home
          </Link>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
