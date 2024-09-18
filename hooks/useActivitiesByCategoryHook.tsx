import { useQuery } from "@tanstack/react-query";

const fetchActivitiesByCategory = async (category?: string) => {
  if (!category) {
    throw new Error("Category is required");
  }

  const response = await fetch(
    `http://localhost:8802/api/activities/category/${category}`
  );
  if (!response.ok) throw new Error("Failed to fetch activities by category");
  return response.json();
};

const useActivitiesByCategoryHook = (category: string | undefined) => {
  return useQuery({
    queryKey: ["activities", category],
    queryFn: () => fetchActivitiesByCategory(category),
    enabled: !!category, // Only run the query if category is defined
  });
};

export default useActivitiesByCategoryHook;
