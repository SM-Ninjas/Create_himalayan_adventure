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
        slug: "pokhara_day_tour_sunrise_sarangkot",
      },
      {
        name: "Five Himalayan Viewpoint Tour from Pokhara",
        slug: "five_himalayan_viewpoint_tour_pokhara",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Day Hikes Nepal",
    options: [
      {
        name: "Nagarkot to Dhulikhel Day Hiking Trip – 1 Day",
        slug: "nagarkot_dhulikhel_day_hike",
      },
      {
        name: "Nagarkot Sunrise View and Nagarkot to Changunarayan Hike",
        slug: "nagarkot_sunrise_view_changunarayan_hike",
      },
      {
        name: "Namobuddha to Panauti Day Hiking _ 1 Day",
        slug: "namobuddha_panauti_day_hike",
      },
      {
        name: "Nagarjung Jamcho Day Hike _ 1 Day",
        slug: "nagarjung_jamcho_day_hike",
      },
      {
        name: "Champadevi Day Hike _ 1 Day",
        slug: "champadevi_day_hike",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Multiple Day Tours",
    options: [
      {
        name: "Everest Three High Passes Trek _ 18 Days",
        slug: "everest_three_high_passes_trek_18_days",
      },

      // no data for this as well
      {
        name: "Budget Everest Base Camp Trek _ 12 Days",
        slug: "budget_everest_base_camp_trek_12_days",
      },
      {
        name: "Everest High Passes Trek Clockwise _ 18 Days",
        slug: "everest_high_passes_trek_clockwise_18_days",
      },
      {
        name: "Gokyo Valley Circuit Trek _ 13 Days",
        slug: "gokyo_valley_circuit_trek_13_days",
      },
      {
        name: "Everest View Trek _ 9 Days",
        slug: "everest_view_trek_9_days",
      },
      {
        name: "Everest Trek Cost for Indians _ 14 Days",
        slug: "everest_trek_cost_indians_14_days",
      },
      {
        name: "Everest Gokyo Trek via Salleri _ 20 Days",
        slug: "everest_gokyo_trek_via_salleri_20_days",
      },
      // no data
      {
        name: "12 Days Everest Base Camp Trek",
        slug: "12_days_everest_base_camp_trek",
      },
      // no data for this 
      {
        name: "Rapid (Short) Everest Base Camp Trek _ 9 Days",
        slug: "rapid_short_everest_base_camp_trek_9_days",
      },
      {
        name: "EBC Trek via Gokyo Cho La Pass _ 17 Days",
        slug: "ebc_trek_via_gokyo_cho_la_pass_17_days",
      },

      // no data for this one 
      {
        name: "Everest Base Camp Trek Helicopter Return to Kathmandu _ 10 Days",
        slug: "everest_base_camp_trek_helicopter_return_kathmandu_10_days",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Wildlife Tours",
    options: [
      {
        name: "Everest High Passes Trek Clockwise _ 18 Days",
        slug: "everest_high_passes_trek_clockwise_18_days",
      },
      {
        name: "Gokyo Valley Circuit Trek _ 13 Days",
        slug: "gokyo_valley_circuit_trek_13_days",
      },
      {
        name: "Everest View Trek _ 9 Days",
        slug: "everest_view_trek_9_days",
      },
      {
        name: "Gokyo Chola Pass Trekking via EBC _ 17 Days",
        slug: "gokyo_chola_pass_trekking_via_ebc_17_days",
      },
      {
        name: "Pikey Peak Trek _ 10 Days",
        slug: "pikey_peak_trek_10_days",
      },
      // No data for this
      {
        name: "Everest Base Camp Trek by Road _ 16 Days",
        slug: "everest_base_camp_trek_by_road_16_days",
      },
    ],
    route: routes.treks,
  },
];
