import { useQuery } from "@tanstack/react-query";

interface ActivityData {
  region: string;
  country: string;
  activities: any[]; // Replace 'any' with your Activity type if available
}

const fetchActivitiesByRegion = async (
  region: string
): Promise<ActivityData> => {
  const response = await fetch(
    `http://localhost:8802/api/activities/region/${region}`
  );
  if (!response.ok) throw new Error("Failed to fetch activities by region");
  return response.json();
};

const useActivitiesByRegionHook = (region: string) => {
  return useQuery<ActivityData, Error>({
    queryKey: ["activities", "region", region],
    queryFn: () => fetchActivitiesByRegion(region),
    enabled: !!region, // Only run the query if region is truthy
  });
};

export default useActivitiesByRegionHook;
