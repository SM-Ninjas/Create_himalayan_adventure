import { useQuery } from "@tanstack/react-query";


const fetchLocations = async () => {
    const response = await fetch(`http://localhost:8802/api/locations`);
    if (!response.ok) {
        throw new Error("Failed to fetch locations");
    }
    return response.json();
};

const useLocations = () => {
    return useQuery({
        queryKey: ["locations"],
        queryFn: fetchLocations,
    });
};

export default useLocations;
