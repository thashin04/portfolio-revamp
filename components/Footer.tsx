import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <div className=' bottom-0 w-full mx-auto py-10 px-10 grid lg:grid-cols-2 gap-10 mt-10 bg-matcha dark:bg-sage text-cream dark:text-darkbrown '>
      <div>
        <h1 className='w-full text-sm font-IBM_Plex_Mono'>Built with Nextjs by <Link href="/"><b><span className="footer-name">Thashin Bhuiyan</span></b></Link></h1>
      </div>
      <ul> 
      <li className="flex place-content-end space-x-4 w-full text-sm font-IBM_Plex_Mono">
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
