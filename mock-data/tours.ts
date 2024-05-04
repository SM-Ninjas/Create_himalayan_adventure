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
        name: "Pokhara Day Tour with Sunrise View from Sarangkot",
        slug: "pokhara-day-tour-sunrise-sarangkot",
      },
      {
        name: "Five Himalayan Viewpoint Tour from Pokhara",
        slug: "five-himalayan-viewpoint-tour-pokhara",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Day Hikes Nepal",
    options: [
      {
        name: "Nagarkot to Dhulikhel Day Hiking Trip – 1 Day",
        slug: "nagarkot-dhulikhel-day-hike",
      },
      {
        name: "Nagarkot Sunrise View and Nagarkot to Changunarayan Hike",
        slug: "nagarkot-sunrise-view-changunarayan-hike",
      },
      {
        name: "Namobuddha to Panauti Day Hiking - 1 Day",
        slug: "namobuddha-panauti-day-hike",
      },
      {
        name: "Nagarjung Jamcho Day Hike - 1 Day",
        slug: "nagarjung-jamcho-day-hike",
      },
      {
        name: "Champadevi Day Hike - 1 Day",
        slug: "champadevi-day-hike",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Multiple Day Tours",
    options: [
      {
        name: "Everest Three High Passes Trek - 18 Days",
        slug: "everest-three-high-passes-trek-18-days",
      },
      {
        name: "Budget Everest Base Camp Trek - 12 Days",
        slug: "budget-everest-base-camp-trek-12-days",
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
        slug: "12-days-everest-base-camp-trek",
      },
      {
        name: "Rapid (Short) Everest Base Camp Trek - 9 Days",
        slug: "rapid-short-everest-base-camp-trek-9-days",
      },
      {
        name: "EBC Trek via Gokyo Cho La Pass - 17 Days",
        slug: "ebc-trek-via-gokyo-cho-la-pass-17-days",
      },
      {
        name: "Everest Base Camp Trek Helicopter Return to Kathmandu - 10 Days",
        slug: "everest-base-camp-trek-helicopter-return-kathmandu-10-days",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Wildlife Tours",
    options: [
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
        name: "Gokyo Chola Pass Trekking via EBC - 17 Days",
        slug: "gokyo-chola-pass-trekking-via-ebc-17-days",
      },
      {
        name: "Everest Base Camp Trek Heli Out to Lukla - 12 Days",
        slug: "everest-base-camp-trek-heli-out-lukla-12-days",
      },
      {
        name: "Pikey Peak Trek - 10 Days",
        slug: "pikey-peak-trek-10-days",
      },
      {
        name: "Everest Base Camp Trek by Road - 16 Days",
        slug: "everest-base-camp-trek-by-road-16-days",
      },
    ],
    route: routes.treks,
  },
];
