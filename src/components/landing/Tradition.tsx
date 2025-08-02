// import React from 'react';
// import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";
// import {  Card,  CardAction,  CardContent,  CardDescription,  CardFooter,  CardHeader,  CardTitle,} from "@/components/ui/card";

// const Tradition = () => {
//   return (
//     <div>
//         <section className='container mx-auto px-[60px]'>
//             <div className="p-20 mx-10">
//                 <div className="flex flex-col items-center text-center">
//                     <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }} >
//                         Taste the Tradition
//                     </h1>
//                     <img src="/objects.png" alt="logo" />
//                 </div>
//                 <div className="mt-15 flex flex-col ">
//                     <div className="w-full flex ">
//                             <div className="w-3/5 ">
//                                 <Card className="relative group overflow-hidden w-[740px] h-[400px] rounded-xl shadow-md">
                                
//                                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/Rectangle411.png')" }}></div>

                               
//                                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                                
//                                 <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex">
//                                     <div className="pr-20">
//                                             <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
//                                             <br />
//                                             <CardDescription>A traditional dim sum favorite featuring steamed dumplings
//                                                 filled with succulent pork, mushrooms, and topped with
//                                             wolfberries for a hint of sweetness.</CardDescription>
//                                     </div>
                                    
//                                     <CardAction className='pl-10'>
//                                         <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
//                                         View Details <FaArrowRightLong />
//                                         </button>
//                                     </CardAction>
//                                 </div>
//                                 </Card>
//                             </div>
//                             <div className="w-2/5 pl-10 justify-end">
//                                     <Card className="relative group overflow-hidden w-[450px] h-[400px] rounded-xl shadow-md">
                            
//                                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/Rectangle412.png')" }}></div>
                                        
//                                             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                            
//                                             <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex">
//                                                 <div className="pr-20">
//                                                         <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
//                                                         <br />
//                                                         <CardDescription>A traditional dim sum favorite featuring steamed dumplings
//                                                             filled with succulent pork, mushrooms, and topped with
//                                                         wolfberries for a hint of sweetness.</CardDescription>
//                                                 </div>
                                                
//                                                 <CardAction className='pl-10'>
//                                                     <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
//                                                     View Details <FaArrowRightLong />
//                                                     </button>
//                                                 </CardAction>
//                                             </div>
//                                     </Card> 
                                

//                             </div>
//                     </div>
//                     <div className="w-full flex mt-10 ">
//                         <div className="w-2/5 justify-end">
//                                     <Card className="relative group overflow-hidden w-[450px] h-[400px] rounded-xl shadow-md">
                            
//                                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/Rectangle415.png')" }}></div>
                                        
//                                             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                            
//                                             <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex">
//                                                 <div className="pr-20">
//                                                         <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
//                                                         <br />
//                                                         <CardDescription>A traditional dim sum favorite featuring steamed dumplings
//                                                             filled with succulent pork, mushrooms, and topped with
//                                                         wolfberries for a hint of sweetness.</CardDescription>
//                                                 </div>
                                                
//                                                 <CardAction className='pl-10'>
//                                                     <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
//                                                     View Details <FaArrowRightLong />
//                                                     </button>
//                                                 </CardAction>
//                                             </div>
//                                     </Card> 
                                

//                         </div>
//                             <div className="w-3/5 ">
//                                 <Card className="relative group overflow-hidden w-[740px] h-[400px] rounded-xl shadow-md">
                                
//                                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/Rectangle417.png')" }}></div>

                               
//                                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                                
//                                 <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex">
//                                     <div className="pr-20">
//                                             <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
//                                             <br />
//                                             <CardDescription>A traditional dim sum favorite featuring steamed dumplings
//                                                 filled with succulent pork, mushrooms, and topped with
//                                             wolfberries for a hint of sweetness.</CardDescription>
//                                     </div>
                                    
//                                     <CardAction className='pl-10'>
//                                         <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
//                                         View Details <FaArrowRightLong />
//                                         </button>
//                                     </CardAction>
//                                 </div>
//                                 </Card>
//                             </div>
//                     </div>
//                 </div>
//             </div>
            
//         </section>
//     </div>
//   )
// }

// export default Tradition


import React from 'react';
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Card,
  CardAction,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const Tradition = () => {
  return (
    <section className="container mx-auto px-4 sm:px-10 lg:px-[60px]">
      <div className="py-10 sm:py-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center px-2">
          <h1
            className="text-3xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: '"Cinzel Decorative", cursive' }}
          >
            Taste the Tradition
          </h1>
          <Image src="/objects.png" alt="logo" width={60} height={60} />
        </div>

        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          {/* Left Large Card */}
          <div className="md:w-3/5 w-full">
            <Card className="relative group overflow-hidden w-full h-[400px] rounded-xl shadow-md">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('/Rectangle411.png')" }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col sm:flex-row gap-4">
                <div className="pr-0 sm:pr-20">
                  <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
                  <br />
                  <CardDescription>
                    A traditional dim sum favorite featuring steamed dumplings
                    filled with succulent pork, mushrooms, and topped with
                    wolfberries for a hint of sweetness.
                  </CardDescription>
                </div>
                <CardAction className="pt-4 sm:pt-0 sm:pl-10">
                  <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
                    View Details <FaArrowRightLong />
                  </button>
                </CardAction>
              </div>
            </Card>
          </div>

          {/* Right Small Card */}
          <div className="md:w-2/5 w-full">
            <Card className="relative group overflow-hidden w-full h-[400px] rounded-xl shadow-md">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('/Rectangle412.png')" }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col sm:flex-row gap-4">
                <div className="pr-0 sm:pr-20">
                  <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
                  <br />
                  <CardDescription>
                    A traditional dim sum favorite featuring steamed dumplings
                    filled with succulent pork, mushrooms, and topped with
                    wolfberries for a hint of sweetness.
                  </CardDescription>
                </div>
                <CardAction className="pt-4 sm:pt-0 sm:pl-10">
                  <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
                    View Details <FaArrowRightLong />
                  </button>
                </CardAction>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          {/* Left Small Card */}
          <div className="md:w-2/5 w-full">
            <Card className="relative group overflow-hidden w-full h-[400px] rounded-xl shadow-md">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('/Rectangle415.png')" }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col sm:flex-row gap-4">
                <div className="pr-0 sm:pr-20">
                  <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
                  <br />
                  <CardDescription>
                    A traditional dim sum favorite featuring steamed dumplings
                    filled with succulent pork, mushrooms, and topped with
                    wolfberries for a hint of sweetness.
                  </CardDescription>
                </div>
                <CardAction className="pt-4 sm:pt-0 sm:pl-10">
                  <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
                    View Details <FaArrowRightLong />
                  </button>
                </CardAction>
              </div>
            </Card>
          </div>

          {/* Right Large Card */}
          <div className="md:w-3/5 w-full">
            <Card className="relative group overflow-hidden w-full h-[400px] rounded-xl shadow-md">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('/Rectangle417.png')" }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col sm:flex-row gap-4">
                <div className="pr-0 sm:pr-20">
                  <CardTitle>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</CardTitle>
                  <br />
                  <CardDescription>
                    A traditional dim sum favorite featuring steamed dumplings
                    filled with succulent pork, mushrooms, and topped with
                    wolfberries for a hint of sweetness.
                  </CardDescription>
                </div>
                <CardAction className="pt-4 sm:pt-0 sm:pl-10">
                  <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md transition-colors flex items-center gap-3">
                    View Details <FaArrowRightLong />
                  </button>
                </CardAction>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tradition;
