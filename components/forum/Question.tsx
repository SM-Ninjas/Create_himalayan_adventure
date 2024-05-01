import Image from 'next/image'
import React from 'react'
import Buttons from '../ui/Buttons'
import hands from "../../public/images/hands.png"
import { IoEyeSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

function Question() {
    return (
        <div>
            <div className='my-8'>
                <Buttons
                    text="User"
                    customColor="bg-blue-500 text-white hover:bg-blue-500 w-24 border mr-4"
                />
                <Buttons
                    text="Group"
                    customColor="bg-white text-gray-800 hover:bg-blue-500 w-24 border hover:text"
                />
            </div>
            <div className='flex gap-4'>
                <Image width={500} height={500} className='w-16 h-16 rounded-lg' src={hands} alt={'myimage'} />
                <div>
                    <h1 className='regular-text font-semibold text-gray-800'>Gabriel Hofstader</h1>
                    <p className='regular-text text-gray-500'>22nd April, 2024</p>
                </div>
            </div>
            <div className='flex gap-4 mt-4'>
                <p>#trek</p>
                <p>#advice</p>
                <p>#recommendation</p>
            </div>
            <div>
                <h1 className='subtitle-text'>What would the best place to trek for beginners? We are group of friends trying to relax in the nature </h1>
                <p className='text-gray-500 mt-4'>Hey everyone,
                    <br />
                    I hope you're all doing well. I'm reaching out to this community because I'm about to embark on my first-ever trekking adventure, and I could really use some advice from the seasoned trekkers here. I've been a hardworking individual who hasn't had much time for traveling in the past, but thanks to our company's policy, I now have the opportunity to take all my annual leaves. So, I've decided to go on a trek with a few friends. However, I'm quite clueless about where to start.</p>
            </div>
            <div >
                <div className='flex gap-6 mt-4'>
                    <div className='flex items-center gap-2 text-gray-500'><IoEyeSharp size={20} /> 100K</div>
                    <div className='flex items-center gap-2 text-blue-500'><FaMessage size={20} /> 74</div>
                </div>
                <div className='flex gap-2 mt-4'>
                    <Buttons
                        text="Read More"
                        customColor="text-gray-600 hover:bg-blue-500 w-24 border hover:text-white"
                    />
                    <Buttons
                        text="Join Group"
                        customColor="text-gray-600 hover:bg-blue-500 w-24 border hover:text-white"
                    />
                </div>
            </div>
            <hr className='my-6 text-gray-800' />
        </div>

    )
}

export default Question
