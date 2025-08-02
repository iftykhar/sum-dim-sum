// import React from 'react'
// import Image from "next/image";
// import {Button} from "@/components/ui/button";
// import { FaArrowRightLong } from "react-icons/fa6";



// const Hero = () => {
//   return (
//     <div>
//     <section className="hero relative h-[900px] flex items-center justify-center text-white">
      

        
//       <Image src="/heroimg1.png" alt="Hero Background" fill className="object-cover z-0  h-[900px] " priority />
//       <div className="container mx-auto px-[60px]">

//       <div className="absolute inset-0 bg-black/50 z-10" />

//         <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between mx-auto px-[60px] bg-transparent mt-6">
//             <div className="flex w-full justify-between items-center">
//                 <div className="text-2xl font-bold">
//                     <img src="/sum_logo.png" alt="sumlogo" />
//                 </div>
//                 <div className="">

//                     <ul className="flex space-x-8 gap-6">
//                         <li>
//                             <a href="#" className="hover:text-red-500 transition-colors"> Home </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-red-500 transition-colors">About</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-red-500 transition-colors">Menu & Locations</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-red-500 transition-colors">Reservation</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-red-500 transition-colors">Merchandise</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-red-500 transition-colors">Career</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-red-500 transition-colors">Contact</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="">
//                     <Button variant="outline" className="border-white text-white bg-black hover:bg-black hover:text-white hover:border-white">
//                                 Book A Table 
//                             </Button>
//                 </div>
//             </div>
//         </nav>

//         <div className="relative z-18 text-center mt-40">
//             <div className="justify-center">
//                 <h1 className="text-6xl font-bold" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
//                     Welcome to Sum Dim Sum – Where Every Bite Tells a Story
//                 </h1>
//                 <div className="p-6">
//                     <p className="text-lg mt-4 p-x-[80px]" style={{ fontFamily: '"Raleway", sans-serif' }}>At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!</p>
//                 </div>
//             </div>
//             <div className="mt-12">
//                 <Button variant="destructive" className=" text-white bg-red-800 hover:bg-red-300  hover:text-black ">
//                         Explore Our Menu <FaArrowRightLong />
//                 </Button>
                    
//             </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-10 z-20 p-6 flex justify-end">
//             <img src="/hero-seal.png" alt="hero seal" />
//         </div>

//         </div>
//     </section>
//     </div>
//   )
// }

// export default Hero


import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaArrowRightLong } from "react-icons/fa6"
import MobileSidebar from './MobileSidebar';

const Hero = () => {
  return (
    <div>
      <section className="hero relative h-[900px] flex items-center justify-center text-white">
        <Image src="/heroimg1.png" alt="Hero Background" fill className="object-cover z-0 h-[900px]" priority />
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px]">

          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Desktop & Tablet Nav */}
          <nav className="hidden md:flex absolute top-0 left-0 w-full z-20 items-center justify-between mt-6 px-4 sm:px-6 lg:px-[60px]">
            <div className="flex w-full justify-between items-center">
              <div className="text-2xl font-bold">
                <img src="/sum_logo.png" alt="sumlogo" />
              </div>
              <ul className="flex space-x-8 gap-6">
                <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Menu & Locations</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Reservation</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Merchandise</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
              <Button variant="outline" className="border-white text-white bg-black hover:bg-black hover:text-white hover:border-white">
                Book A Table
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Placeholder */}
          <nav className="md:hidden absolute top-0 left-0 w-full z-20 flex items-center justify-between px-4 mt-6">
            <div className="text-2xl font-bold">
              <img src="/sum_logo.png" alt="sumlogo" />
            </div>
            {/* You can plug in a real mobile menu toggle here */}
            <button className="text-white border border-white px-4 py-2 rounded">Menu</button>
          </nav>

          {/* Hero Content */}
          <div className="relative z-20 mt-40 text-center flex flex-col items-center justify-center px-4">
            <h1
              className="text-2xl md:text-4xl lg:text-6xl font-bold max-w-4xl"
              style={{ fontFamily: '"Cinzel Decorative", cursive' }}
            >
              Welcome to Sum Dim Sum – Where Every Bite Tells a Story
            </h1>

            <div className="p-4 md:p-6 max-w-3xl">
              <p
                className="text-sm md:text-base lg:text-lg mt-4"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!
              </p>
            </div>

            <div className="mt-6 md:mt-12">
              <Button variant="destructive" className="text-white bg-red-800 hover:bg-red-300 hover:text-black">
                Explore Our Menu <FaArrowRightLong />
              </Button>
            </div>
          </div>

          {/* Hero Seal Image */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center md:justify-end p-4 md:p-6">
            <img src="/hero-seal.png" alt="hero seal" className="w-24 md:w-auto" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
