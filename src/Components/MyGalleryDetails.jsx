import React, {  use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthContext';
import axios from 'axios';
//import { AuthContext } from '../Provider/AuthContext';

const MyGalleryDetails = () => {
        const {user} = use(AuthContext)
        const [gallery,setGallery] = useState([])
        const {id} = useParams()
        const navigate = useNavigate()
    
        useEffect(()=>{
          if(!user){
            return
          }
            axios(`http://localhost:3000/addArtwork/${id}`)
            .then(res => res.json())
            .then(data => {
                setGallery(data)
            })
        },[id,user])

        const handleDeleteButton = () =>{
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
    axios(`http://localhost:3000/addArtwork/${gallery._id}`)
    .then(res => res.json())
    .then(()=>{
        navigate('/my-gallery')
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    })
    
  }
});

        }
    return (
        <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
           <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
             <div>
                
                <img className='w-170 md:h-90 rounded-xl ' src={gallery.ImageURL} alt="" />
               <div className=' mt-15  space-x-5 md:pl-15'>
                 <Link to={`/updated-artwork/${id}`} className='btn btn-secondary px-9'>Update </Link>
                
            <button onClick={handleDeleteButton} className='btn btn-primary px-10'>Delete</button>
               </div>
            
             </div>
            <div className='w-80 h-full card p-3 bg-base-300 items-center '>
                <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
                <img className='w-56 h-56 rounded-full object-center' src={gallery.artistPhoto} alt="" />
                <div className=' p-2 rounded-xl mt-3'>
                    <h1 className='font-semibold'>Name : <span className='font-medium'>{gallery.name}</span></h1>
                <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{gallery.totalArtworks}</span></p>
                </div>
            </div>
            </div>
            
            <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
                <h1 className='font-bold text-pink-400 text-2xl'>{gallery.title}</h1>
                <p className=''><span className='font-semibold '>Artist:</span> {gallery.artistname}</p>
                <p className=''><span className='font-semibold '>Medium:</span> {gallery.tools}</p>
                <p className='mb-10 '><span className='font-bold italic underline'>Description:</span> {gallery.description}</p>
                <Link to="/my-gallery" className='btn btn-secondary mb-10'>Back Gallery</Link>
           </div>
        </div>
    );
};

export default MyGalleryDetails;