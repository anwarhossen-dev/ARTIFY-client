import axios from 'axios';
import React, {  useEffect, useState } from 'react';
//import { AuthContext } from '../Provider/AuthContext';
import { Link, useNavigate, useParams} from 'react-router';
import { toast } from 'react-toastify';

const MyFavoriteDetails = () => {
        const {id} = useParams()
        const [count,setcount] = useState({})
        const navigate = useNavigate()
    
        useEffect(()=>{
           
            axios(`http://localhost:3000/favoriteArt/${id}`)
            .then(res => res.json())
            .then(data =>{
                setcount(data)
            })
        },[id])
    
       
    
        const handleFavoriteButton = () =>{
    
            axios(`http://localhost:3000/favoriteArt/${count._id}`,{
                method: "DELETE"
                
            })
            .then(res => res.json())
                toast.success('Add Favorite Artwork')
           navigate('/my-favorites')
        }
    
    
        return (
            <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
               <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
                 <div>
                    
                    <img className='w-170 md:h-90 rounded-xl ' src={count.ImageURL} alt="" />
                   <div className=' mt-15 space-x-5 md:pl-15'>
                     
                     
                <button onClick={handleFavoriteButton} className='btn btn-primary px-10'>UnFavorites</button>
                   </div>
                
                 </div>
                <div className='w-80 h-full card p-3 bg-base-300 items-center '>
                    <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
                    <img className='w-56 h-56 rounded-full object-center' src={count.artistPhoto} alt="" />
                    <div className=' p-2 rounded-xl mt-3'>
                        <h1 className='font-semibold'>Name : <span className='font-medium'>{count.name}</span></h1>
                    <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{count.totalArtworks}</span></p>
                    </div>
                </div>
                </div>
                
                <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
                    <h1 className='font-bold text-pink-400 text-2xl'>{count.title}</h1>
                    <p className=''><span className='font-medium'>Artist:</span> {count.artistname}</p>
                    <p><span className='font-medium'>Medium:</span> {count.tools}</p>
                    <p className='mb-10'><span className='font-bold italic underline'>Description:</span> {count.description}</p>
                    <Link to="/explore-artworks" className='btn btn-secondary mb-10'>Back Explore </Link>
               </div>
            </div>
        );
    };

export default MyFavoriteDetails;