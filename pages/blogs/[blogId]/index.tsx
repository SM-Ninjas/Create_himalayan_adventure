import useBlogHook from '@/hooks/useBlogHook';
import { useRouter } from 'next/router';
import React from 'react';

export interface BlogPost {
    _id: string;
    slug: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    content: string;
    coverImage: string;
    isFeatured: boolean;
}

function Blogs() {
    // Use the custom hook with the correct type for the data
    const { data, isLoading, isError } = useBlogHook();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Failed to load blogs.</p>;
    }

    const blogPosts: BlogPost[] = data?.blogs || [];

    const router = useRouter();
    const blogId = router.query.blogId as string;
    const currentBlogData = blogPosts?.find((blog) => blog.slug === blogId);

    // Format the date
    function formatDate(dateString: string | undefined): string {
        if (!dateString) return '';

        const date = new Date(dateString);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    return (
        <div className='container mt-32'>
            <h1 className='subtitle-text font-bold text-center'>
                {currentBlogData?.title}
            </h1>
            <p className='text-center mt-2 mb-4 text-blue-500'>
                {formatDate(currentBlogData?.updatedAt)}
            </p>
            <img
                src={currentBlogData?.coverImage}
                alt='blog image'
                className='w-full h-[600px] object-cover'
            />
            <p className='text-gray-600 regular-text mt-6'>
                {currentBlogData?.content}
            </p>
        </div>
    );
}

export default Blogs;
