import { useQuery } from "@tanstack/react-query";

const fetchActivitiesByCategory = async (category) => {
    const response = await fetch(`http://localhost:8082/api/activities/category/${category}`);
    if (!response.ok) throw new Error("Failed to fetch activities by category");
    return response.json();
};

const useActivitiesByCategoryHook = (category) => {
    return useQuery({
        queryKey: ["activities", category],
        queryFn: () => fetchActivitiesByCategory(category),
    });
};
export default useActivitiesByCategoryHook