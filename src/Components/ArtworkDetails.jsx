// import React, { use, useEffect, useState } from 'react';
// import {  Link, useNavigate, useParams} from 'react-router';
// import { AuthContext } from '../Provider/AuthContext';
// import Swal from 'sweetalert2';
// import axios from 'axios';

// const ArtworkDetails = () => {
//     const {user} = use(AuthContext)
//     const {id} = useParams()
//     const [count,setCount] = useState({})
//     const [refetch,setRefetch] = useState(false)
//     const navigate = useNavigate()

//     useEffect(()=>{
        
//         axios(`http://localhost:3000/addArtwork/${id}`)
//         .then(res => res.json())
//         .then(data =>{
//             setCount(data)
//         })
//     },[id,refetch])

//     const handleLikeButton =()=>{
        
//         axios(`http://localhost:3000/likes/${count._id}`,{
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({userEmail: user.email})
//         })
//         .then(res => res.json())
//         .then((data)=>{
//             setCount(prev => ({...prev, likes: data.likes}))
//             setRefetch(!refetch)
            
            
//         })  
        
//     }

//     // const handleFavoriteButton = () =>{

//     //     axios(`http://localhost:3000/favoriteArt`,{
//     //         method: "POST",
//     //         headers: {
//     //             'content-type': 'application/json',
//     //         },
//     //         body: JSON.stringify({...count, favorite_by: user.email})
//     //     })
//     //     .then(res => res.json())

//     const handleFavoriteButton = async () => {
//   try {
//     const payload = {
//       ...count,
//       favorite_by: user.email
//     };

//     const res = await axios.post(
//       "http://localhost:3000/favoriteArt",
//       payload
//     );

//     Swal.fire({
//       position: "top",
//       width: 400,
//       icon: "success",
//       title: "Successfully Added to Favorite",
//       showConfirmButton: false,
//       timer: 1000
//     });

//     navigate('/explore-artworks');

//   } catch (error) {
//     console.error("Favorite Error:", error);
//     Swal.fire("Server error: Could not add to favorites");
//   }
// };
        
// let timerInterval;
//                    Swal.fire({
//   position: "top",
//   width: 400,
//   icon: "success",
//   title: "Successfully Add Favorite Artwork",
//   showConfirmButton: false,
//   html: " <b></b> .",
//   timer: 1000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 10);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// })
//            navigate('/explore-artworks') 
        
       
//     }


//     return (
//         <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
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
//                 <Link to="/explore-artworks" className='btn btn-secondary mb-10'>Back Explore </Link>
//            </div>
//         </div>
//     );
// };

// export default ArtworkDetails;


import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const ArtworkDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [count, setCount] = useState({});
  const [refetch, setRefetch] = useState(false);
  const navigate = useNavigate();

  // ======================
  // LOAD ARTWORK DETAILS
  // ======================
  useEffect(() => {
    axios
      .get(`https://artify-server-six.vercel.app/addArtwork/${id}`)
      .then((res) => {
        setCount(res.data);
      })
      .catch((err) => {
        console.error("Fetch Artwork Error:", err);
      });
  }, [id, refetch]);

  // ======================
  // LIKE BUTTON
  // ======================
  const handleLikeButton = async () => {
    try {
      const res = await axios.post(
        `https://artify-server-six.vercel.app/likes/${count._id}`,
        { userEmail: user.email }
      );

      setCount((prev) => ({ ...prev, likes: res.data.likes }));
      setRefetch(!refetch);

    } catch (error) {
      console.error("Like Error:", error);
    }
  };

  // ======================
  // FAVORITE BUTTON
  // ======================
  const handleFavoriteButton = async () => {
    try {
      const payload = {
        ...count,
        favorite_by: user.email,
      };

      await axios.post("https://artify-server-six.vercel.app/favoriteArt", payload);

      Swal.fire({
        position: "top",
        width: 400,
        icon: "success",
        title: "Successfully Added to Favorite",
        showConfirmButton: false,
        timer: 1000,
      });

      navigate("/explore-artworks");

    } catch (error) {
      console.error("Favorite Error:", error);
      Swal.fire("Server error: Could not add to favorites");
    }
  };

  return (
    <div className="w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20">
      <div className="p-8 flex flex-col md:flex-row justify-between gap-5">
        <div>
          <img
            className="w-170 md:h-90 rounded-xl"
            src={count.ImageURL}
            alt=""
          />

          <div className="mt-15 space-x-5 md:pl-15">
            <button
              onClick={handleLikeButton}
              className="btn btn-secondary px-6 gap-3"
            >
              Like <span>{count.likes}</span>
            </button>

            <button
              onClick={handleFavoriteButton}
              className="btn btn-primary px-10"
            >
              Favorites
            </button>
          </div>
        </div>

        <div className="w-80 h-full card p-3 bg-base-300 items-center">
          <h2 className="font-bold text-xl mb-2">Artist Info</h2>
          <img
            className="w-56 h-56 rounded-full object-center"
            src={count.artistPhoto}
            alt=""
          />
          <div className="p-2 rounded-xl mt-3">
            <h1 className="font-semibold">
              Name : <span className="font-medium">{count.name}</span>
            </h1>
            <p className="font-semibold">
              TotalArtworks :{" "}
              <span className="font-medium">{count.totalArtworks}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto p-5 rounded-xl space-y-3">
        <h1 className="font-bold text-pink-400 text-2xl">{count.title}</h1>
        <p>
          <span className="font-medium">Artist:</span> {count.artistname}
        </p>
        <p>
          <span className="font-medium">Medium:</span> {count.tools}
        </p>
        <p className="mb-10">
          <span className="font-bold italic underline">Description:</span>{" "}
          {count.description}
        </p>
        <Link to="/explore-artworks" className="btn btn-secondary mb-10">
          Back Explore
        </Link>
      </div>
    </div>
  );
};

export default ArtworkDetails;
