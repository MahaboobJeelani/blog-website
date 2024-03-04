import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaDribbble, FaTwitter, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Model from './Model';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let [isModelOpen, setIsModelOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  // #navitems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/service", link: "Service" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
    { path: "/about", link: "About" },
  ]

  const openModel = () => {
    setIsModelOpen(true)
  }
  const closeModel = () => {
    setIsModelOpen(false)
  }
  return (
    <header className='bg-black text-white fixed top-0 right-0 left-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-white font-bold text-xl'>Story <span className='text-orange-500 mt-4'>Stroll</span></a>

        {/* {items for lg devices} */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {navItems.map(({ path, link }) => <li className={'text-white'} key={path}><NavLink className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          } to={path}>{link}</NavLink></li>)}
        </ul>

        {/* Menu Icons */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="" className='hover:text-orange-500'><FaDribbble /></a>
          <a href="" className='hover:text-orange-500'><FaTwitter /></a>
          <button onClick={openModel} className='bg-orange-500 px-6 py-2 font-medium hover:bg-white rounded hover:text-orange-500 translate-all duration-200 ease-in'>Login</button>
        </div>
        {/* Our Model Component is here */}
        <Model isOpen={isModelOpen} onClose={closeModel}/>

        {/* Mobile menu btn, displaymobile screen */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='cursor-pointer md:hidden'>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>
      </nav>

      {/* Menu items only for mobile */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({ path, link }) => <li className={'text-black'} key={path}><NavLink onClick={toggleMenu} to={path}>{link}</NavLink></li>)
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar
