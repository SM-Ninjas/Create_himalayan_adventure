import React from 'react'
import { FaGooglePlay } from "react-icons/fa";

function Video() {
    return (
        <div className='container  mt-8 border border-black '>
            <div className="relative p-4">
                <img
                    src={''}
                    alt="my img"
                    className="object-cover h-36 rounded-[10]"
                />
                <FaGooglePlay
                    color="#3B82F6"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    size="32"
                />
            </div>
        </div>
    )
}

export default Video
