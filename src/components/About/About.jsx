import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from '../footer/Footer'
import { Link } from 'react-router'
import axios from "axios";


const links = [
  { name: 'Open Courses', href: "/allcourses" },
  { name: 'Meet our Team', href: "/team" },
  { name: 'Our Work', href: "/" },
  { name: 'Our Contacts', href:"/contact" },
]
const stats = [
  { name: 'Offices worldwide', value: '2' },
  { name: 'Full-time colleagues', value: '10+' },
  { name: 'Hours per week', value: '50' },
  { name: 'Paid time off', value: 'Unlimited' },
]
const ScienceImages = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null); // Single image state


  //use Api For Fetch Image From Nasa-Api
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const resp = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=5aXaB7zwa0o0FKJDQYpbXSBk8RiinaXYYmPvswwR&date"
        );
        setImage(resp.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching image:", error);
        setLoading(false);
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="p-6">
      {loading ? (
        <img
          alt=""
          src="./src/assets/logo_landscape.png"
          className="absolute inset-0 -z-10 size-full object-cover object-center md:object-center"
        />
      ) : image ? (
        <div >
          <img
            src={image.url}
            alt={image.title}
            className="absolute inset-0 -z-10 size-full object-cover object-center md:object-center"
          />
          <h1 className='text-end tracking-tight text-white sm:text-2xl relative
          top-[-145px]  max-sm:top-[-115px] font-poppins underline p-1 rounded-xl'>Image From:- {image.title}</h1>
        </div>
      ) : (
        <img
          alt=""
          src="./src/assets/logo_landscape.png"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
      )}
    </div>
  );
};


const About = () => {
  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <ScienceImages />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Us</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Welcome to ScienceEducators247, a premier coaching center dedicated to nurturing young minds and fostering a deep understanding of science. Located in Sambhar Lake, Jaipur, we specialize in providing high-quality education in Physics, Chemistry,Mathematics and Biology for students of all levels.
              <br />
              <br />
              Our mission is to make science engaging, accessible, and enjoyable through innovative teaching methods, interactive sessions, and personalized guidance. Whether you're preparing for school exams, competitive tests, or simply want to strengthen your fundamentals, our expert educators are here to support your learning journey 24/7.
              <br />
              <br />
              At ScienceEducators247, we believe in hands-on learning, critical thinking, and real-world applications of scientific concepts. Join us to explore the wonders of science and achieve academic excellence!
              <br />
              <br />
              📍 Location: Sambhar Lake, Jaipur
              <br />
              📞 Contact Us: [Go to <Link className=" bg-slate-50 text-blue-950 rounded-md px-2" to="/contact" >Contact</Link> Section And Send Email]
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} to={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About