import Image from "next/image";
import Link from "next/link";
import useBlogHook from "@/hooks/useBlogHook";
import { CalendarIcon } from "lucide-react";
import Spinner from "@/components/spinner";

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  createdAt: string;
  metaDesc: string;
  content: string;
  coverImage: string;
  isFeatured: boolean;
}

interface BlogData {
  blogs: BlogPost[];
}

const truncate = (text: string, wordLimit: number): string => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blogs/${post._id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center small-text mb-2 text-blue-500">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            {post.title}
          </h2>
          <p className="text-gray-600">{truncate(post.metaDesc, 20)}</p>
        </div>
      </div>
    </Link>
  );
}

function Blogs() {
  const { data, isLoading, isError } = useBlogHook();

  if (isLoading)
    return (
      <div className="">
        <Spinner />
      </div>
    );
  if (isError)
    return (
      <div className="text-center py-8 text-blue-600">
        Failed to load blogs.
      </div>
    );

  const blogPosts: BlogPost[] = data?.blogs || [];
  const normalPosts = blogPosts.filter((blog) => !blog.isFeatured);

  return (
    <div className="bg-gray-100 min-h-screen mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, insights, and stories. Our blog
            is a treasure trove of information designed to keep you informed and
            inspired.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex items-center text-sm">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600">Blog</span>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-blue-600 inline-block">
            All Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {normalPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blogs;
