import { useQuery } from "@tanstack/react-query";


const fetchActivitiesByLocation = async (location) => {
    const response = await fetch(`http://localhost:8082/api/activities/location/${location}`);
    if (!response.ok) throw new Error("Failed to fetch activities by location");
    return response.json();
};

const useActivitiesByLocationHook = (location) => {
    return useQuery({
        queryKey: ["activities", location],
        queryFn: () => fetchActivitiesByLocation(location),
    });
};


export default useActivitiesByLocationHook