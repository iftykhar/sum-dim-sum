import React from 'react';
import Image from "next/image";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Carousel,  CarouselContent, CarouselItem,  CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

const Comment = () => {

    const testimonials = [
    {
      text: "Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture.",
      name: "Rosario Roca",
    },
    {
      text: "The dim sum here is absolutely exquisite! Every dish is a masterpiece, prepared with such care and precision. The freshness and flavor are unparalleled. A must-visit for any dim sum lover in Singapore!",
      name: "Jane Doe",
    },
    {
      text: "I've been to many dim sum places, but Sum Dim Sum truly stands out. The quality is consistently high, the service is impeccable, and the atmosphere is wonderfully cozy. Highly recommended!",
      name: "John Smith",
    },
  ];

  return (

    // <div>
    //   <section className="relative py-20">
        
    //     <div className="absolute inset-0">
    //       <Image  src="/Rectangle424.png"  alt="Background" fill className="object-cover opacity-60" priority />
    //       <div className="absolute inset-0 bg-black opacity-50"></div>
    //     </div>

    //     <div className="">
    //         <Carousel>
    //             <CarouselContent>
    //                 <CarouselItem>...</CarouselItem>
    //                 <CarouselItem>...</CarouselItem>
    //                 <CarouselItem>...</CarouselItem>
    //             </CarouselContent>
    //             <CarouselPrevious />
    //             <CarouselNext />
    //         </Carousel>
    //     </div>
    //   </section>
    // </div>


    <div>
     

      {/* 2. The Carousel section with the background image */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image with a dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="/Rectangle424.png"
            alt="Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Carousel container on top of the background */}
        <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-24">
          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-10 text-center text-white">
                    <FaQuoteLeft className="text-3xl text-gray-300 mx-auto mb-4" />
                    <p className="leading-relaxed mb-6 text-lg md:text-xl">
                      {testimonial.text}
                    </p>
                    <div className="flex justify-center text-yellow-400 mb-4">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <div className="font-semibold text-gray-300 italic">
                      {testimonial.name}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white" />
            <CarouselNext className="text-white border-white" />
          </Carousel>
        </div>
      </section>
    </div>

  )
}

export default Comment
