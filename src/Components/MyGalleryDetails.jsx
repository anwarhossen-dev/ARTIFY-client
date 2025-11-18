import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthContext';
import axios from 'axios';
//import { AuthContext } from '../Provider/AuthContext';

const MyGalleryDetails = () => {
  const { user } = use(AuthContext)
  const [gallery, setGallery] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) return;

    axios.get(`http://localhost:3000/addArtwork/${id}`)
      .then(res => {
        setGallery(res.data);
      })
      .catch(err => {
        console.error(err);
      });

  }, [id, user]);


  const handleDeleteButton = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // axios(`http://localhost:3000/addArtwork/${gallery._id}`)
        //   .then(res => res.json())
        //   .then(() => {
        //     navigate('/my-gallery')
        //     Swal.fire({
        //       title: "Deleted!",
        //       text: "Your file has been deleted.",
        //       icon: "success"
        //     });
        //   })

        const gallDete = async () => {
          try {
            const res = await axios.delete(`http://localhost:3000/addArtwork/${gallery._id}`);
            ;

            // Axios automatically parses JSON → res.data
            console.log(res.data);

            navigate('/my-gallery');

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          } catch (error) {
            console.error(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error"
            });
          }
        };
        gallDete();

      }
    });


  }
  return (
    // <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
    //   <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
    //     <div>

    //       <img className='w-170 md:h-90 rounded-xl ' src={gallery.ImageURL} alt="" />
    //       <div className=' mt-15  space-x-5 md:pl-15'>
    //         <Link to={`/updated-artwork/${id}`} className='btn btn-secondary px-9'>Update </Link>

    //         <button onClick={handleDeleteButton} className='btn btn-primary px-10'>Delete</button>
    //       </div>

    //     </div>
    //     <div className='w-80 h-full card p-3 bg-base-300 items-center '>
    //       <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
    //       <img className='w-56 h-56 rounded-full object-center' src={gallery.artistPhoto} alt="" />
    //       <div className=' p-2 rounded-xl mt-3'>
    //         <h1 className='font-semibold'>Name : <span className='font-medium'>{gallery.name}</span></h1>
    //         <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{gallery.totalArtworks}</span></p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
    //     <h1 className='font-bold text-pink-400 text-2xl'>{gallery.title}</h1>
    //     <p className=''><span className='font-semibold '>Artist:</span> {gallery.artistname}</p>
    //     <p className=''><span className='font-semibold '>Medium:</span> {gallery.tools}</p>
    //     <p className='mb-10 '><span className='font-bold italic underline'>Description:</span> {gallery.description}</p>
    //     <Link to="/my-gallery" className='btn btn-secondary mb-10'>Back Gallery</Link>
    //   </div>
    // </div>

    //  <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
    //        <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
    //          <div>

    //             <img className='w-170 md:h-90 rounded-xl ' src={gallery.ImageURL} alt="" />
    //            <div className=' mt-15  space-x-5 md:pl-15'>
    //              <Link to={`/updated-artwork/${id}`} className='btn btn-secondary px-9'>Update </Link>

    //         <button onClick={handleDeleteButton} className='btn btn-primary px-10'>Delete</button>
    //            </div>

    //          </div>
    //         <div className='w-80 h-full card p-3 bg-base-300 items-center '>
    //             <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
    //             <img className='w-56 h-56 rounded-full object-center' src={gallery.artistPhoto} alt="" />
    //             <div className=' p-2 rounded-xl mt-3'>
    //                 <h1 className='font-semibold'>Name : <span className='font-medium'>{gallery.name}</span></h1>
    //             <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{gallery.totalArtworks}</span></p>
    //             </div>
    //         </div>
    //         </div>

    //         <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
    //             <h1 className='font-bold text-pink-400 text-2xl'>{gallery.title}</h1>
    //             <p className=''><span className='font-semibold '>Artist:</span> {gallery.artistname}</p>
    //             <p className=''><span className='font-semibold '>Medium:</span> {gallery.tools}</p>
    //             <p className='mb-10 '><span className='font-bold italic underline'>Description:</span> {gallery.description}</p>
    //             <Link to="/my-gallery" className='btn btn-secondary mb-10'>Back Gallery</Link>
    //        </div>
    //     </div>
    <div className="w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-xl rounded-xl my-20 p-6">

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Artwork Image + Buttons */}
        <div className="flex-1">
          <img
            className="w-full md:h-96 object-cover rounded-xl shadow-md"
            src={gallery.ImageURL}
            alt={gallery.title}
          />

          <div className="mt-6 flex gap-4">
            <Link to={`/updated-artwork/${id}`} className="btn btn-secondary px-10">
              Update
            </Link>

            <button onClick={handleDeleteButton} className="btn btn-primary px-10">
              Delete
            </button>
          </div>
        </div>

        {/* -------- SMART ARTIST INFO CARD -------- */}
        <div className="w-full md:w-80 bg-white border rounded-xl shadow-md p-6 flex flex-col items-center">

          <h2 className="font-bold text-2xl mb-4 text-gray-800">Artist Info</h2>

          <img
            className="w-36 h-36 rounded-full object-cover shadow-lg border"
            src={gallery.artistPhoto || "https://via.placeholder.com/150"}
            alt="Artist"
          />

          <div className="mt-5 w-full space-y-3 text-center">

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Name</p>
              <p className="text-lg font-semibold text-gray-800">
                {gallery.name || "Unknown Artist"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Total Artworks</p>
              <p className="text-lg font-semibold text-gray-800">
                {gallery.totalArtworks || 0}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>
              <p className="text-lg font-semibold text-gray-800 break-all">
                {gallery.email || user?.email}
              </p>
            </div>

          </div>
        </div>
        {/* -------- END ARTIST INFO CARD -------- */}

      </div>

      {/* Artwork Details */}
      <div className="mt-8 p-5 rounded-xl space-y-3">
        <h1 className="font-bold text-pink-500 text-3xl">{gallery.title}</h1>

        <p>
          <span className="font-semibold">Artist: </span>
          {gallery.artistname}
        </p>

        <p>
          <span className="font-semibold">Medium: </span>
          {gallery.tools}
        </p>

        <p className="mb-8">
          <span className="font-bold italic underline">Description:</span>
          <br />
          {gallery.description}
        </p>

        <Link to="/my-gallery" className="btn btn-secondary">
          Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default MyGalleryDetails;
