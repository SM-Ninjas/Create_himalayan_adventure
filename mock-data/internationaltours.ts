import { routes } from "@/lib/routes";

interface TrekAndTours {
  name: string;
  options: { name: string; slug: string }[];
  route: string;
}
export const internationalRegions: TrekAndTours[] = [
    {
        name: "Bhutan",
        options: [
        ],
        route: routes.treks,
      },
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
        route: routes.treks,
      },
      {
        name: "Culture and City Tour in Bhutan",
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
      {
        name: "",
        options: [
        ],
        route: routes.treks,
      },
      {
        name: "Day Hikes And Cultural Tour in Bhutan",
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
      {
        name: "Festival Tour in Bhutan",
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
      }, {
        name: "Tibet",
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
      }, {
        name: "Culture And City Tours in Tibet",
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