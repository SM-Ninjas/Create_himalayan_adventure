import React, { useState } from 'react'
import Image from "next/image";

import Buttons from '@/components/ui/Buttons';
import Groups from '@/components/forum/Groups';
import Question from '@/components/forum/Question';
import Reply from '@/components/forum/Reply';

import mainImg from "../public/images/forumimg.jpg";
import peson1 from "../public/images/person1.png"
import peson2 from "../public/images/hands.png"
import ReplyInput from '@/components/ui/ReplyInput';


function Forum() {
    const [replyOpen, setReplyOpen] = useState(true)
    function handleFunctionOpen() {
        setReplyOpen(!replyOpen)
    }
    return (
        <div className='mt-20'>
            <div className="relative">
                <Image width={800} src={mainImg} className="w-full h-96 object-cover" alt="mainImage" />
                <div className='absolute bottom-16 right-2/5 ml-4  sm:right-3/4'>
                    <h1 className="title-text text-white">
                        Community Forum
                    </h1>
                    <Buttons
                        text="Post Something"
                        customColor="bg-blue-600 text-gray-50 hover:bg-blue-500 w-24"
                    />
                </div>
            </div>
            <div className='md:hidden'>
                <Groups />
            </div>
            <div className="container">
                <div className='mt-2 flex gap-12'>
                    <div className='w-full md:w-3/5 '>
                        <Question />
                    </div>
                    <div className='w-full md:w-2/5 hidden md:block'>
                        <Groups />
                    </div>
                </div>
                <div className='w-full md:w-3/5 mt-8 md:mt-0'>
                    <Reply image={peson1.src} replyText={reply1} name='Stuart Robbins' />
                    <div className='ml-20 mt-2'>
                        <h1 onClick={handleFunctionOpen} className='regular-text font-semibold my-4 cursor-pointer'>Reply</h1>
                        {replyOpen &&
                            <Reply image={peson2.src} replyText={reply2} name='Gabriel Hofstader' />
                        }
                    </div>
                    <ReplyInput image={peson1.src} />
                </div>

            </div>
        </div>
    )
}

export default Forum


const reply1 = "Exciting to hear you're gearing up for your first trekking adventure! Here are some tips for you. For beginners, I'd recommend starting with something like the Annapurna Base Camp trek in Nepal or the Inca Trail in Peru. Both offer stunning views and moderate difficulty suitable for beginners.Make sure you have sturdy hiking boots, a comfortable backpack, layers of clothing (including waterproofs), a good sleeping bag, and trekking poles. Don't forget essentials like a first aid kit, sunscreen, and plenty of water.Always stick to marked trails and follow any guidelines provided by park rangers or guides. Keep an eye on weather forecasts and adjust your plans accordingly. Stay hydrated and take breaks when needed. And most importantly, never hike alone"

const reply2 = "Thank you so much for your detailed response! Your suggestions are incredibly helpful.The Annapurna Base Camp trek sounds like a perfect starting point for us, and I'll make sure to check out the Inca Trail as well.I'll definitely be investing in all the essential gear you mentioned, especially those sturdy hiking boots. And your advice on training and preparation makes a lot of sense—I'll start incorporating more cardio into my routine and do some practice hikes with my gear."