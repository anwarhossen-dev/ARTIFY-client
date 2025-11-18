import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const FavoriteDetails = ({ promise}) => {
  const navigate = useNavigate()
  const handleFavoriteButton =async() => {
    

    const unf = await axios(`http://localhost:3000/favoriteArt/${promise._id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }

    })
    if (unf.status === 200) {
       let timerInterval;
        Swal.fire({
          position: "top",
          width: 400,
          icon: "success",
          title: "Done it",
          showConfirmButton: false,
          html: " <b></b> .",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 10);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        })
        navigate('/explore-artworks')
      }
    console.log(unf);

      // .then(res => res.json())
      // .then(() => {
      //   if (typeof onDeleted === 'function') {
      //     onDeleted(promise._id);
      //   }
      //  
      // })


  }
  return (
    // <div className="card bg-[#fcf9f8] dark:text-gray-900 shadow-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-100">
    //   <figure className="">
    //     <img
    //       src={promise.ImageURL}
    //       alt="Shoes"
    //       className=" w-full h-60" />
    //   </figure>
    //   <div className="card-body pt-2 px-4">
    //     <h2 className="card-title text-xl">{promise.title}</h2>
    //     <div className='flex justify-between items-center'>
    //       <div>
    //         <div className='font-bold'>Artist : <span className='font-semibold'>{promise.artistname}</span></div>
    //         <p className='font-bold'>Category : <span className='font-semibold'>{promise.category}</span></p>
    //       </div>
    //       <div className='flex items-center gap-3  px-2 py-1 rounded-xl'>

    //       </div>
    //     </div>
    //     <div className="flex justify-between">
    //       <Link to={`/my-favortie-details/${promise._id}`} className="btn btn-secondary">View Details</Link>
    //       <button onClick={handleFavoriteButton} className='btn btn-primary'>UnFavorite</button>
    //     </div>
    //   </div>
    // </div>

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
        <div className='flex items-center gap-3  px-2 py-1 rounded-xl'>
         
        </div>
        </div>
        <div className="flex justify-between">
          <Link to={`/my-favortie-details/${promise._id}`} className="btn btn-secondary">View Details</Link>
          <button onClick={handleFavoriteButton} className='btn btn-primary'>UnFavorite</button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteDetails;