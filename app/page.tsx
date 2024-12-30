'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import day from "../public/day.png";
import night from "../public/night.png";

import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Frostfire Serpent",
    tags: ["Game Art"],
    description: "Bello",
    image: "/pumpkin-export-export.png",
  },
  {
    id: 2,
    title: "Shipwreck Showdown",
    tags: ["Game Art"],
    description: "Yallo",
    image: "/kraken-goon-export.png",
  },
  {
    id: 3,
    title: "Old Portfolio",
    tags: ["Web Dev", "Design"],
    description: ":3",
    image: "/fuji-walk-2.gif",
  },
  {
  id: 4,
    title: "Frostfire Serpent",
    tags: ["Game Art"],
    description: "Bello",
    image: "/pumpkin-export-export.png",
  },
  {
    id: 5,
    title: "Shipwreck Showdown",
    tags: ["Game Art"],
    description: "Yallo",
    image: "/kraken-goon-export.png",
  },
  {
    id: 6,
    title: "Old Portfolio",
    tags: ["Web Dev", "Design"],
    description: ":3",
    image: "/fuji-walk-2.gif",
  },
];

function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [typingText, setTypingText] = useState(""); // State for typing effect
  const [cursorVisible, setCursorVisible] = useState(true); // State for cursor visibility
  const fullText = "    THASHIN :)"; // Complete text to display
  const typingSpeed = 150; // Typing speed in milliseconds
  const cursorBlinkSpeed = 500; // Cursor blink speed in milliseconds

  const filteredProjects = projects.filter((project) =>
    selectedFilter === "All" || project.tags.includes(selectedFilter)
  );

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typeInterval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);
    
    return () => clearInterval(blinkInterval); // Cleanup on unmount
  }, []);


  return (
    <>
    <div className="w-full flex flex-wrap lg:flex-row flex-col lg:px-32 xl:px-48 2xl:px-56 sm:px-8 max-sm:px-8 2xl:max-w-max 2xl:mx-auto space-y-4 lg:space-y-0 lg:space-x-12 pt-2 max-xl:pt-12 xl:pt-20 pb-12 max-lg:pb-4 2xl:pb-24">
      <div className=" text-darkbrown dark:text-cream flex-1 lg:order-1 order-2 lg:pr-12 mx-auto overflow-hidden ">
        <h1 className="leading-tight font-Bebas_Neue md:pb-0 lg:text-left max-sm:pb-4 text-5xl 2xl:text-6xl">
        HELLO! <br /> I&#39;M{" "}
            <span className="text-matcha dark:text-sage">{typingText}</span><span className="text-matcha dark:text-sage -mx-2">{cursorVisible ? '|' : ' '}</span>

        </h1>
        <p className="leading-relaxed font-IBM_Plex_Mono max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-left 2xl:text-2xl 2xl:pt-4 2xl:pb-6">
          Welcome to my website! I&#39;m an Information Technology Undergrad with a
          minor in Digital Media at the University of Central Florida. I am
          passionate about combining creativity with technology!
        </p>
        <div className="flex 2xl:text-2xl space-x-4 pt-6 max-[333px]:text-lg max-sm:mx-auto max-sm:text-sm min-[333px]:flex-wrap">
          <Link href="/about">
            <button className="duration-300 btn dark:btn rounded-full text-cream bg-matcha dark:bg-sage dark:text-darkbrown font-IBM_Plex_Mono border border-matcha dark:border-sage 2xl:py-2 2xl:px-8 py-1.5 px-6 dark:hover:bg-[#969A6A] hover:bg-[#59671D]">
              ABOUT ME
            </button>
          </Link>
          <Link href="/work">
            <button className="duration-300 btn btn-1 dark:btn rounded-full text-matcha dark:text-sage font-IBM_Plex_Mono border border-matcha dark:border-sage 2xl:py-2 2xl:px-12 py-1.5 px-6 hover:bg-sage hover:text-darkbrown dark:hover:bg-matcha dark:hover:text-cream">
              WORK
            </button>
          </Link>
        </div>
      </div>

      <div className="order-2 flex justify-center max-sm:pt-4 lg:justify-end overflow-hidden">
        <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-xl max-lg:pt-8">
          <Image
            alt="Day"
            src={day}
            className="rounded-xl dark:hidden duration-300 transition-opacity opacity-100 dark:opacity-0"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            alt="Night"
            src={night}
            className="rounded-xl hidden dark:list-item duration-300 transition-opacity  opacity-0 dark:opacity-100"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>

    <div className="md:pb-8 w-full flex flex-wrap lg:flex-row flex-col lg:px-32 xl:px-48 2xl:px-56 sm:px-8 max-sm:px-8 2xl:max-w-max 2xl:mx-auto space-y-4 lg:space-y-0 lg:space-x-12 pt-12 xl:pt-100 pb-0">
      <div className=" text-darkbrown dark:text-sage flex-1 lg:order-1 order-2 min-[500px]:mx-auto overflow-hidden ">
        <h1 id="#project-section" className="leading-tight font-Bebas_Neue md:pb-0  lg:text-left text-5xl 2xl:text-6xl">
          PROJECTS
        </h1>
        <div id="#project-section" className="max-[500px]:grid max-[500px]:w-full gap-4 2xl:text-2xl min-[501px]:space-x-4 px-2 font-IBM_Plex_Mono justify-center mt-4 mb-8 max-[500px]:grid-cols-2 max-[500px]:px-2">
          {["All", "Web Dev", "Game Art", "Design"].map((tag) => (
            <button
              key={tag}
              className={`px-4 py-1 rounded-full border ${
                selectedFilter === tag
                  ? "dark:bg-matcha bg-sage text-darkbrown dark:text-cream"
                  : "border-matcha dark:bg-cream bg-darkbrown text-cream dark:text-darkbrown hover:bg-matcha dark:hover:bg-sage hover:text-cream"
              }`}
              onClick={() => setSelectedFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

            <div className="w-full max-sm:mx-auto grid grid-cols-1 font-IBM_Plex_Mono lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 px-6 2xl:gap-20 2xl:px-20 2xl:mx-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="border  dark:bg-matcha bg-sage rounded-lg overflow-hidden shadow-xl 2xl:p-2"
                  style={{ width: '100%', height: 'auto' }}
                >
                  <div className="dark:bg-sage bg-cream border-sage border-8 rounded-xl dark:border-matcha">
                  <div className="h-[107px] w-[175px] mx-auto py-4 ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300} 
                      height={500} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  </div>
                  <div className="p-4 text-darkbrown dark:text-cream 2xl:p-6">
                    <h2 className="flex font-Bebas_Neue leading-relaxed text-2xl 2xl:text-3xl mb-2">{project.title}
                    <FaExternalLinkAlt 
                    className={`pl-2 xl:size-5 2xl:size-6 cursor-pointer dark:text-sage text-matcha
                    }`}/></h2>
                    <div className="flex space-x-2 mb-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs font-[600] rounded-full border border-matcha text-cream dark:border-cream dark:text-matcha dark:bg-sage bg-matcha 2xl:text-sm 2xl:px-3"
                        >
                          {tag}
                        </span>
                      ))}
          </div>
          <p className="font-IBM_Plex_Mono text-sm 2xl:text-base">{project.description}</p>
        </div>
      </div>
    ))}
            </div>
          



      </div>
    </div>

    </>
  );
}

export default Home;