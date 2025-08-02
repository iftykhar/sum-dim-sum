'use client'

import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'

const MobileSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>

      <div className="lg:hidden p-4">
        <button onClick={toggleMenu}>
          <IoMdMenu size={28} />
        </button>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>


      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleMenu}>
            <IoClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/" onClick={toggleMenu} className="text-gray-700 hover:text-black">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="text-gray-700 hover:text-black">About</Link>
          <Link href="/services" onClick={toggleMenu} className="text-gray-700 hover:text-black">Services</Link>
          <Link href="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-black">Contact</Link>
        </nav>
      </aside>
    </>
  )
}

export default MobileSidebar
