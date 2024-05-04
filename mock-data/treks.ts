import { routes } from "@/lib/routes";

interface TrekAndTours {
  name: string;
  options: { name: string; slug: string }[];
  route: string;
}

export const trekRegions: TrekAndTours[] = [
  {
    name: "Annapurna Region Trekking",
    options: [
      {
        name: "Annapurna Base Camp Trek - 14 Days",
        slug: "annapurna-base-camp-trek",
      },
      {
        name: "Annapurna Circuit Trek - 12 Days",
        slug: "annapurna-circuit-trek",
      },
      {
        name: "Mardi Himal Trek - 9 Days",
        slug: "mardi-himal-trek",
      },
      {
        name: "Ghorepani Poonhill Trek - 8 Days",
        slug: "ghorepani-poonhill-trek",
      },
      {
        name: "Short ABC Trek - 9 Days",
        slug: "short-abc-trek",
      },
      {
        name: "Poon Hill Trek - 2 Days",
        slug: "poon-hill-trek",
      },
      {
        name: "Poon Hill Mardi Himal Trek - 12 Days",
        slug: "poon-hill-mardi-himal-trek",
      },
      {
        name: "Annapurna Full Circuit Trek - 17 Days",
        slug: "annapurna-full-circuit-trek",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Everest Region Trekking",
    options: [
      {
        name: "EBC Trek via Gokyo with Helicopter Return – 15 Days",
        slug: "ebc-trek-gokyo-helicopter",
      },
      {
        name: "Luxury Everest Heli Trek - 6 Days",
        slug: "luxury-trek-gokyo-helicopter",
      },
      {
        name: "Sleep at Base Camp on Everest Trek - 15 Days",
        slug: "sleep-at-base-camp-everest",
      },
      {
        name: "Everest Base Camp Trek - 14 Days",
        slug: "ebc-trek-14-days",
      },
      {
        name: "13 Days Luxury Everest Trek",
        slug: "luxury-everest-trek-13-days",
      },
      {
        name: "Everest Three High Passes Trek - 18 Days",
        slug: "everest-three-high-passes-trek-18-days",
      },
      {
        name: "Budget Everest Base Camp Trek - 12 Days",
        slug: "budget-ebc-trek-12-days",
      },
      {
        name: "Everest High Passes Trek Clockwise - 18 Days",
        slug: "everest-high-passes-trek-clockwise-18-days",
      },
      {
        name: "Gokyo Valley Circuit Trek - 13 Days",
        slug: "gokyo-valley-circuit-trek-13-days",
      },
      {
        name: "Everest View Trek - 9 Days",
        slug: "everest-view-trek-9-days",
      },
      {
        name: "Everest Trek Cost for Indians - 14 Days",
        slug: "everest-trek-cost-indians-14-days",
      },
      {
        name: "Everest Gokyo Trek via Salleri - 20 Days",
        slug: "everest-gokyo-trek-via-salleri-20-days",
      },
      {
        name: "12 Days Everest Base Camp Trek",
        slug: "ebc-trek-12-days",
      },
      {
        name: "Rapid (Short) Everest Base Camp Trek - 9 Days",
        slug: "rapid-ebc-trek-9-days",
      },
      {
        name: "EBC Trek via Gokyo Cho La Pass - 17 Days",
        slug: "ebc-trek-via-gokyo-cho-la-pass-17-days",
      },
      {
        name: "Everest Base Camp Trek Helicopter Return to Kathmandu - 10 Days",
        slug: "ebc-trek-helicopter-return-kathmandu-10-days",
      },
      {
        name: "Gokyo Chola Pass Trekking via EBC - 17 Days",
        slug: "gokyo-chola-pass-trekking-via-ebc-17-days",
      },
      {
        name: "Everest Base Camp Trek Heli Out to Lukla - 12 Days",
        slug: "ebc-trek-heli-out-lukla-12-days",
      },
      {
        name: "Pikey Peak Trek - 10 Days",
        slug: "pikey-peak-trek-10-days",
      },
      {
        name: "Everest Base Camp Trek by Road - 16 Days",
        slug: "ebc-trek-by-road-16-days",
      },
    ],
    route: routes.treks,
  },
];
