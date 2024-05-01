import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import Logo from "../Logo";
import { ContentWrapper } from "./ContentWrapper";
import { MenuItems } from "./NavMenuItems";

function Header() {
  // const [active, setActive] = React.useState(0);
  const [top, setTop] = useState<boolean>(true);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const location = useRouter();

  const scrollHandler = () => {
    window.scrollY > 10 || location.route !== "/"
      ? setTop(false)
      : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top, location, scrollHandler]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 hidden w-screen gap-2 bg-black/80 px-5 py-4 font-medium text-white opacity-90 backdrop-blur-xl md:px-10 lg:flex",
        top && "border-b border-gray-800 bg-black/60 backdrop-blur-sm"
      )}
    >
      <ContentWrapper className="flex items-center justify-between gap-4 md:hidden">
        <div className="flex items-center gap-2 text-lg font-medium ">
          <Logo />
          <div>
            <p className={`leading-tight`}>Create Himalayan</p>
            <p className={`leading-tight`}>Adventure</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-8">
          {/* <MobileNavigation /> */}
        </div>
      </ContentWrapper>
      <ContentWrapper className="hidden flex-1 items-center justify-between py-0 md:flex">
        <div className="flex items-center gap-x-16">
          <Link href="/">
            <div className="flex items-center gap-2 font-medium tracking-[4px]">
              <Logo />
              <div>
                <p className="scale-90 leading-tight text-gray-300">
                  Create Himalayan
                </p>
                <p className="scale-90 leading-tight text-gray-400">
                  Adventure
                </p>
              </div>
            </div>
          </Link>
          <div className="-ml-4 mt-1">
            <MenuItems />
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <IoMdPerson className={`text-lg`} />
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
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
