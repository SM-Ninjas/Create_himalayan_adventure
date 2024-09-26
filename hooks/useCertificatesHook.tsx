import { useQuery } from "@tanstack/react-query";

const fetchCertficates = async () => {
  const response = await fetch(
    "https://server.createhimalaya.com/api/certificates"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch activities");
  }
  // console.log(await response.json() , "from hook")
  return response.json();
};

const useCertificatesHook = () => {
  return useQuery({
    queryKey: ["certificates"],
    queryFn: fetchCertficates,
  });
};

export default useCertificatesHook;
