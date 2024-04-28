import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
  borderRadius: "8px",
};

const center = {
  lat: 27.693527662885593,
  lng: 85.37042298992992,
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDB9tf77jSgS3EraROSzOJLe8kS5VtAmtU",
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // Using map instance for lat and langitute
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="w-[100%]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <>Could not load the map</>
  );
}

export default React.memo(GoogleMaps);
