'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false); // State for mobile nav
  const [isDarkMode, setDarkMode] = useState(false); // State for dark mode

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked); // Add 'dark' class to <html> when enabled
  };

  useEffect(() => {
    // Initialize based on user's system preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDarkMode);
    document.documentElement.classList.toggle("dark", prefersDarkMode);
  }, []);

  return (
    <nav className="bg-sage dark:bg-matcha text-darkbrown dark:text-cream py-4 ">
      <div className="container px-10 w-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl tracking-wide font-Bebas_Neue">
          THASHIN BHUIYAN
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute end-10 space-x-6 hidden md:flex font-IBM_Plex_Mono items-center">
          <Link href="/" className="link-hover transition">
            HOME
          </Link>
          <Link href="/about" className="link-hover transition">
            ABOUT
          </Link>
          <Link href="/work" className="link-hover transition">
            WORK
          </Link>

          {/* Dark Mode Toggle */}
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

      {/* Mobile Navigation */}
      <ul
        className={`fixed top-0 right-0 w-full h-full bg-sage dark:bg-matcha text-darkbrown dark:text-cream font-IBM_Plex_Mono flex flex-col items-center space-y-6 transform transition-transform duration-500 ${
          nav ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <li className="absolute top-6 right-6">
          <AiOutlineClose
            size={28}
            className="text-darkbrown dark:text-cream cursor-pointer"
            onClick={handleNav}
          />
        </li>

        {/* Links */}
        <li className="translate-y-16">
          <Link href="/" onClick={handleNav} className="text-3xl link-hover">
            HOME
          </Link>
        </li>
        <li className="translate-y-16">
          <Link href="/about" onClick={handleNav} className="text-3xl link-hover">
            ABOUT
          </Link>
        </li>
        <li className="translate-y-16">
          <Link href="/work" onClick={handleNav} className="text-3xl link-hover">
            WORK
          </Link>
        </li>

        {/* Dark Mode Toggle */}
        <li className="translate-y-16">
          <DarkModeSwitch
            moonColor="#E7E3DA"
            sunColor="#252118"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={32}
          />
        </li>

        <li className="absolute bottom-12">
          <a href="https://www.linkedin.com/in/thashin04/" target="blank">
            LINKEDIN
          </a>{" "}
          ·{" "}
          <a href="mailto:thashinbhuiyan04@gmail.com" target="blank">
            EMAIL
          </a>{" "}
          ·{" "}
          <a href="https://github.com/thashin04" target="blank">
            GITHUB
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
