"use client";

import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { ReactTyped } from "react-typed";

function TopBar() {
  const whatsappPhoneNumber = "9702542143";

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}`;
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white py-2 px-4">
      {/* Logo on the left */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <h1 className="w-1/2 text-xl font-bold">Create Himalaya Adventure</h1>
        </Link>
      </div>
      {/* Slogan in the center with typing animation */}
      <div className="flex-grow flex justify-center items-center">
        <ReactTyped
          strings={[
            "Trekking for All Season",
            "Create Vacation, Create Memories",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="leading-tight text-center text-white tracking-wider flex items-center mx-2"
        />
      </div>

      {/* Placeholder for right side (could be social links, etc.) */}
      <div className="hidden md:block">
        <div className="flex items-center gap-4">
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="flex items-center gap-1"
          >
            <IoMdMail />

            <span>info@createhimalaya.com</span>
          </a>
          <div className="flex items-center gap-1">
            <IoMdCall />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <span>+977 9702542143</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
