import React from "react";
import Image from "next/image";
import img1 from "../../public/images/img1.png";
import img2 from "../../public/images/img2.png";
import img3 from "../../public/images/img3.png";
import img4 from "../../public/images/img4.png";
import img5 from "../../public/images/img5.png";
import img6 from "../../public/images/img6.png";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6]; // Include all imported images
  return (
    <div className="mt-12">
      <div>
        <h1 className="title-text font-semibold mb-6">Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i}>
              <Image
                src={img}
                alt={`myimg-${i}`}
                className=" object-cover h-[300px] rounded-[8px]"
                // layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
