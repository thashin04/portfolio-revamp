'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import day from "../public/day.png";
import night from "../public/night.png";
import Head from "next/head";

import { FaExternalLinkAlt } from "react-icons/fa";
import AnimationOnScroll from "../components/AnimationOnScroll";


const projects = [
  {
    id: 1,
    title: "This Site",
    tags: ["Design", "Web Dev"],
    description: "Revamped my portfolio website using Next.js with a focus on accessibility, incorporating meaningful design, optimized contrast ratios, screen reader compatibility, and cross-browser functionality. Redesigned the layout and navigation to enhance flow and improve the overall user experience.",
    description2: "FIGMA, NEXT.JS, TAILWIND CSS, HTML/CSS, JS " ,
    link:"https://github.com/thashin04/portfolio-revamp",
    image: "/night.png",
  },
  {
    id: 2,
    title: "Capistrano Distillery Website",
    tags: ["Design", "Web Dev"],
    description: "Developed a website for Capistrano Distillery using React.js, collaborating with a designer to gather client requirements and feedback, and implementing key features like appointment booking.",
    description2: "FIGMA, REACT.JS, TAILWIND CSS, HTML/CSS, JS " ,
    link:"https://github.com/thashin04/Capistrano-Distillery-Website",
    image: "/landing.png",
  },
  {
    id: 3,
    title: "Frostfire Serpent",
    tags: ["Game Art"],
    description: "Developed during Spookyjam '24. This game features pixel art assets I designed and animated in aseprite, including characters, background tiles, and game elements.",
    description2: "ASEPRITE" ,
    link:"https://hypelocomotive.itch.io/frostfire-serpent",
    image: "/pumpkin-export-export.png",
  },
  {
    id: 4,
    title: "Shipwreck Showdown",
    tags: ["Game Art"],
    description: "Best Game winner at Knighthacks VII! I drew and animated all the pixel art assets using aseprite, such as characters, background tiles, and other elements.",
    description2: "ASEPRITE, UNITY" ,
    link:"https://devpost.com/software/shipwreck-showdown",
    image: "/kraken-goon-export.png",
  },
  {
    id: 5,
    title: "Old Portfolio",
    tags: ["Design","Web Dev"],
    description: "Developed an E-portfolio site to showcase what I am working on as well as who I am! I used HTML, CSS, and JavaScript.",
    description2: "HTML/CSS, JS" ,
    link:"https://github.com/thashin04/E-portfolio",
    image: "/fuji-walk-2.gif",
  },
];


function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    selectedFilter === "All" || project.tags.includes(selectedFilter)
  );
  const [typingText, setTypingText] = useState<string>(""); 
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const typingSpeed = 125; 
  const cursorBlinkSpeed = 525;
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false); 
  const titles: string[] = ["   A UX/UI Designer", "   A Web Developer", "   THASHIN :)"];
  
  useEffect(() => {
    if (titleIndex >= titles.length) return;
  
    setCursorVisible(true); 
  
    const typeInterval = setInterval(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setTypingText((prev) => prev.slice(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          if (titleIndex < titles.length - 1) {
            setIsDeleting(false);
            setTitleIndex((prevIndex) => prevIndex + 1);
          }
        }
      } else {
        if (charIndex < titles[titleIndex].length) {
          setTypingText((prev) => prev + titles[titleIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (!pause && titleIndex < titles.length - 1) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 1000);
        }
      }
    }, typingSpeed);
  
    return () => clearInterval(typeInterval);
  }, [charIndex, titleIndex, isDeleting, pause]);
  
  useEffect(() => {
    if (pause || charIndex === titles[titleIndex].length) {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, cursorBlinkSpeed);
  
      return () => clearInterval(cursorInterval);
    } else {
      setCursorVisible(true);
    }
  }, [charIndex, pause, titleIndex]);
  


  return (
    <>
     <AnimationOnScroll
        classNameInView="opacity-100 translate-y-0 transition-all duration-1000 ease-out"
        classNameNotInView="opacity-0 translate-y-10"
      >
    <Head>
        <title>Thashin Bhuiyan | Home</title>
        <meta name="description" content="Welcome to my portfolio website, showcasing various creative and technical projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="w-full flex flex-wrap lg:flex-row flex-col lg:px-32 xl:px-48 2xl:px-56 sm:px-8 max-sm:px-8 2xl:max-w-max 2xl:mx-auto space-y-4 lg:space-y-0  pt-2 max-xl:pt-12 xl:pt-20 pb-12 max-lg:pb-4 2xl:pb-24">
    <div className="order-2 2xl:pl-8 flex justify-center lg:justify-end overflow-hidden">
        <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-xl">
          <Image
            alt="Day"
            src={day}
            className="rounded-3xl dark:hidden duration-300 transition-opacity opacity-100 dark:opacity-0"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            alt="Night"
            src={night}
            className="rounded-3xl hidden dark:list-item duration-300 transition-opacity  opacity-0 dark:opacity-100"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className=" text-darkbrown max-sm:pt-4 max-lg:pt-8  dark:text-cream flex-1 lg:order-1 order-2 lg:pr-12 mx-auto overflow-hidden ">
        <h1 className="leading-tight font-Bebas_Neue md:pb-0 lg:text-left max-sm:pb-4 text-5xl 2xl:text-6xl">
        HELLO! <br /> I&#39;M{" "}
            <span className="text-matcha dark:text-sage">{typingText}</span><span className="text-matcha dark:text-sage -mx-2">{cursorVisible ? '|' : ' '}</span>

        </h1>
        <p className="leading-relaxed font-IBM_Plex_Mono max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-xl text-left 2xl:text-xl 2xl:pt-4 2xl:pb-6">
          Welcome to my website! I&#39;m an <strong>Information Technology</strong> Undergrad with a
          minor in <strong>Digital Media</strong> at the <strong>University of Central Florida</strong>. I am
          passionate about combining creativity with technology!
        </p>
        <div className="flex 2xl:text-xl space-x-4 pt-6 max-sm:mx-auto max-sm:justify-center max-sm:text-sm min-[333px]:flex-wrap">
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
    </div>
    </AnimationOnScroll>

    <div className="flex justify-center pt-8 sm:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12 text-darkbrown dark:hidden animate-bounce-arrow"
      >
        <path
          d="M36 12L24 24L12 12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 24L24 36L12 24"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12 text-cream hidden dark:block animate-bounce-arrow"
      >
        <path
          d="M36 12L24 24L12 12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 24L24 36L12 24"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    
    <div className="md:pb-8 w-full flex flex-wrap lg:flex-row flex-col lg:px-32 xl:px-48 2xl:px-56 sm:px-8 max-sm:px-8 2xl:max-w-max 2xl:mx-auto space-y-4 lg:space-y-0 lg:space-x-12 pt-12 xl:pt-100 pb-0">
      <div className=" text-darkbrown dark:text-sage flex-1 lg:order-1 order-2 min-[500px]:mx-auto overflow-hidden ">
        <h1 id="#project-section" className="leading-tight font-Bebas_Neue md:pb-0 pl-4 lg:text-left text-5xl 2xl:text-6xl">
          PROJECTS
        </h1>
        <div id="#project-section" className="max-[500px]:grid max-[500px]:w-full gap-4 2xl:text-xl min-[501px]:space-x-4 px-4 font-IBM_Plex_Mono justify-center mt-4 mb-8 max-[500px]:grid-cols-2 max-[500px]:px-2">
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
          <AnimationOnScroll
        classNameInView="opacity-100 translate-y-0 transition-all duration-1000 ease-out"
        classNameNotInView="opacity-0 translate-y-10"
      >
          <div className="w-full max-sm:mx-auto grid grid-cols-1 font-IBM_Plex_Mono sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 px-6 2xl:gap-10 2xl:px-0 2xl:mx-4 2xl:max-w-[75rem]">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="lg:group lg:hover:scale-[1.02] relative border dark:bg-matcha bg-sage rounded-lg overflow-hidden 2xl:p-1 lg:transition-all lg:hover:shadow-darkbrown lg:hover:-translate-y-2 lg:duration-300 lg:ease-in"
                style={{ width: "100%", height: "auto" }}
              >
                
                  <div className="dark:bg-sage bg-cream border-sage border-8 rounded-xl dark:border-matcha">
                    <div className="h-[107px] w-[175px] mx-auto py-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={500}
                        className="w-full h-full rounded-md object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-darkbrown dark:text-cream 2xl:p-6">
                  <a href={project.link} target="_blank">
                  <h2 
                  className="flex font-Bebas_Neue leading-relaxed text-2xl 2xl:text-4xl mb-2 hover:underline transition-all duration-300 underline-offset-4">
                  {project.title}
                  <FaExternalLinkAlt
                    className="pl-2 xl:size-5 2xl:size-6 cursor-pointer dark:text-sage text-matcha"
                  />
                </h2>
                </a>

                    <div className="flex space-x-2 mb-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs font-[600] rounded-full border border-sage text-cream dark:border-matcha dark:text-matcha dark:bg-sage bg-matcha 2xl:text-sm 2xl:px-3"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="font-IBM_Plex_Mono leading-normal text-sm pb-2 2xl:text-lg">
                      {project.description}
                    </p>
                    <br />
                    <p className="font-Albert_Sans italic text-xs 2xl:text-sm absolute bottom-2 left-4 2xl:px-4 2xl:mb-2 pt-2">
                      {project.description2}
                    </p>
                  </div>
              </div>
            ))}
          </div>
          </AnimationOnScroll>

          



      </div>
    </div>

    </>
  );
}

export default Home;