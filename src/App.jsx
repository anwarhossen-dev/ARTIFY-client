
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import DashboardLayout from "./layouts/DashboardLayout";

// Public Pages
import Home from "./pages/Home";
import ExploreArtworks from "./pages/ExploreArtworks";

// Dashboard Pages
import MyProfile from "./pages/dashboard/MyProfile";
import MyOrders from "./pages/dashboard/MyOrders";
import MyReview from "./pages/dashboard/MyReview";
import MyFavorites from "./pages/dashboard/MyFavorites";

import AddArtwork from "./pages/dashboard/AddArtwork";
import MyGallery from "./pages/dashboard/MyGallery";
import SalesOrders from "./pages/dashboard/SalesOrders";

import ManageUsers from "./pages/dashboard/ManageUsers";
import ManageRequests from "./pages/dashboard/ManageRequests";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/explore-artworks" element={<><Navbar /><ExploreArtworks /></>} />

        {/* Dashboard with Nested Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<MyProfile />} />
          <Route path="myProfile" element={<MyProfile />} />

          {/* User */}
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="myReview" element={<MyReview />} />
          <Route path="my-favorites" element={<MyFavorites />} />

          {/* Artist & Admin */}
          <Route path="add-artwork" element={<AddArtwork />} />
          <Route path="my-gallery" element={<MyGallery />} />
          <Route path="sales" element={<SalesOrders />} />

          {/* Admin Only */}
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-requests" element={<ManageRequests />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;