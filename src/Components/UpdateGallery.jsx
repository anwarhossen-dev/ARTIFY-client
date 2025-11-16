import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { Link } from 'react-router';

const UpdateGallery = ({promise}) => {
        return (
            <div className="card bg-[#fcf9f8] dark:text-gray-900 shadow-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-100">
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