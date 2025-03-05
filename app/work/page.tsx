'use client';
import Image from "next/image";
import limbitless from "../../public/Limbitless Logos_LS Full Primary.svg";
import osi from "../../public/UILexternal_KGrgb_Office of Student Involvement-72dpi.png"
import acm from "../../public/acm-logo.png"
import tech from "../../public/techrangers.png"
import vamas from "../../public/vamas.png"
import Head from "next/head";
import AnimationOnScroll from "../../components/AnimationOnScroll"



function Work() {
  return (
    <>
    <Head>
        <title>Thashin Bhuiyan | Work</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <div className="py-12 dark:bg-darkbrown bg-cream">
      <h1 className="text-5xl max-[425px]:text-4xl 2xl:text-6xl font-Bebas_Neue text-matcha dark:text-sage mb-12 mx-auto text-center">
        WORK AND EXPERIENCE
      </h1>
      <div className=" px-8 max-w-6xl max-md:max-w-md max-[425px]:max-w-xs  mx-auto 2xl:max-w-screen-xl">
        {/* First Section */}
        <AnimationOnScroll
        classNameInView="opacity-100 translate-y-0 transition-all duration-1000 ease-out"
        classNameNotInView="opacity-0 translate-y-10"
            >
        <div className="lg:group lg:hover:scale-105 2xl:hover:scale-107 lg:transition-all lg:duration-300 lg:ease-in lg:bg-cream lg:dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <a href="https://techrangers.cdl.ucf.edu/" className="cursor-pointer" target="_blank">
            <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-8">
              {/* Image Section */}
              <div className="flex items-center justify-center p-6  h-30 dark:bg-sage rounded-lg">
              <Image
            alt="Techranger Logo"
            src={tech}
            className=" "
            style={{
              width: "180px",
              height: "auto",
            }}
          />
              </div>
              {/* Text Section */}
              <div className="md:w-full sm:pr-8 max-md:pt-8">
                <h2 className="flex hover:underline transition-all duration-300 underline-offset-4 text-xl 2xl:text-2xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                  CDL TECHRANGERS
                </h2>
                <h2 className="flex text-sm 2xl:text-lg font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                  WEB DEVELOPER (PART-TIME) <p className="period-padding">{" · "}</p> MAR. 2025 - PRESENT
                </h2>
                <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed 2xl:text-xl">
                Currently assisting in the development, maintenance, and optimization of web applications, actively contributing to ensure a seamless and intuitive user experience across platforms. Working on ongoing web development projects by supporting design and development efforts that cater to the evolving needs of UCF’s diverse online learning community.
                </p>
              </div>
            </div>
          </a>
          <hr className="solid mx-auto md:w-10/12" />
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll
        classNameInView="opacity-100 translate-y-0 transition-all delay-100 duration-1000 ease-out"
        classNameNotInView="opacity-0 translate-y-10"
            >
        <div className="lg:group lg:hover:scale-105 2xl:hover:scale-107 lg:transition-all lg:duration-300 lg:ease-in lg:bg-cream lg:dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <a href="https://vamastexas.org/" className="cursor-pointer" target="_blank">
            <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-8">
              {/* Image Section */}
              <div className="flex items-center justify-center p-6  h-30 dark:bg-sage rounded-lg">
              <Image
            alt="Vamas Logo"
            src={vamas}
            className=""
            style={{
              width: "180px",
              height: "auto",
            }}
          />
              </div>
              {/* Text Section */}
              <div className="md:w-full sm:pr-8 max-md:pt-8">
                <h2 className="flex hover:underline transition-all duration-300 underline-offset-4 text-xl 2xl:text-2xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                VIETNAMESE-AMERICAN FOR MUTUAL ASSISTANCE & SERVICES (VAMAS)
                </h2>
                <h2 className="flex text-sm 2xl:text-lg font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                  WEB DESIGNER (CONTRACT) <p className="period-padding">{" · "}</p> MAR. 2025 - PRESENT
                </h2>
                <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed 2xl:text-xl">
                  Current Web Designer for VAMAS, a nonprofit organization that empowers the elderly Vietnamese community in Texas by enriching lives through education and bonding. Currently in progress of redesigning the website. 
                </p>
              </div>
            </div>
          </a>
          <hr className="solid mx-auto md:w-10/12" />
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll
        classNameInView="opacity-100 translate-y-0 transition-all duration-1000 ease-out"
        classNameNotInView="opacity-0 translate-y-10"
            >
        <div className="lg:group lg:hover:scale-105 2xl:hover:scale-107 lg:transition-all lg:duration-300 lg:ease-in lg:bg-cream lg:dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <a href="https://limbitless-solutions.org/" className="cursor-pointer" target="_blank">
            <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-8">
              {/* Image Section */}
              <div className="flex items-center justify-center p-6  h-30 dark:bg-sage rounded-lg">
              <Image
            alt="Limbitless Logo"
            src={limbitless}
            className=""
            style={{
              width: "180px",
              height: "auto",
            }}
          />
              </div>
              {/* Text Section */}
              <div className="md:w-full sm:pr-8 max-md:pt-8">
                <h2 className="flex hover:underline transition-all duration-300 underline-offset-4 text-xl 2xl:text-2xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                  LIMBITLESS SOLUTIONS INC.
                </h2>
                <h2 className="flex text-sm 2xl:text-lg font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                  UX/UI INTERN <p className="period-padding">{" · "}</p> AUG. 2024 - PRESENT
                </h2>
                <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed 2xl:text-xl">
                  Current Intern at Limbitless Solutions, a nonprofit organization at UCF creating personalized 3D-printed prosthetic arms for children. I develop accessible, responsive web projects using <span className="font-bold">HTML, CSS, and WCAG standards</span>, and design UI concepts with <span className="font-bold">Adobe XD</span> and <span className="font-bold">Figma</span> to enhance accessibility through technology.
                </p>
              </div>
            </div>
          </a>
          <hr className="solid mx-auto md:w-10/12" />
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll
        classNameInView="opacity-100 translate-y-0 transition-all duration-1000 ease-out"
        classNameNotInView="opacity-0 translate-y-10"
            >
        {/* Second Section */}
        <div className="lg:group lg:hover:scale-105 2xl:hover:scale-107 lg:transition-all lg:duration-300 lg:ease-in lg:bg-cream lg:dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <a href="https://osi.ucf.edu/" className="cursor-pointer" target="_blank">
            <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-8">
              {/* Image Section */}
              <div className="flex items-center justify-center p-6 h-30 dark:bg-sage rounded-lg">
              <Image
            alt="OSI Logo"
            src={osi}
            className=""
            style={{
              width: "180px",
              height: "auto",
            }}
          />
              </div>
              {/* Text Section */}
              <div className="md:w-full sm:pr-8 max-md:pt-8">
                <h2 className="flex hover:underline transition-all duration-300 underline-offset-4 text-xl 2xl:text-2xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                  OFFICE OF STUDENT INVOLVEMENT (UCF)
                </h2>
                <h2 className="flex text-sm 2xl:text-lg font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                  WEB DESIGNER <p className="period-padding">{" · "}</p> JUL. 2024 - MAR. 2025
                </h2>
                <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed 2xl:text-xl">
                Previous Web Designer at the Office of Student Involvement (OSI) at UCF. I designed and maintained the OSI website for UCF events and campaigns, as well as the Student Government website, using <span className="font-bold">HTML, CSS, Bootstrap, and WordPress</span> to ensure responsive and accessible user interfaces.                </p>
              </div>
            </div>
          </a>
          <hr className="solid mx-auto md:w-10/12" />
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll
        classNameInView="opacity-100 translate-y-0 transition-all duration-1000 ease-out"
        classNameNotInView="opacity-0 translate-y-10"
            >
        {/* Third Section */}
        <div className="lg:group lg:hover:scale-105 2xl:hover:scale-107 lg:transition-all lg:duration-300 lg:ease-in lg:bg-cream lg:dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-8">
            {/* Image Section */}
            <div className="flex items-center justify-center px-6 h-30 dark:bg-sage rounded-lg">
              <Image
            alt="ACM Logo"
            src={acm}
            className="max-md:w-[100px] md:w-[180px]"
            style={{
              width: "",
              height: "auto",
            }}
            />
            </div>
            {/* Text Section */}
            <div className="md:w-full sm:pr-8 max-md:pt-8">
              <h2 className="flex transition-all duration-300 underline-offset-4 text-xl 2xl:text-2xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                ASSOCIATION FOR COMPUTING MACHINERY
              </h2>
              <h2 className="flex text-sm 2xl:text-lg font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                CREATIVE DIRECTOR AND FRONT-END LEAD <p className="period-padding">{" · "}</p> MAY 2024 - MAY 2025
              </h2>
              <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed 2xl:text-xl">
                Current Creative Director at ACM. Design digital assets, including flyers, posters, social media graphics, merch, and the UCF ACM chapter website using tools like <span className="font-bold">Photoshop, Figma, and Canva</span>. Organized and led a front-end development workshop series, introducing beginners to front-end development tools, frameworks, etc.
              </p>
            </div>
          </div>
          <hr className="solid mx-auto md:w-10/12" />
        </div>
        </AnimationOnScroll>
      </div>
    </div>
    </>
  );
}

export default Work;
