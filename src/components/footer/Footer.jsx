import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import {  motion} from "framer-motion";
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa6';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
      <motion.div 
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      
      className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className='space-y-4 max-w-[300px]'>
            <h1 className='text-2xl font-bold'>Science-Educators247</h1>
            <p className='text-dark2'>Welcome to ScienceEducators247, a premier coaching center dedicated to nurturing young minds and fostering a deep understanding of science. Located in Sambhar Lake, Jaipur, we specialize in providing high-quality education in Physics, Chemistry,Mathematics and Biology for students of all levels.</p>
          </div>
          {/* second section */}
          <div className='grid grid-cols-2 gap-10'>
            <div className="space-y-4">
              <h1 className='text-2xl font-bold'>Courses</h1>
              <div className='text-dark2'>
                <ul className='space-y-2 text-lg'>
                  <li className='cursor-pointer hover:text-secondary duration-200'>Software Development</li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>Neet-Jee</li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>Competition Science</li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>E-Learning</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className='text-2xl font-bold'>Links</h1>
              <div className='text-dark2'>
                <ul className='space-y-2 text-lg'>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    <Link to="/">Home</Link>
                    </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                  <Link to="/about">About</Link>
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                  <Link to="/allcourses">Allcourses</Link>
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                  <Link to="/team">Team</Link>
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                  <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className='space-y-4 max-w-[300px]'>
            <h1 className='text-2xl font-bold'>Get In Touch</h1>
            <div className='flex items-center'>
              <input type="text" placeholder='Enter Your Email' 
              className='p-3 rounded-s-xl bg-white py-4 w-full focus:ring-0 focus:outline-none placeholder:text-dark2'
              />
              <button className='bg-blue-500 text-white font-semibold py-4 px-6 rounded-e-xl' onClick={()=>alert("Navigate to Contact Page!")}>
                <Link to="/contact">Go</Link>
                </button>
            </div>
            {/* social icons */}
            <div className='flex space-x-6 py-3'>
              <a href="https://chat.whatsapp.com/LfhHbs2xtTaEuGVGecbbXg" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='cursor-pointer hover:text-green-600 hover:scale-105 duration-200 text-3xl'/>
              </a>
              <a href="https://www.instagram.com/jafer9326?igsh=MThyNzFlZTd2MTI1bQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='cursor-pointer hover:text-rose-600 hover:scale-105 duration-200 text-3xl'/>
              </a>
              <a href="https://github.com/Sohelk9530" target="_blank" rel="noopener noreferrer">
                <FaGithub className='cursor-pointer hover:text-black hover:scale-105 duration-200 text-3xl'/>
              </a>
              <a href="https://www.youtube.com/@Science-Educators247" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='cursor-pointer hover:text-red-600 hover:scale-105 duration-200 text-3xl'/>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-gray-700 text-center py-4">
      © {currentYear} Science-Dev247. All rights reserved.
    </div>
      </motion.div>

    </footer>
  )
}

export default Footer