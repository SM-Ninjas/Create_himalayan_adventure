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