import Image from 'next/image'
import React from 'react'


interface ReplyTypes {
    name: string,
    replyText: string
    image: string
}

function Reply({ name, replyText, image }: ReplyTypes) {
    return (
        <div>
            <div className=''>
                <div className='flex gap-4'>
                    <Image width={500} height={500} className='w-16 h-16 rounded-lg' src={image} alt={'myimage'} />
                    <div>
                        <h1 className='regular-text font-semibold text-gray-800'>{name}</h1>
                        <p className='regular-text text-gray-500 mt-2'>{replyText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reply
