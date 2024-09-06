import React from 'react';
import { FaWhatsapp,FaFacebook,FaYoutube,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col border justify-between items-center gap-2">
      <h1 className="text-[40px] font-bold text-lime-400 py-3 cursor-pointer">Athletix</h1>
      <div className="flex text-[40px] gap-6 py-4 w-full justify-center bg-lime-400">
        <FaWhatsapp className=' hover:text-green-400 cursor-pointer' />
        <FaFacebook className=' hover:text-blue-400 cursor-pointer'/>
        <FaYoutube className=' hover:text-red-400 cursor-pointer'/>
        <FaGithub className=' hover:text-gray-600 cursor-pointer'/>
      </div>

      <div className='flex w-full justify-around'>
        <div className='flex flex-col gap-4'>
            <div className='text-[25px] font-normal'>Product</div>
            <div className='text-gray-400'>Trainer</div>
            <div className='text-gray-400'>Sign Up</div>
            <div className='text-gray-400'>Login</div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='text-[25px] font-normal'>Resources</div>
            <div className='text-gray-400'>Gov. Schemes</div>
            <div className='text-gray-400'>Exercises</div>
        </div>
        <div className='flex flex-col gap-4 m-1'>
            <div className='text-[25px] font-normal'>Legal</div>
            <div className='text-gray-400'>Terms of Use</div>
            <div className='text-gray-400'>Policy</div>
            <div className='text-gray-400'>Press & Media</div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='text-[25px] font-normal'>Support</div>
            <div className='text-gray-400'>Contact Us</div>
            <div className='text-gray-400'>Blog</div>
        </div>
      </div>

      <div className='w-full border py-2 px-4'>
        <p>all rights are reserved to AKgroupz.</p>
      </div>

    </div>
  )
}

export default Footer;