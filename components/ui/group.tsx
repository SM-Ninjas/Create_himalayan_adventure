import React from 'react'
import Buttons from './Buttons'
import Image from 'next/image'

interface groupTypes {
    title: string,
    image: string,
    members: string
}

function GroupComponent({ title, image, members }: groupTypes) {
    return (
        <div className='flex flex-col items-center lg:gap-4 lg:flex lg:justify-between lg:flex-row '>
            <div className='flex flex-col justify-center items-center lg:flex lg:flex-row gap-4'>
                <Image width={500} height={500} className='w-24 lg:w-18 h-20 lg:h-16 rounded-lg' src={image} alt={'myimage'} />
                <div className='text-center lg:text-left'>
                    <h1 className='regular-text font-semibold text-gray-800'>{title}</h1>
                    <p className='regular-text text-gray-500'>{members}Members</p>
                </div>
            </div>
            <Buttons
                text="Join"
                customColor="bg-white text-gray-600 hover:bg-blue-500 hover:text-white w-24 border mt-2"
            />
        </div>
    )
}

export default GroupComponent
