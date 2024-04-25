import { useRouter } from 'next/router'
import React from 'react'
import { blogPosts } from '..'

function Blogs() {
    const router = useRouter()
    const blogId = router.query.blogId
    const currentBlogData = blogPosts?.find((blog) => (blog.id.toString() === blogId));
    return (
        <div className='container mt-[6rem]'>
            <h1 className='text-2xl'>
                {currentBlogData?.title}
            </h1>
            <p className='text-gray-600 text-sm'>{currentBlogData?.content}</p>
        </div>
    )
}

export default Blogs

