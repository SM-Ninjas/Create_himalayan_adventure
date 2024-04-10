import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import { useRouter } from "next/router";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { ContentWrapper } from "./ContentWrapper";
import Link from "next/link";
import { MenuItems } from "./NavMenuItems";

function Header() {
  const [active, setActive] = React.useState(0);
  const [top, setTop] = useState<boolean>(true);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const location = useRouter();

  const scrollHandler = () => {
    window.scrollY > 10 || location.route !== "/" ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top, location, scrollHandler]);
  
  return (
    // <div className={`${top && 'bg-black/60 backdrop-blur-sm border-b border-gray-800'} sticky top-0 z-50 flex flex-wrap items-center justify-between w-full gap-2 px-5 py-4 text-xs font-medium uppercase opacity-90 md:px-10`}>
    //   <Head>
    //     <title>Trekk</title>
    //   </Head>
    //   <div className="flex items-center gap-2 font-medium tracking-[4px]">
    //     <IoIosGlobe className="text-xl " />
    //     Trust me
    //   </div>
    //   <ContentWrapper>
    //   <NavigationMenu>
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
    //           <li className="row-span-3">
    //             <NavigationMenuLink asChild>
    //               <a
    //                 className="flex flex-col justify-end w-full h-full overflow-hidden no-underline rounded-md outline-none select-none focus:shadow-md bg-sport"
    //                 href="/"
    //               >
    //                 <div className="relative top-0 w-full h-full p-6 pt-24 border bg-secondary border-border">
    //                   <div className="mt-4 mb-2 text-lg font-medium text-primary">
    //                     Here to help
    //                   </div>
    //                   <p className="text-sm leading-tight text-gray-100 text-muted-foreground">
    //                     Contact our customer support team 24/7
    //                   </p>
    //                 </div>
    //               </a>
    //             </NavigationMenuLink>
    //           </li>
    //           <ListItem href={routes.treks} title="New Arrivals">
    //             Shop our new arrivals and exclusive collections.
    //           </ListItem>
    //           <ListItem href={routes.treks} title="Sport">
    //             Discover our new sports range.
    //           </ListItem>
    //           <ListItem href={routes.treks} title="Summer Sale">
    //             Grab a bargain with our summer sale.
    //           </ListItem>
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
        
    //   </NavigationMenuList>
    // </NavigationMenu>
    //   </ContentWrapper>
    //   <ContentWrapper>
    //     <IoMdSearch className="text-lg " />
    //   </ContentWrapper>
    //   <ContentWrapper>
    //     <IoMdPerson className="text-lg " />
    //   </ContentWrapper>
    // </div>
    <nav
        className={cn(
          "fixed top-0 z-50 flex w-full gap-2 px-5 py-4 text-xs font-medium opacity-90 md:px-10",
          top && "bg-black/60 backdrop-blur-sm border-b border-gray-800"
        )}
      >
        <ContentWrapper className="flex justify-between gap-4 md:hidden">
          <div className="flex items-center gap-2 font-medium tracking-[4px]">
            <IoIosGlobe className="text-xl " />
            Trust me
          </div>
          <div className="flex items-center gap-8 ml-auto">
            {/* <MobileNavigation /> */}
          </div>
        </ContentWrapper>
        <ContentWrapper className="items-center justify-between flex-1 hidden py-0 md:flex">
            <div className="flex items-center gap-x-16">
              <Link href="/">
                  <div className="flex items-center gap-2 font-medium tracking-[4px]">
                    <IoIosGlobe className="text-xl " />
                    Trust me
                  </div>
              </Link>
              <div className="mt-1 -ml-4">
                <MenuItems />
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <IoMdSearch className="text-lg " />
              <IoMdPerson className="text-lg " />
            </div>
        </ContentWrapper>
      </nav>
  );
}

export default Header;

const menus = [
  "Home",
  "Holdidays",
  "Destinations",
  "Flights",
  "Offers",
  "Contacts",
];

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";