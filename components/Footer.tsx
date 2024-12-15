import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <div className='dongle-footer max-w-[1240px] mx-auto py-12 px-10 grid lg:grid-cols-3 gap-10 text-white mt-10'>
      <div>
        <h1 className='w-full text-2xl font-bold dongle-bold text-[#fff]'><Link href="/">CAPISTRANO DISTILLERY</Link></h1>
      </div>
      <div className='lg:col-span-2 flex flex-col md:flex-row justify-between'>
        <div className='mb-6 md:mb-0'>
          <ul>
            <Link href="/" className="hover:underline text-white-600">
                Home
            </Link>
            <br></br>
            <Link href="/about" className="hover:underline text-white-600">
                About Us
            </Link>
            <br></br>
            <Link href="/project" className="hover:underline text-white-600">
                Our Products
            </Link>
            <li className='text-md hover:underline'><a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2EKUx-8A-JzzpFAFmdMrrvZst8L7pGjl_a1QG4kG2Mh4-1eb4bkowUsSwXwoc2gnE2f8D6WNjc' target='blank'>Book an Appointment</a></li>

          </ul> 
        </div>
        <div>
  <div className='mb-6 md:mb-0'>
    <h6 className='font-medium'>Follow us:</h6>
    <div className='flex flex-row space-x-4 mt-2'>

    </div>
  </div>
  <ul className='mt-4 text-left'>
    <li>For inquiries, please contact:</li>
    <li>
      <a
        href="mailto:capistrano_distillery@yahoo.com"
        className="text-white hover:underline"
      >
        capistrano_distillery@yahoo.com
      </a>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
};

export default Footer;
