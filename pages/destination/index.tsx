import useLocations from "@/hooks/useLocationHook";
import React from "react";

function Destinations() {
  const { data } = useLocations();
  console.log(data);
  return <div className="py-80">hello this is by location</div>;
}

export default Destinations;
