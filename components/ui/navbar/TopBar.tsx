import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { QuoteDown, QuoteUp } from "iconsax-react";

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
        <QuoteUp size={18} />
        <p className=" border border-black leading-tight text-center text-[#FFD700] tracking-wider emphasied-text typing-animation flex items-center">
          <div>
          </div>
          <p>
            Trekking for All Season - Create Vacation, Create Memories
          </p>
        </p>
          <QuoteDown size={18} />
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
