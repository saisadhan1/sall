// Gallery.js
import React from 'react';
import GalleryImage from "./GalleryImage"

const Gallery = () => {
    const images = [
        { src: 'image1.jpg', alt: 'Hairstyle 1' },
        { src: 'image2.png', alt: 'Hairstyle 2' },
        // Add more images as needed
    ];

    return (
        <section id="gallery">
            <h2>Our Gallery</h2>
            <div className="gallery">
                {images.map((image, index) => (
                    <GalleryImage key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        
    </section>
  );
};

export default Gallery;
