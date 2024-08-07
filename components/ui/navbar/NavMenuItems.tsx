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
import { tourRegions } from "@/mock-data/tours";
import { trekRegions } from "@/mock-data/treks";
import Link from "next/link";
import { internationalRegions } from "@/mock-data/internationaltours";

export function MenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white regular-text ">
            Trekking in Nepal
          </NavigationMenuTrigger>
          <NavigationMenuContent style={{}}>
            <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-3 lg:w-[1000px] "style={{height:'50vh',overflowY:'scroll',background:'#fff',opacity:'1 !important'}}>
              {trekRegions.map((item, index) => (
                <ListItem title={item.name} key={index}>
                  <div className="flex max-h-[60vh] flex-col overflow-auto">
                    {item.options.map((each, index) => (
                      <Link href={`${item.route}/${each.slug}`}>
                        <p
                          key={index}
                          className="regular-text  line-clamp-1.5 font-normal text-gray-900 hover:text-blue-700"
                          style={{fontSize:'14px'}}
                        >
                          {each.name}
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
          <NavigationMenuTrigger className="text-white regular-text">
            Tours in Nepal
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 bg-white p-4 md:w-[500px] md:grid-cols-3 lg:w-[1000px]"style={{height:'50vh',overflowY:'scroll',opacity:'1'}}>
              {tourRegions.map((item, index) => (
                <ListItem title={item.name} key={index}>
                  <div className="flex max-h-[60vh] flex-col overflow-auto">
                    {item.options.map((each, index) => (
                      <Link href={`${item.route}/${each.slug}`} key={index}>
                        <p
                          key={index}
                          className="regular-text line-clamp-1.5 font-normal text-gray-900 hover:text-blue-700"
                          
                          style={{fontSize:'14px'}}
                        >
                          {each.name}
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
          <NavigationMenuTrigger className="text-white regular-text">
            International Tours
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 bg-white md:w-[500px] md:grid-cols-3 lg:w-[1000px]"style={{height:'50vh',overflowY:'scroll',opacity:'1'}}>
              {internationalRegions.map((item, index) => (
                <ListItem title={item.name} key={index}>
                  <div className="flex max-h-[60vh] flex-col overflow-auto">
                    {item.options.map((each, index) => (
                      <Link href={`${item.route}/${each.slug}`} key={index}>
                        <p
                          key={index}
                          className="regular-text line-clamp-1.5 font-normal text-gray-900 hover:text-blue-700"
                          
                          style={{fontSize:'14px'}}
                        >
                          {each.name}
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
