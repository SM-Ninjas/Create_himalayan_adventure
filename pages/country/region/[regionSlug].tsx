import useActivitiesByRegionHook from "@/hooks/useActivitiesByRegion";
import { useRouter } from "next/router";
import React from "react";
import ActivityCard from "@/components/ui/Activity";
import Spinner from "@/components/spinner";

function RegionPage() {
  const router = useRouter();
  const regionslug = router.query.regionSlug;

  const { data, isLoading, isError, error } = useActivitiesByRegionHook(
    regionslug as string
  );

  if (isLoading)
    return (
      <div className="">
        <Spinner />
      </div>
    );
  if (isError) return <div>Error loading activities: {error.message}</div>;

  const formatCategoryName = (name: string) => {
    return name
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>
      <div className="relative flex justify-center">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/70 to-blue-900/30"></div>
        <img
          src="/images/about1.jpg"
          className="h-[400px] w-full object-cover"
          alt="Region Background"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-center text-white title-text">
            Activities in{" "}
            <span className="capitalize">
              {formatCategoryName(data?.region ?? "")}
            </span>
          </h1>
        </div>
      </div>

      <div className="container mt-10">
        <h2 className="text-center text-lg font-semibold"></h2>

        {data?.activities && data.activities.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
            {data.activities.map((activity: any, index: number) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        ) : (
          <p>No activities found for this region.</p>
        )}
      </div>
    </div>
  );
}

export default RegionPage;
