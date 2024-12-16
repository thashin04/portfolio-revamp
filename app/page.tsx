import Link from "next/link";
import Image from "next/image";
import day from "../public/day.png";
import night from "../public/night.png";

function Home() {
  return (
    <div className="relative flex flex-wrap lg:flex-row flex-col lg:px-48 sm:px-8 max-sm:px-8 space-y-4 pt-12">
      {/* Text Content */}
      <div className="text-darkbrown dark:text-cream flex-1 lg:order-1 order-2 lg:pr-12">
        <h1 className="leading-tight max-sm:text-4xl font-Bebas_Neue md:pb-0 lg:text-left text-5xl 2xl:text-6xl">
          HELLO! <br /> I'M{" "}
          <span className="text-matcha dark:text-sage">THASHIN :)</span>
        </h1>
        <p className="leading-relaxed font-IBM_Plex_Mono max-w-md text-left 2xl:text-3xl">
          Welcome to my website! I'm an Information Technology Undergrad with a
          minor in Digital Media at the University of Central Florida. I am
          passionate about combining creativity with technology!
        </p>
        <div className="flex space-x-4 pt-6 flex-wrap">
          <Link href="/about">
            <button className="duration-300 btn dark:btn rounded-full text-cream bg-matcha dark:bg-sage dark:text-darkbrown font-IBM_Plex_Mono border border-matcha dark:border-sage py-1.5 px-6 dark:hover:bg-[#969A6A] hover:bg-[#59671D]">
              ABOUT ME
            </button>
          </Link>
          <Link href="/">
            <button className="duration-300 btn btn-1 dark:btn rounded-full text-matcha dark:text-sage font-IBM_Plex_Mono border border-matcha dark:border-sage py-1.5 px-6 hover:bg-sage hover:text-darkbrown dark:hover:bg-matcha dark:hover:text-cream">
              PROJECTS
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-1 order-2 flex justify-center lg:justify-end lg:pl-12">
        <div className="relative w-full max-w-md lg:max-w-lg">
          {/* Day Image */}
          <Image
            alt="Day"
            src={day}
            className="rounded-xl dark:hidden lg:absolute transition-opacity duration-500 opacity-100 dark:opacity-0"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {/* Night Image */}
          <Image
            alt="Night"
            src={night}
            className="rounded-xl hidden dark:list-item lg:absolute transition-opacity duration-500 opacity-0 dark:opacity-100"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
