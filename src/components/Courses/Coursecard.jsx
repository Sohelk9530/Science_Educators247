import React from 'react';
import { motion } from "framer-motion";

const CourseCard = ({ title, description, image }) => {
 
  return (
    <motion.div
    // variants={SlideLeft(service.delay)}
    initial={{opacity:0,x:-50}}
    whileInView={{opacity:1,x:0}}
    transition={{
      ease:"easeInOut",
      duration:0.3,
    }}
    className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className='w-full rounded-b-3xl' src={image} alt={title} />
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <button className='primary-btn transition-all duration-300 hover:scale-105'>
        <a href="https://www.youtube.com/@Science-Educators247" target="_blank" rel="noopener noreferrer">Enroll Now!</a>
          </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
