import { useState } from 'react';
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

  const photos = galleryData.filter(item => item.type === 'treks' || "tours" || "international_tours").map((item, index) => ({
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
    return <div>No tours found for {location}</div>;
  }

  return (
    <div className="container mx-auto p-2 mt-4">
      <h2 className="title-text font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"> 
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-sm shadow-lg cursor-pointer ${photo.isLarge ? 'col-span-2 row-span-2' : ''}`}
            whileHover={{ scale: 1.05, rotate: photo.isLarge ? 2 : -2 }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 z-10">
              <h3 className="subtitle-text font-bold">{photo.title}</h3>
              <p className='capitalize emphasized-text bg-gray-300 text-black px-1 w-fit'>{photo.type}</p>
              <Link href={photo.slug}>
                <p className="mt-2 inline-block bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-gray-300 hover:text-black transition">View Details</p>
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
