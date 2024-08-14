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
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem className="">
          <NavigationMenuTrigger className="text-white emphasized-text">
            Treks And Tours
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-3 lg:w-[600px] bg-white" style={{maxHeight: '60vh', overflowY: 'auto'}}>
              {trek_tours.map((category, index) => (
                <ListItem key={index} title={category.name}>
                  <div className="flex flex-col space-y-2">
                    {category.options.map((item, itemIndex) => (
                      <Link key={itemIndex} href={`/${item.slug}`}>
                        <p className="regular-text line-clamp-1 font-normal text-gray-900 hover:text-blue-700" style={{fontSize:'14px'}}>
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
        <NavigationMenuItem>
          <Link href="/about" className="regular-text" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} emphasized-text`}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blogs" className="regular-text" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} emphasized-text`}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" className="regular-text" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} emphasized-text`}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/forum" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} emphasized-text`}>
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
          <div className="mb-4 text-lg font-bold leading-none text-black">
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