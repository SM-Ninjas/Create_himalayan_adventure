import { routes } from "@/lib/routes";

interface PeakClimbing {
  name: string;
  options: {
    name: string;
    slug: string;
  }[];
  route: string;
}

export const peakClimbingRegions: PeakClimbing[] = [
  {
    name: "Everest Region Peak Climbing",
    options: [
      {
        name: "Mera Peak Expedition via Phaplu",
        slug: "mera_peak_expedition_via_phaplu_19_days",
      },
      {
        name: "Island Peak Expedition - 5 Days",
        slug: "Island_Peak_Expedition_5_Days",
      },
      {
        name: "Lobuche East Climbing with EBC, Renjo, and Cho La Pass Trek",
        slug: "Lobuche_East_Climbing_with_EBC_Renjo_and_Cho_La_Pass_Trek",
      },
      {
        name: "Mera Peak Climbing",
        slug: "mera_peak_climbing_14_days",
      },
      {
        name: "Kyajo Ri Peak Climbing - 17 Days",
        slug: "Kyajo_Ri_Peak_Climbing_17_Days",
      },
    ],
    route: routes.peak_climbing,
  },
  {
    name: "Annapurna Region Peak Climbing",
    options: [
      {
        name: "Dhampus Peak Climbing - 14 Days",
        slug: "Dhampus_Peak_Climbing_14_Days",
      },
      {
        name: "Chulu Far East Peak Climbing - 16 Days",
        slug: "chulu_far_east_peak_climbing_16_days",
      },
    ],
    route: routes.peak_climbing,
  },
  {
    name: "Langtang Region Peak Climbing",
    options: [
      {
        name: "Yala Peak Climbing - 14 Days",
        slug: "Yala_Peak_Climbing_14_Days",
      },
    ],
    route: routes.peak_climbing,
  },
  {
    name: "Upper Mustang and Damodar Region Peak Climbing",
    options: [
      {
        name: "Saribung Peak Climbing - 25 Days",
        slug: "Saribung_Peak_Climbing_25_Days",
      },
    ],
    route: routes.peak_climbing,
  },
];


