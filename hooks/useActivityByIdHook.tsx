import { useQuery } from "@tanstack/react-query";

const fetchActivityById = async (id:{id:string}) => {
    const response = await fetch(`http://localhost:8082/api/activities/${id}`);
    if (!response.ok) throw new Error("Failed to fetch activity");
    return response.json();
};

const useActivityByIdHook = (id:{id:string}) => {
    return useQuery({
        queryKey: ["activity", id],
        queryFn: () => fetchActivityById(id),
    });
};

export default useActivityByIdHook