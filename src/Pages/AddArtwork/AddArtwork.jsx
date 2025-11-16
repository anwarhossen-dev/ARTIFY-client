


import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Providers/AuthContext';
import axios from 'axios';

const AddArtwork = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    const artworkUser = {
      title: e.target.title.value,
      artistname: e.target.artistname.value,
      ImageURL: e.target.ImageURL.value,
      price: e.target.price.value,
      tools: e.target.tools.value,
      visibility: e.target.visibility.value,
      category: e.target.category.value,
      dimensions: e.target.dimensions.value,
      description: e.target.description.value,
      totalArtworks: e.target.totalArtworks.value,
      likes: 0,
      name: user?.displayName,
      email: user?.email,
      artistPhoto: user?.photoURL,
      createdAt: new Date().toISOString(),
    };

    try {
      // Correct Axios POST syntax
      await axios.post('http://localhost:3000/addArtwork', artworkUser);

      toast.success('Successfully added artwork!');
      navigate('/');
      e.target.reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to add artwork. Check console.');
    }
  };
  

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto py-10 bg-base-200 min-h-70">
        <form
          onSubmit={handleForm}
          className="space-y-3 w-full md:w-7/12 mx-auto bg-base-100 p-5 rounded-xl"
        >
          {/* Title & Artist Name */}
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <div className="w-full mx-auto space-y-3">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input block w-full"
                placeholder="Title"
              />
            </div>
            <div className="w-full mx-auto space-y-3">
              <label className="label">Artist Name</label>
              <input
                type="text"
                name="artistname"
                className="input block w-full"
                placeholder="Artist Name"
              />
            </div>
          </div>

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            <div className="w-full mx-auto space-y-3">
              <label className="label">Name</label>
              <input
                type="text"
                readOnly
                defaultValue={user.displayName}
                name="name"
                className="input block w-full"
              />
            </div>
            <div className="w-full space-y-3">
              <label className="label">Email</label>
              <input
                type="email"
                readOnly
                defaultValue={user.email}
                name="email"
                className="input block w-full"
              />
            </div>
          </div>

          {/* Image & Tools */}
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            <div className="w-full space-y-3">
              <label className="label">Image URL/Base64</label>
              <input
                type="text"
                name="ImageURL"
                className="input block w-full"
                placeholder="Image URL or Base64"
              />
            </div>
            <div className="space-y-3">
              <label className="label">Medium/Tools</label>
              <input
                type="text"
                name="tools"
                className="input block w-50"
                placeholder="Medium/Tools"
              />
            </div>
          </div>

          {/* Artist Photo & Total Artworks */}
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <div className="space-y-3">
              <label className="label">Photo</label>
              <input
                type="text"
                name="artistPhoto"
                defaultValue={user.photoURL}
                className="input block w-full md:w-110"
              />
            </div>
            <div className="space-y-3">
              <label className="label">Total Artworks</label>
              <input
                type="text"
                name="totalArtworks"
                className="input block"
                placeholder="Total Artworks"
              />
            </div>
          </div>

          {/* Price & Dimensions */}
          <div className="flex flex-col md:flex-row justify-around mt-2">
            <div className="space-y-3">
              <label className="label">Price (Optional)</label>
              <input type="text" name="price" className="input block w-50" />
            </div>
            <div className="space-y-3">
              <label className="label">Dimensions (Optional)</label>
              <input type="text" name="dimensions" className="input block w-50" />
            </div>
          </div>

          {/* Visibility & Category */}
          <div className="flex flex-col md:flex-row justify-around mt-2">
            <div className="space-y-2">
              <label className="label">Visibility</label>
              <select
                name="visibility"
                defaultValue="Public"
                className="select appearance-none w-50 block"
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="label">Category</label>
              <select
                name="category"
                defaultValue="Painting"
                className="select appearance-none w-50 block"
              >
                <option>Painting</option>
                <option>Oil Painting</option>
                <option>Drawing</option>
                <option>Digital</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <label className="label">Description</label>
          <textarea
            name="description"
            placeholder="Description..."
            className="textarea block w-full"
            rows="6"
          ></textarea>

          <button type="submit" className="btn mt-4 border-pink-500">
            Add To Artwork
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtwork;
