import React from 'react'
import BannerPng from "../../assets/banner.png"
import { motion } from "framer-motion";


const Banner2 = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">

                {/* Banner-text */}
                
                    <motion.div
                    initial={{opacity:0,x:-50}}
                    whileInView={{opacity:1,x:0}}
                    className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                        <h1 className='text-4xl font-bold !leading-snug'>Join Our Community to Start Your Journey.</h1>
                        <p className='text-dark2'>we believe in hands-on learning, critical thinking, and real-world applications of scientific concepts. Join us to explore the wonders of science and achieve academic excellence!</p>
                        <a href="#" className='primary-btn' onClick={()=>alert("Click on 'Get Started' For Joining.")}>
                            Join Now
                        </a>
                    </div>
                </motion.div>
                {/* Banner-image */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src={BannerPng} alt=""
                        className='w-[350px] md:w-[450px] drop-shadow object-cover'
                    />
                </div>


            </div>
        </section>
    )
}

export default Banner2