import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion'
import Heropng from "../../assets/hero.png";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router';

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='relative z-20 bg-white shadow-md'>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className='flex items-center'>
          <img src={Heropng} className='h-[40px] w-[40px]' alt="logo" />
          <h1 className='font-bold text-xl ml-2'>Science-Educators247</h1>
        </div>
        {/* Desktop Menu Section */}
        <div className="hidden md:block">
          <ul className='flex items-center gap-4'>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary relative group'
                to="/">
                Home
                <div className="w-2 h-2 bg-secondary absolute rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden ">  </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary relative group'
                to="/allcourses">
                Allcourses
                <div className="w-2 h-2 bg-secondary absolute rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden ">  </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary relative group'
                to="/about">
                About
                <div className="w-2 h-2 bg-secondary absolute rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden ">  </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary relative group'
                to="/team">
                Team
                <div className="w-2 h-2 bg-secondary absolute rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden ">  </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary relative group'
                to="/contact">
                Contact
                <div className="w-2 h-2 bg-secondary absolute rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden ">  </div>
              </NavLink>
            </li>

            {
              isAuthenticated ? (<><button className='primary-btn' onClick={() => logout()}>Logout</button></>)
                : (<><button className='primary-btn' onClick={() => loginWithRedirect()}>Sign in</button></>)
            }

          </ul>
        </div>
        {/* Mobile Hamburger Section */}

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <IoMdMenu className='text-4xl' />
          </button>
        </div>

      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className={`top-full left-0 w-full rounded-2xl bg-white shadow-md p-5 ${menuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <ul className='flex flex-col text-center'>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary transition-all duration-300'
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary transition-all duration-300'
                to="/allcourses"
              >
                Allcourses
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary transition-all duration-300'
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary transition-all duration-300'
                to="/team"
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                className='inline-block py-2 px-3 hover:text-secondary transition-all duration-300'
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            {
              isAuthenticated ? (<><button className='primary-btn transition-all duration-300 hover:scale-105' onClick={() => logout()}>Logout</button></>)
                : (<> <button className='primary-btn transition-all duration-300 hover:scale-105' onClick={() => loginWithRedirect()}>Sign in</button></>)
            }

          </ul>
        </motion.div>
      )}

    </nav>
  )
}

export default Navbar