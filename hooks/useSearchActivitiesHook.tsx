import { useQuery } from "@tanstack/react-query";

const searchActivities = async (activity: string, destination: string) => {
  const response = await fetch(
    `https://server.createhimalaya.com/api/activities/search?activity=${activity}&destination=${destination}`
  );
  if (!response.ok) throw new Error("Failed to search activities");
  return response.json();
};

const useSearchActivitiesHook = (activity: string, destination: string) => {
  return useQuery({
    queryKey: ["searchActivities", activity, destination],
    queryFn: () => searchActivities(activity, destination),
    enabled: !!activity && !!destination,
  });
};

export default useSearchActivitiesHook;
