"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { DarkModeSwitch as OriginalDarkModeSwitch } from "react-toggle-dark-mode";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false); 
  const [isDarkMode, setDarkMode] = useState(false); 
  const pathname = usePathname(); 

  type DarkModeSwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    size?: number;
    moonColor?: string;
    sunColor?: string;
    className?: string;
  };

  const DarkModeSwitch = OriginalDarkModeSwitch as React.FC<DarkModeSwitchProps>;

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDarkMode);
    document.documentElement.classList.toggle("dark", prefersDarkMode);
  }, []);

  return (
    <nav className="bg-sage dark:bg-matcha text-darkbrown dark:text-cream p-4 sticky top-0 z-[9999] ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl 2xl:text-4xl tracking-wide font-Bebas_Neue">
          THASHIN BHUIYAN
        </Link>

        <div className="space-x-6 hidden md:flex 2xl:text-xl font-IBM_Plex_Mono items-center">
          <Link
            href="/"
            className={`link-hover transition ${
              pathname === "/" ? "underline underline-offset-[7px]" : ""
            }`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`link-hover transition ${
              pathname === "/about" ? "underline underline-offset-[7px]" : ""
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/work"
            className={`link-hover transition ${
              pathname === "/work" ? "underline underline-offset-[7px]" : ""
            }`}
          >
            WORK
          </Link>

          <Link
            href="/caseStudies"
            className={`link-hover transition ${
              pathname === "/caseStudies" ? "underline underline-offset-[7px]" : ""
            }`}
          >
            CASE STUDIES
          </Link>

          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            className="ml-4"
            moonColor="#E7E3DA"
            sunColor="#252118"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden cursor-pointer" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={28} className="text-darkbrown dark:text-cream" />
          ) : (
            <AiOutlineMenu size={28} className="text-darkbrown dark:text-cream" />
          )}
        </div>
      </div>

      <ul
        className={`fixed top-0 right-0 w-full h-full bg-sage dark:bg-matcha text-darkbrown dark:text-cream font-IBM_Plex_Mono flex flex-col items-center space-y-6 transform transition-all duration-300 ${
          nav ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <li className="absolute top-6 right-6">
          <AiOutlineClose
            size={28}
            className="text-darkbrown dark:text-cream cursor-pointer"
            onClick={handleNav}
          />
        </li>

        <li className="translate-y-16 text-darkbrown dark:text-cream">
          <Link href="/" onClick={handleNav} className="text-3xl link-hover">
            HOME
          </Link>
        </li>
        <li className="translate-y-16 text-darkbrown dark:text-cream">
          <Link href="/about" onClick={handleNav} className="text-3xl link-hover">
            ABOUT
          </Link>
        </li>
        <li className="translate-y-16 text-darkbrown dark:text-cream">
          <Link href="/work" onClick={handleNav} className="text-3xl link-hover">
            WORK
          </Link>
        </li>
        <li className="translate-y-16 text-darkbrown dark:text-cream">
          <Link href="/caseStudies" onClick={handleNav} className="text-3xl link-hover">
            CASE STUDIES
          </Link>
        </li>

        <li className="translate-y-16">
          <DarkModeSwitch
            moonColor="#E7E3DA"
            sunColor="#252118"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={32}
          />
        </li>

        <li className="absolute max-[350px]:text-sm bottom-12 ">
          <a className="nav-name" href="https://www.linkedin.com/in/thashin04/" target="blank">
            LINKEDIN
          </a>{" "}
          ·{" "}
          <a className="nav-name" href="mailto:thashinbhuiyan04@gmail.com" target="blank">
            EMAIL
          </a>{" "}
          ·{" "}
          <a className="nav-name" href="https://github.com/thashin04" target="blank">
            GITHUB
          </a>
          ·{" "}
          <a className="nav-name" href="/resume.pdf" target="blank">
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;