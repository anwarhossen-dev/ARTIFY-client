// import axios from 'axios';
// import React from 'react';
// import { Link, useLoaderData, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';


// const UpdatedArtwork = () => {
//   const data = useLoaderData()
//   const navigate = useNavigate()

//   const handleForm = (e) => {
//     e.preventDefault()
//     const title = e.target.title.value;
//     const artistname = e.target.artistname.value;
//     const ImageURL = e.target.ImageURL.value;
//     const price = e.target.price.value;
//     const tools = e.target.tools.value;
//     const visibility = e.target.visibility.value;
//     const category = e.target.category.value;
//     const dimensions = e.target.dimensions.value;
//     const description = e.target.description.value;
//     const totalArtworks = e.target.totalArtworks.value;

//     const name = data?.displayName;
//     const email = data?.email;
//     const artistPhoto = data?.photoURL;
//     const createdAt = new Date().toISOString();

//     const artworkUser = { title, name, artistname, email, ImageURL, price, tools, visibility, category, dimensions, description, totalArtworks, artistPhoto, createdAt }
//     axios(`http://localhost:3000/addArtwork/${data._id}`, {
//       method: 'PUT',
//       headers: {
//         'content-type': "application/json"
//       },
//       body: JSON.stringify(artworkUser)
//     })
//       .then(res => res.json())
//       .then()

//     toast.success('Successfully Artwork Add!')
//     navigate(`/my-gallery-details/${data._id}`)
//     e.target.reset();
//   }

//   return (

//     <div className='bg-base-200 min-h-screen'>
//       <div className="w-11/12 mx-auto py-10 bg-base-200 min-h-70">


//         <form onSubmit={handleForm} className='space-y-3 w-full md:w-7/12 mx-auto bg-base-100 p-5 rounded-xl'>

//           <div className='flex flex-col md:flex-row justify-between gap-3'>

//             <div className='w-full mx-auto space-y-3'>
//               <label className="label">Title</label>
//               <input type="text" defaultValue={data.title} name="title" className="input block w-full" placeholder="Title" />
//             </div>
//             <div className='w-full mx-auto space-y-3'>
//               <label className="label">Artist Name</label>
//               <input type="text" defaultValue={data.artistname} name="artistname" className="input block w-full" placeholder="Artist Name" />
//             </div>
//           </div>
//           <div className='flex flex-col md:flex-row gap-3 justify-between'>
//             <div className='w-full mx-auto space-y-3'>
//               <label className="label">Name</label>
//               <input type="text" defaultValue={data.name} name="name" className="input block w-full" placeholder="Name" />
//             </div>
//             <div className='w-full space-y-3'>
//               <label className="label">Email</label>
//               <input type="email" defaultValue={data.email} name="email" className="input block w-full" placeholder="Email" />
//             </div>
//           </div>
//           <div className='flex flex-col md:flex-row gap-3 justify-between'>
//             <div className='w-full space-y-3'>
//               <label className="label">Image</label>
//               <input type="text" defaultValue={data.ImageURL} name="ImageURL" className="input block w-full" placeholder="Image URL" />
//             </div>

//             <div className=' space-y-3'>
//               <label className="label">Medium/Tools</label>
//               <input type="text" defaultValue={data.tools} name="tools" className="input block w-50" placeholder="Medium/Tools" />
//             </div>

//           </div>
//           <div className='flex flex-col md:flex-row justify-between'>
//             <div className='space-y-3'>
//               <label className="label">Photo</label>
//               <input type="text" name="artistPhoto"
//                 defaultValue={data.artistPhoto}
//                 className="input block w-full md:w-110" placeholder="PhotoURL" />
//             </div>
//             <div className='space-y-3 md:mt-0 mt-2'>
//               <label className="label">TotalArtworks</label>
//               <input type="text" defaultValue={data.totalArtworks} name="totalArtworks"
//                 className="input block" placeholder="Total Artworks" />
//             </div>
//           </div>
//           <div className='flex flex-col md:flex-row justify-around mt-2'>
//             <div className='space-y-3 mt-2'>
//               <label className="label ">Price (Optional)</label>
//               <input type="text" defaultValue={data.price} name="price" className="input block w-50" placeholder="Price" />
//             </div>
//             <div className='space-y-3 mt-2'>
//               <label className="label">Dimensions (Optional)</label>
//               <input type="text" defaultValue={data.dimensions} name="dimensions" className="input w-50 block" placeholder="Dimensions" />
//             </div>
//           </div>


//           <div className='flex flex-col md:flex-row justify-around mt-2'>
//             <div className='space-y-2 mt-2'>
//               <label className="label">Visibility</label>
//               <select defaultValue={data.visibility} name='visibility' defaultChecked="Pick a Option" className="select appearance-none w-50 block">
//                 <option>Public</option>
//                 <option>Private</option>
//               </select>
//             </div>
//             <div className='space-y-2 mt-2'>
//               <label className="label">Category</label>
//               <select name='category' defaultValue="Pick a Category" className="select appearance-none w-50 block">
//                 <option>Painting</option>
//                 <option>Oil Painting</option>
//                 <option>Drawing</option>
//                 <option>Digital</option>
//               </select>
//             </div>
//           </div>
//           <label className="label">Description</label>
//           <textarea type="text" defaultValue={data.description} placeholder='Description...'
//             name="description"
//             className='textarea block w-full' id="" cols="80" rows="6"></textarea>

//           <div className='flex gap-6 mb-10'>
//             <button type='submit' className="btn  mt-4 border-pink-500">Update Artwork</button>
//             <Link to={`/my-gallery-details/${data._id}`} className='btn mt-4 border-pink-500'>Back Gallery Details</Link>
//           </div>
//         </form>

//       </div>
//     </div>

//   );
// };

// export default UpdatedArtwork;


import axios from "axios";
import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthContext";

const UpdatedArtwork = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  // ✅ FIX: Correct AuthContext usage
  const { user } = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      title: form.title.value,
      artistname: form.artistname.value,
      ImageURL: form.ImageURL.value,
      price: form.price.value,
      tools: form.tools.value,
      visibility: form.visibility.value,
      category: form.category.value,
      dimensions: form.dimensions.value,
      description: form.description.value,
      totalArtworks: form.totalArtworks.value,

      // User info
      name: user?.displayName,
      email: user?.email,
      artistPhoto: user?.photoURL,
      createdAt: new Date().toISOString()
    };

    axios
      .put(`http://localhost:3000/addArtwork/${data._id}`, updatedData)
      .then(() => {
        toast.success("Artwork Updated Successfully!");
        // navigate(`/my-gallery-details/${data._id}`);
        navigate(`/my-gallery-details/${data._id}`);

      })
      .catch((err) => console.error("Update Error:", err));
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto py-10">

        <form
          onSubmit={handleForm}
          className="space-y-3 w-full md:w-7/12 mx-auto bg-base-100 p-5 rounded-xl"
        >
          <div className="flex items-center  gap-4 text-center justify-center mb-5">
            <div className='font-extrabold text-3xl'>
              <span className='text-[#9B5DE0] hover:underline'> Update  </span>
              <span className='text-pink-600 hover:underline'> To </span>
              <span className='text-green-600 hover:underline'> Work </span>
              
            </div>

            
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            
            <div className="w-full">
              <label className="label">Title</label>
              <input type="text" name="title" defaultValue={data.title} className="input w-full" />
            </div>

            <div className="w-full">
              <label className="label">Artist Name</label>
              <input type="text" name="artistname" defaultValue={data.artistname} className="input w-full" />
            </div>
          </div>

          {/* USER INFO */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="label">Name</label>
              <input readOnly value={user?.displayName} className="input w-full" />
            </div>

            <div className="w-full">
              <label className="label">Email</label>
              <input readOnly value={user?.email} className="input w-full" />
            </div>
          </div>

          {/* IMAGE + TOOLS */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="label">Image</label>
              <input type="text" name="ImageURL" defaultValue={data.ImageURL} className="input w-full" />
            </div>

            <div className="w-full">
              <label className="label">Tools</label>
              <input type="text" name="tools" defaultValue={data.tools} className="input w-full" />
            </div>
          </div>

          {/* PHOTO + TOTAL ARTWORKS */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="label">Artist Photo</label>
              <input readOnly value={user?.photoURL} className="input w-full" />
            </div>

            <div className="w-full">
              <label className="label">Total Artworks</label>
              <input type="text" name="totalArtworks" defaultValue={data.totalArtworks} className="input w-full" />
            </div>
          </div>

          {/* PRICE + DIMENSIONS */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="label">Price</label>
              <input type="text" name="price" defaultValue={data.price} className="input w-full" />
            </div>

            <div className="w-full">
              <label className="label">Dimensions</label>
              <input type="text" name="dimensions" defaultValue={data.dimensions} className="input w-full" />
            </div>
          </div>

          {/* VISIBILITY + CATEGORY */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="label">Visibility</label>
              <select name="visibility" defaultValue={data.visibility} className="select w-full">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>

            <div className="w-full">
              <label className="label">Category</label>
              <select name="category" defaultValue={data.category} className="select w-full">
                <option>Painting</option>
                <option>Oil Painting</option>
                <option>Drawing</option>
                <option>Digital</option>
              </select>
            </div>
          </div>

          <label className="label">Description</label>
          <textarea
            name="description"
            defaultValue={data.description}
            className="textarea w-full"
            rows={6}
          ></textarea>

          <div className="flex gap-4 mt-4">
            <button type="submit" className="btn border-pink-500">Update Artwork</button>
            <Link to={`/my-gallery-details/${data._id}`} className="btn border-pink-500">Back</Link>
          </div>
        </form>

      </div>
    </div>
  );
};

export default UpdatedArtwork;


// import axios from "axios";
// import React from "react";
// import { Link, useLoaderData, useNavigate } from "react-router";
// import { toast } from "react-toastify";

// const UpdatedArtwork = () => {
//   const data = useLoaderData();
//   const navigate = useNavigate();

//   const handleForm = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const updatedData = {
//       title: form.title.value,
//       artistname: form.artistname.value,
//       ImageURL: form.ImageURL.value,
//       price: form.price.value,
//       tools: form.tools.value,
//       visibility: form.visibility.value,
//       category: form.category.value,
//       dimensions: form.dimensions.value,
//       description: form.description.value,
//       totalArtworks: form.totalArtworks.value,
//       name: data.name,
//       email: data.email,
//       artistPhoto: data.artistPhoto,
//       createdAt: new Date().toISOString(),
//     };

//     axios
//       .put(`http://localhost:3000/addArtwork/${data._id}`, updatedData)
//       .then(() => {
//         toast.success("Artwork Updated Successfully!");
//         navigate(`/my-gallery-details/${data._id}`);
//       })
//       .catch((err) => console.error("Update Error:", err));
//   };

//   return (
//     <div className="bg-base-200 min-h-screen">
//       <div className="w-11/12 mx-auto py-10">

//         <form onSubmit={handleForm}
//           className="space-y-3 w-full md:w-7/12 mx-auto bg-base-100 p-5 rounded-xl">

//           {/* TITLE */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="w-full">
//               <label className="label">Title</label>
//               <input type="text" name="title" defaultValue={data.title} className="input w-full" />
//             </div>

//             <div className="w-full">
//               <label className="label">Artist Name</label>
//               <input type="text" name="artistname" defaultValue={data.artistname} className="input w-full" />
//             </div>
//           </div>

//           {/* NAME & EMAIL */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="w-full">
//               <label className="label">Name</label>
//               <input readOnly type="text" value={data.name} placeholder={data.name} className="input w-full" />
//             </div>
//             <div className="w-full">
//               <label className="label">Email</label>
//               <input readOnly type="email" value={data.email} className="input w-full" />
//             </div>
//           </div>

//           {/* IMAGE - TOOLS */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="w-full">
//               <label className="label">Image URL</label>
//               <input type="text" name="ImageURL" defaultValue={data.ImageURL} className="input w-full" />
//             </div>

//             <div className="w-full">
//               <label className="label">Tools</label>
//               <input type="text" name="tools" defaultValue={data.tools} className="input w-full" />
//             </div>
//           </div>

//           {/* PHOTO - TOTAL */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="w-full">
//               <label className="label">Artist Photo</label>
//               <input type="text" readOnly value={data.artistPhoto} className="input w-full" />
//             </div>

//             <div className="w-full">
//               <label className="label">Total Artworks</label>
//               <input type="text" name="totalArtworks" defaultValue={data.totalArtworks} className="input w-full" />
//             </div>
//           </div>

//           {/* PRICE - DIMENSIONS */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="w-full">
//               <label className="label">Price</label>
//               <input type="text" name="price" defaultValue={data.price} className="input w-full" />
//             </div>

//             <div className="w-full">
//               <label className="label">Dimensions</label>
//               <input type="text" name="dimensions" defaultValue={data.dimensions} className="input w-full" />
//             </div>
//           </div>

//           {/* VISIBILITY - CATEGORY */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="w-full">
//               <label className="label">Visibility</label>
//               <select name="visibility" defaultValue={data.visibility} className="select w-full">
//                 <option>Public</option>
//                 <option>Private</option>
//               </select>
//             </div>

//             <div className="w-full">
//               <label className="label">Category</label>
//               <select name="category" defaultValue={data.category} className="select w-full">
//                 <option>Painting</option>
//                 <option>Oil Painting</option>
//                 <option>Drawing</option>
//                 <option>Digital</option>
//               </select>
//             </div>
//           </div>

//           <label className="label">Description</label>
//           <textarea name="description" defaultValue={data.description}
//             className="textarea w-full" rows="6"></textarea>

//           <div className="flex gap-4 mt-4">
//             <button type="submit" className="btn border-pink-500">Update Artwork</button>
//             <Link to={`/my-gallery-details/${data._id}`} className="btn border-pink-500">Back</Link>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdatedArtwork;
