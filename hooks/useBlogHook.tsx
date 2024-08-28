import { useQuery, useQueryClient } from "@tanstack/react-query";


const fetchBlogs = async () => {
    const response = await fetch("https://server.createhimalaya.com/api/blogs",
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    if (!response.ok) {
        throw new Error("Failed to add todo");
    }
    return response.json();
}


const useBlogHook = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
    });
};

export default useBlogHook;