import React, { use, useEffect, useState } from 'react';
//import { AuthContext } from '../Provider/AuthContext';
//import FavoriteDetails from '../components/FavoriteDetails';
import { AuthContext } from '../../Providers/AuthContext';
import FavoriteDetails from '../../Components/FavoriteDetails';
import axios from 'axios';

const MyFavorites = () => {
   const {user} = use(AuthContext)
       const [gallery,setGallery] = useState([])
   
       useEffect(()=>{
       
           axios(`http://localhost:3000/my-favoriteArt?email=${user.email}`)
           .then(res => res.json())
           .then(data => {
               setGallery(data)
           })
       },[user])

      const handleRemoveFromGallery = (id) => {
    setGallery(prev => prev.filter(item => item._id !== id));
  };
       

       return (
           <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
              {
               gallery.map(promise => <FavoriteDetails key={promise._id} promise={promise} 
                onDeleted={handleRemoveFromGallery}
                 ></FavoriteDetails>)
              }
           </div>
       );
};

export default MyFavorites;