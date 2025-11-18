
// // // export default Home;
// // import React, { use, useEffect, useState } from 'react';
// // import { AuthContext } from '../../Providers/AuthContext';
// // import Banner from '../../Components/Banner';
// // import Highlights from '../../Components/Highlights';
// // import ArtWorkCard from '../../Components/ArtworkCard';
// // import { useLoaderData } from 'react-router';
// // import { Typewriter } from 'react-simple-typewriter';
// // import { Fade } from 'react-awesome-reveal';
// // import { FaUserAlt } from 'react-icons/fa';
// // import axios from 'axios';
// // import LoadingSpinner from '../../Components/LoadingSpinner';
// // import ArtworkDetails from '../ArtworkDetails/ArtworkDetails';
// // import ArtistCard from '../../Components/ArtistCard';


// // const Home = () => {
// //   const { loading } = use(AuthContext);
// //   const latest = useLoaderData();
// //   const [artists, setArtists] = useState([]);

// //   // useEffect(() => {
// //   //   axios('/artist.json')
// //   //     .then((res) => res.json())
// //   //     .then((data) => setArtists(data))
// //   //     .catch((err) => console.error("Failed to load artists:", err));
// //   // }, []);

// //   useEffect(() => {
// //     axios.get('/artist.json') // GET 
// //       .then((res) => {
// //         setArtists(res.data);  // JSON data set
// //       })
// //       .catch((err) => console.error("Failed to load artists:", err));
// //   }, []);


// //   if (loading) {
// //     return (
// //       <div className='flex justify-center items-center mt-50'>
// //         {/* <span className='loading loading-bars loading-xl'></span> */}
// //         <LoadingSpinner />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div>
// //       {/* Banner */}
// //       <Banner />

// //       {/* Latest Artworks
// //       <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
// //         {
// //           (latest.map((artwork) => <ArtWorkCard key={artwork._id} promise={artwork} />
// //           ))
// //         }
// //       </div> */}

// //       {/* Latest Artworks */}
// //       <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
// //         {
// //         (latest.map((artwork) =><ArtWorkCard key={artwork._id} promise={artwork} />
// //         ))
// //         }
// //       </div>

// //       {/* Top Artists
// //       <div className='w-11/12 mx-auto py-10 my-15 bg-[#f3f4fc] rounded-lg dark:text-black'>
// //         <Fade direction='left' triggerOnce>
// //           <h1 className='text-2xl md:text-4xl font-bold text-center mx-auto pb-10 md:py-15 flex justify-center gap-2'>
// //             <FaUserAlt className='text-[#d319a4] text-center ml-5 mt-1 md:mt-0' />{' '}
// //             <span className='text-[#059ca1]'>
// //               <Typewriter
// //                 words={['Top Artists of the Week']}
// //                 loop={true}
// //                 cursor
// //                 cursorStyle='|'
// //                 typeSpeed={100}
// //                 deleteSpeed={70}
// //                 delaySpeed={1500}
// //               />
// //             </span>
// //           </h1>
// //         </Fade>

// //         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 md:px-10'>
// //           {artists.map((art) => (
// //             <ArtistCard key={art.id} art={art} />
// //           ))}
// //         </div>
// //       </div> */}

// //         {/* Top Artists */}
// //       <div className='w-11/12 mx-auto py-10 my-15 bg-[#f3f4fc] rounded-lg dark:text-black'>
// //         <Fade direction='left' triggerOnce>
// //           <h1 className='text-2xl md:text-4xl font-bold text-center mx-auto pb-10 md:py-15 flex justify-center gap-2'>
// //             <FaUserAlt className='text-[#d319a4] text-center ml-5 mt-1 md:mt-0' />{' '}
// //             <span className='text-[#059ca1]'>
// //               <Typewriter
// //                 words={['Top Artists of the Week']}
// //                 loop={true}
// //                 cursor
// //                 cursorStyle='|'
// //                 typeSpeed={100}
// //                 deleteSpeed={70}
// //                 delaySpeed={1500}
// //               />
// //             </span>
// //           </h1>
// //         </Fade>

// //         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 md:px-10'>
// //           {artists.map((art) => (
// //             <ArtistCard key={art.id} art={art} />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Community Highlights */}
// //       <Highlights />
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthContext';
// import Banner from '../../Components/Banner';
// import Highlights from '../../Components/Highlights';
// import ArtWorkCard from '../../Components/ArtworkCard';
// import { useLoaderData } from 'react-router';
// import { Typewriter } from 'react-simple-typewriter';
// import { Fade } from 'react-awesome-reveal';
// import { FaUserAlt } from 'react-icons/fa';
// import axios from 'axios';
// import LoadingSpinner from '../../Components/LoadingSpinner';
// import ArtistCard from '../../Components/ArtistCard';

// const Home = () => {
//   const { loading } = useContext(AuthContext);
//   const latest = useLoaderData();
//   const [artists, setArtists] = useState([]);

//   // Load top artists data
//   useEffect(() => {
//     axios.get('/artist.json')
//       .then((res) => {
//         setArtists(res.data);
//       })
//       .catch((err) => console.error("Failed to load artists:", err));
//   }, []);

//   if (loading) {
//     return (
//       <div className='flex justify-center items-center mt-50'>
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Banner */}
//       <Banner />

//       {/* Latest Artworks */}
//       <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//         {latest.map((artwork) => (
//           <ArtWorkCard key={artwork._id} promise={artwork} />
//         ))}
//       </div>

//       {/* Top Artists */}
//       <div className='w-11/12 mx-auto py-10 my-15 bg-[#f3f4fc] rounded-lg dark:text-black'>
//         <Fade direction='left' triggerOnce>
//           <h1 className='text-2xl md:text-4xl font-bold text-center mx-auto pb-10 md:py-15 flex justify-center gap-2'>
//             <FaUserAlt className='text-[#d319a4] text-center ml-5 mt-1 md:mt-0' />{' '}
//             <span className='text-[#059ca1]'>
//               <Typewriter
//                 words={['Top Artists of the Week']}
//                 loop={true}
//                 cursor
//                 cursorStyle='|'
//                 typeSpeed={100}
//                 deleteSpeed={70}
//                 delaySpeed={1500}
//               />
//             </span>
//           </h1>
//         </Fade>

//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 md:px-10'>
//           {artists.map((art) => (
//             <ArtistCard key={art.id} art={art} />
//           ))}
//         </div>
//       </div>

//       {/* Community Highlights */}
//       <Highlights />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import Banner from '../../Components/Banner';
import Highlights from '../../Components/Highlights';
import ArtWorkCard from '../../Components/ArtworkCard';
import { useLoaderData } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';
import ArtistCard from '../../Components/ArtistCard';

const Home = () => {
  const { loading } = useContext(AuthContext);
  const latest = useLoaderData();
  const [artists, setArtists] = useState([]);

  // Load Top Artists
  useEffect(() => {
    axios.get('/artist.json')
      .then((res) => setArtists(res.data))
      .catch((err) => console.error("Failed to load artists:", err));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Latest Artworks Section */}
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latest?.map((art) => (
          <ArtWorkCard key={art._id} promise={art} />
        ))}
      </div>

      {/* Top Artists Section */}
      <div className="w-11/12 mx-auto py-10 my-14 bg-[#f3f4fc] rounded-lg dark:text-black">
        <Fade direction="left" triggerOnce>
          <h1 className="text-2xl md:text-4xl font-bold text-center mx-auto pb-10 flex justify-center gap-2">
            <FaUserAlt className="text-[#d319a4] mt-1" />
            <span className="text-[#059ca1]">
              <Typewriter
                words={['Top Artists of the Week']}
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

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 md:px-10">
          {artists?.map((art) => (
            <ArtistCard key={art.id} art={art} />
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 md:px-10">
          {artists?.map((art) => (
            <ArtistCard key={art.id} art={art} />
          ))}
        </div>
      </div>

      {/* Community Highlights */}
      <Highlights />
    </div>
  );
};

export default Home;
