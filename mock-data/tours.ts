import { routes } from "@/lib/routes";

export interface TrekAndTours {
  name: string;
  options: { name: string; slug: string }[];
  route: string;
}


export const tourRegions: TrekAndTours[] = [
  {
    name: "Day Hikes and Tours From Pokhara",
    options: [
      {
        name: "Astam Village Day Hiking from Pokhara",
        slug: "Astam_Village_Day_Hiking",
      },
      {
        name: "Australian Camp Day Hike from Pokhara",
        slug: "Australian_Camp_Day_Hike",
      },
      {
        name: "Kahun Danda Hiking from Pokhara",
        slug: "Kahun_Danda_Hiking",
      },
      {
        name: "Kalikasthan Thulakot Day Hike from Pokhara",
        slug: "Kalikasthan_Thulakot_Day_Hike",
      },
      {
        name: "Naudanda Sarangkot Day Hike",
        slug: "Naudanda_Sarangkot_Day_Hike",
      },
      {
        name: "Sarangkot Viewpoint Hike from Pokhara",
        slug: "Sarangkot_Viewpoint_Hike_from_Pokhara",
      },
      {
        name: "Pumdikot Hike with World Peace Pagoda",
        slug: "Pumdikot_Hike_with_World_Peace_Pagoda",
      },
      {
        name: "Five Himalayan Viewpoint Tour from Pokhara",
        slug: "five_himalayan_viewpoint_tour_pokhara",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Multiple Day Tours",
    options: [
      {
        name: "Nepal Golden Triangle Tour - 8 Days",
        slug: "Nepal_Golden_Triangle_Tour",
      },
      {
        name: "Nepal Tour Packages from Dhaka Bangladesh - 4 Days",
        slug: "Nepal_Tour_Packages_from_Dhaka_Bangladesh",
      },
      {
        name: "Glimpse of Nepal Tour - 5 Days",
        slug: "Glimpse_Of_Nepal_Tour",
      },
      {
        name: "Nepal Tour Package from India - 5 Days",
        slug: "Nepal_Tour_Package_From_India",
      },
      {
        name: "Buddhist Pilgrimage Tour in Nepal – 8 Days",
        slug: "buddhist_pilgrimage_tour_nepal",
      },
      {
        name: "Nepal Beauty Tour - 6 Days",
        slug: "Nepal_Beauty_Tour_6_Days",
      },
      {
        name: "Pokhara Valley Tour - 2 Days",
        slug: "Pokhara_Valley_Tour",
      },
      {
        name: "Nepal Adventure Tour - 8 Days",
        slug: "Nepal_Adventure_Tour",
      },
      {
        name: "Muktinath Darshan by Jeep",
        slug: "Muktinath_Darshan_by_Jeep",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Day Hikes From Kathmandu",
    options: [
      {
        name: "Champadevi Day Hike - 1 Day",
        slug: "champadevi_day_hike",
      },
      {
        name: "Nagarjung Jamcho Day Hike - 1 Day",
        slug: "nagarjung_jamcho_day_hike",
      },
      {
        name: "Namobuddha to Panauti Day Hiking - 1 Day",
        slug: "namobuddha_panauti_day_hike",
      },
      {
        name: "Nagarkot Sunrise View and Nagarkot to Changunarayan Hike",
        slug: "nagarkot_sunrise_view_changunarayan_hike",
      },
      {
        name: "Nagarkot to Dhulikhel Day Hiking Trip – 1 Day",
        slug: "nagarkot_dhulikhel_day_hike",
      },
      {
        name: "Phulchoki Day Hiking",
        slug: "Phulchoki_Day_Hiking",
      },
      {
        name: "Shivapuri Day Hike",
        slug: "Shivapuri_Day_Hike",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Helicopter Tour In Nepal",
    options: [
      {
        name: "Annapurna Base Camp Helicopter Tour",
        slug: "Annapurna_Base_Camp_Helicopter_Tour",
      },
      {
        name: "Damodar Kund - Muktinath Helicopter Day Tour",
        slug: "Damodar_Kund_Muktinath_Helicopter_Tour",
      },
      {
        name: "Muktinath Helicopter Tour from Pokhara",
        slug: "Muktinath_Helicopter_Tour",
      },
      {
        name: "Everest Base Camp Helicopter Tour with Landing at Everest View Hotel",
        slug: "Everest_Base_Camp_Helicopter_Tour",
      },
      {
        name: "Langtang Helicopter Tour from Kathmandu",
        slug: "Langtang_Helicopter_Tour",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Day Tours From Kathmandu",
    options: [
      {
        name: "Seven World Heritage Kathmandu Day Tour",
        slug: "Seven_World_Heritage_Kathmandu_Day_Tour",
      },
      {
        name: "Chandragiri Hill Day Tour",
        slug: "Chandragiri_Hill_Day_Tour",
      },
      {
        name: "Kathmandu City Tour",
        slug: "Kathmandu_City_Tou",
      },
      {
        name: "Everest Mountain Sightseeing Flight by Plane",
        slug: "Everest_Mountain_Sightseeing_Flight_By_Plane",
      },
      {
        name: "Bungmati-Khokana Village Tour",
        slug: "Bungmati_Khokana_Village_Tour",
      },
      {
        name: "Paragliding in Nepal",
        slug: "Paragliding_in_Nepal",
      },
      {
        name: "Kathmandu Day Tour",
        slug: "Kathmandu_Day_Tour",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Adventure Activities in Pokhara",
    options: [
      {
        name: "Bungee Jumping in Pokhara",
        slug: "Bungee_Jumping_Pokhara",
      },
      {
        name: "Seti River Rafting in Pokhara",
        slug: "Rafting_Pokhara",
      },
      {
        name: "Sarangkot to Hemja, Pokhara, Nepal",
        slug: "Zipline_Pokhara",
      },
      {
        name: "Ultra Light Flight in Pokhara Nepal",
        slug: "Ultra_Light_Flight_Pokhara",
      },
      {
        name: "Paragliding in Pokhara Nepal",
        slug: "Paragliding_Pokhara",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Helicopter Flights In Nepal",
    options: [
      {
        name: "Lukla to Kathmandu Helicopter Flight - 1 Hour",
        slug: "Lukla_to_Kathmandu_Helicopter_Flight",
      },
      {
        name: "Kathmandu to Lukla Helicopter Flight - 1 Hour",
        slug: "Kathmandu_to_Lukla_Helicopter_Flight",
      },
      {
        name: "Gorakshep to Kathmandu Helicopter Flight - 3 Hours",
        slug: "Gorakshep_to_Kathmandu_Helicopter_Flight",
      },
      {
        name: "Gorakshep to Lukla Helicopter Flight - 20 Minutes",
        slug: "Gorakshep_to_Lukla_Helicopter_Flight",
      },
      {
        name: "Kalapatthar to Kathmandu Helicopter Flight",
        slug: "Kalapatthar_to_Kathmandu_Helicopter_Flight",
      },
      {
        name: "Namche to Kathmandu Helicopter Flight",
        slug: "Namche_to_Kathmandu_Helicopter_Flight",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Rafting In Nepal",
    options: [
      {
        name: "Trishuli River Rafting - 1 Day",
        slug: "Trishuli_River_Rafting",
      },
      {
        name: "1 Night 2 Days Trishuli River Rafting",
        slug: "Night_Days_Trishuli_River_Rafting",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Wildlife Tours",
    options: [
      {
        name: "3 Nights 4 Days Chitwan National Park Tour",
        slug: "Chitwan_National_Park_Tour",
      },
      {
        name: "2 Nights 3 Days Chitwan National Park Tour",
        slug: "Chitwan_National_Park_Tour_2N3D",
      },
      {
        name: "3 Nights 4 Days Bardia National Park Tour",
        slug: "Bardia_National_Park_Tour",
      },
      {
        name: "Bardia Jungle Safari Tour",
        slug: "Bardia_Jungle_Safari_Tour",
      },
    ],
    route: routes.treks,
  },
];
