'use client';
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

function Work() {
  return (
    <div className="py-12 dark:bg-darkbrown bg-cream">
      <h1 className="text-5xl font-Bebas_Neue text-matcha dark:text-sage mb-12 mx-auto text-center">
        WORK AND EXPERIENCE
      </h1>
      <div className=" px-8 max-w-6xl mx-auto">
        {/* First Section */}
        <div className="group hover:scale-105 transition-all duration-300 ease-in-out work-shadow dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <a href="https://limbitless-solutions.org/" className="cursor-pointer" target="_blank">
            <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-4">
              {/* Image Section */}
              <div className="flex items-center justify-center md:w-1/4 h-40 bg-sage rounded-lg">
                <p className="text-darkbrown font-IBM_Plex_Mono"></p>
              </div>
              {/* Text Section */}
              <div className="md:w-full sm:pr-8 max-md:pt-8">
                <h2 className="flex text-xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                  LIMBITLESS SOLUTIONS INC.
                </h2>
                <h2 className="flex text-sm font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                  UX/UI INTERN
                </h2>
                <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed">
                  Current Intern at Limbitless Solutions, a nonprofit at UCF creating personalized 3D-printed prosthetic arms for children. I develop accessible, responsive web projects using <span className="font-bold">HTML, CSS, and WCAG standards</span>, and design UI concepts with <span className="font-bold">Adobe XD</span> to enhance accessibility through technology.
                </p>
              </div>
            </div>
          </a>
          <hr className="solid mx-auto md:w-10/12" />
        </div>

        {/* Second Section */}
        <div className="group hover:scale-105 transition-all duration-300 ease-in-out work-shadow dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <a href="https://osi.ucf.edu/" className="cursor-pointer" target="_blank">
            <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-4">
              {/* Image Section */}
              <div className="flex items-center justify-center md:w-1/4 h-40 bg-sage rounded-lg">
                <p className="text-darkbrown font-IBM_Plex_Mono"></p>
              </div>
              {/* Text Section */}
              <div className="md:w-full sm:pr-8 max-md:pt-8">
                <h2 className="flex text-xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                  OFFICE OF STUDENT INVOLVEMENT (UCF)
                </h2>
                <h2 className="flex text-sm font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                  WEB DESIGNER
                </h2>
                <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed">
                  Current Web Designer for the Office of Student Involvement at UCF. Designed and maintained event websites using <span className="font-bold">HTML, CSS, Bootstrap, and WordPress</span> to ensure responsive and accessible user interfaces. Collaborate in a team setting with the design team to integrate cohesive graphics for UCF events and campaigns.
                </p>
              </div>
            </div>
          </a>
          <hr className="solid mx-auto md:w-10/12" />
        </div>

        {/* Third Section */}
        <div className="group hover:scale-105 transition-all duration-300 ease-in-out work-shadow dark:bg-darkbrown">
          <hr className="solid mx-auto md:w-10/12" /><br />
          <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-4">
            {/* Image Section */}
            <div className="flex items-center justify-center md:w-1/4 h-40 bg-sage rounded-lg">
              <p className="text-darkbrown font-IBM_Plex_Mono"></p>
            </div>
            {/* Text Section */}
            <div className="md:w-full sm:pr-8 max-md:pt-8">
              <h2 className="flex text-xl font-Albert_Sans pb-2 font-bold text-matcha dark:text-cream">
                ASSOCIATION FOR COMPUTING MACHINERY
              </h2>
              <h2 className="flex text-sm font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                CREATIVE DIRECTOR AND FRONT-END LEAD
              </h2>
              <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed">
                Current Creative Director at ACM. Design digital assets, including flyers, posters, social media graphics, merch, and the UCF ACM chapter website using tools like <span className="font-bold">Photoshop, Figma, and Canva</span>. Organized and led a front-end development workshop series, introducing beginners to front-end development tools, frameworks, etc.
              </p>
            </div>
          </div>
          <hr className="solid mx-auto md:w-10/12" />
        </div>
      </div>
    </div>
  );
}

export default Work;
