
import React from 'react';

const ArtistCard = ({ art }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-200">
      
      {/* Artist Image */}
      <img
        className="w-full h-60 object-cover rounded-xl"
        src={art.imageUrl}
        alt={art.artistName}
      />

      {/* Content */}
      <div className="pt-5 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {art.artistName}
        </h2>

        <p className="text-sm text-gray-600">
          <span className="font-medium">Mediums:</span> {art.mediums}
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-medium underline">Description:</span> {art.description}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
