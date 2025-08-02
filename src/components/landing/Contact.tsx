"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://landingpage-backend-fovb.onrender.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      const data = await res.json();
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', phoneNumber: '', message: '' });

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    
    <div className="container mx-auto px-6 md:px-16">
    <div className="w-full bg-gray-100">
      <div className="flex w-full h-[600px] shadow-lg rounded-lg overflow-hidden">
        
        <div className="w-2/3 relative">
          <Image  src="/Rectangle358.png"  alt="Hero Background"  fill className="object-cover z-0" priority />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-8">
            <div className="w-full max-w-md text-white">
              <h2 className="text-3xl font-bold mb-2 text-start">Just Say Hi!</h2>
              <p className="mb-6 text-sm text-start">Tell us more about you and we ll contact you soon.</p>

              <form  onChange={handleSubmit} className="space-y-4">
                <div>
                  <input type="text"   name='name' value={formData.name} onChange={handleChange}  placeholder="Name" className="w-full p-3 bg-transparent bg-opacity-30 border-b placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div className="flex space-x-4">
                  <input type="email"  name='email' value={formData.email} onChange={handleChange}  placeholder="Email" className="w-1/2 p-3 bg-transparent bg-opacity-30 border-b placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white" />
                  <input type="tel"  name='phoneNumber' value={formData.phoneNumber} onChange={handleChange}  placeholder="Phone Number" className="w-1/2 p-3 bg-transparent bg-opacity-30 border-b placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"  />
                </div>
                <div>
                  <textarea rows={4}  name='message' value={formData.message} onChange={handleChange}  placeholder="Type your message here" className="w-full p-3 bg-transparent bg-opacity-30 border-b placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white" ></textarea>
                </div>
                <div className="flex justify-end items-center">
                                    <button type='submit' className="w-1/2 items-center text-center bg-red-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-800 transition-colors duration-300 shadow-lg">
                                    Submit  
                                    </button>
                            </div>
                
              </form>
            </div>
          </div>
        </div>

        <div className="w-1/3 bg-pink-50 flex flex-col justify-center items-center p-12 relative ">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>Maui, Hawaii, USA</p>
              <p>Call us: +1234567890</p>
              <p>Whatsapp: +1234567890</p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl text-gray-800">
              <a href="#" className="hover:text-red-600 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaXTwitter /></a>
            </div>
          </div>

           <div className="text-xl font-bold text-gray-800 absolute bottom-5 right-5" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
            CONTACT US
          </div> 
          <div className="absolute right-25 bottom-40 opacity-10 pointer-events-none">
            <Image src="/sakura-tree.png"  alt="Sakura tree"  width={400}  height={400} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;