import React from 'react'
import { SlSocialInstagram } from 'react-icons/sl'
import { FaXTwitter } from 'react-icons/fa6'
import { PiLinkedinLogoLight } from 'react-icons/pi'
import { PiTelegramLogoLight } from 'react-icons/pi'

const Footer: React.FC = () => {
  return (
    <div className="bg-primary-100 mt-20 absolute left-0 right-0 h-auto lg:h-[17rem] ">
      <div className="container flex justify-between flex-wrap gap-2 w-full p-5">
        <div className="w-[15rem] h-auto">
          <p className="font-bold text-secondary-0 border-b-2 text-center mb-8 p-2">
            Shopping Guide
          </p>
          <div className="flex flex-col gap-y-2 text-secondary-100 font-bold">
            <a href="#">How To Order</a>
            <a href="#">Posting Process</a>
            <a href="#">Payment Methods</a>
          </div>
        </div>
        <div className="w-[15rem] h-auto">
          <p className="font-bold text-secondary-0 border-b-2 text-center mb-8 p-2">
            Customer Services
          </p>
          <div className="flex flex-col gap-y-2 text-black font-bold">
            <a href="#">Most Asked Questions</a>
            <a href="#">Product return procedures</a>
          </div>
        </div>
        <div className="w-[15rem] h-auto">
          <p className="font-bold text-secondary-0 border-b-2 text-center mb-8 p-2">
            Us!
          </p>
          <div className="flex flex-col gap-y-2 text-black font-bold">
            <a href="#">About Us</a>
            <a href="#">Contact With Us</a>
          </div>
        </div>
        <div className="w-[15rem] h-auto">
          <p className="font-bold text-secondary-0 border-b-2 text-center mb-8 p-2">
            Social Media
          </p>
          <div className="flex gap-x-2 text-black font-bold justify-between">
            <a href="#">
              <SlSocialInstagram className="w-5 h-5" />
            </a>
            <a href="#">
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="#">
              <PiLinkedinLogoLight className="w-5 h-5" />
            </a>
            <a href="#">
              <PiTelegramLogoLight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
