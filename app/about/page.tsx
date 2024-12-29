'use client';

import {
  FaJava,
  FaReact,
  FaAngular,
  FaWordpress,
} from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import {
  SiC,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiGit,
  SiFigma,
  SiFramer,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeindesign,
  SiAdobeillustrator,
  SiVercel,
} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import { FaDartLang } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import headshot from "../../public/headshot.png";

import { useState } from "react";

function About() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (title) => {
    setActiveIcon((prev) => (prev === title ? null : title));
  };
  return (
    <>
    <div className="flex flex-col py-12 justify-center items-center lg:flex-row lg:w-3/4 mx-auto mt-8 gap-8">
      <div className="rounded-lg max-sm:w-1/2 w-1/3 2xl:w-1/4">
      <Image
            alt="headshot"
            src={headshot}
            className="rounded-xl"
            style={{
              width: "100%",
              height: "auto",
            }}
        />
      </div>

      <div className="text-cream lg:px-12 sm:px-8 space-y-0 max-sm:space-y-2 flex flex-col lg:items-start pt-0">
            <h1 className="pb-2 font-Bebas_Neue text-center lg:text-left text-5xl 2xl:text-6xl dark:text-sage text-matcha">ABOUT ME</h1>
              <p className="max-md:mx-12 font-IBM_Plex_Mono leading-relaxed dark:text-cream text-darkbrown xl:max-w-2xl max-xl:max-w-sm text-left 2xl:text-2xl"> 
                I am currently A junior Information Technology Major with my minor in Digital Media at the University of Central Florida. I am always learning to find new ideas to bring accessibility to others. I am currently a <span className='font-bold'>UI/UX intern</span> at <a href="https://limbitless-solutions.org/" target="blank" className="dark:text-sage text-matcha font-bold wavy-decoration"> Limbitless Solutions</a> and a <span className='font-bold'>Web Designer</span> for UCF's <a href="https://osi.ucf.edu/" target="blank" className="dark:text-sage font-bold text-matcha wavy-decoration"> Office of Student Involvement.</a> In my free time I like to draw, cook, go to new cafes, and play stardew valley!
              </p>
            <br />
            <h3 className="font-Albert_Sans max-lg:mx-auto max-lg:justify-center max-lg:text-center italic text-xl max-md:mx-12 max-w-md 2xl:text-2xl dark:text-sage text-matcha text-left">
              CONTACT ME!
              </h3>
              <div className="flex max-md:px-12 max-lg:mx-auto max-lg:justify-center max-lg:pt-4 gap-3">
                <a href="/resume.pdf" target="_blank" className="cursor-pointer btn-2">
                  <svg
                    className="p-2 rounded-lg fill-current xl:size-10 2xl:size-14 dark:text-cream dark:hover:text-tan text-darkbrown hover:text-matcha transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 44 44"
                    fill="currentColor"
                  >
                    <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
                  </svg>
                </a>

                <a href="https://github.com/thashin04" target="_blank" className="cursor-pointer">
                  <div className="dark:text-cream dark:hover:text-tan text-darkbrown hover:text-matcha p-2 rounded-lg fill-current transition-colors duration-300 btn-2 text-2xl">
                    <svg stroke="currentColor" className="xl:size-6 2xl:size-10" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg></div></a>
                <a href="https://www.linkedin.com/in/mustaeenahmed/" target="_blank" className="cursor-pointer">
                  <div className="bg-button-color p-2 rounded-lg fill-current dark:text-cream dark:hover:text-tan text-darkbrown hover:text-matcha btn-2  transition-colors duration-300 text-2xl">
                    <svg stroke="currentColor" className="xl:size-6 2xl:size-10" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                    </svg>
                  </div>
                </a>
        </div>
      </div>
    </div>

  <div className="py-8 lg:w-3/4 mx-auto max-sm:pt-0 sm:mt-6">
    <h1 className="text-5xl 2xl:text-6xl font-Bebas_Neue text-center dark:text-sage text-matcha mb-6">SKILLS</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-20 mx-4 max-sm:mx-16 sm:mx-28">
      {/* Languages */}
      <div className="text-center">
        <h2 className="text-2xl font-Albert_Sans font-semibold underline pb-3 underline-offset-4 dark:text-sage text-matcha mb-4 inline-block">{`LANGUAGES`}</h2>
        <div className="grid grid-cols-4 max-xl:max-w-52 font-semibold mx-auto gap-8 justify-items-center">
          {[
                { Icon: SiHtml5, title: "HTML" },
                { Icon: SiCss3, title: "CSS" },
                { Icon: SiJavascript, title: "JavaScript" },
                { Icon: SiTypescript, title: "TypeScript" },
                { Icon: SiPython, title: "Python" },
                { Icon: SiC, title: "C" },
                { Icon: FaJava, title: "Java" },
                { Icon: FaDartLang, title: "Dart" },
              ].map(({ Icon, title }, index) => (
                <div key={index} className="relative text-center">
                  {activeIcon === title && (
                    <span className="absolute -top-8 text-sm dark:bg-matcha bg-sage dark:text-cream text-darkbrown py-1 px-2 rounded-md shadow-lg">
                      {title}
                    </span>
                  )}
                  <Icon
                    size={24}
                    className={`xl:size-6 2xl:size-10 cursor-pointer ${
                      activeIcon === title
                        ? "dark:text-sage text-matcha"
                        : "dark:text-cream text-darkbrown"
                    }`}
                    onClick={() => handleIconClick(title)}
                  />
                </div>
              ))}
            </div>
          </div>

      {/* Frameworks */}
      <div className="text-center">
        <h2 className="text-2xl font-Albert_Sans font-semibold underline pb-3 underline-offset-4 dark:text-sage text-matcha mb-4 inline-block">{`FRAMEWORKS`}</h2>
        <div className="grid grid-cols-3 gap-8 font-semibold max-xl:max-w-52 mx-auto justify-items-center">
          {[
                { Icon: FaReact, title: "React JS" },
                { Icon: SiNextdotjs, title: "Next.JS" },
                { Icon: FaAngular, title: "Angular" },
                { Icon: SiTailwindcss, title: "Tailwind CSS" },
                { Icon: SiBootstrap, title: "Bootstrap" },
              ].map(({ Icon, title }, index) => (
          <div key={index} className="relative text-center">
                  {activeIcon === title && (
                    <span className="absolute -top-8 text-sm dark:bg-matcha bg-sage dark:text-cream text-darkbrown py-1 px-2 rounded-md shadow-lg">
                      {title}
                    </span>
                  )}
                  <Icon
                    size={24}
                    className={`xl:size-6 2xl:size-10 cursor-pointer ${
                      activeIcon === title
                        ? "dark:text-sage text-matcha"
                        : "dark:text-cream text-darkbrown"
                    }`}
                    onClick={() => handleIconClick(title)}
                  />
                </div>
              ))}
            </div>
          </div>

      {/* Design/Art */}
      <div className="text-center">
        <h2 className="text-2xl font-Albert_Sans font-semibold pb-3 underline underline-offset-4 dark:text-sage text-matcha mb-4 inline-block">{`DESIGN/ART`}</h2>
        <div className="grid grid-cols-3 font-semibold gap-8 max-xl:max-w-52 mx-auto justify-items-center">
          {[
                { Icon: SiFigma, title: "Figma" },
                { Icon: SiFramer, title: "Framer" },
                { Icon: SiAdobephotoshop, title: "Photoshop" },
                { Icon: SiAdobexd, title: "Adobe Xd" },
                { Icon: SiAdobeillustrator, title: "Illustrator" },
                { Icon: SiAdobeindesign, title: "InDesign" },
              ].map(({ Icon, title }, index) => (
          <div key={index} className="relative text-center">
                  {activeIcon === title && (
                    <span className="absolute -top-8 text-sm dark:bg-matcha bg-sage dark:text-cream text-darkbrown py-1 px-2 rounded-md shadow-lg">
                      {title}
                    </span>
                  )}
                  <Icon
                    size={24}
                    className={`xl:size-6 2xl:size-10 cursor-pointer ${
                      activeIcon === title
                        ? "dark:text-sage text-matcha"
                        : "dark:text-cream text-darkbrown"
                    }`}
                    onClick={() => handleIconClick(title)}
                  />
                </div>
              ))}
            </div>
          </div>


      {/* Tools */}
      <div className="text-center">
        <h2 className="text-2xl font-Albert_Sans pb-3 font-semibold underline underline-offset-4 dark:text-sage text-matcha mb-4 inline-block">{`TOOLS`}</h2>
        <div className="grid font-semibold grid-cols-3 gap-8 max-xl:max-w-52 mx-auto justify-items-center">
          {[
                { Icon: VscVscode, title: "VS Code" },
                { Icon: FaWordpress, title: "Wordpress" },
                { Icon: SiFirebase, title: "Firebase" },
                { Icon: SiVercel, title: "Vercel" },
                { Icon: SiGit, title: "Git" },
                { Icon: BsGithub, title: "Github" },
              ].map(({ Icon, title }, index) => (
          <div key={index} className="relative text-center">
                  {activeIcon === title && (
                    <span className="absolute -top-8 text-sm dark:bg-matcha bg-sage dark:text-cream text-darkbrown py-1 px-2 rounded-md shadow-lg">
                      {title}
                    </span>
                  )}
                  <Icon
                    size={24}
                    className={`xl:size-6 2xl:size-10 cursor-pointer ${
                      activeIcon === title
                        ? "dark:text-sage text-matcha"
                        : "dark:text-cream text-darkbrown"
                    }`}
                    onClick={() => handleIconClick(title)}
                  />
                </div>
              ))}
            </div>
          </div>
    </div>
  </div>


    </>
  );
};

export default About;