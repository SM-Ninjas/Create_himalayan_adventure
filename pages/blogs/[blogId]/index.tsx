import { useRouter } from 'next/router'
import React from 'react'
import { blogPosts } from '..'

function Blogs() {
    const router = useRouter()
    const blogId = router.query.blogId
    const currentBlogData = blogPosts?.find((blog) => (blog.id.toString() === blogId));
    // const featuredImage = currentBlogData?.featured_image || ''; // Provide a default value for the image source
    return (
        <div className='container mt-[6rem]'>
            <h1 className='text-2xl font-semibold text-center'>
                {currentBlogData?.title}
            </h1>
            <p className='text-center mt-2 mb-4 text-[#0075FF] '>{currentBlogData?.publish_date}</p>
            <img src={currentBlogData?.featured_image} alt='blog image' className='w-full h-[600px]' />
            <p className='text-gray-600 text-sm mt-6'>{currentBlogData?.content}</p>
        </div>
    )
}
export default Blogs

