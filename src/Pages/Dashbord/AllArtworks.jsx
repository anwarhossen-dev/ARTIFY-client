import React, { useState, useEffect } from 'react';
import { FaSearch, FaEdit, FaTrashAlt, FaEye, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'; // If using real API

const AllArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Mock data - replace with real API call
  const mockArtworks = [
    { _id: '1', title: 'Ethereal Dreams', artist: 'Luna Voss', price: 3800, category: 'Abstract', image: '/api/placeholder/400/300', sales: 12, status: 'Approved' },
    { _id: '2', title: 'Neon Horizon', artist: 'Kai Pixel', price: 2950, category: 'Digital', image: '/api/placeholder/400/300', sales: 28, status: 'Pending' },
    { _id: '3', title: 'Quantum Bloom', artist: 'Nova Artis', price: 5200, category: 'Generative', image: '/api/placeholder/400/300', sales: 9, status: 'Approved' },
    { _id: '4', title: 'Cosmic Whisper', artist: 'Stellaris', price: 1750, category: 'Illustration', image: '/api/placeholder/400/300', sales: 41, status: 'Approved' },
    { _id: '5', title: 'Midnight Surge', artist: 'Echo Wave', price: 4400, category: 'NFT', image: '/api/placeholder/400/300', sales: 15, status: 'Rejected' },
    { _id: '6', title: 'Fractal Soul', artist: 'Prism King', price: 6100, category: 'Generative', image: '/api/placeholder/400/300', sales: 7, status: 'Approved' },
  ];

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setArtworks(mockArtworks);
      setLoading(false);
    }, 800);

    // Real API example:
    // axios.get('https://artify-server-six.vercel.app/addArtwork')
    //   .then(res => setArtworks(res.data))
    //   .finally(() => setLoading(false));
  }, []);

  const filteredArtworks = artworks.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || art.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this artwork?')) {
      setArtworks(artworks.filter(art => art._id !== id));
      // Real delete: axios.delete(`/addArtwork/${id}`)
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">All Artworks</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Manage and review all submitted artworks on Artify
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by title or artist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 appearance-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="Abstract">Abstract</option>
              <option value="Digital">Digital</option>
              <option value="NFT">NFT</option>
              <option value="Generative">Generative</option>
              <option value="Illustration">Illustration</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Artworks Grid / Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredArtworks.map((art) => (
          <div
            key={art._id}
            className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl 
                       overflow-hidden border border-white/20 dark:border-gray-700/50 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative group">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-medium
                               ${art.status === 'Approved' ? 'bg-emerald-500/80 text-white' : 
                                 art.status === 'Pending' ? 'bg-amber-500/80 text-white' : 
                                 'bg-red-500/80 text-white'}`}>
                {art.status}
              </span>
            </div>

            {/* Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{art.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">by {art.artist}</p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="text-3xl font-bold text-emerald-600">${art.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mt-1">{art.sales} sales</p>
                </div>
                <span className="px-4 py-2 bg-purple-100/50 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-400 font-medium">
                  {art.category}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <Link
                  to={`/artwork-details/${art._id}`}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  <FaEye /> View
                </Link>

                <div className="flex items-center gap-4">
                  <button className="p-3 bg-amber-100/70 dark:bg-amber-900/40 rounded-xl hover:scale-110 transition">
                    <FaEdit className="text-amber-600" size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(art._id)}
                    className="p-3 bg-red-100/70 dark:bg-red-900/40 rounded-xl hover:scale-110 transition"
                  >
                    <FaTrashAlt className="text-red-600" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredArtworks.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500 dark:text-gray-400">No artworks found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default AllArtworks;