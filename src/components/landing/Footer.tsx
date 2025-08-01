// import React from 'react';
// import Image from "next/image";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdLocalPhone } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { SiInstagram } from "react-icons/si";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <div>
//     <section  className="container mx-auto px-[60px]">
//         <hr className="bg-red-500 h-1 border-0 my-4" />

//         <div className="flex justify-evenly ">
//             <div className="w-1/3">
//                 <h1 className=''>CONTACT</h1>
//                 <div className="flex gap-2 items-center">
//                     <MdLocalPhone />
//                     <p>+1234567890</p>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                     <FaLocationDot />
//                     <p>Your Address Here</p>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                     <MdEmail />
//                     <p>example@example.com</p>
//                 </div>
//             </div>
//             <div className="w-1/3 flex flex-col">
//                 <img src="/Verctor.png" alt="" />
//                 <div className="flex gap-4">
//                     <FaFacebookF className="cursor-pointer hover:text-gray-300" />
//                     <SiInstagram className="cursor-pointer hover:text-gray-300" />
//                     <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
//                     <FaXTwitter className="cursor-pointer hover:text-gray-300" />
//                 </div>
//             </div>
//             <div className="w-1/3 ">
//                 <ul className=' flex flex-col text-end'>
//                     <li><a href="">Home</a></li>
//                     <li><a href="">About Us</a></li>
//                     <li><a href="">Privacy Policy</a></li>
//                     <li><a href="">Terms & Conditions</a></li>
//                 </ul>
//             </div>
//         </div>
//         <hr className="bg-red-500 h-1 border-0 my-4" />

//         <p className="text-sm mb-4 text-center">Copyright 2024 © SumDimSum</p>

        
//     </section>
//     </div>
//   )
// }

// export default Footer
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
        <hr className="bg-red-500 h-1 border-0 my-4" />

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Contact Section */}
          <div className="flex-1 space-y-3">
            <h2 className="font-semibold text-lg">CONTACT</h2>
            <div className="flex items-center gap-2 text-sm">
              <MdLocalPhone />
              <span>+1234567890</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaLocationDot />
              <span>Your Address Here</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MdEmail />
              <span>example@example.com</span>
            </div>
          </div>

          {/* Logo & Social Icons */}
          <div className="flex-1 items-center justify-center flex flex-col gap-4">
            <Image
              src="/footerlogo.png"
              alt="Company Logo"
              width={150}
              height={50}
              priority
            />
            <div className="flex gap-4">
              <FaFacebookF className="cursor-pointer hover:text-gray-500" />
              <SiInstagram className="cursor-pointer hover:text-gray-500" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-500" />
              <FaXTwitter className="cursor-pointer hover:text-gray-500" />
            </div>
          </div>

          {/* Links */}
          <div className="flex-1">
            <ul className="flex flex-col items-end space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <hr className="bg-red-500 h-1 border-0 my-4" />

        <p className="text-sm text-center mb-4 text-gray-600">
         Copyright 2024 © SumDimSum.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
