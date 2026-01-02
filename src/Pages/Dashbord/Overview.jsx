


// import React from 'react';
// import {
//   FaDollarSign, FaImage, FaUsers, FaShoppingBag,
//   FaArrowUp, FaArrowDown, FaEye, FaHeart, FaPlus
// } from 'react-icons/fa';
// import {
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
//   ResponsiveContainer
// } from 'recharts';

// const Overview = () => {

//       const stats = [
//     { title: 'Total Revenue', value: '$84,920', change: '+23.5%', trend: 'up', icon: FaDollarSign, color: 'from-emerald-500 to-teal-600' },
//     { title: 'Total Artworks', value: '3,421', change: '+189 this week', trend: 'up', icon: FaImage, color: 'from-purple-500 to-indigo-600' },
//     { title: 'Active Artists', value: '512', change: '+28 new', trend: 'up', icon: FaUsers, color: 'from-pink-500 to-rose-600' },
//     { title: 'Total Sales', value: '1,847', change: '+12% this month', trend: 'up', icon: FaShoppingBag, color: 'from-amber-500 to-orange-600' },
//   ];

//   const chartData = [
//     { month: 'Jan', sales: 4200 },
//     { month: 'Feb', sales: 5800 },
//     { month: 'Mar', sales: 6800 },
//     { month: 'Apr', sales: 7500 },
//     { month: 'May', sales: 8200 },
//     { month: 'Jun', sales: 9800 },
//     { month: 'Jul', sales: 11000 },
//     { month: 'Aug', sales: 10500 },
//     { month: 'Sep', sales: 12800 },
//     { month: 'Oct', sales: 14200 },
//     { month: 'Nov', sales: 16800 },
//     { month: 'Dec', sales: 18900 },
//   ];

//   const recentArtworks = [
//     { title: 'Ethereal Dreams', artist: 'Luna Voss', price: '$3,800', views: 1240, likes: 289 },
//     { title: 'Neon Horizon', artist: 'Kai Pixel', price: '$2,950', views: 1890, likes: 412 },
//     { title: 'Quantum Bloom', artist: 'Nova Artis', price: '$5,200', views: 980, likes: 167 },
//     { title: 'Cosmic Whisper', artist: 'Stellaris', price: '$1,750', views: 1560, likes: 334 },
//   ];

//   const topArtists = [
//     { rank: 1, name: 'Luna Voss', sales: '$42,300', artworks: 68 },
//     { rank: 2, name: 'Kai Pixel', sales: '$38,700', artworks: 54 },
//     { rank: 3, name: 'Nova Artis', sales: '$31,200', artworks: 41 },
//   ];
//     return (
//         <div className="space-y-10">
//       {/* Greeting & Title */}
//       <div className="text-left">
//         <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//           Welcome back, {user?.name?.split(' ')[0] || 'Admin'}!
//         </h1>
//         <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
//           Here's your Artify platform overview as of January 2026
//         </p>
//       </div>

//       {/* Stats Cards - Glassmorphism */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className="relative overflow-hidden bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
//                        p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 
//                        transition-all duration-500 border border-white/20 dark:border-gray-700/50"
//           >
//             <div className="flex items-start justify-between">
//               <div>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
//                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
//                   {stat.value}
//                 </h3>
//                 <div className="flex items-center gap-2 mt-4">
//                   <span className={`text-sm font-semibold flex items-center gap-1 
//                                    ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
//                     {stat.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
//                     {stat.change}
//                   </span>
//                 </div>
//               </div>
//               <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
//                 <stat.icon size={32} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Chart + Quick Actions */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Sales Chart */}
//         <div className="lg:col-span-2 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
//                         p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//             Revenue Growth (2025)
//           </h3>
//           <div className="h-96">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={chartData}>
//                 <defs>
//                   <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8}/>
//                     <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.1}/>
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" dark:stroke="#334155" />
//                 <XAxis dataKey="month" stroke="#64748b" />
//                 <YAxis stroke="#64748b" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: 'rgba(15, 23, 42, 0.9)',
//                     border: 'none',
//                     borderRadius: '12px',
//                     padding: '12px'
//                   }}
//                   labelStyle={{ color: '#e2e8f0' }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="sales"
//                   stroke="#a78bfa"
//                   strokeWidth={3}
//                   fillOpacity={1}
//                   fill="url(#colorSales)"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
//                         p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//             Quick Actions
//           </h3>
//           <div className="space-y-4">
//             <button className="w-full flex items-center justify-center gap-3 py-4 px-6 
//                                bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
//                                rounded-2xl hover:shadow-lg hover:scale-105 transition font-semibold">
//               <FaPlus size={20} />
//               Add New Artwork
//             </button>
//             <button className="w-full py-4 px-6 bg-gray-100 dark:bg-gray-700/70 text-gray-800 dark:text-white 
//                                rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition font-medium">
//               Review Submissions
//             </button>
//             <button className="w-full py-4 px-6 bg-gray-100 dark:bg-gray-700/70 text-gray-800 dark:text-white 
//                                rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition font-medium">
//               Export Report
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Recent Sales & Top Artists */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Recent Artworks */}
//         <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
//                         p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//             Recently Sold Artworks
//           </h3>
//           <div className="space-y-5">
//             {recentArtworks.map((art, i) => (
//               <div key={i} className="flex items-center justify-between p-4 
//                                       bg-white/50 dark:bg-gray-700/30 rounded-2xl">
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white">{art.title}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">by {art.artist}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-bold text-xl text-emerald-600">{art.price}</p>
//                   <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
//                     <span className="flex items-center gap-1"><FaEye /> {art.views}</span>
//                     <span className="flex items-center gap-1"><FaHeart className="text-pink-500" /> {art.likes}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Top Artists */}
//         <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
//                         p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//             Top Performing Artists
//           </h3>
//           <div className="space-y-5">
//             {topArtists.map((artist) => (
//               <div key={artist.rank} className="flex items-center justify-between p-5 
//                                               bg-gradient-to-r from-purple-100/50 to-indigo-100/50 
//                                               dark:from-purple-900/30 dark:to-indigo-900/30 
//                                               rounded-2xl">
//                 <div className="flex items-center gap-5">
//                   <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-700 
//                                   rounded-full flex items-center justify-center text-white 
//                                   font-bold text-xl shadow-md">
//                     #{artist.rank}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-900 dark:text-white">{artist.name}</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">{artist.artworks} artworks</p>
//                   </div>
//                 </div>
//                 <p className="font-bold text-2xl text-purple-600 dark:text-purple-400">
//                   {artist.sales}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Overview;

import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContext'; // Adjust path if needed
import {
  FaDollarSign, FaImage, FaUsers, FaShoppingBag,
  FaArrowUp, FaArrowDown, FaEye, FaHeart, FaPlus
} from 'react-icons/fa';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from 'recharts';

const Overview = () => {
  const { user } = useContext(AuthContext); // ← Add this line

  const stats = [
    { title: 'Total Revenue', value: '$84,920', change: '+23.5%', trend: 'up', icon: FaDollarSign, color: 'from-emerald-500 to-teal-600' },
    { title: 'Total Artworks', value: '3,421', change: '+189 this week', trend: 'up', icon: FaImage, color: 'from-purple-500 to-indigo-600' },
    { title: 'Active Artists', value: '512', change: '+28 new', trend: 'up', icon: FaUsers, color: 'from-pink-500 to-rose-600' },
    { title: 'Total Sales', value: '1,847', change: '+12% this month', trend: 'up', icon: FaShoppingBag, color: 'from-amber-500 to-orange-600' },
  ];

  // ... rest of your data (chartData, recentArtworks, topArtists)

  return (
    <div className="space-y-10">
      {/* Greeting & Title */}
      <div className="text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.name?.split(' ')[0] || 'Admin'}!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Here's your Artify platform overview as of January 2026
        </p>
      </div>

      {/* Rest of your beautiful dashboard code stays exactly the same */}
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative overflow-hidden bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
                       p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-500 border border-white/20 dark:border-gray-700/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {stat.value}
                </h3>
                <div className="flex items-center gap-2 mt-4">
                  <span className={`text-sm font-semibold flex items-center gap-1 
                                   ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                <stat.icon size={32} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Quick Actions + Recent Sales + Top Artists */}
      {/* ... all your existing beautiful code below ... */}

    </div>
  );
};

export default Overview;