import { useQuery } from "@tanstack/react-query";

const fetchActivityById = async (id: { id: string }) => {
  const response = await fetch(`http://localhost:8802/api/activities/${id}`);
  if (!response.ok) throw new Error("Failed to fetch activity");
  return response.json();
};

const useActivityByIdHook = (id: { id: string }) => {
  return useQuery({
    queryKey: ["activity", id],
    queryFn: () => fetchActivityById(id),
    enabled: !!id, // only run when id value is truthy (not run when undefined)
  });
};

export default useActivityByIdHook;
