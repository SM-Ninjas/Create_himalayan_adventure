import Link from 'next/link'
import React from 'react'
import mainImg from "../../public/images/upHill.png"
import Image from 'next/image'

function Blogs() {

    return (
        <div className='mt-[76px]'>

            <div className='relative'>
                <Image src={mainImg} className='w-full h-[430px]' alt="mainImage" />
                <h1 className='absolute left-[24rem] text-2xl bottom-10 text-white '>Blogs</h1>
            </div>
            <div className='container'>
                {blogPosts.filter((blog) => (blog.isFeatured)).map((post) => (
                    <div key={post.id} className='border'>
                        <h2>{post.title}</h2>
                        <p>Author: {post.author}</p>
                        <p>Publish Date: {post.publish_date}</p>
                        {/* You can render more details of the blog post here */}
                        <Link href={`/blogs/${post.id}`}>
                            <h1>Read more</h1>
                        </Link>
                    </div>
                ))}
            </div>

            <div className='container'>
                {blogPosts.filter((blog) => (!blog.isFeatured)).map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>Author: {post.author}</p>
                        <p>Publish Date: {post.publish_date}</p>
                        {/* You can render more details of the blog post here */}
                        <Link href={`/blogs/${post.id}`}>
                            <h1>Read more</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs;



export const blogPosts = [
    {
        id: 1,
        title: "The Importance of Data Security",
        author: "John Doe",
        publish_date: "2023-10-26",
        content: "In today's digital age, data security is more important than ever. This blog post will discuss the importance of data security and how to keep your data safe.",
        categories: ["Tech", "Security"],
        featured_image: "https://example.com/images/data-security.jpg",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Top 5 Tips for Baking the Perfect Cake",
        author: "Jane Smith",
        publish_date: "2023-11-15",
        content: "Baking a cake can be a fun and rewarding experience. But sometimes, cakes can turn out dry, dense, or uneven. In this blog post, we'll share 5 tips to help you bake the perfect cake every time!",
        categories: ["Food", "Baking"],
        featured_image: "https://example.com/images/cake-baking.jpg",
        isFeatured: false,
    },
    {
        id: 3,
        title: "Must-Have Travel Apps for Your Next Adventure",
        author: "David Lee",
        publish_date: "2023-12-01",
        content: "Planning a trip? There are a number of travel apps that can make your journey smoother and more enjoyable. This blog post will explore some of the must-have travel apps for your next adventure.",
        categories: ["Travel", "Apps"],
        featured_image: "https://example.com/images/travel-apps.jpg",
        isFeatured: false,
    }
];
