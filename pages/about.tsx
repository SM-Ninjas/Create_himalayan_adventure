import React from 'react'
import About from '../components/about/AboutUs'
import OurTeam from '@/components/about/ourTeam'
import Testimonials from '@/components/home/Testimonials'
import ReviewsSection from '@/components/reviews/ReviewsSection'


function AboutMain() {
    return (
        <div className=''>
            <div className="relative flex  justify-center">
                <img src="/images/about1.jpg" className="h-[600px] w-full object-cover" alt="aboutImage" />
                <div className='absolute bottom-10 container'>
                    <h1 className=" title-text text-white">
                        About us
                    </h1>
                </div>
            </div>
            <div className='my-8'>
                <About />
                <OurTeam />
                <Testimonials/>
                <ReviewsSection/>
            </div>
        </div>
    )
}

export default AboutMain
