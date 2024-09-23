import { useQuery } from "@tanstack/react-query";

const fetchActivitiesByCountry = async (country: string) => {
  if (!country) {
    throw new Error("country is required");
  }
  const response = await fetch(
    `http://localhost:8802/api/activities/country/${country}`
  );
  if (!response.ok) throw new Error("Failed to fetch activities by country");
  return await response.json();
};

const useActivitiesByCountryHook = (country: string) => {
  return useQuery({
    queryKey: ["activities", "country", country],
    queryFn: () => fetchActivitiesByCountry(country),
    enabled: !!country, // Only run the query if country is truthy
  });
};

export default useActivitiesByCountryHook;
