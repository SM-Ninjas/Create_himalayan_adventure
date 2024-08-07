import { routes } from "@/lib/routes";

interface TrekAndTours {
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
        name: "",
        slug: "Kalikasthan_Thulakot_Day_Hike",
      },
      {
        name: "",
        slug: "Naudanda_Sarangkot_Day_Hike",
      },
      {
        name: "",
        slug: "Sarangkot_Viewpoint_Hike_from_Pokhara",
      },
      {
        name: "",
        slug: "Pumdikot_Hike_with_World_Peace_Pagoda",
      },
      {
        name: "Five Himalayan Viewpoint Tour from Pokhara",
        slug: "five_himalayan_viewpoint_tour_pokhara",
      },
      {
        name: "Pokhara Day Tour with Sunrise View from Sarangkot",
        slug: "pokhara_day_tour_sunrise_sarangkot",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Multiple Day Tours",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Day Hikes From Kathmandu",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Helicopter Tour In Nepal",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Day Tours From Kathmandu",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Adventure Activities in Pokhara",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Helicopter Flights In Nepal",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Rafting In Nepal",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Wildlife Tours",
    options: [
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
      {
        name: "",
        slug: "",
      },
    ],
    route: routes.treks,
  },
];
