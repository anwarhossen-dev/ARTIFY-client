import React, { useState } from 'react';
import { FaUpload, FaTimes, FaPalette, FaDollarSign, FaTag, FaAlignLeft, FaUsers } from 'react-icons/fa';

const AddArtworks = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      console.log({
        title,
        artist,
        price,
        category,
        description,
        image: imageFile,
      });
      alert('Artwork added successfully!');
      setLoading(false);
      // Reset form
      setTitle('');
      setArtist('');
      setPrice('');
      setCategory('');
      setDescription('');
      setImagePreview(null);
      setImageFile(null);
    }, 1500);

    // Real API example:
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('artist', artist);
    // formData.append('price', price);
    // ...
    // formData.append('image', imageFile);
    // await axios.post('/addArtwork', formData);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Add New Artwork</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
          Upload and publish a new masterpiece to the Artify gallery
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
                      p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload */}
          <div className="space-y-4">
            <label className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-3">
              <FaUpload /> Artwork Image <span className="text-red-500">*</span>
            </label>
            <div className="relative border-4 border-dashed border-purple-300/50 dark:border-purple-700/50 
                            rounded-3xl p-10 text-center hover:border-purple-500 transition">
              {imagePreview ? (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="max-h-96 mx-auto rounded-2xl shadow-xl" />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setImageFile(null);
                    }}
                    className="absolute top-4 right-4 p-3 bg-red-500/80 text-white rounded-full hover:bg-red-600 transition"
                  >
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <div>
                  <FaUpload size={48} className="mx-auto text-purple-500 mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Drag & drop or click to upload
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl hover:shadow-lg transition font-medium"
                  >
                    Choose Image
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Title & Artist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-3 mb-3">
                <FaPalette /> Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g., Ethereal Dreams"
                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl 
                           focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition"
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-3 mb-3">
                <FaUsers /> Artist Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                required
                placeholder="e.g., Luna Voss"
                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl 
                           focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition"
              />
            </div>
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-3 mb-3">
                <FaDollarSign /> Price (USD) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                min="0"
                step="0.01"
                placeholder="e.g., 3800"
                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl 
                           focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition"
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-3 mb-3">
                <FaTag /> Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl 
                           focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition appearance-none cursor-pointer"
              >
                <option value="">Select category</option>
                <option value="Abstract">Abstract</option>
                <option value="Digital">Digital Art</option>
                <option value="NFT">NFT</option>
                <option value="Generative">Generative</option>
                <option value="Illustration">Illustration</option>
                <option value="Photography">Photography</option>
                <option value="3D">3D Render</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-3 mb-3">
              <FaAlignLeft /> Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="6"
              placeholder="Describe the artwork, inspiration, technique used..."
              className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl 
                         focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={loading || !imageFile}
              className={`px-12 py-5 text-xl font-bold text-white rounded-3xl shadow-xl transition-all
                         ${loading || !imageFile
                           ? 'bg-gray-400 cursor-not-allowed'
                           : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-2xl hover:scale-105'}`}
            >
              {loading ? 'Publishing...' : 'Publish Artwork'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtworks;