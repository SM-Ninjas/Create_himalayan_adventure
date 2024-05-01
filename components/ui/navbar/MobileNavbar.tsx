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

function MobileNavbar() {
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
      className={`fixed left-0 right-0 top-0 z-50 block bg-black/80 px-2 py-4 backdrop-blur-xl md:hidden ${
        toggleNavBar && "h-screen"
      }`}
    >
      <div className="flex h-full flex-col justify-start md:hidden">
        <div className="flex items-center justify-between p-2">
          <Link href="/">
            <Logo />
          </Link>
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
          <div className="flex h-full flex-col items-start justify-start">
            <div className="mt-8 flex flex-1 flex-col items-center justify-start gap-4 text-gray-400">
              <Link
                className="emphasized-text flex w-full items-center gap-8 border-black p-2 capitalize hover:border"
                onClick={handleCloseToggleOnClick}
                href="/"
              >
                <IoMdHome className="text-xl text-gray-200" />
                home
              </Link>
              <Link
                className="emphasized-text flex w-full items-center gap-8 border-black p-2 capitalize hover:border hover:border-black"
                onClick={handleCloseToggleOnClick}
                href="/tour"
              >
                <MdTour className="text-xl text-gray-200" />
                tour
              </Link>
              <Link
                className="emphasized-text flex w-full items-center gap-8 border-black p-2 capitalize hover:border "
                onClick={handleCloseToggleOnClick}
                href="/trek"
              >
                <TbTrekking className="text-xl text-gray-200" />
                trek
              </Link>
              <Link
                className="emphasized-text flex w-full items-center gap-8 border-black p-2 capitalize hover:border"
                onClick={handleCloseToggleOnClick}
                href="/blogs"
              >
                <FaBlogger className="text-xl text-gray-200" />
                blog
              </Link>
              <Link
                className="border-blac8 emphasized-text flex w-full items-center gap-8 p-2 capitalize hover:border"
                onClick={handleCloseToggleOnClick}
                href="/login"
              >
                <CgProfile className="text-xl text-gray-200" />
                Profile
              </Link>
              {/* <Link
                    className="flex items-center w-full gap-8 p-2 capitalize border-blac8 emphasized-text hover:border"
                    onClick={handleCloseToggleOnClick}
                    href="/login"
                    >
                    <IoLogIn className="text-xl text-gray-200" />
                    login
                    </Link> */}
              <Link
                className="emphasized-text flex w-full items-center gap-8 border-black p-2 capitalize hover:border"
                onClick={handleCloseToggleOnClick}
                href="/contact"
              >
                <RiContactsBookFill className="text-xl text-gray-200" />
                contact
              </Link>
            </div>

            <div className="w-full px-4 py-2">
              <Link href="/login">
                <Buttons
                  text="Login"
                  customColor="bg-blue-500 text-gray-50 w-full"
                ></Buttons>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileNavbar;
