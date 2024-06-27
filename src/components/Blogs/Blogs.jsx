import React from "react";
import Heading from "../Shared/Heading";

import Image1 from "../../assets/blogs/blog-1.jpg";
import Image2 from "../../assets/blogs/blog-2.jpg";
import Image3 from "../../assets/blogs/blog-3.jpg";

const blogsData = [
  {
    title: "How to choose the perfect smartwatch",
    subtitle:
      "Discover your ideal tech companion with our guide on choosing the perfect smartwatch",
    published: "Jan 20, 2024 by Aria",
    image: Image1,
  },
  {
    title: "How to choose the perfect Laptop",
    subtitle:
      "Discover your ideal tech companion with our guide on choosing the perfect laptop",
    published: "Jan 25, 2024 by Leonardo",
    image: Image2,
  },
  {
    title: "How to choose the perfect headphones",
    subtitle:
      "Discover your ideal tech companion with our guide on choosing the perfect headphones",
    published: "Jan 27, 2024 by William",
    image: Image3,
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* heading section */}
        <Heading title="Recent Blogs" subtitle="Explore our Latest Blogs" />

        {/* blog section */}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-6 gap-y-8 sm:gap-4 md:gap-7"
        >
          {blogsData.map((blog,index) => (
            <div key={index} className="bg-white dark:bg-gray-900">
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img src={blog.image} alt={blog.title} 
                className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"/>
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{blog.published}</p>
                <p className="font-bold line-clamp-1">{blog.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{blog.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
