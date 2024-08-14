import { routes } from "@/lib/routes";

interface TrekAndTours {
  name: string;
  options: { name: string; slug: string }[];
  route: string;
}
export const internationalRegions: TrekAndTours[] = [
      {
        name: "Trekking and Hiking in Bhutan",
        options: [
          {
            name: "Snowman Trek - 30 days",
            slug: "snowman_trek_30_days",
          },
          {
            name: "Bhutan Tour With Bumdra High Camp Trek",
            slug: "Bhutan_Tour_with_Bumdra_High_Camp_Trek",
          },
          {
            name: "Druk Path Trek - 8 days",
            slug: "DrukPathTrek",
          },
          {
            name: "Dagala Thousand Lakes Trek - 8 days",
            slug: "Dagala_Thousand_Lakes_Trek",
          },
          {
            name: "Jomolhari Trek - 11 days",
            slug: "Jomolhari_Trek",
          },
          {
            name: "Soi Yaksa Trek",
            slug: "Soi_Yaksa_Trek",
          },
        ],
        route: routes.international_tour,
      },
      {
        name: "Culture and City Tour in Bhutan",
        options: [
          {
            name: "Bhutan Tour via Phuentsholing - 7 days",
            slug: "bhutan_tour_via_phuentsholing_days",
          },
          {
            name: "Paro Festival Tour - 8 days",
            slug: "paro_festival_tour_8_days",
          },
          {
            name: "Shortest Bhutan Tour - 3 days",
            slug: "shortest_bhutan_tour_3_days",
          },
          {
            name: "Cultural Tour with Village Homestay in Bhutan - 11 Days",
            slug: "cultural_tour_village_homestay_bhutan_11_days",
          },
          {
            name: "Glimpse of Bhutan Tour - 4 Days",
            slug: "glimpse_of_bhutan_tour_4_days",
          },{
            name: "Bhutan Cultural Tour - 5 days",
            slug: "bhutan_cultural_tour_5_days",
          },{
            name: "Grand Cultural Tour of Bhutan - 6 days",
            slug: "grand_cultural_tour_bhutan_6_days",
          },{
            name: "Western Bhutan Tour - 7 Days",
            slug: "western_bhutan_tour_7_days",
          },{
            name: "Bhutan Heritage Tour - 8 Days",
            slug: "bhutan_heritage_tour_8_days",
          },{
            name: "Bhutan Tour with Haa Valley - 8 Days",
            slug: "bhutan_tour_with_haa_valley_8_days",
          },{
            name: "Western and Central Bhutan Tour - 9 Days",
            slug: "western_and_central_bhutan_tour_9_days",
          },{
            name: "Bhutan West East Traverse Tour - 14 Days",
            slug: "bhutan_west_east_traverse_tour_14_days",
          },
        ],
        route: routes.international_tour,
      },
      {
        name: "Day Hikes And Cultural Tour in Bhutan",
        options: [
          {
            name: "Bhutan Tour With Day Hikes and Bumdra Camp",
            slug: "bhutan_tour_with_day_hikes_and_bumdra_camp_7_days",
          },
          {
            name: "Bhutan Tour With HomeStay",
            slug: "bhutan_tour_with_homestay_7_days",
          },
          {
            name: "Hidden Secret Of bhutan Overnight At Camp And Monastery",
            slug: "hidden_secret_of_bhutan_overnight_at_camp_and_monastery_5_days",
          },
          {
            name: "Cultural Tour With Trans Bhutan Trail",
            slug: "cultural_tour_with_trans_bhutan_trail_hike_7_days",
          },
          {
            name: "Bhutan Tour With Day Hikes ",
            slug: "bhutan_tour_with_day_hikes_and_haa_valley_8_days",
          },
          {
            name: "Bhutan Cultural Tour",
            slug: "bhutan_cultural_tour_with_day_hikes_6_days",
          },
          {
            name: "Bhutan Day Hikes With Cultural Tour",
            slug: "bhutan_day_hikes_with_cultural_tour_5_days",
          },
          {
            name: "Bhutan Tour With day Hikes - 4 Days",
            slug: "bhutan_tour_with_day_hikes_4_days",
          },
          {
            name: "Bhutan Highligts Tour",
            slug: "bhutan_highlights_tour_14_days",
          },
          {
            name: "Bhutan Cultural And nature Tour",
            slug: "bhutan_culture_and_nature_tour_with_hiking_10_days",
          },  {
            name: "Village Walking Tour - 7 Days",
            slug: "village_walking_tour_in_bhutan_7_days",
          },  {
            name: "Bhutan Hiking And Camping Tour - 7 Days",
            slug: "bhutan_hiking_and_camping_tour_7_days",
          },  {
            name: "Bhutan DaY Hikes And Cultural Discovery - 7 Days",
            slug: "bhutan_day_hikes_and_cultural_discovery_7_days",
          },  {
            name: "Bhutan Drukyul Hiking Tour - 12 Days",
            slug: "bhutan_drukyul_hiking_tour_12_days",
          },  
        ],
        route: routes.international_tour,
      },
      {
        name: "Festival Tour in Bhutan",
        options: [
          {
            name: "Thimphu Festival Tour - 8 Days",
            slug: "thimphu_festival_tour_8_days",
          },
          {
            name: "Bumthang Nimalung Tshechu Tour - 11 Days",
            slug: "bumthang_nimalung_tshechu_tour_11_days",
          },
          {
            name: "Jambay Lhakhang Drup Festival Tour - 10 Days",
            slug: "jambay_lhakhang_drup_festival_tour_10_days",
          },
          {
            name: "Druk Wangyel Festival Tour - 7 Days",
            slug: "druk_wangyel_festival_tour_7_days",
          },
          {
            name: "Black Necked Crane Festival Tour - 8 Days",
            slug: "black_necked_crane_festival_tour_8_days",
          },
          {
            name: "Ura Yakchoe Festival Tour - 9 Days",
            slug: "ura_yakchoe_festival_tour_9_days",
          },
          {
            name: "Gomkora Tshechu Festival Tour - 13 Days",
            slug: "gomkora_tshechu_festival_tour_13_days",
          },
        ],
        route: routes.international_tour,
      }, {
        name: "Culture And City Tours in Tibet",
        options: [
          {
            name: "Tibet Tour with Lhasa, Tsedang, Samye, Gyantse, and Shigatse - 8 days",
            slug: "Tibet_Tour_Lhasa_Tsedang_Samye_Gyantse_Shigatse_8_Days",
          },
          {
            name: "Lhasa to Everest Base Camp Tour - 8 Days",
            slug: "Lhasa_Everest_Base_Camp_Tour",
          },
          {
            name: "Lhasa and Shigatse Tour - 6 days",
            slug: "LhasaAndShigatseTour",
          },
          {
            name: "Lhasa and Yamdrok Lake Tour - 5 days",
            slug: "Lhasa_and_Yamdrok_Lake_Tour",
          },
          {
            name: "Lhasa Short Tour - 4 days",
            slug: "Lhasa_Short_Tour",
          },
          {
            name: "Lhasa and Tsedang Tour - 6 days",
            slug: "Lhasa_and_Tsedang_Tour",
          },
        ],
        route: routes.international_tour,
      },
];