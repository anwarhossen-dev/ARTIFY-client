import React from 'react';

const ArtistCard = ({art}) => {
    return (
        <div className="card bg-white rounded-xl shadow-sm p-5">
  
   <img className='w-full h-60 rounded-xl' src={art.imageUrl} alt="" />
 
  <div className="pt-5">
    <h1><span className='font-medium'>Name:</span> {art.artistName}</h1>
    <p><span className='font-medium'>Mediums:</span> <span> {art.mediums}</span></p>
    <div className="card-actions">
      <p><span className='font-medium underline'>Description:</span> {art.description}</p>
    </div>
  </div>
</div>
    );
};

export default ArtistCard;