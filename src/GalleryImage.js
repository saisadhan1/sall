import React from 'react';

const GalleryImage = ({ src, alt }) => {
    return (
        <div className="gallery-image">
            <img src={src} alt={alt} />
        </div>
    );
};

export default GalleryImage;
