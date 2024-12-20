'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import day from "../public/day.png";
import night from "../public/night.png";
import game1 from "../public/pumpkin-export-export.png";
import game2 from "../public/kraken-goon-export.png";
import fuji from "../public/fuji-walk-2.gif"

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
  const [currentTime, setCurrentTime] = useState("");

  const filteredProjects = projects.filter((project) =>
    selectedFilter === "All" || project.tags.includes(selectedFilter)
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")} ${ampm} (EST)`;

      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateTime, 1000);

    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div id="local-time" className="justify-end flex font-Bebas_Neue font-white px-10 py-5 border-r-2 max-sm:px-8 max-sm:pb-0  text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        {currentTime || "Loading time..."}
      </div>
    <div className="w-full flex flex-wrap lg:flex-row flex-col lg:px-32 xl:px-48 2xl:px-56 sm:px-8 max-sm:px-8 2xl:max-w-max 2xl:mx-auto space-y-4 lg:space-y-0 lg:space-x-12 pt-2 xl:pt-20 pb-12 max-lg:pb-4 2xl:pb-24">
      <div className=" text-darkbrown dark:text-cream flex-1 lg:order-1 order-2 lg:pr-12 mx-auto overflow-hidden ">
        <h1 className="leading-tight font-Bebas_Neue md:pb-0 lg:text-left text-5xl 2xl:text-6xl">
          HELLO! <br /> I'M{" "}
          <span className="text-matcha dark:text-sage">THASHIN :)</span>
        </h1>
        <p className="leading-relaxed font-IBM_Plex_Mono max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-left 2xl:text-2xl 2xl:pt-4 2xl:pb-6">
          Welcome to my website! I'm an Information Technology Undergrad with a
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
            className="rounded-xl dark:hidden transition-opacity duration-500 opacity-100 dark:opacity-0"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            alt="Night"
            src={night}
            className="rounded-xl hidden dark:list-item transition-opacity duration-500 opacity-0 dark:opacity-100"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>

    <div className="w-full flex flex-wrap lg:flex-row flex-col lg:px-32 xl:px-48 2xl:px-56 sm:px-8 max-sm:px-8 2xl:max-w-max 2xl:mx-auto space-y-4 lg:space-y-0 lg:space-x-12 pt-12 xl:pt-100 pb-0">
      <div className=" text-darkbrown dark:text-cream  flex-1 lg:order-1 order-2 mx-auto overflow-hidden ">
        <h1 id="#project-section" className="leading-tight font-Bebas_Neue md:pb-0  lg:text-left text-5xl 2xl:text-6xl">
          PROJECTS
        </h1>
        <div id="#project-section" className="max-sm:grid gap-4 sm:space-x-4 px-2 font-IBM_Plex_Mono justify-center mt-4 mb-8 max-sm:grid-cols-2 max-sm:px-2">
          {["All", "Web Dev", "Game Art", "Design"].map((tag) => (
            <button
              key={tag}
              className={`px-4 py-1 duration-300 rounded-full border ${
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

          <div className="w-full max-sm:mx-auto grid grid-cols-1 font-IBM_Plex_Mono lg:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-matcha dark:border-sage  dark:bg-matcha bg-sage rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-[107px] w-[175px] mx-auto py-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={175}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-darkbrown dark:text-cream">
                  <h2 className="font-Bebas_Neue text-2xl mb-2">{project.title}</h2>
                  <div className="flex space-x-2 mb-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs font-[600] rounded-full border border-matcha text-cream dark:border-cream dark:text-matcha dark:bg-sage bg-matcha"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-IBM_Plex_Mono text-sm">{project.description}</p>
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