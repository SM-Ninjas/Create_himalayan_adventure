import { useQuery } from "@tanstack/react-query";

const fetchAllActivities = async () => {
    const response = await fetch("http://localhost:8802/api/activities");
    if (!response.ok) {
        throw new Error("Failed to fetch activities");
    }
    // console.log(await response.json() , "from hook")
    return response.json();
};

const useAllActivities = () => {
    return useQuery({
        queryKey: ["allActivities"],
        queryFn: fetchAllActivities,
    });
};

export default useAllActivities;
