import Link from 'next/link'
import React from 'react'
import mainImg from "../../public/images/upHill.png"
import Image from 'next/image'

function Blogs() {

    return (
        <div className='mt-[76px]'>
            <div className='relative'>
                <Image src={mainImg} className='w-full h-[430px]' alt="mainImage" />
                <h1 className='absolute left-[24rem] text-3xl bottom-10 text-white '>Blogs</h1>
            </div>
            <div className='container mt-12'>
                {blogPosts.filter((blog) => (blog.isFeatured)).map((post) => (
                    <Link href={`/blogs/${post.id}`} key={post.id} className='flex p-4 gap-6'>
                        <img src={post.featured_image} alt="my-img" className='w-[500px] rounded-[14px]' />
                        <div className=''>
                            <h2 className='text-2xl text-gray-800 mb-2 font-semibold'>{post.title.split(".")}</h2>
                            <p className='text-[#0075FF] mb-2'>{post.publish_date}</p>
                            <p className='text-[#372040] opacity-80'>{post.content}</p>

                        </div>
                    </Link>
                ))}
            </div>

            <div className='mt-8 container grid grid-cols-3'>
                {blogPosts.filter((blog) => (!blog.isFeatured)).map((post) => (
                    <Link href={`/blogs/${post.id}`} key={post.id} className='  p-4 gap-6'>
                        <img src={post.featured_image} alt="my-img" className='2w-[250px] rounded-[14px]' />
                        <div className=''>
                            <h2 className='text-xl text-gray-800 my-4 font-semibold'>{post.title.split(".")}</h2>
                            <p className='text-[#0075FF] mb-2'>{post.publish_date}</p>
                            <p className='text-[#372040] text-sm opacity-80 text-justify'>{post.content}</p>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blogs;



export const blogPosts = [
    {
        id: 1,
        title: "Art of Organizing and Factoring the essential gears for your trek/tour.",
        publish_date: "18 Dec, 2023",
        content: "Embarking on a trek or tour is an adventure that promises breathtaking landscapes, unforgettable experiences, and a chance to connect with nature. However, to ensure a smooth and enjoyable journey, proper organization and the right gear are crucial. Here's a guide to help you master the art of organizing and factor in the essential gears for your trek or tour. Before packing your bags, research your destination thoroughly. Understand the terrain, weather conditions, and any specific requirements or restrictions. This will help you determine the gear you need and avoid unnecessary items.",
        featured_image: "/images/packingScience.png",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Unconventional Treks: Exploring Off-The-Beaten-Path Trails",
        publish_date: "11 May, 2023",
        content: "When we think of trekking, our minds often wander to well-known routes like the Inca Trail or the Everest Base Camp trek. However, for adventurers seeking something different, there's a whole world of unconventional treks waiting to be explored. These off-the-beaten-path trails offer unique landscapes, cultural experiences, and a chance to escape the crowds. Let's dive into some lesser-known treks that are worth adding to your bucket list",
        featured_image: "/images/img2.png",
        isFeatured: false,
    },
    {
        id: 3,
        title: "Leave No Trace Principles for Eco-Friendly Adventures",
        publish_date: "27 Dec, 2022",
        content: "Trekking is a fantastic way to connect with nature, but it's essential to ensure our adventures have minimal impact on the environment. Sustainable trekking practices, guided by the Leave No Trace principles, help preserve the beauty of our natural landscapes for future generations to enjoy. Let's explore how you can minimize your ecological footprint while still enjoying the great outdoors.",
        featured_image: "/images/img1.png",
        isFeatured: false,
    },
    {
        id: 4,
        title: "Tips for Capturing the Beauty of the Trail",
        publish_date: "23 Feb, 2024",
        content: "Trekking is a fantastic way to connect with nature, but it's essential to ensure our adventures have minimal impact on the environment. Sustainable trekking practices, guided by the Leave No Trace principles, help preserve the beauty of our natural landscapes for future generations to enjoy. Let's explore how you can minimize your ecological footprint while still enjoying the great outdoors.",
        featured_image: "/images/girlCamera.png",
        isFeatured: false,
    }
];
