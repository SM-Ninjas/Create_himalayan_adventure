import { useQuery } from "@tanstack/react-query";

const fetchActivityById = async (id: string) => {
  const response = await fetch(`https://server.createhimalaya.com/api/activities/${id}`);
  if (!response.ok) throw new Error("Failed to fetch activity");
  return response.json();
};

const useActivityByIdHook = (id: string | undefined) => {
  return useQuery({
    queryKey: ["activity", id],
    queryFn: () => fetchActivityById(id!),
    enabled: !!id, // only run when id value is truthy (not run when undefined)
  });
};

export default useActivityByIdHook;
