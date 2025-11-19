// // // import React from 'react';
// // // import { AiTwotoneLike } from 'react-icons/ai';
// // // import { Link } from 'react-router';

// // // const UpdateGallery = ({ promise }) => {
// // //   return (
// // //      <div className="card bg-[#fcf9f8] dark:text-gray-900 shadow-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-100">
// // //       <figure className="">
// // //         <img
// // //           src={promise.ImageURL}
// // //           alt="Shoes"
// // //           className=" w-full h-60" />
// // //       </figure>
// // //       <div className="card-body pt-2 px-4">
// // //         <h2 className="card-title text-xl">{promise.title}</h2>
// // //         <div className='flex justify-between items-center'>
// // //           <div>
// // //           <div className='font-bold'>Artist : <span className='font-semibold'>{promise.artistname}</span></div>
// // //           <p className='font-bold'>Category : <span className='font-semibold'>{promise.category}</span></p>
// // //         </div>
// // //         <div className='flex items-center gap-3 bg-gray-400 px-2 py-1 rounded-xl'>
// // //           <AiTwotoneLike className='w-7 h-7 text-pink-500' /><span className='font-semibold text-xl'>{promise.likes}</span>
// // //         </div>
// // //         </div>
// // //         <div className="">
// // //           <Link to={`/my-gallery-details/${promise._id}`} className="btn btn-secondary">View Details</Link>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default UpdateGallery;


// // import React from 'react';
// // import { AiTwotoneLike } from 'react-icons/ai';
// // import { Link } from 'react-router';

// // const UpdateGallery = ({ promise }) => {
// //   return (
// //     <div className="card bg-[#fcf9f8] dark:text-gray-900 shadow-md rounded-xl transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg">
      
// //       {/* Artwork Image */}
// //       <figure>
// //         <img
// //           src={promise.ImageURL}
// //           alt={promise.title}
// //           className="w-full h-60 md:h-64 lg:h-72 object-cover rounded-t-xl"
// //         />
// //       </figure>

// //       {/* Card Body */}
// //       <div className="card-body pt-3 px-4">
// //         <h2 className="card-title text-xl font-semibold">{promise.title}</h2>

// //         <div className="flex justify-between items-center mt-2">
// //           <div>
// //             <p className="font-bold">Artist: <span className="font-medium">{promise.artistname}</span></p>
// //             <p className="font-bold">Category: <span className="font-medium">{promise.category}</span></p>
// //           </div>

// //           <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-xl">
// //             <AiTwotoneLike className="w-6 h-6 text-pink-500" />
// //             <span className="font-semibold text-lg">{promise.likes}</span>
// //           </div>
// //         </div>

// //         <Link
// //           to={`/my-gallery-details/${promise._id}`}
// //           className="btn btn-secondary mt-4 w-full text-center"
// //         >
// //           View Details
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UpdateGallery;

// import React from 'react';
// import { AiTwotoneLike } from 'react-icons/ai';
// import { Link } from 'react-router';

// const UpdateGallery = ({ promise }) => {
//   return (
//     <div className="card bg-[#fcf9f8] dark:text-gray-900 shadow-md rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
//       {/* Artwork Image */}
//       <figure>
//         <img
//           src={promise.ImageURL}
//           alt={promise.title}
//           className="w-full h-60 object-cover rounded-t-lg"
//         />
//       </figure>

//       {/* Card Body */}
//       <div className="card-body pt-3 px-4">
//         <h2 className="card-title text-xl font-semibold">{promise.title}</h2>

//         <div className="flex justify-between items-center mt-2">
//           <div>
//             <p className="font-bold">
//               Artist: <span className="font-medium">{promise.artistname}</span>
//             </p>
//             <p className="font-bold">
//               Category: <span className="font-medium">{promise.category}</span>
//             </p>
//           </div>

//           <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-xl">
//             <AiTwotoneLike className="w-6 h-6 text-pink-500" />
//             <span className="font-semibold text-lg">{promise.likes}</span>
//           </div>
//         </div>

//         <Link
//           to={`/my-gallery-details/${promise._id}`}
//           className="btn btn-secondary mt-3 w-full text-center"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UpdateGallery;


import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { Link } from 'react-router';

const UpdateGallery = ({promise}) => {
        return (
            <div className=" bg-[#fcf9f8] dark:text-gray-900 shadow-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-100 mt-10 mb-10">
      <figure className="">
        <img
          src={promise.ImageURL}
          alt="Shoes"
          className=" w-full h-60" />
      </figure>
      <div className="card-body pt-2 px-4">
        <h2 className="card-title text-xl">{promise.title}</h2>
        <div className='flex justify-between items-center'>
          <div>
          <div className='font-bold'>Artist : <span className='font-semibold'>{promise.artistname}</span></div>
          <p className='font-bold'>Category : <span className='font-semibold'>{promise.category}</span></p>
        </div>
        <div className='flex items-center gap-3 bg-gray-400 px-2 py-1 rounded-xl'>
          <AiTwotoneLike className='w-7 h-7 text-pink-500' /><span className='font-semibold text-xl'>{promise.likes}</span>
        </div>
        </div>
        <div className="">
          <Link to={`/my-gallery-details/${promise._id}`} className="btn btn-secondary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateGallery;


