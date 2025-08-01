import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { motion } from "framer-motion";
import { FaInstagram } from 'react-icons/fa';

const people = [
  {
    name: 'Jafer Shareef',
    role: 'Mentor of Chemistry',
    main:'Founder of Science-Educators247',
    mobile:'',
    imageUrl:
      '/team-ast/jaferg.jpg',
      member_insta:"https://www.instagram.com/jafer9326?igsh=MThyNzFlZTd2MTI1bQ=="
    },
  {
    name: 'Mohammad Sohel khan',
    role: 'Mentor of Physics',
    main:'Developer of Science-Educators247',
    mobile:'',
    imageUrl:
      '/team-ast/sohel.jpg',
   member_insta:"https://www.instagram.com/sohel_9790?utm_source=qr&igsh=MzlwNTFydDBxbGV6"
    },
    {
      name: 'Raghavendra Sharma',
      role: 'HOD of Commerce',
      main:'',
       mobile:'',
      imageUrl:
        '/team-ast/raghav.jpg',
     member_insta:"#"
      },
  {
    name: 'Mohit Kumawat',
    role: 'Mentor of Biology',
    main:'',
     mobile:'',
    imageUrl:
      '/team-ast/tutors.png',
   member_insta:"#"
    },

  {
    name: 'Mohammad Anis Khan',
    role: 'Mentor of Class-1 to Class-10',
    main:'',
    mobile:'',
    imageUrl:
      '/team-ast/tutors.png',
   member_insta:"#"
    },
 
  // More people...
]



const Team = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <motion.h2
             initial={{opacity:0,y:50}}
             whileInView={{opacity:1,y:0}}
             transition={{
               duration:0.5,
               ease:"easeInOut"
             }}
             viewport={{once:true}}
            className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our Experts
            </motion.h2>
            <motion.p
             initial={{opacity:0,y:-50}}
             whileInView={{opacity:1,y:0}}
             transition={{
               duration:0.5,
               ease:"easeInOut"
             }}
             viewport={{once:true}}
            className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our students.
            </motion.p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <motion.li
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  duration:0.5,
                  ease:"easeInOut"
                }}
                key={person.name}>
                <div className="flex items-center justify-between border-2 border-r-8 border-b-8 rounded-3xl border-gray-500 py-4 px-2 gap-x-6">
                  <div>
                    <img alt="" src={person.imageUrl} className="size-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.main}</p>
                    <p className="text-sm/6 font-semibold text-gray-900">{person.mobile}</p>
                  </div>
                  </div>
                  <a href={person.member_insta} target="_blank" rel="noopener noreferrer">
                   <FaInstagram className='cursor-pointer text-4xl hover:text-rose-600 hover:scale-105 duration-200'/>
                   </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Team