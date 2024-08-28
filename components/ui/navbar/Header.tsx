import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ContentWrapper } from "./ContentWrapper";
import { MenuItems } from "./NavMenuItems";
import MobileNavbar from "./MobileNavbar";
import TopBar from "./TopBar";
import Logo from "../Logo";
import Link from "next/link";



function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [showTopBar, setShowTopBar] = useState<boolean>(true);

  const location = useRouter();

  const scrollHandler = () => {
    if (window.scrollY > 10 || location.route !== "/") {
      setTop(false);
      setShowTopBar(false);
    } else {
      setTop(true);
      setShowTopBar(true);
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top, location]);

  return (
    <header className="fixed top-0 w-full z-50">
      {showTopBar && <TopBar />}

      <nav
        className={cn(
          "w-full bg-gray-900 font-medium text-white backdrop-blur-sm md:px-2 lg:flex",
          top && "bg-gray-500-blur"
        )}
      >
        {/* Mobile Navbar - Visible below xl size */}
        <ContentWrapper className="flex items-center justify-between lg:hidden md:block">
          <MobileNavbar showTopBar = {showTopBar} />
        </ContentWrapper>

        {/* Desktop Navbar - Visible at xl size and above */}
        <ContentWrapper
          className={cn(
            "hidden items-center justify-between md:hidden lg:flex w-full px-4",
            top ? "bg-transparent" : ""
          )}
        >
          <div className="flex items-center justify-around flex-grow gap-x-16">
            {!showTopBar &&
              <Link href="/">
                <Logo />
              </Link>
            }
            <MenuItems />
          </div>
        </ContentWrapper>
      </nav>
    </header>
  );
}

export default Header;
