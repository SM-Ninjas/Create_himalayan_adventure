import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBlogger } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdTour } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { TbTrekking } from "react-icons/tb";
import Buttons from "../Buttons";
import Logo from "../Logo";

function MobileNavbar({ showTopBar }: { showTopBar: boolean }) {
  // const router = useRouter()
  const [toggleNavBar, settoggleNavBar] = useState(false);
  const handleNavToggle = () => {
    settoggleNavBar(!toggleNavBar);
  };
  function handleCloseToggleOnClick() {
    settoggleNavBar(false);
  }
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 block bg-black/80 px-2 py-4 backdrop-blur-xl xl:hidden ${
        toggleNavBar && "h-screen"
      }`}
    >
      <div className="flex flex-col justify-start h-full xl:hidden">
        <div className="flex items-center justify-between p-2">
          {!showTopBar && (
            <div className="flex items-center gap-2">
              <Link href="/">
                <Logo />
              </Link>
              <h1 className="w-1/2 regular-text">Create Himalaya Adventure</h1>
            </div>
          )}
          {/* Create a hamburger menu using 3 lines, when clicked translate it to a cross */}
          <div
            className="flex flex-col transition-all"
            onClick={handleNavToggle}
          >
            <div
              className={`h-0.5 w-6 transform rounded-full bg-white transition-transform ${
                toggleNavBar
                  ? "translate-y-1 rotate-45"
                  : "mt-2 -translate-y-0 rotate-0"
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 rounded-full bg-white ${
                toggleNavBar ? "opacity-0" : "mt-2 opacity-100"
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 transform rounded-full bg-white transition-transform ${
                toggleNavBar
                  ? "-translate-y-1 -rotate-45"
                  : "mt-2 translate-y-0 rotate-0"
              }`}
            ></div>
          </div>
        </div>
        {toggleNavBar && (
          <div className="flex flex-col items-start justify-start h-full">
            <div className="flex flex-col items-center justify-start flex-1 gap-4 mt-8 text-gray-400">
              <Link
                className="flex items-center w-full gap-8 p-2 capitalize  emphasized-text hover:border hover:border-black"
                onClick={handleCloseToggleOnClick}
                href="/activity/tours"
              >
                <MdTour className="text-xl text-gray-100" />
                <p className="text-white">Tour</p>
              </Link>
              <Link
                className="flex items-center w-full gap-8 p-2 capitalize  emphasized-text hover:border "
                onClick={handleCloseToggleOnClick}
                href="/activity/trekking"
              >
                <TbTrekking className="text-xl text-gray-100" />
                <p className="text-white">Trek</p>
              </Link>
              <Link
                className="flex items-center w-full gap-8 p-2 capitalize  emphasized-text hover:border "
                onClick={handleCloseToggleOnClick}
                href="/activity/peak_climbing"
              >
                <TbTrekking className="text-xl text-gray-100" />
                <p className="text-white">Peak Climbing</p>
              </Link>
              <Link
                className="flex items-center w-full gap-8 p-2 capitalize border-black emphasized-text hover:border"
                onClick={handleCloseToggleOnClick}
                href="/contact"
              >
                <RiContactsBookFill className="text-xl text-gray-200" />
                <p className="text-white">
                contact
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileNavbar;
