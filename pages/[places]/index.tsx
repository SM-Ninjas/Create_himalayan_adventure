import { sliderData } from "@/components/home/CarouselSection";
import { useRouter } from "next/router";
import React from "react";

function PlacesDetails() {
  const router = useRouter();
  const { places } = router.query;
  const filtered = sliderData.filter((slider) => slider.location === places);
  console.log(filtered);

  return (
    <div className="mt-20">
      {/* {transitionData.title} */}
      {filtered.map((place) => (
        <div key={place.id}>
          <h1>{place.title}</h1>
          <h1>Desctiption: {place.description}</h1>
          <img src={place.img} alt="myimg" />
          {place.subImages.map((subImg, i) => (
            <div>
              <img src={subImg} alt="myimg" />
            </div>
          ))}
        </div>
      ))}
      {/* {places} */}
    </div>
  );
}

export default PlacesDetails;
