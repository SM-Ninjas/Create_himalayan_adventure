"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { routes } from "@/lib/routes";

const trekRegions = [
    {   
        name: "Annapurna Region Trekking",
        options: [
            "Annapurna Base Camp Trek - 14 Days",
            "Annapurna Circuit Trek - 12 Days",
            "Mardi Himal Trek - 9 Days",
            "Ghorepani Poonhill Trek - 8 Days",
            "Short ABC Trek - 9 Days",
            "Poon Hill Trek - 2 Days",
            "Poon Hill Mardi Himal Trek - 12 Days",
            "Annapurna Full Circuit Trek - 17 Days",
        ],
        route: routes.treks
    },
    {
        name: "Everest Region Trekking",
        options: [
            "EBC Trek via Gokyo with Helicopter Return – 15 Days",
            "Luxury Everest Heli Trek - 6 Days",
            "Sleep at Base Camp on Everest Trek - 15 Days",
            "Everest Base Camp Trek - 14 Days",
            "13 Days Luxury Everest Trek",
            "Everest Three High Passes Trek - 18 Days",
            "Budget Everest Base Camp Trek - 12 Days",
            "Everest High Passes Trek Clockwise - 18 Days",
            "Gokyo Valley Circuit Trek - 13 Days",
            "Everest View Trek - 9 Days",
            "Everest Trek Cost for Indians - 14 Days",
            "Everest Gokyo Trek via Salleri - 20 Days",
            "12 Days Everest Base Camp Trek",
            "Rapid (Short) Everest Base Camp Trek - 9 Days",
            "EBC Trek via Gokyo Cho La Pass - 17 Days",
            "Everest Base Camp Trek Helicopter Return to Kathmandu - 10 Days",
            "Gokyo Chola Pass Trekking via EBC - 17 Days",
            "Everest Base Camp Trek Heli Out to Lukla - 12 Days",
            "Pikey Peak Trek - 10 Days",
            "Everest Base Camp Trek by Road - 16 Days"
        ]
    }
]
const tourRegions = [
    {   
        name: "Day Hikes and Tours From Pokhara",
        options: [
            "Pokhara Day Tour with Sunrise View from Sarangkot",
            "Five Himalayan Viewpoint Tour from Pokhara",
        ],
        route: routes.treks
    },
    {
        name: "Day Hikes Nepal",
        options: [
            "Nagarkot to Dhulikhel Day Hiking Trip – 1 Day",
            "Nagarkot Sunrise View and Nagarkot to Changunarayan Hike",
            "Namobuddha to Panauti Day Hiking - 1 Day",
            "Nagarjung Jamcho Day Hike - 1 Day",
            "Champadevi Day Hike - 1 day",
        ],
        routes: routes.treks
    },
    {
        name: "Multiple Day Tours",
        options: [
            "Everest Three High Passes Trek - 18 Days",
            "Budget Everest Base Camp Trek - 12 Days",
            "Everest High Passes Trek Clockwise - 18 Days",
            "Gokyo Valley Circuit Trek - 13 Days",
            "Everest View Trek - 9 Days",
            "Everest Trek Cost for Indians - 14 Days",
            "Everest Gokyo Trek via Salleri - 20 Days",
            "12 Days Everest Base Camp Trek",
            "Rapid (Short) Everest Base Camp Trek - 9 Days",
            "EBC Trek via Gokyo Cho La Pass - 17 Days",
            "Everest Base Camp Trek Helicopter Return to Kathmandu - 10 Days",
        ],
        routes: routes.treks
    },
    {
        name: "Wildlife Tours",
        options: [
            "Everest High Passes Trek Clockwise - 18 Days",
            "Gokyo Valley Circuit Trek - 13 Days",
            "Everest View Trek - 9 Days",
            "Gokyo Chola Pass Trekking via EBC - 17 Days",
            "Everest Base Camp Trek Heli Out to Lukla - 12 Days",
            "Pikey Peak Trek - 10 Days",
            "Everest Base Camp Trek by Road - 16 Days"
        ],
        routes: routes.treks
    },
]

export function MenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trekking in Nepal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] bg-white">
                {
                    trekRegions.map((item, index) => (
                        <ListItem href={item.route} title={item.name} key={index}>
                            <div className="flex flex-col max-h-[60vh] overflow-scroll">
                                {
                                    item.options.map((each, index) => (
                                        <p key={index} className="mb-1 text-sm font-light text-gray-600 line-clamp-2 hover:text-blue-700">
                                            {each}
                                        </p>
                                    ))
                                }
                            </div>
                        </ListItem>
                    ))
                }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tourns in Nepal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] bg-white">
            {
                    tourRegions.map((item, index) => (
                        <ListItem href={item.route} title={item.name} key={index}>
                            <div className="flex flex-col max-h-[60vh] overflow-scroll">
                                {
                                    item.options.map((each, index) => (
                                        <p key={index} className="mb-1 text-sm font-light text-gray-600 line-clamp-2 hover:text-blue-700">
                                            {each}
                                        </p>
                                    ))
                                }
                            </div>
                        </ListItem>
                    ))
                }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-green focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="mb-4 text-lg font-medium leading-none text-black">{title}</div>
            {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
