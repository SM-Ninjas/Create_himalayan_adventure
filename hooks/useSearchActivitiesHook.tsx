// import { useQuery } from "@tanstack/react-query";


// const searchActivities = async (keyword) => {
//     const response = await fetch(`http://localhost:8082/api/activities/search?keyword=${keyword}`);
//     if (!response.ok) throw new Error("Failed to search activities");
//     return response.json();
// };

// const useSearchActivitiesHook = (keyword) => {
//     return useQuery({
//         queryKey: ["searchActivities", keyword],
//         queryFn: () => searchActivities(keyword),
//     });
// };


// export default useSearchActivitiesHook