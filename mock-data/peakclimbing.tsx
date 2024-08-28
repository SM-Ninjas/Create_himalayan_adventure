import { routes } from "@/lib/routes";

interface TrekAndTours {
  name: string;
  options: { name: string; slug: string }[];
  route: string;
}
export const internationalRegions: TrekAndTours[] = [
      {
        name: "Peak Climbing",
        options: [
          {
            name: "Island Peak Expedition from Chhukung",
            slug: "Island_Peak_Expedition_from_Chhukung",
          },
        ],
        route: routes.peak_climbing,
      },
];