import React, { useState, useEffect } from 'react';

import image1 from '../../public/d kiba.jpg';
import image2 from '../../public/d naruto.jpg';
import image3 from '../../public/d shinigami.jpg';
import image4 from '../../public/sasuke.jpg';





const ImageChanger = () => {
    const [imageIndex, setImageIndex] = useState(0);

    // Use the actual imported image paths in the array
    const images = [image1, image2, image3, image4];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    return (
        <div>
            <center>
            {/* Display the current image */}
            <img 
                src={images[imageIndex]} 
                alt={`Image ${imageIndex + 1}`} 
                style={{ width: '600px', height: '600px', objectFit: 'cover' }}
            />
            </center>
        </div>
    );
};

export default ImageChanger;