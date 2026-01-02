
// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthContext';
// import Banner from '../../Components/Banner';
// import Highlights from '../../Components/Highlights';
// import ArtWorkCard from '../../Components/ArtworkCard';
// import { useLoaderData } from 'react-router';
// import { Typewriter } from 'react-simple-typewriter';
// import { Fade } from 'react-awesome-reveal';
// import { FaUserAlt } from 'react-icons/fa';
// import axios from 'axios';
// import LoadingSpinner from '../../Components/LoadingSpinner';
// import ArtistCard from '../../Components/ArtistCard';

// const Home = () => {
//   const { loading } = useContext(AuthContext);
//   const latest = useLoaderData();
//   const [artists, setArtists] = useState([]);

//   // Load Top Artists
//   useEffect(() => {
//     axios.get('/artist.json')
//       .then((res) => setArtists(res.data))
//       .catch((err) => console.error("Failed to load artists:", err));
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center mt-20">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Banner */}
//       <Banner />

//       {/* Latest Artworks Section */}
//       <div className='text-center text-bold'>
//         <Fade direction="left" triggerOnce>
//           <h1 className="text-2xl md:text-4xl font-bold text-center mx-auto pb-10 flex justify-center gap-2">
//             <FaUserAlt className="text-[#d319a4] mt-1" />
//             <span className="text-[#059ca1]">
//               <Typewriter
//                 words={['Featured Artworks Section:']}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={100}
//                 deleteSpeed={70}
//                 delaySpeed={1500}
//               />
//             </span>
//           </h1>
//         </Fade>
//       </div>
//       {/* <div className='cols-2'>
//         <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {latest?.map((art) => (
//           <ArtWorkCard key={art._id} promise={art} />
//         ))}
//       </div>
//         <div>


//         </div>
//       </div> */}

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//         {/* LEFT COLUMN – Artworks */}
//         <div className="lg:col-span-2">
//           <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {latest?.map((art) => (
//               <ArtWorkCard key={art._id} promise={art} />
//             ))}
//           </div>
//         </div>
//         {/* RIGHT COLUMN */}
//         <div className="space-y-6 sticky top-20">

//           {/* SERVICES */}
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">🛠 Services</h3>
//             <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
//               <p>✔ Custom Artwork</p>
//               <p>✔ NFT Minting</p>
//               <p>✔ Art Licensing</p>
//               <p>✔ Brand Illustration</p>
//             </div>
//           </div>

//           {/* HIGHLIGHTS */}
//           <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-2xl text-white">
//             <h3 className="text-xl font-semibold mb-2">🔥 Highlights</h3>
//             <p className="text-sm">
//               Featured artworks updated weekly by top-rated artists worldwide.
//             </p>
//           </div>

//           {/* TESTIMONIALS */}
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">💬 Testimonials</h3>
//             <div className="space-y-4 text-sm">
//               <div>
//                 <p className="italic">“Amazing platform for artists!”</p>
//                 <span className="text-xs text-gray-500">— Alex, Buyer</span>
//               </div>
//               <div>
//                 <p className="italic">“Sold my first art in 2 days.”</p>
//                 <span className="text-xs text-gray-500">— Maria, Artist</span>
//               </div>
//             </div>
//           </div>

//           {/* BLOGS */}
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">📰 Latest Blogs</h3>
//             <ul className="space-y-3 text-sm text-indigo-600">
//               <li>• How to sell digital art</li>
//               <li>• NFT trends in 2025</li>
//               <li>• Growing as an artist online</li>
//             </ul>
//           </div>

//           {/* FAQ */}
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">❓ FAQ</h3>
//             <details className="mb-2">
//               <summary className="cursor-pointer font-medium">
//                 How do I buy artwork?
//               </summary>
//               <p className="text-sm text-gray-500 mt-1">
//                 Browse artwork and complete secure checkout.
//               </p>
//             </details>

//             <details>
//               <summary className="cursor-pointer font-medium">
//                 How can I sell my art?
//               </summary>
//               <p className="text-sm text-gray-500 mt-1">
//                 Register as an artist and upload your work.
//               </p>
//             </details>
//           </div>

//           {/* NEWSLETTER */}
//           <div className="bg-indigo-600 p-6 rounded-2xl text-white">
//             <h3 className="text-lg font-semibold mb-2">📩 Newsletter</h3>
//             <p className="text-sm mb-4">Get updates & offers</p>
//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-2 rounded text-black mb-3"
//             />
//             <button className="w-full bg-black py-2 rounded">
//               Subscribe
//             </button>
//           </div>

//           {/* CTA */}
//           <div className="bg-black text-white p-6 rounded-2xl text-center">
//             <h3 className="text-lg font-semibold mb-2">🚀 Join as Artist</h3>
//             <p className="text-sm mb-4">
//               Start earning from your creativity today
//             </p>
//             <button className="bg-white text-black px-6 py-2 rounded">
//               Get Started
//             </button>
//           </div>

//         </div>
//       </div>


//       {/* Top Artists Section */ }
//   <div className="w-11/12 mx-auto py-10 my-14 bg-[#f3f4fc] rounded-lg dark:text-black">
//     <Fade direction="left" triggerOnce>
//       <h1 className="text-2xl md:text-4xl font-bold text-center mx-auto pb-10 flex justify-center gap-2">
//         <FaUserAlt className="text-[#d319a4] mt-1" />
//         <span className="text-[#059ca1]">
//           <Typewriter
//             words={['Top Artists of the Week']}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={100}
//             deleteSpeed={70}
//             delaySpeed={1500}
//           />
//         </span>
//       </h1>
//     </Fade>

//     {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 md:px-10">
//           {artists?.map((art) => (
//             <ArtistCard key={art.id} art={art} />
//           ))}
//         </div> */}


//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 md:px-10">
//       {artists?.map((art) => (
//         <ArtistCard key={art.id} art={art} />
//       ))}
//     </div>
//   </div>

//   {/* Community Highlights */ }
//   <Highlights />
//     </div >
//   );
// };

// export default Home;

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import Banner from '../../Components/Banner';
import ArtWorkCard from '../../Components/ArtworkCard';
import { useLoaderData } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { FaUserAlt, FaPalette, FaRocket, FaChartLine, FaTags, FaTools, FaStar, FaQuoteLeft, FaBlog, FaQuestionCircle, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';
import ArtistCard from '../../Components/ArtistCard';
import Highlights from '../../Components/Highlights';

const Home = () => {
  const { loading } = useContext(AuthContext);
  const latest = useLoaderData();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('/artist.json')
      .then((res) => setArtists(res.data))
      .catch((err) => console.error("Failed to load artists:", err));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-white-950">
      {/* Banner */}
      <Banner />

      {/* Main Layout: Artworks + Enhanced Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-12">

        {/* LEFT COLUMN – Featured Artworks */}
        <div className="lg:col-span-2">
          <div className="text-center mb-12">
            <Fade direction="left" triggerOnce>
              <h1 className="text-3xl md:text-5xl font-bold flex justify-center items-center gap-3">
                <FaUserAlt className="text-pink-500" />
                <span className="text-teal-600 dark:text-teal-400">
                  <Typewriter words={['Featured Artworks']} loop cursor cursorStyle="|" typeSpeed={100} />
                </span>
              </h1>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latest?.map((art) => (
              <ArtWorkCard key={art._id} promise={art} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – Enhanced Sidebar (sticky) */}
        <div className="space-y-8 sticky top-24 h-fit">

          {/* Categories */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
              <FaTags /> Categories
            </h3>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {['Abstract', 'Digital', 'NFT', 'Photography', 'Illustration', '3D Art', 'Generative', 'Traditional'].map((cat) => (
                <li key={cat} className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 px-4 py-2 rounded-full text-center hover:shadow-md transition cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-teal-600 dark:text-teal-400">
              <FaTools /> Services
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">✔ Custom Commissioned Artwork</li>
              <li className="flex items-center gap-3">✔ NFT Minting & Launchpad</li>
              <li className="flex items-center gap-3">✔ Art Licensing & Prints</li>
              <li className="flex items-center gap-3">✔ Brand Illustration & Design</li>
            </ul>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <FaChartLine /> Platform Stats
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold">10K+</p>
                <p className="text-sm">Artworks</p>
              </div>
              <div>
                <p className="text-4xl font-bold">5K+</p>
                <p className="text-sm">Artists</p>
              </div>
              <div>
                <p className="text-4xl font-bold">$2M+</p>
                <p className="text-sm">Volume Traded</p>
              </div>
              <div>
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🔥 Weekly Highlights</h3>
            <p>Top-rated artworks & emerging artists updated every week.</p>
          </div>

          {/* Testimonials */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-pink-600 dark:text-pink-400">
              <FaQuoteLeft /> Testimonials
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaStar className="text-yellow-500 text-2xl" />
                <div>
                  <p className="italic text-gray-700 dark:text-gray-300">“Best platform for discovering hidden gems!”</p>
                  <p className="text-sm text-gray-500 mt-1">— Alex, Collector</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaStar className="text-yellow-500 text-2xl" />
                <div>
                  <p className="italic text-gray-700 dark:text-gray-300">“Sold my first NFT in days!”</p>
                  <p className="text-sm text-gray-500 mt-1">— Maria, Artist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Blogs */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
              <FaBlog /> Latest Blogs
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between hover:text-indigo-600 cursor-pointer">
                <span>• NFT Trends 2025</span> <FaArrowRight />
              </li>
              <li className="flex items-center justify-between hover:text-indigo-600 cursor-pointer">
                <span>• How to Mint Your Art</span> <FaArrowRight />
              </li>
              <li className="flex items-center justify-between hover:text-indigo-600 cursor-pointer">
                <span>• Building an Artist Brand</span> <FaArrowRight />
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-teal-600 dark:text-teal-400">
              <FaQuestionCircle /> FAQ
            </h3>
            <details className="mb-4 group">
              <summary className="cursor-pointer font-semibold flex justify-between">How do I buy an artwork? <span className="group-open:rotate-180">▼</span></summary>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Browse, add to cart, and checkout securely with crypto or fiat.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold flex justify-between">How to sell my art? <span className="group-open:rotate-180">▼</span></summary>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Register as artist, upload, mint, and list instantly.</p>
            </details>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
              <FaEnvelope /> Newsletter
            </h3>
            <p className="mb-4">Exclusive drops, tips & offers</p>
            <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-lg text-black mb-4" />
            <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition">
              Subscribe Now
            </button>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-8 rounded-2xl text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🚀 Become a Creator</h3>
            <p className="mb-6">Start selling your art & NFTs today</p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition">
              Get Started Free
            </button>
          </div>

        </div>
      </div>

      {/* Top Artists Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-100 dark:bg-gray-900 rounded-3xl my-20">
        <Fade direction="left" triggerOnce>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 flex justify-center items-center gap-3">
            <FaUserAlt className="text-pink-500" />
            <span className="text-teal-600 dark:text-teal-400">
              <Typewriter words={['Top Artists of the Week']} loop cursor cursorStyle="|" typeSpeed={100} />
            </span>
          </h1>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists?.map((art) => (
            <ArtistCard key={art.id} art={art} />
          ))}
        </div>
      </section>

      {/* Community Highlights */}
      <Highlights />

        {/* New: Features Section (after banner, full-width) */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white mb-25">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up" triggerOnce>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <FaRocket className="text-yellow-300" />
              <Typewriter words={['Why Choose Our Platform?']} loop={1} typeSpeed={80} />
            </h2>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:scale-105 transition-transform">
              <FaPalette className="text-5xl mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-3">Curated Digital Art</h3>
              <p>Handpicked artworks & NFTs from global artists, updated daily.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:scale-105 transition-transform">
              <FaTools className="text-5xl mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-3">Easy Minting & Selling</h3>
              <p>Seamless NFT creation, royalties, and secure blockchain integration.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:scale-105 transition-transform">
              <FaChartLine className="text-5xl mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-3">Growing Community</h3>
              <p>Join thousands of collectors and creators in a vibrant ecosystem.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthContext';
// import Banner from '../../Components/Banner';
// import Highlights from '../../Components/Highlights';
// import ArtWorkCard from '../../Components/ArtworkCard';
// import ArtistCard from '../../Components/ArtistCard';
// import LoadingSpinner from '../../Components/LoadingSpinner';
// import { Typewriter } from 'react-simple-typewriter';
// import { Fade } from 'react-awesome-reveal';
// import { FaUserAlt } from 'react-icons/fa';
// import axios from 'axios';
// import { useLoaderData } from 'react-router';

// const Home = () => {
//   const { loading } = useContext(AuthContext);
//   const latest = useLoaderData(); // Latest artworks loader
//   const [artists, setArtists] = useState([]);

//   // Load Top Artists
//   useEffect(() => {
//     axios.get('/artist.json')
//       .then((res) => setArtists(res.data))
//       .catch((err) => console.error("Failed to load artists:", err));
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      
//       {/* Banner */}
//       <Banner />

//       {/* Latest Artworks Section */}
//       <div className='text-center'>
//         <Fade direction="left" triggerOnce>
//           <h1 className="text-2xl md:text-4xl font-bold text-center mx-auto py-10 flex justify-center gap-2">
//             <FaUserAlt className="text-[#d319a4] mt-1" />
//             <span className="text-[#059ca1]">
//               <Typewriter
//                 words={['Featured Artworks']}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={100}
//                 deleteSpeed={70}
//                 delaySpeed={1500}
//               />
//             </span>
//           </h1>
//         </Fade>
//       </div>

//       <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT COLUMN – Artworks */}
//         <div className="lg:col-span-2">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
//             {latest?.map((art) => (
//               <ArtWorkCard key={art._id} promise={art} />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT COLUMN – Sidebar */}
//         <div className="space-y-6 sticky top-20">
//           {/* Services */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">🛠 Services</h3>
//             <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
//               <p>✔ Custom Artwork</p>
//               <p>✔ NFT Minting</p>
//               <p>✔ Art Licensing</p>
//               <p>✔ Brand Illustration</p>
//             </div>
//           </div>

//           {/* Highlights */}
//           <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-2xl text-white">
//             <h3 className="text-xl font-semibold mb-2">🔥 Highlights</h3>
//             <p className="text-sm">
//               Featured artworks updated weekly by top-rated artists worldwide.
//             </p>
//           </div>

//           {/* Testimonials */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">💬 Testimonials</h3>
//             <div className="space-y-4 text-sm">
//               <div>
//                 <p className="italic">“Amazing platform for artists!”</p>
//                 <span className="text-xs text-gray-500 dark:text-gray-400">— Alex, Buyer</span>
//               </div>
//               <div>
//                 <p className="italic">“Sold my first art in 2 days.”</p>
//                 <span className="text-xs text-gray-500 dark:text-gray-400">— Maria, Artist</span>
//               </div>
//             </div>
//           </div>

//           {/* Blogs */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">📰 Latest Blogs</h3>
//             <ul className="space-y-3 text-sm text-indigo-600">
//               <li>• How to sell digital art</li>
//               <li>• NFT trends in 2025</li>
//               <li>• Growing as an artist online</li>
//             </ul>
//           </div>

//           {/* FAQ */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//             <h3 className="text-xl font-semibold mb-4">❓ FAQ</h3>
//             <details className="mb-2">
//               <summary className="cursor-pointer font-medium">
//                 How do I buy artwork?
//               </summary>
//               <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
//                 Browse artwork and complete secure checkout.
//               </p>
//             </details>
//             <details>
//               <summary className="cursor-pointer font-medium">
//                 How can I sell my art?
//               </summary>
//               <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
//                 Register as an artist and upload your work.
//               </p>
//             </details>
//           </div>

//           {/* Newsletter */}
//           <div className="bg-indigo-600 p-6 rounded-2xl text-white">
//             <h3 className="text-lg font-semibold mb-2">📩 Newsletter</h3>
//             <p className="text-sm mb-4">Get updates & offers</p>
//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-2 rounded text-black mb-3"
//             />
//             <button className="w-full bg-black py-2 rounded">
//               Subscribe
//             </button>
//           </div>

//           {/* CTA */}
//           <div className="bg-black text-white p-6 rounded-2xl text-center">
//             <h3 className="text-lg font-semibold mb-2">🚀 Join as Artist</h3>
//             <p className="text-sm mb-4">Start earning from your creativity today</p>
//             <button className="bg-white text-black px-6 py-2 rounded">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Top Artists Section */}
//       <div className="w-11/12 mx-auto py-10 my-14 bg-gray-200 dark:bg-gray-800 rounded-lg">
//         <Fade direction="left" triggerOnce>
//           <h1 className="text-2xl md:text-4xl font-bold text-center pb-10 flex justify-center gap-2">
//             <FaUserAlt className="text-[#d319a4] mt-1" />
//             <span className="text-[#059ca1]">
//               <Typewriter
//                 words={['Top Artists of the Week']}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={100}
//                 deleteSpeed={70}
//                 delaySpeed={1500}
//               />
//             </span>
//           </h1>
//         </Fade>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
//           {artists?.map((art) => (
//             <ArtistCard key={art.id} art={art} />
//           ))}
//         </div>
//       </div>

//       {/* Community Highlights */}
//       <Highlights />
//     </div>
//   );
// };

// export default Home;
