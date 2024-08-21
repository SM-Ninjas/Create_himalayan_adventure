import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import Logo from "../Logo";
import { ContentWrapper } from "./ContentWrapper";
import { MenuItems } from "./NavMenuItems";
import MobileNavbar from "./MobileNavbar";

function Header() {
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
  }, [top, location]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-screen bg-black px-5 font-medium text-white backdrop-blur-sm md:px-10 lg:flex",
        top && "border-b border-gray-800 bg-black backdrop-blur"
      )}
    >
      {/* Mobile Navbar - Visible below xl size */}
      <ContentWrapper className="flex items-center justify-between xl:hidden border border-red-800">
        <MobileNavbar />
      </ContentWrapper>

      {/* Desktop Navbar - Visible at xl size and above */}
      <ContentWrapper
        className={cn(
          "hidden items-center justify-between xl:flex w-full px-4",
          top ? "bg-transparent" : "bg-black opacity-90"
        )}
      >
        <Link href="/" className="">
          <div className="flex items-center gap-2 font-medium tracking-[4px]">
            <Logo />
            <div>
              <p className="leading-tight text-white scale-90 subtitle-text">
                Create Himalaya
              </p>
              <p className="leading-tight text-white scale-90 subtitle-text">
                Adventure
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-around flex-grow gap-x-16">
          <MenuItems />
          <IoMdPerson className="text-lg" />
        </div>
      </ContentWrapper>
    </nav>
  );
}

export default Header;

const menus = [
  "Home",
  "Holidays",
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
          <p className="leading-snug text-muted-foreground line-clamp-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
