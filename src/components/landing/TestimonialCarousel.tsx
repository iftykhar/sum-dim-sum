// 'use client'

// import React from 'react';
// import Image from "next/image";
// import { FaStar } from 'react-icons/fa';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { FaQuoteLeft } from 'react-icons/fa';

// // This is a custom component to create the diamond-shaped pagination
// // You would need to place this in your own components directory (e.g., components/ui/carousel-pagination.jsx)
// const CarouselPagination = ({ activeIndex, count }) => {
//   return (
//     <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
//       {Array.from({ length: count }).map((_, index) => (
//         <div
//           key={index}
//           className={`w-3 h-3 rotate-45 border transition-all duration-300 ${
//             index === activeIndex
//               ? 'bg-white border-white'
//               : 'bg-transparent border-white'
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// const TestimonialCarousel = () => {
//   const testimonials = [
//     {
//       text: "Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.",
//       name: "Rosario Rosa",
//       profileImage: "/roca.jpg", // Replace with the path to the profile image
//     },
//     // Add more testimonial objects here if needed
//     {
//       text: "This is a second testimonial to demonstrate the carousel functionality. The food is simply incredible, and the atmosphere is authentic and welcoming. I can't wait to come back again and try more of their amazing dishes.",
//       name: "Jane Doe",
//       profileImage: "/roca.jpg",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = React.useState(0);

//   return (
//     <div>
//       {/* "The Talk of the Town" heading section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6 md:px-12 lg:px-24">
//           <div className="flex flex-col items-center text-center">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
//               THE TALK OF THE TOWN
//             </h2>
//             <img src="/objects.png" alt="decorative element" className="h-6" />
//           </div>
//         </div>
//       </section>

//       {/* Carousel section with the background image */}
//       <section className="relative h-[600px] flex items-center">
//         {/* Background Image with a dark overlay */}
//         <div className="absolute inset-0">
//           <Image
//             src="/Rectangle424.png" // The blurred dim sum image
//             alt="Background"
//             fill
//             className="object-cover opacity-60"
//             priority
//           />
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>

//         {/* Carousel container on top of the background */}
//         <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-24">
//           <Carousel
//             className="w-full max-w-4xl mx-auto"
//             opts={{ loop: true }}
//             onSelect={(embla) => setActiveIndex(embla.selectedScrollSnap())}
//           >
//             <CarouselContent>
//               {testimonials.map((testimonial, index) => (
//                 <CarouselItem key={index}>
//                   <div className="relative p-10 text-center text-white flex flex-col items-center">
//                     {/* Profile Image */}
//                     <div className="absolute -top-16 md:-top-20 z-20">
//                       <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white overflow-hidden">
//                         <Image
//                           src={testimonial.profileImage}
//                           alt={testimonial.name}
//                           width={112}
//                           height={112}
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     </div>

//                     {/* Left Quote Icon */}
//                     <FaQuoteLeft className="absolute top-10 left-10 text-6xl text-white/30" />

//                     {/* Testimonial Content */}
//                     <div className="relative mt-20 flex flex-col items-center text-center max-w-3xl mx-auto">
//                       <p className="leading-relaxed mb-6 text-lg md:text-xl font-light">
//                         {testimonial.text}
//                       </p>
//                       <div className="flex justify-center text-yellow-400 mb-4 text-xl">
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                       </div>
//                       <div className="font-light text-gray-300 italic text-2xl"
//                         style={{ fontFamily: '"Dancing Script", cursive' }}>
//                         {testimonial.name}
//                       </div>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             <CarouselPrevious className="text-white border border-white rounded-full w-12 h-12 hover:bg-white/10 transition-colors" />
//             <CarouselNext className="text-white border border-white rounded-full w-12 h-12 hover:bg-white/10 transition-colors" />
//           </Carousel>

//           {/* Custom pagination */}
//           <CarouselPagination activeIndex={activeIndex} count={testimonials.length} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TestimonialCarousel;
// 'use client'

// import React, { useState } from 'react';
// import Image from "next/image";
// import { FaStar } from 'react-icons/fa';
// import { FaQuoteLeft } from 'react-icons/fa';

// // This is a custom component to create the diamond-shaped pagination
// const CarouselPagination = ({ activeIndex, count, onClick }) => {
//   return (
//     <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
//       {Array.from({ length: count }).map((_, index) => (
//         <div
//           key={index}
//           onClick={() => onClick(index)}
//           className={`w-3 h-3 rotate-45 border transition-all duration-300 cursor-pointer ${
//             index === activeIndex
//               ? 'bg-white border-white'
//               : 'bg-transparent border-white'
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// const TestimonialCarousel = () => {
//   const testimonials = [
//     {
//       text: "Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.",
//       name: "Rosario Rosa",
//       profileImage: "/Ellipse83.png", 
//     },
//     {
//       text: "This is a second testimonial to demonstrate the carousel functionality. The food is simply incredible, and the atmosphere is authentic and welcoming. I can't wait to come back again and try more of their amazing dishes.",
//       name: "Jane Doe",
//       profileImage: "/Ellipse83.png",
//     },
//     {
//       text: "This is a third testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       name: "Alex Johnson",
//       profileImage: "/Ellipse83.png",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const totalSlides = testimonials.length;

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div>
//       {/* "The Talk of the Town" heading section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6 md:px-12 lg:px-24">
//           <div className="flex flex-col items-center text-center">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
//               THE TALK OF THE TOWN
//             </h2>
//             <img src="/objects.png" alt="decorative element" className="h-6" />
//           </div>
//         </div>
//       </section>

//       {/* Carousel section with the background image */}
//       <section className="relative h-[600px] flex items-center">
//         {/* Background Image with a dark overlay */}
//         <div className="absolute inset-0">
//           <Image
//             src="/Rectangle424.png" // The blurred dim sum image
//             alt="Background"
//             fill
//             className="object-cover opacity-60"
//             priority
//           />
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>

//         {/* Carousel container on top of the background */}
//         <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-24">
//           <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="flex-none w-full">
//                   <div className="relative p-10 text-center text-white flex flex-col items-center">
//                     {/* Profile Image */}
//                     <div className="absolute -top-16 md:-top-20 z-20">
//                       <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white overflow-hidden">
//                         <Image
//                           src={testimonial.profileImage}
//                           alt={testimonial.name}
//                           width={112}
//                           height={112}
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     </div>

//                     {/* Left Quote Icon */}
//                     <FaQuoteLeft className="absolute top-10 left-10 text-6xl text-white/30" />

//                     {/* Testimonial Content */}
//                     <div className="relative mt-20 flex flex-col items-center text-center max-w-3xl mx-auto">
//                       <p className="leading-relaxed mb-6 text-lg md:text-xl font-light">
//                         {testimonial.text}
//                       </p>
//                       <div className="flex justify-center text-yellow-400 mb-4 text-xl">
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                       </div>
//                       <div className="font-light text-gray-300 italic text-2xl"
//                         style={{ fontFamily: '"Dancing Script", cursive' }}>
//                         {testimonial.name}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Custom Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-0 -translate-y-1/2 ml-4 text-white border border-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-white/10 transition-colors"
//           >
//             &lt;
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-0 -translate-y-1/2 mr-4 text-white border border-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-white/10 transition-colors"
//           >
//             &gt;
//           </button>

//           {/* Custom pagination */}
//           <CarouselPagination
//             activeIndex={activeIndex}
//             count={testimonials.length}
//             onClick={setActiveIndex}
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TestimonialCarousel;

'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rosario Rosa',
      text: `Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.`,
      profileImage: '/Ellipse83.png',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Doe',
      text: `This is a second testimonial. The food is incredible and the atmosphere is welcoming. Highly recommended!`,
      profileImage: '/Ellipse83.png',
      rating: 5,
    },
    {
      id: 3,
      name: 'Alex Johnson',
      text: `Absolutely amazing dim sum! Best experience ever. Will visit again soon.`,
      profileImage: '/Ellipse83.png',
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const data = testimonials[activeIndex]

  return (
    <section>
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center pb-8">
          <h3 className="font-bold text-5xl cinzel leading-[136%]">The Talk of the Town</h3>
          <Image className="mx-auto object-cover" src="/objects.png" alt="Taste Tradition" width={117} height={48} />
        </div>

        {/* Carousel */}
        <div className="relative">
          <Image
            className="object-cover w-full h-[520px] aspect-auto opacity-90"
            src="/DiveSumptuous.png"
            alt="banner"
            width={1440}
            height={520}
          />

          <div className="absolute flex flex-col gap-5 text-[#F8F8FF] items-center justify-center opacity-80 bg-gradient-to-r from-[#031720] to-[#031720] inset-0">
            <Image src={data.profileImage} alt="client" width={100} height={100} />

            <div className="absolute inset-0 text-[#F8F8FF66] opacity-80 text-4xl top-20 left-10 md:left-20">
              <FaQuoteLeft />
            </div>

            <p className="font-normal text-sm text-[#E6F6FC] md:text-[16px] w-[80%] text-center px-5 leading-[150%]">
              {data.text}
            </p>

            <div className="flex gap-2">
              {Array.from({ length: data.rating }).map((_, id) => (
                <FaStar key={id} className="text-orange-400 text-2xl" />
              ))}
            </div>
          </div>

          <div className="absolute passions bottom-12 md:bottom-24 right-5 text-[40px] md:text-[80px] font-normal text-[#F8F8FF66] leading-1.5">
            -{data.name}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-5xl text-white hover:rounded-3xl hover:bg-green-500"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl text-white hover:rounded-3xl hover:bg-green-500"
          >
            <IoIosArrowForward />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 flex left-1/2 -translate-x-1/2 gap-2 pt-10 md:pt-14">
            {testimonials.map((_, id) => (
              <div
                key={id}
                className={`w-2 h-2 rounded-full ${id === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
