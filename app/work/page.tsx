'use client';
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";


function Work() {
  return (
    <div className="py-12 dark:bg-darkbrown bg-cream">
      <h1 className="text-5xl font-Bebas_Neue text-matcha dark:text-sage mb-12 mx-auto text-center">
        WORK AND EXPERIENCE
      </h1>
      <div className="space-y-12 px-8 max-w-6xl mx-auto">
          <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-4">
            {/* Image Section */}
            <div className="flex items-center justify-center md:w-1/4 h-40 bg-sage rounded-lg">
              <p className="text-darkbrown font-IBM_Plex_Mono"></p>
            </div>
            {/* Text Section */}
            <div className="md:w-full pr-8 max-md:pt-8">
              <h2 className="flex text-xl font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                LIMBITLESS SOLUTIONS INC. <FaExternalLinkAlt 
                  className={`pl-2 xl:size-5 2xl:size-6 cursor-pointer dark:text-sage text-matcha
                  }`}/>
              </h2>
              <p className="text-sm text-darkbrown dark:text-cream font-IBM_Plex_Mono leading-relaxed">
                description
              </p>
            </div>
          </div>

          <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-4">
            {/* Image Section */}
            <div className="flex items-center justify-center md:w-1/4 h-40 bg-sage rounded-lg">
              <p className="text-darkbrown font-IBM_Plex_Mono"></p>
            </div>
            {/* Text Section */}
            <div className="md:w-full pr-8 max-md:pt-8">
            <h2 className="flex text-xl font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                OFFICE OF STUDENT INVOLVEMENT (UCF) <FaExternalLinkAlt 
                  className={`pl-2 xl:size-5 2xl:size-6 cursor-pointer dark:text-sage text-matcha
                  }`}/>
              </h2>
              <p className="text-sm text-darkbrown dark:text-cream  font-IBM_Plex_Mono leading-relaxed">
                description
              </p>
            </div>
          </div>

          <div className="mx-auto md:w-10/12 flex flex-col md:flex-row-reverse md:space-x-8 md:space-x-reverse pb-4">
            {/* Image Section */}
            <div className="flex items-center justify-center md:w-1/4 h-40 bg-sage rounded-lg">
              <p className="text-darkbrown font-IBM_Plex_Mono"></p>
            </div>
            {/* Text Section */}
            <div className="md:w-full pr-8 max-md:pt-8">
            <h2 className="flex text-xl font-Albert_Sans italic pb-2 text-matcha dark:text-sage">
                ASSOCIATION FOR COMPUTING MACHINERY <FaExternalLinkAlt 
                  className={`pl-2 xl:size-5 2xl:size-6 cursor-pointer dark:text-sage text-matcha
                  }`}/>
              </h2>
              <p className="text-sm text-darkbrown dark:text-cream  font-IBM_Plex_Mono leading-relaxed">
                description
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Work;
