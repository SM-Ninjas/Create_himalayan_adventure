import { useQuery } from "@tanstack/react-query";

const fetchActivitiesByLocation = async (country: string) => {
  const response = await fetch(
    `http://localhost:8802/api/activities/country/${location}`
  );
  if (!response.ok) throw new Error("Failed to fetch activities by country");
  return response.json();
};

const useActivitiesByLocationHook = (country: string) => {
  return useQuery({
    queryKey: ["activities", country],
    queryFn: () => fetchActivitiesByLocation(country),
  });
};

export default useActivitiesByLocationHook;
