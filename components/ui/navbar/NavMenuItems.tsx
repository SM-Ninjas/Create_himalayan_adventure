"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navbar/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
export function MenuItems() {
  return (
    <NavigationMenu className="mx-auto h-20">
      <NavigationMenuList className="h-full m-56 flex justify-center items-center space-x-12">
        <NavigationMenuItem className="flex items-center h-full">
          <NavigationMenuTrigger className="emphasized-text h-full flex items-center">
            Treks And Tours
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[380px] bg-white">
              {trek_tours.map((category, index) => (
                <ListItem key={index} title={category.name} className="">
                  <div className="flex flex-col space-y-2">
                    {category.options.map((item, itemIndex) => (
                      <Link key={itemIndex} className="" href={`/${item.slug}`}>
                        <p className="emphasized-text  font-normal text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm p-2 ">
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center h-full">
          <Link href="/about" className="regular-text h-full" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} emphasized-text h-full flex items-center`}
            >
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center h-full">
          <Link href="/blogs" className="regular-text h-full" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} emphasized-text h-full flex items-center`}
            >
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center h-full">
          <Link href="/contact" className="regular-text h-full" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} emphasized-text h-full flex items-center`}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center h-full">
          <Link href="/forum" className="h-full" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} emphasized-text h-full flex items-center`}
            >
              Forum
            </NavigationMenuLink>
          </Link>
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
            "hover:bg-accent hover:text-green focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="mb-4  subtitle-text p-2 font-bold  leading-none text-blue-950">
            {title}
          </div>
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";




export const trek_tours: {
  [x: string]: any; name: string; options: { name: string; slug: string; }[];
}[] = [
    {
      name: "Tours and Treks Avaliable",
      options: [
        {
          name: "Treks in Nepal",
          slug: "treks",
        },
        {
          name: "Tours in Nepal",
          slug: "tours",
        },
        {
          name: "International Tours",
          slug: "international_tours",
        },
      ],
    }]