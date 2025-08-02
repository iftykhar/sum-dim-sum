// import React from 'react';
// import Image from "next/image";
// import {Button} from "@/components/ui/button";
// import { FaArrowRightLong } from "react-icons/fa6";


// const Info = () => {
//   return (
//     <div>

//       <section className="info relative h-[500px] flex items-center justify-center text-white">

//             <Image src="/Rectangle424.png" alt="info Background" fill className="object-cover z-0  h-[900px] " priority />
//             <div className="container mx-auto px-[60px]">
      
//             <div className="absolute inset-0 bg-black/50 z-10" />
      
//                <div className="relative z-20 flex flex-col items-center justify-center text-center mt-40  px-4">
//                 <div className="max-w-4xl">
//                     <h1 className="text-4xl md:text-4xl font-bold" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
//                     Welcome to Sum Dim Sum – Where Every Bite Tells a Story
//                     </h1>
//                     <p className="text-lg mt-6 px-4 md:px-20" style={{ fontFamily: '"Raleway", sans-serif' }}>
//                     At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!
//                     </p>
//                 </div>

//                 <div className="mt-12 ">
//                     <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors flex items-center gap-3">
//                     Explore More <FaArrowRightLong />
//                     </button>
//                 </div>
//                 </div>
              
      
//               </div>
//           </section>
//     </div>
//   )
// }

// export default Info


import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";


const Info = () => {
return (
<div>
<section className="info relative h-[500px] flex items-center justify-center text-white">
 <Image src="/Rectangle424.png" alt="info Background" fill className="object-cover z-0 h-[900px] " priority />
 <div className="container mx-auto px-[60px]">
 <div className="absolute inset-0 bg-black/50 z-10" />
 <div className="relative z-20 flex flex-col items-center justify-center text-center mt-40 px-4">
 <div className="max-w-4xl">

  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
  Welcome to Sum Dim Sum – Where Every Bite Tells a Story
  </h1>
 <p className="text-sm md:text-base lg:text-lg mt-6 px-4 md:px-20" style={{ fontFamily: '"Raleway", sans-serif' }}>
  At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!
  </p>
 </div>
 <div className="mt-8 md:mt-12">
 
  <button className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2 md:gap-3 text-sm md:text-base">
  Explore More <FaArrowRightLong />
  </button>
 </div>
 </div>
 </div>
</section>
</div>
)
}

export default Info