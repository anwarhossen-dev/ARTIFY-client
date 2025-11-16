import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* About */}
          <div>
            <div className='font-extrabold text-3xl ' ><span className='text-[#9B5DE0] hover:underline'>A</span><span className='text-pink-600 hover:underline'>r</span><span className='text-green-600 hover:underline'>t</span><span className='text-yellow-500 hover:underline'>i</span><span className='text-blue-500 hover:underline'>f</span><span className='text-cyan-500 hover:underline'>y</span></div>
            <p className="text-gray-400 text-sm">
              Discover, showcase, and collect artworks from talented artists
              around the world. Join the Artify community today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-pink-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-pink-500 transition">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/addArtwork" className="hover:text-pink-500 transition">
                  Add Artwork
                </Link>
              </li>
              <li>
                <Link to="/myGallery" className="hover:text-pink-500 transition">
                  My Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              Email: <a href="mailto:info@artify.com" className="hover:text-pink-500">info@artify.com</a>
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Phone: <a href="tel:+880123456789" className="hover:text-pink-500">+880 1234 567 89</a>
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-pink-500 transition">Facebook</a>
              <a href="#" className="hover:text-pink-500 transition">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition">Instagram</a>
              <a href="#" className="hover:text-pink-500 transition">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Artify. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="#" className="hover:text-pink-500 transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-pink-500 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
