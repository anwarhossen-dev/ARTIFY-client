import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { Link } from 'react-router';


const ArtWorkCard = ({ promise }) => {
  const { _id } = promise;
  return (
    //         <div className="card bg-[#fcf9f8] dark:text-gray-900 shadow-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-100">
    //   {/* <figure className="">
    //     <img
    //       src={promise.ImageURL}
    //       alt="Shoes"
    //       className=" w-full h-60" />
    //   </figure> */}
    //   <div className="card-body pt-2 px-4">
    //     <h2 className="card-title text-xl">{promise.title}</h2>
    //     <div className='flex justify-between items-center'>
    //       <div>
    //       <div className='font-bold'>Artist : <span className='font-semibold'>{promise.artistname}</span></div>
    //       <p className='font-bold'>Category : <span className='font-semibold'>{promise.category}</span></p>
    //     </div>
    //     <div className='flex items-center gap-3 bg-gray-400 px-2 py-1 rounded-xl'>
    //       <AiTwotoneLike className='w-7 h-7 text-pink-500' /><span className='font-semibold text-xl'>{promise.likes}</span>
    //     </div>
    //     </div>
    //     <div className="">
    //       <Link to={`/artwork-details/${_id}`} className="btn btn-secondary">View Details</Link>
    //     </div>
    //   </div>
    // </div>

    // <div className="card bg-[#fcf9f8] dark:text-gray-900 shadow-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-100">
    //   <figure className="">
    //     <img
    //       src={promise.ImageURL}
    //       alt="Shoes"
    //       className=" w-[50px] h-60" />
    //   </figure>
    //   <div className="card-body pt-2 px-4">
    //     <h2 className="card-title text-xl">{promise.title}</h2>
    //     <div className='flex justify-between items-center'>
    //       <div>
    //         <div className='font-bold'>Artist : <span className='font-semibold'>{promise.artistname}</span></div>
    //         <p className='font-bold'>Category : <span className='font-semibold'>{promise.category}</span></p>
    //       </div>
    //       <div className='flex items-center gap-3 bg-gray-400 px-2 py-1 rounded-xl'>
    //         <AiTwotoneLike className='w-7 h-7 text-pink-500' /><span className='font-semibold text-xl'>{promise.likes}</span>
    //       </div>
    //     </div>
    //     <div className="">
    //       <Link to={`/artwork-details/${_id}`} className="btn btn-secondary">View Details</Link>
    //     </div>
    //   </div>
    // </div>

     <div className="bg-[#fcf9f8] dark:text-gray-900 shadow-md rounded-xl 
                    hover:shadow-xl transition-all duration-200 hover:-translate-y-1 
                    flex flex-col h-full">

      {/* Image */}
      <figure>
        <img
          src={promise.ImageURL}
          alt={promise.title}
          className="w-full h-60 object-cover rounded-t-xl"
        />
      </figure>

      {/* Body */}
      <div className="p-4 flex flex-col justify-between flex-grow">

        <div>
          <h2 className="text-xl font-semibold mb-2">{promise.title}</h2>

          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="font-bold">
                Artist:
                <span className="font-medium"> {promise.artistname}</span>
              </p>

              <p className="font-bold">
                Category:
                <span className="font-medium"> {promise.category}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-xl">
              <AiTwotoneLike className="w-6 h-6 text-pink-500" />
              <span className="font-semibold text-lg">
                {promise.likes}
              </span>
            </div>
          </div>
        </div>

        <Link
          to={`/artwork-details/${_id}`}
          className="btn btn-secondary mt-4 w-full"
        >
          View Details
        </Link>
      </div>

    </div>
  );
};

export default ArtWorkCard;

// import React from 'react';
// import { AiTwotoneLike } from 'react-icons/ai';
// import { Link } from 'react-router-dom'; // Fixed: was 'react-router' → should be 'react-router-dom'

// const ArtWorkCard = ({ art }) => {
//   // Renamed from 'promise' → 'art' for clarity and consistency
//   const { _id, ImageURL, title, artistname, category, likes = 0 } = art || {};

//   // Safety guard if art is undefined/missing
//   if (!art) {
//     return null; // or a skeleton loader
//   }

//   return (
//     <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
//                     hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 
//                     flex flex-col h-full border border-gray-100 dark:border-gray-700">

//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <img
//           src={ImageURL || '/fallback-art.jpg'} // Add a fallback image path if needed
//           alt={title || 'Artwork'}
//           className="w-full h-64 object-cover transition-transform duration-500 
//                      group-hover:scale-110"
//           loading="lazy" // Performance boost
//         />
//         {/* Optional overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
//                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 
//                         pointer-events-none" />
//       </div>

//       {/* Card Body */}
//       <div className="p-6 flex flex-col flex-grow">

//         {/* Title */}
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
//           {title}
//         </h3>

//         {/* Artist & Category */}
//         <div className="space-y-2 mb-4 text-sm">
//           <p className="text-gray-700 dark:text-gray-300">
//             <span className="font-semibold">Artist:</span> {artistname || 'Unknown'}
//           </p>
//           <p className="text-gray-700 dark:text-gray-300">
//             <span className="font-semibold">Category:</span>{' '}
//             <span className="capitalize">{category || 'Uncategorized'}</span>
//           </p>
//         </div>

//         {/* Likes */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 
//                           px-4 py-2 rounded-full">
//             <AiTwotoneLike className="w-5 h-5 text-pink-600 dark:text-pink-400" />
//             <span className="font-bold text-gray-800 dark:text-gray-200">
//               {likes}
//             </span>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <Link
//           to={`/artwork-details/${_id}`}
//           className="mt-auto w-full bg-gradient-to-r from-indigo-600 to-purple-600 
//                      hover:from-indigo-700 hover:to-purple-700 
//                      text-white font-semibold py-3 px-6 rounded-xl 
//                      text-center transition-all duration-200 
//                      shadow-md hover:shadow-lg"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ArtWorkCard;