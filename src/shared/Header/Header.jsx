
import { Link, PhoneCall } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom' 
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <div className='bg-color2 font-inter color2'>
      <div className='text-sm max-w-screen-2xl mx-auto  flex justify-between items-center gap-5'>
        <div className='  flex justify-between items-center gap-5 '>
          <NavLink className={({ isActive }) => `py-2.5 ${isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "border-b-2 border-transparent"}`} to={"/"}>Home</NavLink>
          <NavLink className={({ isActive }) => `py-2.5 ${isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "border-b-2 border-transparent"}`} to={"/find-jobs"}>Find Job</NavLink>
          <NavLink className={({ isActive }) => `py-2.5 ${isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "border-b-2 border-transparent"}`} to={"/find-candidate"}>Employers</NavLink>
          <NavLink className={({ isActive }) => `py-2.5 ${isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "border-b-2 border-transparent"}`} to={"/find-employers"}>Candidate</NavLink>
          <NavLink className={({ isActive }) => `py-2.5 ${isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "border-b-2 border-transparent"}`} to={"/pricing-plan"}>Pricing Plans</NavLink>
          <NavLink className={({ isActive }) => `py-2.5 ${isActive ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "border-b-2 border-transparent"}`} to={"/customers-supports"}>Customers Supports</NavLink>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex justify-center items-center gap-1'>
            <PhoneCall />
            <a href="tel:+8801303436299">+8801303436299</a>
          </div>
          <LanguageSelector  />
        </div>
      </div>




      <div></div>
    </div>
  )
}

export default Header