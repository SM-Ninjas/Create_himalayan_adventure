import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdPerson, IoMdSearch } from "react-icons/io";
import Logo from "../Logo";
import { ContentWrapper } from "./ContentWrapper";
import { MenuItems } from "./NavMenuItems";

function Header() {
  const [active, setActive] = React.useState(0);
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
        "fixed top-0 z-50 flex w-full gap-2 px-5 py-4 text-xs font-medium opacity-90 text-white bg-black/80 backdrop-blur-xl md:px-10",
        top && "border-b border-gray-800 bg-black/60 backdrop-blur-sm"
      )}
    >
      <ContentWrapper className="flex items-center justify-between gap-4 md:hidden">
        <div className="flex items-center gap-2 text-lg font-medium ">
          <Logo />
          <div>
            <p className={`text-sm leading-tight`}>Create Himalayan</p>
            <p className={`text-xs leading-tight`}>Adventure</p>
          </div>
        </div>
        <div className="flex items-center gap-8 ml-auto">
          {/* <MobileNavigation /> */}
        </div>
      </ContentWrapper>
      <ContentWrapper className="items-center justify-between flex-1 hidden py-0 md:flex">
        <div className="flex items-center gap-x-16">
          <Link href="/">
            <div className="flex items-center gap-2 font-medium tracking-[4px]">
              <Logo />
              <div>
                <p className="text-sm leading-tight text-gray-300 scale-90">
                  Create Himalayan
                </p>
                <p className="text-xs leading-tight text-gray-400 scale-90">
                  Adventure
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-1 -ml-4">
            <MenuItems />
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <IoMdSearch className={`text-lg`} />
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
