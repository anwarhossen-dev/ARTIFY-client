import React, { useState, useContext } from 'react';
//import { AuthContext } from '../../../Providers/AuthContext';
import { 
  FaGlobe, FaEnvelope, FaDollarSign, FaBell, FaPalette, 
  FaShieldAlt, FaTrashAlt, FaDownload, FaSave, FaToggleOn, FaToggleOff 
} from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
//import { AuthContext } from '../../../Providers/AuthContext';

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false); // You can sync this with your global dark mode
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    newArtwork: true,
    newOrder: true,
    artistApproval: true,
  });

  const [general, setGeneral] = useState({
    siteName: 'Artify',
    adminEmail: 'admin@artify.com',
    currency: 'USD',
    timezone: 'UTC-8 (Pacific Time)',
  });

  const handleToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
    // Real save: axios.patch('/settings', { general, notifications })
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
          Configure your Artify platform preferences and security
        </p>
      </div>

      {/* General Settings */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
        <div className="flex items-center gap-4 mb-8">
          <FaGlobe className="text-3xl text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">General Settings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Site Name
            </label>
            <input
              type="text"
              value={general.siteName}
              onChange={(e) => setGeneral({ ...general, siteName: e.target.value })}
              className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Admin Email
            </label>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-gray-500" />
              <input
                type="email"
                value={general.adminEmail}
                onChange={(e) => setGeneral({ ...general, adminEmail: e.target.value })}
                className="flex-1 px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Default Currency
            </label>
            <div className="flex items-center gap-3">
              <FaDollarSign className="text-xl text-emerald-600" />
              <select
                value={general.currency}
                onChange={(e) => setGeneral({ ...general, currency: e.target.value })}
                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 cursor-pointer"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>ETH</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Timezone
            </label>
            <input
              type="text"
              value={general.timezone}
              readOnly
              className="w-full px-6 py-4 bg-gray-100/50 dark:bg-gray-700/30 rounded-2xl text-gray-600 dark:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
        <div className="flex items-center gap-4 mb-8">
          <FaBell className="text-3xl text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notification Preferences</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates via email</p>
            </div>
            <button
              onClick={() => handleToggle('email')}
              className="text-3xl"
            >
              {notifications.email ? <FaToggleOn className="text-emerald-600" /> : <FaToggleOff className="text-gray-400" />}
            </button>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">New Artwork Submissions</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Alert when artists upload new work</p>
            </div>
            <button onClick={() => handleToggle('newArtwork')}>
              {notifications.newArtwork ? <FaToggleOn className="text-emerald-600" /> : <FaToggleOff className="text-gray-400" />}
            </button>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">New Orders</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Notify on every sale</p>
            </div>
            <button onClick={() => handleToggle('newOrder')}>
              {notifications.newOrder ? <FaToggleOn className="text-emerald-600" /> : <FaToggleOff className="text-gray-400" />}
            </button>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Artist Approval Requests</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">When new artists register</p>
            </div>
            <button onClick={() => handleToggle('artistApproval')}>
              {notifications.artistApproval ? <FaToggleOn className="text-emerald-600" /> : <FaToggleOff className="text-gray-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
        <div className="flex items-center gap-4 mb-8">
          <FaPalette className="text-3xl text-pink-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Appearance</h2>
        </div>

        <div className="flex items-center justify-between py-6">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Toggle dark theme across dashboard</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-3xl"
          >
            {darkMode ? <FaToggleOn className="text-emerald-600" /> : <FaToggleOff className="text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Security & Danger Zone */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Security */}
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
          <div className="flex items-center gap-4 mb-8">
            <FaShieldAlt className="text-3xl text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full py-4 px-6 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition font-medium">
              Enable Two-Factor Authentication
            </button>
            <button className="w-full py-4 px-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition font-medium">
              View Active Sessions
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50/70 dark:bg-red-900/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-red-200/50 dark:border-red-800/50">
          <div className="flex items-center gap-4 mb-8">
            <FaTrashAlt className="text-3xl text-red-600" />
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">Danger Zone</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full py-4 px-6 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition font-medium flex items-center justify-center gap-3">
              <FaTrashAlt /> Clear Application Cache
            </button>
            <button className="w-full py-4 px-6 bg-orange-600 text-white rounded-2xl hover:bg-orange-700 transition font-medium flex items-center justify-center gap-3">
              <FaDownload /> Export All Data
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-center pt-8">
        <button
          onClick={handleSave}
          className="px-12 py-5 text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition flex items-center gap-4 mx-auto"
        >
          <FaSave /> Save All Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;