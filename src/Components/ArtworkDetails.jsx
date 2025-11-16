import React from 'react';

const ArtworkDetails = ({data}) => {
    return (
        <div>
            <div>
                <img src={data.ImageURL} alt="" />
            </div>
        </div>
    );
};

export default ArtworkDetails;