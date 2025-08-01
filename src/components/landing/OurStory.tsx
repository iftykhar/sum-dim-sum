import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { PiCallBellLight } from "react-icons/pi";
import { IoRibbonOutline } from "react-icons/io5";
import { BiCalendarStar } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import {  Card,  CardAction,  CardContent,  CardDescription,  CardFooter,  CardHeader,  CardTitle,} from "@/components/ui/card"


const OurStory = () => {
  return (
    <div>
      <section className='container mx-auto px-[60px]'>
        <div className="p-10">
          
          <div className="w-full flex gap-8">
                {/* <div className="w-3/4">
                
                  <div className="bg-pink-50 p-8 rounded-lg"> 
                      <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
                      OUR STORY
                      </h1>
                      <p className="text-gray-700 mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>
                      At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.
                      </p>
                      <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                      Learn More →
                      </button>
                  </div>

                  <div className="relative w-[50%] h-auto p-4">
                      <div className="relative">
                        <img  src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-10"/>
                      <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-4 -translate-y-4 z-0" />
                      </div>
                  </div>
                </div> */}
                <div className="w-3/4 relative p-20"> {/* Added relative positioning to parent */}
                  <div className="bg-pink-50 p-14 rounded-lg"> 
                    <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
                      OUR STORY
                    </h1>
                    <p className="text-gray-700 mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>
                      At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center gap-3">
                      Learn More <FaArrowRightLong />
                    </button>
                  </div>

                 
                  <div className="absolute -bottom-30 -right-50 w-[400px]">
                    <div className="relative flex justify-end">
                      <div>
                        <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-20" />
                        <div className="absolute inset-0 border-2 border-red-500 rounded-lg translate-x-6 -translate-y-6 z-10" />
                      </div>
                    </div>
                  </div>
                </div>
                
                
          </div>

          <div className="flex justify-between mt-40 px-4">
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
        </div>
      </section>
    </div>
  )
}

export default OurStory