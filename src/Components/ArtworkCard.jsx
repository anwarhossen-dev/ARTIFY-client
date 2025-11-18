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