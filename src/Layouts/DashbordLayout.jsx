
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  FaHome, FaPalette, FaUsers, FaShoppingBag, FaChartBar, FaCog, 
  FaBell, FaMoon, FaSun, FaSignOutAlt, FaBars, FaTimes, FaPlus, FaImages
} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContext'; // Adjust path

const DashboardLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: FaHome, label: 'Overview' },
    { path: '/dashboard/artworks', icon: FaPalette, label: 'All Artworks' },
    { path: '/dashboard/add-artwork', icon: FaPlus, label: 'Add Artwork' },
    { path: '/dashboard/artists', icon: FaUsers, label: 'Artists' },
    { path: '/dashboard/sales', icon: FaShoppingBag, label: 'Sales & Orders' },
    { path: '/dashboard/analytics', icon: FaChartBar, label: 'Analytics' },
    { path: '/dashboard/settings', icon: FaCog, label: 'Settings' },
  ];

  // Toggle dark mode on body
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} duration-300 bg-gradient-to-b from-indigo-800 to-purple-900 text-white fixed inset-y-0 left-0 z-50 shadow-2xl`}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h1 className={`font-bold text-2xl ${!sidebarOpen && 'hidden'}`}>Artify Admin</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:bg-white/10 p-2 rounded-lg">
            {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-4 hover:bg-white/10 transition ${location.pathname === item.path ? 'bg-white/20 border-l-4 border-pink-400' : ''}`}
            >
              <item.icon size={22} />
              <span className={`ml-4 ${!sidebarOpen && 'hidden'}`}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
          <button onClick={logout} className={`flex items-center text-red-300 hover:text-red-100 ${!sidebarOpen && 'justify-center'}`}>
            <FaSignOutAlt size={22} />
            <span className={`ml-4 ${!sidebarOpen && 'hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} duration-300 bg-gray-50 dark:bg-gray-900`}>
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-800 shadow-lg px-8 py-5 flex justify-between items-center sticky top-0 z-40 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {menuItems.find(m => m.path === location.pathname)?.label || 'Dashboard'}
          </h2>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600">
              <FaBell size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
            </button>

            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300">
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {user?.name?.[0]?.toUpperCase() || 'A'}
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800 dark:text-white">{user?.name || 'Admin'}</p>
                <p className="text-xs text-gray-500">admin@artify.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <Outlet /> {/* This renders your dashboard pages like Overview, Artworks list, etc. */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;