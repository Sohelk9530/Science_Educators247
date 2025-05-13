import React from 'react'
import Coursecard from './Coursecard';
import Navbar from '../Navbar/Navbar';
import bioImage11 from "../../assets/course-ast/11th_bio.png";
import phyImage11 from "../../assets/course-ast/11th_phy.png";
import chemImage11 from "../../assets/course-ast/11th_chem.png";
import mathImage11 from "../../assets/course-ast/11th_math.png";
import Appdev from "../../assets/course-ast/Appdev.png";
import Webdev from "../../assets/course-ast/Webdev.png";
import bioImage12 from "../../assets/course-ast/12th_bio.png";
import phyImage12 from "../../assets/course-ast/12th_phy.png";
import chemImage12 from "../../assets/course-ast/12th_chem.png";
import mathImage12 from "../../assets/course-ast/12th_math.png";
import Footer from '../footer/Footer';
import {motion} from "framer-motion";

const courses = [
    {
        title: 'Class-11th Physics',
        description: 'Learn the basics of Physics.',
        image:phyImage11,
    },
    {
        title: 'Class-11th Chemistry',
        description: 'Learn the basics of Chemistry.',
        image: chemImage11,
    },
    {
        title: 'Class-11th Biology',
        description: 'Learn the basics of Biology.',
        image:  bioImage11 ,
    },
    {
        title: 'Class-11th Mathematics',
        description: 'Learn the basics of Mathematics.',
        image: mathImage11,
    },
    {
        title: 'Class-12th Physics',
        description: 'Learn the basics of Physics.',
        image: phyImage12,
    },
    {
        title: 'Class-12th Chemistry',
        description: 'Learn the basics of Chemistry.',
        image: chemImage12,
    },
    {
        title: 'Class-12th Biology',
        description: 'Learn the basics of Biology.',
        image:bioImage12,
    },
    {
        title: 'Class-12th Mathematics',
        description: 'Learn the basics of Mathematics.',
        image:mathImage12,
    },
    {
        title: 'Web Development from Scratch',
        description: 'Deep dive into Web Development',
        image: Webdev,
    },

    {
        title: 'App Development from Scratch',
        description: 'Deep dive into App Development.',
        image: Appdev,
    },
    // Add more courses as needed
];

const Allcourses = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <motion.h1 
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{
                    ease:"easeInOut",
                    duration:0.5,
                }}
                viewport={{once:true}}
                className="text-4xl font-bold text-center mb-8">Explore Our Popular Courses</motion.h1>
                <div className='flex items-center justify-center'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {courses.map((course, index) => (
                            <Coursecard
                                key={index}
                                title={course.title}
                                description={course.description}
                                image={course.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Allcourses