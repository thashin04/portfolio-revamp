import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <div className='bottom-0 w-full mx-auto py-10 max-sm:py-5 max-sm:px-5 px-10 grid md:grid-cols-2 max-md:justify-center gap-10 max-lg:gap-3 mt-10 bg-matcha dark:bg-sage text-cream dark:text-darkbrown '>
      <div>
        <h1 className='w-full text-sm font-IBM_Plex_Mono 2xl:text-2xl'>Built with Nextjs by <Link href="/"><b><span className="footer-name">Thashin Bhuiyan</span></b></Link></h1>
      </div>
      <ul> 
      <li className="flex max-md:justify-center place-content-end space-x-4 w-full text-sm font-IBM_Plex_Mono 2xl:text-2xl">
          <a className="footer-name" href="https://www.linkedin.com/in/thashin04/" target="blank">
            LINKEDIN
          </a><p>{" · "}</p>
          <a className="footer-name" href="mailto:thashinbhuiyan04@gmail.com" target="blank">
            EMAIL
          </a><p>{" · "}</p>
          <a className="footer-name" href="https://github.com/thashin04" target="blank">
            GITHUB
          </a>
        </li>
      </ul> 
    </div>
  );
};

export default Footer;
