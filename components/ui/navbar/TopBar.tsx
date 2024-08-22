import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { IoMdMail, IoMdCall } from "react-icons/io";

function TopBar() {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white py-2 px-4">
      {/* Logo on the left */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Slogan in the center with typing animation */}
      <div className="flex-grow flex justify-center">
        <p className="ml-32 leading-tight text-center text-white tracking-wider emphasied-text typing-animation">
          Trekking for All Season....
        </p>
      </div>

      {/* Placeholder for right side (could be social links, etc.) */}
      <div className="hidden md:block">
        {/* Add any right-side content here if needed */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <IoMdMail />
            <span>info@createhimalaya.com</span>
          </div>
          <div className="flex items-center gap-1">
            <IoMdCall />
            <span>+977 9702542143</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
