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
import { BsGithub } from 'react-icons/bs';
import { FaDartLang } from "react-icons/fa6";
import Image from "next/image";
import headshot from "../../public/headshot.png";

import { useState } from "react";

function About() {
    const [activeIcon, setActiveIcon] = useState<string | null>(null);


    const handleIconClick = (title: string) => {
        setActiveIcon((prev) => (prev === title ? null : title));
    };
    return (
        <>
            <div className="flex flex-col py-12 justify-center items-center lg:flex-row lg:w-3/4 mx-auto mt-8 gap-8">
                <div className="rounded-lg max-sm:w-1/2 w-1/3 min-[1300px]:w-3/12 2xl:w-1/4 min-[2000px]:w-2/12">
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
                    <p className="max-md:mx-12 font-IBM_Plex_Mono leading-relaxed dark:text-cream text-darkbrown xl:max-w-2xl max-xl:max-w-sm text-left 2xl:text-xl">
                        I am currently A junior Information Technology Major with my minor in Digital Media at the University of Central Florida. I am always learning to find new ideas to bring accessibility to others. I am currently a <span className='font-bold'>UI/UX intern</span> at <a href="https://limbitless-solutions.org/" target="blank" className="dark:text-sage text-matcha font-bold wavy-decoration"> Limbitless Solutions</a> and a <span className='font-bold'>Web Designer</span> for UCF&#39;s <a href="https://osi.ucf.edu/" target="blank" className="dark:text-sage font-bold text-matcha wavy-decoration"> Office of Student Involvement.</a> In my free time I like to draw, cook, go to new cafes, and play stardew valley!
                    </p>
                    <br />
                    <h3 className="font-Albert_Sans max-lg:mx-auto max-lg:justify-center max-lg:text-center italic text-xl max-md:mx-12 max-w-md 2xl:text-2xl dark:text-sage text-matcha text-left">
                        CONTACT ME!
                    </h3>
                    <div className="flex max-md:px-12 max-lg:mx-auto max-lg:justify-center max-lg:pt-4 gap-3">
                    <a href="mailto:thashinbhuiyan04@gmail.com" target="_blank" className="cursor-pointer">
                            <div className="dark:text-cream dark:hover:text-tan text-darkbrown hover:text-matcha p-2 rounded-lg fill-current transition-colors duration-300 btn-2 text-2xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="currentColor"
                                    className="xl:size-7 max-xl:-translate-y-1 xl:-translate-y-[0.5px] 2xl:size-11 my-auto"
                                >
                                    <path d="M 5 5 C 4.2955948 5 3.6803238 5.3628126 3.3242188 5.9101562 L 14.292969 16.878906 C 14.696939 17.282876 15.303061 17.282876 15.707031 16.878906 L 26.675781 5.9101562 C 26.319676 5.3628126 25.704405 5 25 5 L 5 5 z M 3 8.4140625 L 3 23 C 3 24.108 3.892 25 5 25 L 25 25 C 26.108 25 27 24.108 27 23 L 27 8.4140625 L 17.121094 18.292969 C 15.958108 19.455959 14.041892 19.455959 12.878906 18.292969 L 3 8.4140625 z"/>
                                </svg>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/thashin04/" target="_blank" className="cursor-pointer">
                            <div className="bg-button-color p-2 rounded-lg fill-current dark:text-cream dark:hover:text-tan text-darkbrown hover:text-matcha btn-2  transition-colors duration-300 text-2xl">
                                <svg stroke="currentColor" className="xl:size-6 2xl:size-9 2xl:translate-y-0.5" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://github.com/thashin04" target="_blank" className="cursor-pointer">
                            <div className="dark:text-cream dark:hover:text-tan text-darkbrown hover:text-matcha p-2 rounded-lg fill-current transition-colors duration-300 btn-2 text-2xl">
                                <svg stroke="currentColor" className="xl:size-6 2xl:size-9 2xl:translate-y-0.5" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg></div></a>
                        
                    </div>
                </div>
            </div>


            <div className="py-8 lg:w-3/4 mx-auto max-sm:pt-0 sm:mt-6">
                <h1 className="text-5xl 2xl:text-6xl font-Bebas_Neue text-center dark:text-sage text-matcha mb-6">SKILLS</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-20 mx-4 max-sm:mx-16 sm:mx-28">
                    {/* Languages */}
                    <div className="text-center">
                        <h2 className="text-2xl font-Albert_Sans font-semibold underline pb-3 underline-offset-4 dark:text-sage text-matcha mb-4 inline-block">{`LANGUAGES`}</h2>
                        <div className="grid grid-cols-4 max-xl:max-w-52 font-semibold mx-auto gap-8 justify-items-center ">
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
                                        className={`xl:size-6 2xl:size-10 dark:hover:text-sage hover:text-matcha cursor-pointer ${activeIcon === title
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
                                        className={`xl:size-6 2xl:size-10 cursor-pointer ${activeIcon === title
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
                                        className={`xl:size-6 2xl:size-10 cursor-pointer ${activeIcon === title
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
                                        className={`xl:size-6 2xl:size-10 cursor-pointer ${activeIcon === title
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