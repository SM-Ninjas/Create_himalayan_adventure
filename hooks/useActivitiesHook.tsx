import { useQuery } from "@tanstack/react-query";

const fetchActivities = async (type, location, level) => {
    const query = new URLSearchParams({ type, location, level }).toString();
    const response = await fetch(`http://localhost:8802/api/activities?${query}`);
    if (!response.ok) {
        throw new Error("Failed to fetch activities");
    }
    return response.json();
};

const useActivities = (type, location, level) => {
    return useQuery({
        queryKey: ["activities", type, location, level],
        queryFn: () => fetchActivities(type, location, level),
        enabled: !!type, // Ensures it's only fetched when type is selected
    });
};

export default useActivities;
