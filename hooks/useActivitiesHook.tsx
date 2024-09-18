import { useQuery } from "@tanstack/react-query";

const fetchActivities = async () => {
    const response = await fetch("http://localhost:8082/api/activities");
    if (!response.ok) throw new Error("Failed to fetch activities");
    return response.json();
};

const useActivitiesHook = () => {
    return useQuery({
        queryKey: ["activities"],
        queryFn: fetchActivities,
    });
};
