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
          <MobileNavbar showTopBar={showTopBar} />
        </ContentWrapper>

        {/* Desktop Navbar - Visible at xl size and above */}
        <ContentWrapper
          className={cn(
            "hidden items-center md:hidden lg:flex w-full px-4",
            top ? "justify-center" : "justify-between", // Center items when `top` is true, space-between when `top` is false
            top ? "bg-transparent" : ""
          )}
        >
          {/* Left side: Logo and Title */}
          {!top && (
            <div className="flex items-center gap-4">
              <Link href="/">
                <Logo />
              </Link>
              <h1 className="w-1/2 text-xl font-bold">
                Create Himalaya Adventure
              </h1>
            </div>
          )}

          {/* Right side: Menu Items */}
          <div
            className={cn(
              "flex items-center gap-4",
              top ? "ml-0" : "ml-auto" // Center the items when `top` is true, push them to the right when `top` is false
            )}
          >
            <MenuItems />
          </div>
        </ContentWrapper>
      </nav>
    </header>
  );
}

export default Header;
