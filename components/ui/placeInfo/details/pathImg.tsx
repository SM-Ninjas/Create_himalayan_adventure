import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface PathImageTypes {
  pathImg?: string | undefined;
  mapCenter: google.maps.LatLngLiteral; // Add center for map
  zoom: number; // Add zoom level for the map
}

function PathImg({ pathImg, mapCenter, zoom }: PathImageTypes) {
  // Define the container style for the map
  const containerStyle = {
    width: '800px',
    height: '400px'
  };

  return (
    <div>
      {/* <div className="mt-4">
        <img
          src={pathImg}
          height={400}
          width={800}
          alt="Path Image"
        />
      </div> */}

      <div className="mt-4">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={zoom}
          >
            {/* You can add markers or other components here */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default PathImg;
