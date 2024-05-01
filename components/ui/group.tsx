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
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <Image width={500} height={500} className='w-16 h-16 rounded-lg' src={image} alt={'myimage'} />
                <div>
                    <h1 className='regular-text font-semibold text-gray-800'>{title}</h1>
                    <p className='regular-text text-gray-500'>{members}Members</p>
                </div>
            </div>
            <Buttons
                text="Join"
                customColor="bg-white text-gray-600 hover:bg-blue-500 w-24 border"
            />
        </div>
    )
}

export default GroupComponent
