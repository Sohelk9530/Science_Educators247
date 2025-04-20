import React from 'react'
import Navbar from '../Navbar/Navbar'
import { IoIosArrowRoundForward } from 'react-icons/io'
import blob from "../../assets/blob.svg";
import Heropng from "../../assets/hero.png";
import { motion, animate } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

export const Fadeup = (delay) => {

  return {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: delay,
        duration: 0.5,
        stiffness: 100,
        ease: "easeInOut",


      }
    }
  }
}

const Hero = () => {
  const { loginWithRedirect, isAuthenticated,user } = useAuth0();
  return (
    <section className='bg-light overflow-hidden relative'>
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info*/}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
          <div className='text-center md:text-left space-y-5 lg:max-w-[400px]'>
            <motion.h1
              variants={Fadeup(0.6)}
              initial='initial'
              animate='animate'
              className='text-3xl lg:text-5xl font-bold !leading-snug'>
              Let's Learn To Build Your{" "}<span className='text-secondary'>Future</span> For Your Life.
            </motion.h1>
            <motion.div
              variants={Fadeup(0.8)}
              initial='initial'
              animate='animate'
              className='flex justify-center md:justify-start'>
              {
                isAuthenticated ? (<><button className='primary-btn'><p>Welcome {user.name}</p></button></>) :
                  (<>
                    <button className='primary-btn flex items-center gap-2 group'
                      onClick={() => loginWithRedirect()}
                    >
                      Get Started
                      <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300' />
                    </button>
                  </>)
              }

            </motion.div>
          </div>
        </div>
        {/*Hero Image*/}
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "easeInOut", duration: 0.6 }}
            src={Heropng} alt='' className='w-[400px] xl:w-[600px] relative z-10 drop-shadow rounded-[400px]' />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "easeInOut", duration: 0.6 }}
            src={blob} alt="" className='absolute w-[800px] md:w-[1500px] -bottom-32 z-[1] md:block hidden' />
        </div>
      </div>
    </section>
  )
}

export default Hero