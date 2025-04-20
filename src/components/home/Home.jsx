import React from 'react'
import Hero from '../Hero/Hero'
import Footer from '../footer/Footer'
import Service from '../Service/Service'
import Banner from '../Banner/Banner'
import Subscribe from '../Subscribe/Subscribe'
import Banner2 from '../Banner/Banner2'


const Home = () => {
    return (
        <main className='overflow-x-hidden bg-white text-dark'>
            <Hero />
            <Service />
            <Banner />
            <Subscribe />
            <Banner2 />
            <Footer />
        </main>
    )
}

export default Home