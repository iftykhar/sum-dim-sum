import React from 'react';
import Image from "next/image";
import { BsEmojiSmile } from "react-icons/bs";
import { PiCallBellLight } from "react-icons/pi";
import { IoRibbonOutline } from "react-icons/io5";
import { BiCalendarStar } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const OurStory = () => {
  return (
    <div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full relative p-4 sm:p-6 md:p-10 lg:p-20">
            <div className="bg-pink-50 p-4 sm:p-6 md:p-10 lg:p-14 rounded-lg relative z-10">
              
              <div className="absolute right-4 sm:right-10 bottom-6 opacity-10 pointer-events-none z-0">
                <Image src="/tree-branch.png" alt="Sakura tree" width={200} height={200} />
              </div>

              <h1  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10" style={{ fontFamily: '"Cinzel Decorative", cursive' }} >
                OUR STORY
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 relative z-10"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.
              </p>
              <button
                className="bg-red-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2 sm:gap-3 text-sm sm:text-base relative z-10"
              >
                Learn More <FaArrowRightLong />
              </button>
            </div>


            <div className="absolute -bottom-20 -right-20 w-[250px] sm:w-[300px] md:w-[400px] z-20 max-md:static max-md:mt-8">
              <div className="relative flex justify-end">
                <div>

                  <Image
                    src="/Rectangle401.png"
                    alt="Sum Dim Sum storefront"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-lg relative z-20"
                  />

                  <div className="absolute inset-0 border-2 border-red-500 rounded-lg translate-x-8 translate-y-8 z-10 block md:hidden" />

                  <div className="absolute inset-0 border-2 border-red-500 rounded-lg translate-x-6 -translate-y-6 z-10 hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 sm:mt-32 px-4">
          <div className="text-center">
            <BsEmojiSmile className="text-red-600 text-6xl mb-4 mx-auto" />
            <h3 className="text-3xl font-bold mb-2">6,000+</h3>
            <p className="text-gray-600">Happy Guests</p>
          </div>
          <div className="text-center">
            <PiCallBellLight className="text-red-600 text-6xl mb-4 mx-auto" />
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-gray-600">Unique Dishes</p>
          </div>
          <div className="text-center">
            <IoRibbonOutline className="text-red-600 text-6xl mb-4 mx-auto" />
            <h3 className="text-3xl font-bold mb-2">20+</h3>
            <p className="text-gray-600">Years Of Quality</p>
          </div>
          <div className="text-center">
            <BiCalendarStar className="text-red-600 text-6xl mb-4 mx-auto" />
            <h3 className="text-3xl font-bold mb-2">12+</h3>
            <p className="text-gray-600">Monthly Events</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;