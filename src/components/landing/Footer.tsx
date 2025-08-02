import React from 'react';
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white">
      <section className="container mx-auto px-6 md:px-16">

        <hr className="bg-red-500 h-[1px] border-0 mt-8 mb-6" />

        
         

<div className="flex flex-col md:flex-row justify-center items-start md:items-center pt-6 pb-8 gap-8 md:gap-0 text-left">
 
  <div className="w-full md:w-1/3 space-y-4 flex flex-col items-start md:items-start text-left">
    <h2 className="font-sans font-bold text-xl text-gray-800 tracking-wide mb-4">CONTACT</h2>
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <MdLocalPhone className="text-lg" />
      <span>+1234567890</span>
    </div>
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <FaLocationDot className="text-lg" />
      <span>Your Address Here</span>
    </div>
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <MdEmail className="text-lg" />
      <span>example@example.com</span>
    </div>
  </div>

 
  <div className="w-full md:w-1/3 flex flex-col items-start md:items-center justify-center gap-3">
    <Image
      src="/footerlogo.png"
      alt="Company Logo"
      width={200}
      height={60}
      priority
    />
    <div className="flex gap-4">
      <FaFacebookF className="cursor-pointer text-gray-700 text-lg hover:text-red-500" />
      <SiInstagram className="cursor-pointer text-gray-700 text-lg hover:text-red-500" />
      <FaLinkedinIn className="cursor-pointer text-gray-700 text-lg hover:text-red-500" />
      <FaXTwitter className="cursor-pointer text-gray-700 text-lg hover:text-red-500" />
    </div>
  </div>


  <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right">
    <ul className="space-y-2 text-base text-gray-600">
      <li><a href="#" className="hover:text-red-500">Home</a></li>
      <li><a href="#" className="hover:text-red-500">About Us</a></li>
      <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
      <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
    </ul>
  </div>
</div>


        <hr className="bg-red-500 h-[1px] border-0 my-6" />

        <p className="text-sm text-center py-4 text-gray-400">
          Copyright 2024 © SumDimSum.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
