import React from 'react'
import Image from 'next/image'
import { FaMessage } from "react-icons/fa6";

interface replyInputTypes {
    image: string
}
function ReplyInput(image: replyInputTypes) {
    return (
        <div className='flex items-center gap-4 mt-12 '>
            <Image width={500} height={500} className='w-16 h-16 rounded-lg bg-blue-600' src={image.image} alt={'myimage'} />
            <form className='w-full' action="
">
                <input
                    type="text"
                    className="small-text w-full rounded-md border bg-white px-4 py-6"
                    placeholder='Write Something...'
                />
            </form>
            <div className='border p-4 bg-blue-500 rounded-lg'>
                <FaMessage size={28} color='#ffffff' />
            </div>

        </div>
    )
}

export default ReplyInput
