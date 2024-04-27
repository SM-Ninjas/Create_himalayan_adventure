import React from 'react'
import mainImg from "../public//images/upHill.png"
import Image from 'next/image'
import Form from '@/components/form'
import GoogleMaps from '@/components/googleMaps'

function Contact() {
    return (
        <div className=''>
            <div className='relative'>
                <Image src={mainImg} className='w-full h-[430px]' alt="mainImage" />
                <h1 className='absolute left-[24rem] text-3xl bottom-10 text-white '>Contact Us</h1>
            </div>
            <div className=' container  flex gap-8 mt-8'>
                <div className='w-1/2'>
                    <Form />
                </div>
                <div className='w-1/2'>
                    <GoogleMaps />
                </div>
            </div>
        </div>
    )
}

export default Contact
