import Image from "next/image";
import Link from "next/link";
import mainImg from "../../public/images/upHill.png";

function Blogs() {
  return (
    <div className="mt-20">
      <div className="relative">
        <Image src={mainImg} className="h-[430px] w-full" alt="mainImage" />
        <h1 className="absolute bottom-10 right-3/4 title-text text-white ">
          Blogs
        </h1>
      </div>

      {/* Featured Blogs */}
      <div className="container  mt-12">
        {blogPosts
          .filter((blog) => blog.isFeatured)
          .map((post) => (
            <Link
              href={`/blogs/${post.id}`}
              key={post.id}
              className="block xl:flex gap-6 p-4"
            >
              <img
                src={post.featured_image}
                alt="my-img"
                className="w-full xl:w-[500px] rounded-[14px]"
              />
              <div className="">
                <h2 className="my-2 xl:mb-2 subtitle-text font-bold text-gray-800">
                  {post.title.split(".")}
                </h2>
                <p className="mb-2 text-blue-500">{post.publish_date}</p>
                <p className="small-text opacity-80">{post.content}</p>
              </div>
            </Link>
          ))}
      </div>
      {/* Normal blogs */}
      <div className="container mt-8 grid grid-cols-1  xl:grid-cols-3">
        {blogPosts
          .filter((blog) => !blog.isFeatured)
          .map((post) => (
            <Link
              href={`/blogs/${post.id}`}
              key={post.id}
              className="p-4 "
            >
              <img
                src={post.featured_image}
                alt="my-img"
                className="rounded"
              />
              <div className="">
                <h2 className="my-4 subtitle-text font-bold text-gray-800">
                  {post.title.split(".")}
                </h2>
                <p className="mb-2 text-blue-500">{post.publish_date}</p>
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

interface BlogsList {
  id: number;
  title: string;
  publish_date: string;
  content: string;
  featured_image: string;
  detailsImg?: string;
  isFeatured: boolean;
}

export const blogPosts: BlogsList[] = [
  {
    id: 1,
    title:
      "Art of Organizing and Factoring the essential gears for your trek/tour.",
    publish_date: "18 Dec, 2023",
    content:
      "Embarking on a trek or tour is an adventure that promises breathtaking landscapes, unforgettable experiences, and a chance to connect with nature. However, to ensure a smooth and enjoyable journey, proper organization and the right gear are crucial. Here's a guide to help you master the art of organizing and factor in the essential gears for your trek or tour. Before packing your bags, research your destination thoroughly. Understand the terrain, weather conditions, and any specific requirements or restrictions. This will help you determine the gear you need and avoid unnecessary items.",
    featured_image: "/images/packingScience.png",
    detailsImg: "/images/img1.png",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Unconventional Treks: Exploring Off-The-Beaten-Path Trails",
    publish_date: "11 May, 2023",
    content:
      "When we think of trekking, our minds often wander to well-known routes like the Inca Trail or the Everest Base Camp trek. However, for adventurers seeking something different, there's a whole world of unconventional treks waiting to be explored. These off-the-beaten-path trails offer unique landscapes, cultural experiences, and a chance to escape the crowds. Let's dive into some lesser-known treks that are worth adding to your bucket list",
    featured_image: "/images/img2.png",
    detailsImg: "/images/img2.png",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Leave No Trace Principles for Eco-Friendly Adventures",
    publish_date: "27 Dec, 2022",
    content:
      "Trekking is a fantastic way to connect with nature, but it's essential to ensure our adventures have minimal impact on the environment. Sustainable trekking practices, guided by the Leave No Trace principles, help preserve the beauty of our natural landscapes for future generations to enjoy. Let's explore how you can minimize your ecological footprint while still enjoying the great outdoors.",
    featured_image: "/images/img1.png",
    detailsImg: "/images/img3.png",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Tips for Capturing the Beauty of the Trail",
    publish_date: "23 Feb, 2024",
    content:
      "Trekking is a fantastic way to connect with nature, but it's essential to ensure our adventures have minimal impact on the environment. Sustainable trekking practices, guided by the Leave No Trace principles, help preserve the beauty of our natural landscapes for future generations to enjoy. Let's explore how you can minimize your ecological footprint while still enjoying the great outdoors.",
    featured_image: "/images/girlCamera.png",
    isFeatured: false,
  },
];
