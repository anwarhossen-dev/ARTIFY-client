// // import React, { use, useContext, useEffect, useState } from 'react';
// // import {  Link, useNavigate, useParams} from 'react-router';
// // //import { AuthContext } from '../Provider/AuthContext';
// // import Swal from 'sweetalert2';
// // import { AuthContext } from '../../Providers/AuthContext';
// // import axios from 'axios';

// // const ArtworkDetails = () => {
// //     const {user} = use(AuthContext)
// //     const {id} = useParams()
// //     const [count,setCount] = useState({})
// //     const [refetch,setRefetch] = useState(false)
// //     const navigate = useNavigate()

// //     useEffect(()=>{
        
// //         fetch(`http://localhost:3000/addArtwork/${id}`)
// //         .then(res => res.json())
// //         .then(data =>{
// //             setCount(data)
// //         })
// //     },[id,refetch])

// //     const handleLikeButton =()=>{
        
// //         fetch(`http://localhost:3000/likes/${count._id}`,{
// //             method: "POST",
// //             headers: {
// //                 'content-type': 'application/json'
// //             },
// //             body: JSON.stringify({userEmail: user.email})
// //         })
// //         .then(res => res.json())
// //         .then((data)=>{
// //             setCount(prev => ({...prev, likes: data.likes}))
// //             setRefetch(!refetch)
            
            
// //         })  
        
// //     }

// //     const handleFavoriteButton = () =>{

// //         axios(`http://localhost:3000/favoriteArt`,{
// //             method: "POST",
// //             headers: {
// //                 'content-type': 'application/json',
// //             },
// //             body: JSON.stringify({...count, favorite_by: user.email})
// //         })
// //         .then(res => res.json())
        
// // let timerInterval;
// //                    Swal.fire({
// //   position: "top",
// //   width: 400,
// //   icon: "success",
// //   title: "Successfully Add Favorite Artwork",
// //   showConfirmButton: false,
// //   html: " <b></b> .",
// //   timer: 1000,
// //   timerProgressBar: true,
// //   didOpen: () => {
// //     Swal.showLoading();
// //     const timer = Swal.getPopup().querySelector("b");
// //     timerInterval = setInterval(() => {
// //       timer.textContent = `${Swal.getTimerLeft()}`;
// //     }, 10);
// //   },
// //   willClose: () => {
// //     clearInterval(timerInterval);
// //   }
// // })
// //            navigate('/explore-artworks') 
        
       
// //     }


// //     return (
// //         <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
// //            <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
// //              <div>
                
// //                 <img className='w-170 md:h-90 rounded-xl ' src={count.ImageURL} alt="" />
// //                <div className=' mt-15 space-x-5 md:pl-15'>
// //                  <button onClick={handleLikeButton} className='btn btn-secondary px-6 gap-3'>Like <span>{count.likes}</span></button>
                 
// //             <button onClick={handleFavoriteButton} className='btn btn-primary px-10'>Favorites</button>
// //                </div>
            
// //              </div>
// //             <div className='w-80 h-full card p-3 bg-base-300 items-center '>
// //                 <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
// //                 <img className='w-56 h-56 rounded-full object-center' src={count.artistPhoto} alt="" />
// //                 <div className=' p-2 rounded-xl mt-3'>
// //                     <h1 className='font-semibold'>Name : <span className='font-medium'>{count.name}</span></h1>
// //                 <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{count.totalArtworks}</span></p>
// //                 </div>
// //             </div>
// //             </div>
            
// //             <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
// //                 <h1 className='font-bold text-pink-400 text-2xl'>{count.title}</h1>
// //                 <p className=''><span className='font-medium'>Artist:</span> {count.artistname}</p>
// //                 <p><span className='font-medium'>Medium:</span> {count.tools}</p>
// //                 <p className='mb-10'><span className='font-bold italic underline'>Description:</span> {count.description}</p>
// //                 <Link to="/explore-artworks" className='btn btn-secondary mb-10'>Back Explore</Link>
// //            </div>
// //         </div>
// //     );
// // };

// // export default ArtworkDetails;


// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../Providers/AuthContext';
// import axios from 'axios';
// import LoadingSpinner from '../../Components/LoadingSpinner';

// const ArtworkDetails = () => {
//     const { user } = useContext(AuthContext);
//     const { id } = useParams();
//     const [count, setCount] = useState({});
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     // =============================
//     // Load Single Artwork
//     // =============================
//     useEffect(() => {
//         axios
//             .get(`http://localhost:3000/addArtwork/${id}`)
//             .then(res => {
//                 setCount(res.data);
//                 setLoading(false);
//             })
//             .catch(err => console.error(err));
//     }, [id]);

//     // =============================
//     // Like Button
//     // =============================
//     const handleLikeButton = () => {
//         if (!user) {
//             Swal.fire("Please Login First!");
//             return;
//         }

//         axios
//             .post(`http://localhost:3000/likes/${count._id}`, {
//                 userEmail: user.email,
//             })
//             .then(res => {
//                 setCount(prev => ({
//                     ...prev,
//                     likes: res.data.likes,
//                 }));
//             })
//             .catch(err => console.error(err));
//     };

//     // =============================
//     // Favorite Button
//     // =============================
//     const handleFavoriteButton = () => {
//         if (!user) {
//             Swal.fire("Please Login First!");
//             return;
//         }

//         axios
//             .post("http://localhost:3000/favoriteArt", {
//                 ...count,
//                 favorite_by: user.email,
//             })
//             .then(() => {
//                 Swal.fire({
//                     position: "top",
//                     width: 400,
//                     icon: "success",
//                     title: "Successfully Added to Favorites",
//                     showConfirmButton: false,
//                     timer: 1000,
//                 });

//                 navigate('/explore-artworks');
//             })
//             .catch(err => console.error(err));
//     };

//     if (loading) {
//         return (
//             // <p className="text-center py-20 text-xl font-semibold">
//             //     Loading...
//             // </p>
//             <div>
//                 <LoadingSpinner/>
//             </div>
//         );
//     }

//     return (
//         // <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>

//         //     <div className='p-8 flex flex-col md:flex-row justify-between gap-5'>

//         //         <div>
//         //             <img
//         //                 className='w-170 md:h-90 rounded-xl'
//         //                 src={count.imageURL || count.ImageURL}
//         //                 alt=""
//         //             />

//         //             <div className='mt-15 space-x-5 md:pl-15'>
//         //                 <button
//         //                     onClick={handleLikeButton}
//         //                     className='btn btn-secondary px-6 gap-3'
//         //                 >
//         //                     Like <span>{count.likes}</span>
//         //                 </button>

//         //                 <button
//         //                     onClick={handleFavoriteButton}
//         //                     className='btn btn-primary px-10'
//         //                 >
//         //                     Favorites
//         //                 </button>
//         //             </div>
//         //         </div>

//         //         {/* Artist Section */}
//         //         <div className='w-80 h-full card p-3 bg-base-300 items-center'>
//         //             <h2 className='font-bold text-xl mb-2'>Artist Info</h2>

//         //             <img
//         //                 className='w-56 h-56 rounded-full object-center'
//         //                 src={count.artistPhoto}
//         //                 alt=""
//         //             />

//         //             <div className='p-2 rounded-xl mt-3'>
//         //                 <h1 className='font-semibold'>
//         //                     Name : <span className='font-medium'>{count.name}</span>
//         //                 </h1>
//         //                 <p className='font-semibold'>
//         //                     Total Artworks : <span className='font-medium'>{count.totalArtworks}</span>
//         //                 </p>
//         //             </div>
//         //         </div>
//         //     </div>

//         //     {/* Artwork Details */}
//         //     <div className='w-10/12 mx-auto p-5 rounded-xl space-y-3'>
//         //         <h1 className='font-bold text-pink-400 text-2xl'>{count.title}</h1>
//         //         <p><span className='font-medium'>Artist:</span> {count.artistname}</p>
//         //         <p><span className='font-medium'>Medium:</span> {count.tools}</p>
//         //         <p className='mb-10'>
//         //             <span className='font-bold italic underline'>Description:</span> {count.description}
//         //         </p>

//         //         <Link to="/explore-artworks" className='btn btn-secondary mb-10'>
//         //             Back Explore
//         //         </Link>
//         //     </div>
//         // </div>

//          <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
//            <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
//              <div>
                
//                 <img className='w-170 md:h-90 rounded-xl ' src={count.ImageURL} alt="" />
//                <div className=' mt-15 space-x-5 md:pl-15'>
//                  <button onClick={handleLikeButton} className='btn btn-secondary px-6 gap-3'>Like <span>{count.likes}</span></button>
                 
//             <button onClick={handleFavoriteButton} className='btn btn-primary px-10'>Favorites</button>
//                </div>
            
//              </div>
//             <div className='w-80 h-full card p-3 bg-base-300 items-center '>
//                 <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
//                 <img className='w-56 h-56 rounded-full object-center' src={count.artistPhoto} alt="" />
//                 <div className=' p-2 rounded-xl mt-3'>
//                     <h1 className='font-semibold'>Name : <span className='font-medium'>{count.name}</span></h1>
//                 <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{count.totalArtworks}</span></p>
//                 </div>
//             </div>
//             </div>
            
//             <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
//                 <h1 className='font-bold text-pink-400 text-2xl'>{count.title}</h1>
//                 <p className=''><span className='font-medium'>Artist:</span> {count.artistname}</p>
//                 <p><span className='font-medium'>Medium:</span> {count.tools}</p>
//                 <p className='mb-10'><span className='font-bold italic underline'>Description:</span> {count.description}</p>
//                 <Link to="/explore-artworks" className='btn btn-secondary mb-10'>Back Explore</Link>
//            </div>
//         </div>
//     );
// };

// export default ArtworkDetails;


import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthContext';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';

const ArtworkDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [artwork, setArtwork] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // =============================
  // Load Artwork by ID
  // =============================
  useEffect(() => {
    axios
      .get(`https://artify-server-six.vercel.app/addArtwork/${id}`)
      .then(res => {
        //console.log(res.data);
        setArtwork(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  // =============================
  // Like Button
  // =============================
  const handleLikeButton = () => {
    if (!user) {
      Swal.fire("Please Login First!");
      return;
    }

    axios
      .post(`https://artify-server-six.vercel.app/likes/${artwork._id}`, { userEmail: user.email })
      .then(res => {
        setArtwork(prev => ({ ...prev, likes: res.data.likes }));
      })
      .catch(err => console.error(err));
  };

  // =============================
  // Favorite Button
  // =============================
  const handleFavoriteButton = () => {
    if (!user) {
      Swal.fire("Please Login First!");
      return;
    }

    axios
      .post("https://artify-server-six.vercel.app/favoriteArt", { ...artwork, favorite_by: user.email })
      .then(() => {
        Swal.fire({
          position: "top",
          width: 400,
          icon: "success",
          title: "Successfully Added to Favorites",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/explore-artworks');
      })
      .catch(err => console.error(err));
  };

  if (loading) return <LoadingSpinner />;

  return (
    // <div className="w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20">
      
    //   {/* Artwork Image + Like/Favorite */}
    //   <div className="p-8 flex flex-col md:flex-row justify-between gap-5">
    //     <div className="flex flex-col">
    //       <img
    //         className="w-full md:w-[500px] h-80 md:h-96 rounded-xl object-cover"
    //         src={artwork.ImageURL || artwork.imageURL}
    //         alt={artwork.title}
    //       />
    //       <div className="mt-5 flex space-x-5">
    //         <button onClick={handleLikeButton} className="btn btn-secondary px-6 gap-3">
    //           Like <span>{artwork.likes || 0}</span>
    //         </button>
    //         <button onClick={handleFavoriteButton} className="btn btn-primary px-10">
    //           Favorites
    //         </button>
    //       </div>
    //     </div>

    //     {/* Artist Info */}
    //     <div className="w-80 h-full card p-3 bg-base-300 flex flex-col items-center rounded-xl">
    //       <h2 className="font-bold text-xl mb-2">Artist Info</h2>
    //       <img
    //         className="w-56 h-56 rounded-full object-cover"
    //         src={artwork.artistPhoto}
    //         alt={artwork.name}
    //       />
    //       <div className="p-2 rounded-xl mt-3 text-center">
    //         <h1 className="font-semibold">
    //           Name: <span className="font-medium">{artwork.name}</span>
    //         </h1>
    //         <p className="font-semibold">
    //           Total Artworks: <span className="font-medium">{artwork.totalArtworks}</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Artwork Details */}
    //   <div className="w-10/12 mx-auto p-5 rounded-xl space-y-3">
    //     <h1 className="font-bold text-pink-400 text-2xl">{artwork.title}</h1>
    //     <p>
    //       <span className="font-medium">Artist:</span> {artwork.artistname}
    //     </p>
    //     <p>
    //       <span className="font-medium">Medium:</span> {artwork.tools}
    //     </p>
    //     <p className="mb-10">
    //       <span className="font-bold italic underline">Description:</span> {artwork.description}
    //     </p>
    //     <Link to="/explore-artworks" className="btn btn-secondary mb-10">
    //       Back to Explore
    //     </Link>
    //   </div>
    // </div>

     <div className="w-11/12 md:w-10/12 mx-auto my-20">
      {/* Artwork + Artist */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        
        {/* Artwork Image */}
        <div className="flex-1">
          <img
            className="w-full md:h-[500px] rounded-xl object-cover shadow-lg"
            src={artwork.ImageURL || artwork.imageURL}
            alt={artwork.title}
          />
          <div className="mt-5 flex space-x-5">
            <button onClick={handleLikeButton} className="btn btn-secondary px-6 gap-3">
              Like <span>{artwork.likes || 0}</span>
            </button>
            <button onClick={handleFavoriteButton} className="btn btn-primary px-10">
              Favorites
            </button>
          </div>
        </div>

        {/* Artist Info - Right on desktop, below on mobile */}
        <div className="w-full md:w-80 flex-shrink-0 bg-base-300 rounded-xl p-5 flex flex-col items-center shadow-md">
          <h2 className="font-bold text-xl mb-4">Artist Info</h2>
          <img
            className="w-56 h-56 rounded-full object-cover mb-4 shadow-sm"
            src={artwork.artistPhoto}
            alt={artwork.name}
          />
          <div className="text-center space-y-2">
            <h3 className="font-semibold">Name: <span className="font-medium">{artwork.name}</span></h3>
            <p className="font-semibold">Total Artworks: <span className="font-medium">{artwork.totalArtworks}</span></p>
          </div>
        </div>
      </div>

      {/* Artwork Details */}
      <div className="mt-10 p-5 bg-base-100 rounded-xl shadow-sm space-y-3">
        <h1 className="font-bold text-2xl text-pink-400">{artwork.title}</h1>
        <p><span className="font-medium">Artist:</span> {artwork.artistname}</p>
        <p><span className="font-medium">Medium:</span> {artwork.tools}</p>
        <p>
          <span className="font-bold italic underline">Description:</span> {artwork.description}
        </p>
        <Link to="/explore-artworks" className="btn btn-secondary mt-5">
          Back to Explore
        </Link>
      </div>
    </div>
  );
};

export default ArtworkDetails;

