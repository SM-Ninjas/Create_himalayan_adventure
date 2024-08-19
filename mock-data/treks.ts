import { routes } from "@/lib/routes";

interface TrekAndTours {
  [x: string]: any;
  // slug: any;
  name: string;
  options: {
}[];
  route: string;
}

export const trekRegions: TrekAndTours[] = [
  {
    name: "Annapurna Region Trekking",
    options: [
      {
        name: "Annapurna Base Camp Trek - 14 Days",
        slug: "annapurna_base_camp_trek",
      },
      {
        name: "Annapurna Circuit Trek - 12 Days",
        slug: "annapurna_circuit_trek",
      },
      {
        name: "Mardi Himal Trek - 9 Days",
        slug: "mardi_himal_trek",
      },
      {
        name: "Ghorepani Poonhill Trek - 8 Days",
        slug: "ghorepani_poonhill_trek",
      },
      {
        name: "Short ABC Trek - 9 Days",
        slug: "short_abc_trek",
      },
      {
        name: "Poon Hill Trek - 2 Days",
        slug: "poon_hill_trek",
      },
      {
        name: "Poon Hill Mardi Himal Trek - 12 Days",
        slug: "poon_hill_mardi_himal_trek",
      },
      {
        name: "Annapurna Full Circuit Trek - 17 Days",
        slug: "annapurna_full_circuit_trek",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Manaslu Region Trekking",
    options: [
      {
        name: "Manaslu Circuit Trek - 14 Days",
        slug: "Manaslu_Circuit_Trek_14_Days",
      },
      {
        name: "Short Manaslu Trek - 11 Days",
        slug: "Short_Manaslu_Trek_11_Days",
      },
      {
        name: "Manaslu Tsum Valley Trek - 19 Days",
        slug: "Manaslu_Tsum_Valley_Trek",
      },

     
    ],
    route: routes.treks,
  },
  
  {
    name: "Kanchenjunga Region Trekking",
    options: [
      {
        name: "Kanchenjunga North Base Camp Trek - 20 Days",
        slug: "Kanchenjunga_North_Base_Camp_Trek_20_Days",
      },
      {
        name: "Kanchenjunga South Base Camp Trek - 13 Days",
        slug: "Kanchenjunga_South_Base_Camp_Trek_13_Days",
      },
      {
        name: "Kanchenjunga Circuit Trek",
        slug: "Kanchenjunga_Circuit_Trek",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Makalu Region Trekking",
    options: [
      {
        name: "Makalu-Barun National Park",
        slug: "Makalu_Base_Camp_Trek",
      },
     
    ],
    route: routes.treks,
  },
  {
    name: "Dolpa Region Trekking",
    options: [
      {
        name: "Upper Dolpo Trek",
        slug: "Upper_Dolpo_Trek",
      },
      {
        name: "Lower Dolpo Trek - 18 Days",
        slug: "Lower_Dolpo_Trek",
      },
     
    ],
    route: routes.treks,
  },
  
  {
    name: "Mustang Region Trekking",
    options: [
      {
        name: "Upper Mustang Overland Tour - 8 Days",
        slug: "Upper_Mustang_Overland_Tour",
      },
      {
        name: "Upper Mustang Trek - 17 Days",
        slug: "Upper_Mustang_Trek",
      },
     
    ],
    route: routes.treks,
  },
  {
    name: "Everest Region Trekking",
    options: [
      {
        name: "EBC Trek via Gokyo with Helicopter Return - 15 Days",
        slug: "ebc_trek_gokyo_helicopter",
      },
      {
        name: "Luxury Everest Heli Trek - 6 Days",
        slug: "luxury_trek_gokyo_helicopter",
      },
      {
        name: "Sleep at Base Camp on Everest Trek - 15 Days",
        slug: "sleep_at_base_camp_everest",
      },
      {
        name: "Everest Base Camp Trek - 14 Days",
        slug: "ebc_trek_14_days",
      },
      {
        name: "13 Days Luxury Everest Trek",
        slug: "luxury_everest_trek_13_days",
      },
      {
        name: "Everest Three High Passes Trek - 18 Days",
        slug: "everest_three_high_passes_trek_18_days",
      },
      {
        name: "Budget Everest Base Camp Trek - 12 Days",
        slug: "budget_ebc_trek_12_days",
      },
      {
        name: "Everest High Passes Trek Clockwise - 18 Days",
        slug: "everest_high_passes_trek_clockwise_18_days",
      },
      {
        name: "Gokyo Valley Circuit Trek - 13 Days",
        slug: "gokyo_valley_circuit_trek_13_days",
      },
      {
        name: "Everest View Trek - 9 Days",
        slug: "everest_view_trek_9_days",
      },
      {
        name: "Everest Trek Cost for Indians - 14 Days",
        slug: "everest_trek_cost_indians_14_days",
      },
      {
        name: "Everest Gokyo Trek via Salleri - 20 Days",
        slug: "everest_gokyo_trek_via_salleri_20_days",
      },
      {
        name: "12 Days Everest Base Camp Trek",
        slug: "ebc_trek_12_days",
      },
      {
        name: "Rapid (Short) Everest Base Camp Trek - 9 Days",
        slug: "rapid_ebc_trek_9_days",
      },
      {
        name: "EBC Trek via Gokyo Cho La Pass - 17 Days",
        slug: "ebc_trek_via_gokyo_cho_la_pass_17_days",
      },
      {
        name: "Everest Base Camp Trek Helicopter Return to Kathmandu - 10 Days",
        slug: "ebc_trek_helicopter_return_kathmandu_10_days",
      },
      {
        name: "Gokyo Chola Pass Trekking via EBC - 17 Days",
        slug: "gokyo_chola_pass_trekking_via_ebc_17_days",
      },
      {
        name: "Everest Base Camp Trek Heli Out to Lukla - 12 Days",
        slug: "ebc_trek_heli_out_lukla_12_days",
      },
      {
        name: "Pikey Peak Trek - 10 Days",
        slug: "pikey_peak_trek_10_days",
      },
      {
        name: "Everest Base Camp Trek by Road - 16 Days",
        slug: "ebc_trek_by_road_16_days",
      },
    ],
    route: routes.treks,
  },
  {
    name: "Langtang Region Treckking",
    options: [
      {
        name: "Langtang Valley Trek - 10 Days",
        slug: "Langtang_Valley_Trek",
      },
      {
        name: "Langtang Gosaikunda Lake Trek – 15 Day",
        slug: "Langtang_Gosaikunda_Lake_Trek",
      },
      {
        name: "Tamang Heritage Trail Trek – 10 Days",
        slug: "Tamang_Heritage_Trail_Trek",
      },
      {
        name: "Helambu Circuit Trek – 8 Days",
        slug: "Helambu_Circuit_Trek",
      },
      {
        name: "Langtang Ganja La Pass Trek – 14 Days",
        slug: "Langtang_Ganja_La_Pass_Trek",
      },
      {
        name: "Gosaikunda Lake Trek – 7 Days",
        slug: "Gosaikunda_Lake_Trek",
      },
     
    ],
    route: routes.treks,
  },
  
];
