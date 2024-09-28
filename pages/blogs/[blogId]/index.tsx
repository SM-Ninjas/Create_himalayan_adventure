import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";
import useBlogHook from "@/hooks/useBlogHook";

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const { data: blogData, isLoading, isError } = useBlogHook();

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (isError)
    return (
      <div className="text-center py-8 text-red-600">
        Error loading blog post.
      </div>
    );

  const currentBlog = blogData?.blogs.find((blog: any) => blog._id === blogId);

  if (!currentBlog)
    return <div className="text-center py-8">Blog post not found.</div>;

  const { title, content, coverImage, createdAt } = currentBlog;

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <div className="flex flex-col md:flex-row md:space-x-8">
       
        <div className="md:w-2/3 border border-black">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center text-blue-600 font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="prose max-w-none border border-black m-1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="md:w-1/3 mt-2 md:mt-0">
          {coverImage && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-2 sm:top-28 "
            >
              <Image
                src={coverImage}
                alt={title}
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
