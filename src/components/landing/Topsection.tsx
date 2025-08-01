import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Topsection = () => {
    return (
        <div>
            <section className='topsection bg-[#0C0C0C] p-3 text-white'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-[60px]">
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full py-[10px] space-y-4 sm:space-y-0">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex gap-2 items-center">
                                <FaLocationDot />
                                <p>Your Address Here</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdLocalPhone />
                                <p>+1234567890</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdEmail />
                                <p>example@example.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                            <SiInstagram className="cursor-pointer hover:text-gray-300" />
                            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
                            <FaXTwitter className="cursor-pointer hover:text-gray-300" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Topsection

