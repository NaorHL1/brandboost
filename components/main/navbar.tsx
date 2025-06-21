'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full relative flex items-center justify-between md:justify-center px-[10px]">
        
        {/* 1. Logo + Name (קוד ראשון) */}
        <Link
        dir="rtl"
          href="#about-me"
          className="flex items-center md:absolute md:right-10"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={100}
            draggable={false}
            className="cursor-pointer"
          />
        </Link>

        {/* 2. Web Navbar (מוקדם, במרכז) */}
        <div dir="rtl" className="hidden md:flex w-[500px] mx-auto flex-row items-center justify-between border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] rounded-full text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href={LINKS.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
          >
            צור קשר
          </Link>
        </div>

        {/* 3. Social Icons (שור בטווח השמאלי) */}
        <div className="hidden md:flex md:absolute md:left-10 flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* 4. Hamburger Menu (נייד בלבד) */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
