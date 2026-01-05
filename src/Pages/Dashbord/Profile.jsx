import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContext'; // Adjust path
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaCamera, FaLock } from 'react-icons/fa';

const Profile = () => {
  const { user } = useContext(AuthContext); // Get current user from context

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || '/api/placeholder/200/200');

  const [formData, setFormData] = useState({
    name: user?.name || 'Admin User',
    email: user?.email || 'admin@artify.com',
    phone: user?.phone || '+1 (555) 123-4567',
    location: user?.location || 'San Francisco, CA',
    bio: user?.bio || 'Passionate curator and admin of the Artify digital art marketplace. Dedicated to empowering artists worldwide.',
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setLoading(true);
    // Simulate save
    setTimeout(() => {
      setLoading(false);
      setIsEditing(false);
      alert('Profile updated successfully!');
    }, 1500);

    // Real save: axios.patch('/user/profile', formData)
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Profile</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
          Manage your personal information and account settings
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg 
                      p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
              <img
                src={avatarPreview}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {isEditing && (
              <label className="absolute bottom-4 right-4 p-4 bg-purple-600 text-white rounded-full cursor-pointer hover:bg-purple-700 hover:scale-110 transition shadow-lg">
                <FaCamera size={20} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-3xl font-bold bg-transparent border-b-2 border-purple-500 focus:outline-none mb-4 w-full text-center md:text-left"
                />
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows="4"
                  className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl resize-none focus:outline-none focus:ring-4 focus:ring-purple-500/30 mt-6"
                />
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{formData.name}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-2xl">{formData.bio}</p>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-purple-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-medium text-gray-900 dark:text-white bg-transparent border-b border-gray-400 focus:border-purple-500 focus:outline-none"
                    />
                  ) : (
                    <p className="font-medium text-gray-900 dark:text-white">{formData.email}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-medium text-gray-900 dark:text-white bg-transparent border-b border-gray-400 focus:border-purple-500 focus:outline-none"
                    />
                  ) : (
                    <p className="font-medium text-gray-900 dark:text-white">{formData.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-pink-600" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="font-medium text-gray-900 dark:text-white bg-transparent border-b border-gray-400 focus:border-purple-500 focus:outline-none"
                    />
                  ) : (
                    <p className="font-medium text-gray-900 dark:text-white">{formData.location}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaUser className="text-2xl text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-bold text-emerald-600">Administrator</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex justify-center md:justify-start gap-4">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className={`px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold hover:shadow-xl transition ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition flex items-center gap-3"
                >
                  <FaEdit /> Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
        <div className="flex items-center gap-4 mb-8">
          <FaLock className="text-3xl text-red-600" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Change Password</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
          <input
            type="password"
            placeholder="Current Password"
            className="px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/30"
          />
          <input
            type="password"
            placeholder="New Password"
            className="px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/30"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/30"
          />
        </div>
        <button className="mt-8 px-10 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 hover:shadow-xl transition">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Profile;