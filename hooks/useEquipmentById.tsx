// // hooks/useEquipment.ts
// import { useQuery } from "@tanstack/react-query";

// const fetchEquipment = async (equipmentIds: string[]) => {
//   const response = await fetch(`https://server.createhimalaya.com/api/equipments/${equipmentIds.join(",")}`);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await response.json();
//   return data?.data?.equipment; 
// };

// const useEquipment = (equipmentIds: string[]) => {
//   return useQuery({
//     queryKey: ["equipment", equipmentIds],
//     queryFn: () => fetchEquipment(equipmentIds),
//     enabled: equipmentIds.length > 0,
//     staleTime: 1000 * 60 * 5, // 5 minutes
//   });
// };

// export default useEquipment;
