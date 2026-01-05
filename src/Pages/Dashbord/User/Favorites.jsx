import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
//import LoadingSpinner from "../../Components/LoadingSpinner";
//import { AuthContext } from "../../Providers/AuthContext";
import { FaTrash } from "react-icons/fa";
import LoadingSpinner from "../../../Components/LoadingSpinner";
import { AuthContext } from "../../../Providers/AuthContext";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's favorite artworks
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    axios
      .get(`https://artify-server-six.vercel.app/my-favoriteArt?email=${user.email}`)
      .then((res) => {
        setFavorites(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  }, [user]);

  // Remove a favorite
  const handleRemoveFavorite = async (id) => {
    try {
      await axios.delete(`https://artify-server-six.vercel.app/favoriteArt/${id}`);

      // Remove from UI
      setFavorites((prev) => prev.filter((item) => item._id !== id));

      Swal.fire({
        icon: "success",
        title: "Removed from Favorites",
        timer: 800,
        showConfirmButton: false,
        position: "top",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to remove!",
        text: error.message,
      });
    }
  };

  if (loading) return <LoadingSpinner />;

  if (favorites.length === 0)
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        <p className="text-2xl font-semibold">No favorite artworks yet.</p>
      </div>
    );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Favorites</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <div key={fav._id} className="bg-white dark:bg-gray-800 rounded shadow overflow-hidden">
            <img
              src={fav.image || "/placeholder.jpg"}
              alt={fav.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div className="font-semibold text-gray-900 dark:text-white">{fav.title}</div>
              <button
                onClick={() => handleRemoveFavorite(fav._id)}
                className="text-red-600 hover:text-red-800 transition"
                title="Remove from Favorites"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
