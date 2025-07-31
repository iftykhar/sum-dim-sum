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
    <div className='' >
        <section className='topsection bg-[#0C0C0C] p-3 text-white'>
            <div className="container ">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-4">
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
                        <FaFacebookF />
                        <SiInstagram />
                        <FaLinkedinIn />
                        <FaXTwitter />
                    </div>
                </div>
                
            </div>
        </section>
        
    </div>
  )
}

export default Topsection

