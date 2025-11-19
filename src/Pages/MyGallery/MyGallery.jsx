// // // import React, { use, useEffect, useState } from 'react';
// // // import { AuthContext } from '../../Providers/AuthContext';
// // // import UpdateGallery from '../../Components/UpdateGallery';
// // // import axios from 'axios';
// // // import LoadingSpinner from '../../Components/LoadingSpinner';

// // // const MyGallery = () => {
// // //     const {user} = use(AuthContext)
// // //     const [gallery,setGallery] = useState([])
// // //      const [loading, setLoading] = useState(true);

// // //     // useEffect(()=>{

// // //     //     axios(`http://localhost:3000/my-gallery?email=${user.email}`)
// // //     //     .then(res => res.json())
// // //     //     .then(data => {
// // //     //         setGallery(data)
// // //     //     })
// // //     // },[user])

// // //     useEffect(() => {
// // //         if (!user?.email) return;

// // //         axios.get(`http://localhost:3000/my-gallery?email=${user.email}`)
// // //             .then(res => {
// // //                 setGallery(res.data);
// // //                 setLoading(false);
// // //             })
// // //             .catch(err => console.error(err));
// // //     }, [user]);
// // //     if (loading) {
// // //         return (
// // //             // <p className="text-center py-20 text-xl font-semibold">
// // //             //     Loading...
// // //             // </p>
// // //             <div>
// // //                 <LoadingSpinner />
// // //             </div>
// // //         );
// // //     }
// // //     return (
// // //         <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
// // //            {
// // //             gallery.map(promise => <UpdateGallery key={promise._id} promise={promise}></UpdateGallery>)
// // //            }
// // //         </div>
// // //         //  <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
// // //         //    {
// // //         //     gallery.map(promise => <UpdateGallery key={promise._id} promise={promise}></UpdateGallery>)
// // //         //    }
// // //         // </div>
// // //     );
// // // };

// // // export default MyGallery;

// // import React, { useContext, useEffect, useState } from 'react';
// // import { AuthContext } from '../../Providers/AuthContext';
// // import UpdateGallery from '../../Components/UpdateGallery';
// // import axios from 'axios';
// // import LoadingSpinner from '../../Components/LoadingSpinner';

// // const MyGallery = () => {
// //   const { user } = useContext(AuthContext);
// //   const [gallery, setGallery] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!user?.email) return;

// //     axios
// //       .get(`http://localhost:3000/my-gallery?email=${user.email}`)
// //       .then(res => {
// //         setGallery(res.data);
// //         setLoading(false);
// //       })
// //       .catch(err => console.error(err));
// //   }, [user]);

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center py-20">
// //         <LoadingSpinner />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //       {gallery.map(promise => (
// //         <UpdateGallery key={promise._id} promise={promise} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default MyGallery;


// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Providers/AuthContext';
// //import UpdateGallery from '../../Components/UpdateGallery';
// import axios from 'axios';
// import LoadingSpinner from '../../Components/LoadingSpinner';
// // ArtWorkCard from '../../Components/ArtworkCard';

// const MyGallery = () => {
//   const { user } = useContext(AuthContext);
//   const [gallery, setGallery] = useState([]);
//   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!user?.email) return;

// //     axios
// //       .get(`http://localhost:3000/my-my-gallery?email=${user.email}`)
// //       .then(res => {
// //         setGallery(res.data);
// //         setLoading(false);
// //       })
// //       .catch(err => console.error(err));
// //   }, [user]);

// useEffect(() => {
//   if (!user?.email) return;

//   axios
//     .get(`http://localhost:3000/my-gallery?email=${user.email}`)
//     .then(res => {
//       setGallery(res.data);
//       setLoading(false);
//     })
//     .catch(err => console.error("Error fetching gallery:", err));
// }, [user]);


//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   return (
//     // <div className="w-11/12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     //   {gallery.length > 0 ? (
//     //     gallery.map(promise => <UpdateGallery key={promise._id} promise={promise} />)
//     //   ) : (
//     //     <p className="text-center text-xl col-span-full">
//     //       You have not added any artworks yet.
//     //     </p>
//     //   )}
//     // </div>

// //     <div className="w-11/12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //     {gallery.length > 0
// //       ? gallery.map(promise => <UpdateGallery key={promise._id} promise={promise} />)
// //       : Array.from({ length: 6 }).map((_, idx) => (
// //           <div
// //             key={idx}
// //             className="border border-gray-300 rounded-lg h-60 flex items-center justify-center text-gray-400"
// //           >
// //             No Artwork
// //           </div>
// //         ))
// //     }
// //   </div>

// //  <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
// //            {
// //             gallery.map(promise => <UpdateGallery key={promise._id} promise={promise}></UpdateGallery>)
// //            }
// //         </div>

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {
//           gallery.map((promise) =>
//             <AddArtwork  key={promise._id} promise={promise} />)}


//       </div>
//   );
// };

// export default MyGallery;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import UpdateGallery from '../../Components/UpdateGallery'; // make sure this is your card component
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';
import { Fade } from 'react-awesome-reveal';
import { FaUserAlt } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://artify-server-six.vercel.app/my-gallery?email=${user.email}`)
      .then(res => {
        setGallery(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching gallery:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div className='text-center text-bold'>
        <Fade direction="left" triggerOnce>
          <h1 className="text-2xl md:text-4xl font-bold text-center mx-auto pb-10 flex justify-center gap-2 mt-10">
            <FaUserAlt className="text-[#d319a4] mt-1" />
            <span className="text-[#059ca1]">
              <Typewriter
                words={['My Favorite Art Collection – Explore, Enjoy & Showcase Your Creativity:']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </Fade>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.length > 0 ? (
          gallery.map(item => <UpdateGallery key={item._id} promise={item} />)
        ) : (
          <p className="text-center text-xl col-span-full">
            You have not added any artworks yet.
          </p>
        )}
      </div>
    </>

  );
};

export default MyGallery;

