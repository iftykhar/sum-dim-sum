import React from 'react';
import { ChevronDown } from 'lucide-react';

const Reservation = () => {
  return (
    <div>
        <section className="container mx-auto px-4 md:px-[60px] py-12 md:py-24">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="relative w-full lg:w-1/2 flex justify-center">
                    <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-20" />
                    <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-6 -translate-y-6 z-10" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                
                    {/* <div className="">
                        <h1 className="text-4xl md:text-4xl font-bold" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
                        Reserve Your Table for an Authentic Sum Dim Sum Experience
                        </h1>
                        <p className="text-lg mt-6 px-4 md:px-20" style={{ fontFamily: '"Raleway", sans-serif' }}>
                        Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere. Whether it’s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes and impeccable service make every moment memorable. Reserve your table now and let us take you on a culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable dining experience awaits!
                        </p>
                    </div> */}
                    <div className="flex flex-col items-start justify-center text-left px-4 md: py-10">
                                <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }} >
                                    Reserve Your Table for an Authentic Sum Dim Sum Experience
                                </h1>

                                <p className="text-base md:text-lg max-w-4xl"  style={{ fontFamily: '"Raleway", sans-serif' }} >
                                    Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere.
                                    Whether it’s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes
                                    and impeccable service make every moment memorable. Reserve your table now and let us take you on a
                                    culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable
                                    dining experience awaits!
                                </p>
                        </div>

                    <div className="w-full max-w-xl">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border-b border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                                />
                            </div>
                            <div className="relative">
                                <input type="text"
                                placeholder="1 Person"
                                readOnly className="w-full p-3 border-b border-gray-300  pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer placeholder-gray-500"
                                /> <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                            </div>
                            <div className="relative">
                                <input
                                type="text"
                                placeholder="21-12-2024"
                                readOnly 
                                className="w-full p-3 border-b border-gray-300  pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer placeholder-gray-500"
                                />
                                
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                            </div>
                            
                            <div className="relative">
                                <input
                                type="text"
                                placeholder="9:00 PM"
                                readOnly 
                                className="w-full p-3 border-b border-gray-300  pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer placeholder-gray-500"
                                />
                                
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                            </div>
                            </div>
                            <div className="flex justify-center items-center">
                                    <button className="w-1/2 items-center text-center bg-red-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-800 transition-colors duration-300 shadow-lg">
                                    Book Now
                                    </button>
                            </div>
                            
                    </div>
                </div>
            </div>
        </section>
    </div>

  )
}

export default Reservation
