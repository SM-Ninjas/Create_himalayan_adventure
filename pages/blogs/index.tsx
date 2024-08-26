import Image from "next/image";
import Link from "next/link";
import mainImg from "../../public/images/upHill.png";
import useBlogHook from "@/hooks/useBlogHook";

// Define the TypeScript interface for a single blog post
export interface BlogPost {
  _id: string;
  slug : string;
  title: string;
  createdAt: string;
  content: string;
  coverImage: string;
  isFeatured: boolean;
}

// Define the TypeScript interface for the data returned from the API
interface BlogData {
  blogs: BlogPost[];
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

  // Safely access the blog posts array
  const blogPosts: BlogPost[] = data?.blogs || [];

  return (
    <div className="">
      <div className="relative flex justify-center">
        <Image src={mainImg} className="h-[550px] w-full object-cover" alt="mainImage" />
        <div className="absolute bottom-10 container">
          <h1 className="title-text text-white">Blogs</h1>
        </div>
      </div>

      {/* Featured Blogs */}
      <div className="container mt-12">
        {blogPosts
          .filter((blog) => blog.isFeatured)
          .map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post._id}
              className="block xl:flex gap-6 p-4"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full xl:w-[500px] rounded-[14px]"
              />
              <div className="">
                <h2 className="my-2 xl:mb-2 subtitle-text font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="mb-2 text-blue-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p className="small-text opacity-80">{post.content}</p>
              </div>
            </Link>
          ))}
      </div>

      {/* Normal Blogs */}
      <div className="container mt-8 grid grid-cols-1 xl:grid-cols-3">
        {blogPosts
          .filter((blog) => !blog.isFeatured)
          .map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post._id}
              className="p-4"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="rounded"
              />
              <div className="">
                <h2 className="my-4 subtitle-text font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="mb-2 text-blue-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p className="text-justify text-sm text-gray-600 opacity-80">
                  {post.content}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Blogs;
