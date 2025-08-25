import { useState } from "react";
import logo from '../assets/img/logoQpay.png'
import thomas from '../assets/img/thomasShelby.png'
import greyDown from '../assets/img/grey-down-arrow.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black py-5 fixed w-full z-999">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-xl font-bold">
            <img src={logo} alt="Qpay Logo" width={55} />
          </div>

          <div className="hidden md:flex space-x-6">
            <div className="user flex items-center">
                <img src={thomas} alt="user" width={48} />
                <div className="user-details ms-2">
                    <p className="text-[#999999] text-[14px] leading-[14px] font-medium mb-1">Hello</p>
                    <h2 className="text-[#252525] text-[20px] leading-[24px] font-semibold">Thomas Shelby</h2>
                </div>
                <img className="ml-[24px]" src={greyDown} alt="" />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <a href="#" className="block hover:text-gray-200">Home</a>
          <a href="#" className="block hover:text-gray-200">About</a>
          <a href="#" className="block hover:text-gray-200">Services</a>
          <a href="#" className="block hover:text-gray-200">Contact</a>
        </div>
      )}
    </header>
  );
}
