import useActivitiesByRegionHook from "@/hooks/useActivitiesByRegion";
import { useRouter } from "next/router";
import React from "react";

function RegionPage() {
  const router = useRouter();
  const { regionslug } = router.query;
  const region = typeof regionslug === "string" ? regionslug : "";
  console.log(regionslug)

  const { data, isLoading, isError, error } = useActivitiesByRegionHook(region);

  console.log("Region Page Data:", data);

  if (isLoading) return <div className="py-40">Loading activities...</div>;
  if (isError) return <div>Error loading activities: {error.message}</div>;

  return (
    <div className="my-40">
      {/* <h1>Activities in {data.region}</h1>
      <h2>Country: {data.country}</h2>
      {data.activities && data.activities.length > 0 ? (
        <ul>
          {data.activities.map((activity: any, index: number) => (
            <li key={index}>
              <strong>{activity.title}</strong> - Category: {activity.category}
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities found for this region.</p>
      )} */}
    </div>
  );
}

export default RegionPage;
