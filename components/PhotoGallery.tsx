import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { galleryData } from '@/mock-data/gallaryData';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TrekkingGalleryProps {
  location: 'Bhutan' | 'Tibet';
}

const TrekkingGallery: React.FC<TrekkingGalleryProps> = ({ location }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const photos = galleryData
    .filter(item => item.type === 'treks' || item.type === "tours" || item.type === "international_tours")
    .map((item, index) => ({
      src: item.img,
      width: index % 2 === 0 ? 6 : 3,
      height: index % 3 === 0 ? 2 : 3,
      alt: item.title,
      title: item.title,
      type: item.type,
      isLarge: index % 3 === 0,
      slug: `/${item.type}/${item.slug}`
    }));

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  if (photos.length === 0) {
    return <div className="text-center py-8">No tours found for {location}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
              photo.isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
            }`}
            whileHover={{ scale: 1.03, rotate: photo.isLarge ? 1 : -1 }}
            transition={{ duration: 0.2 }}
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-3 sm:p-4">
              <h3 className="font-bold text-base sm:text-lg md:text-xl truncate">{photo.title}</h3>
              <p className='capitalize text-xs sm:text-sm bg-gray-300 text-black px-2 py-1 rounded-full w-fit mt-1'>{photo.type}</p>
              <Link href={photo.slug}>
                <p className="mt-2 inline-block bg-blue-500 text-white font-semibold text-xs sm:text-sm py-1 px-2 sm:px-3 rounded hover:bg-blue-600 transition">
                  View Details
                </p>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src ?? ''}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          imageTitle={photos[currentImage].title}
          imageCaption={photos[currentImage].type}
        />
      )}
    </div>
  );
};

export default TrekkingGallery;