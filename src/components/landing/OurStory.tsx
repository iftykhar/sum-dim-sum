import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { PiCallBellLight } from "react-icons/pi";
import { IoRibbonOutline } from "react-icons/io5";
import { BiCalendarStar } from "react-icons/bi";
import {  Card,  CardAction,  CardContent,  CardDescription,  CardFooter,  CardHeader,  CardTitle,} from "@/components/ui/card"

// const OurStory = () => {
//   return (
//     <div>
//       <section className='container '>

//         <div className="p-10">
//             <div className="w-full flex">
//                 <div className="w-2/3">
//                     <div className="px-20">
//                         <Card>
//                         <CardHeader>
//                             {/* <CardTitle> */}
//                                 <h1 className="text 8xl font-bold" style={{ fontFamily: '"Cinzel Decorative", cursive' }} >
//                                     Our Story
//                                 </h1>
//                             {/* </CardTitle> */}
                            
                            
//                         </CardHeader>
//                         <CardContent>
//                             <p>Card Content</p>
//                         </CardContent>
//                         <CardFooter>
//                             <p>Card Footer</p>
//                         </CardFooter>
//                         </Card>
//                     </div>
//                 </div>
//                 <div className="w-1/3">
//                     <Card>
//                         <CardContent>
//                             <img src="/Rectangle401.png" alt="image" />
//                         </CardContent>
//                     </Card>
//                 </div>
                    
//             </div>
//             <div className="flex">
//                 <div className="">
//                     <BsEmojiSmile className='text-red-400 text-4xl font-bold' />
//                     <p>afdsafsfsaf</p>
//                 </div>
//                 <div className="">
//                     <BsEmojiSmile />
//                     <p>afdsafsfsaf</p>
//                 </div>
//                 <div className="">
//                     <BsEmojiSmile />
//                     <p>afdsafsfsaf</p>
//                 </div>
//                 <div className="">
//                     <BsEmojiSmile />
//                     <p>afdsafsfsaf</p>
//                 </div>
//             </div>
//         </div>

//       </section>
//     </div>
//   )
// }

// export default OurStory

const OurStory = () => {
  return (
    <div>
      <section className='container mx-auto px-[60px]'>
        <div className="p-10">
          {/* <div className="w-full flex gap-8">
            <div className="w-2/3">
              <Card className="bg-pink-50">
                <CardContent className="p-8">
                  <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
                    OUR STORY
                  </h1>
                  <p className="text-gray-700 mb-6">
                    At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.
                  </p>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            </div>
            <div className="w-1/3">
              <Card>
                <CardContent className="p-0">
                  <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </div> */}
          <div className="w-full flex gap-8">
                <div className="w-2/3">
                {/* Replaced Card and CardContent with a div */}
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
                </div>
                <div className="w-1/3">
                {/* Replaced Card and CardContent with a div */}
                {/* <div className="relative w-full h-auto flex items-center justify-center">
                    <img
                        src="/Rectangle401.png"
                        alt="Sum Dim Sum storefront"
                        className="w-full h-auto rounded-lg relative z-10"
                    />
                    <div
                        className="absolute top-4 left-4 w-[90%] h-[90%] border-4 border-red-600 rounded-lg z-0"
                        style={{ pointerEvents: 'none' }}
                    />
                </div> */}
                <div className="relative w-full h-auto p-4">
                    <div className="relative">
                        <img
                            src="/Rectangle401.png"
                            alt="Sum Dim Sum storefront"
                            className="w-full h-auto rounded-lg z-10 relative"
                        />
                        <div className="absolute inset-0 border-8 border-red-600/30 rounded-lg -translate-x-4 -translate-y-4" />
                    </div>
                </div>
                </div>
        </div>

          <div className="flex justify-between mt-12 px-4">
            <div className="text-center">
              <BsEmojiSmile className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">6,000+</h3>
              <p className="text-gray-600">Happy Guests</p>
            </div>
            <div className="text-center">
              <PiCallBellLight className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Unique Dishes</p>
            </div>
            <div className="text-center">
              <IoRibbonOutline className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="text-gray-600">Years Of Quality</p>
            </div>
            <div className="text-center">
              <BiCalendarStar className="text-red-600 text-4xl mb-4 mx-auto" />
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